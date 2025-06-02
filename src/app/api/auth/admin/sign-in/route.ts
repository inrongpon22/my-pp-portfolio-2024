import { createClient } from '@/supabase/client'
import { comparePassword, generateToken } from '@/app/lib/with-auth'

export async function POST(request: Request) {
  const { email, password } = await request.json()

  if (!email || !password) {
    return new Response(JSON.stringify('Email and password are required'), {
      status: 400,
    })
  }

  try {
    const supabase = createClient()

    // check exist admin by email
    const { data: admin } = await supabase
      .from('admin_users')
      .select('id, email, password_hashed')
      .eq('email', email)
      .single()

    if (!admin) {
      return new Response(JSON.stringify('Email or password is incorrect'), {
        status: 400,
      })
    }

    const isPasswordValid = await comparePassword(
      password,
      admin.password_hashed
    )

    console.log('[isPasswordValid]', isPasswordValid)

    if (!isPasswordValid) {
      return new Response(JSON.stringify('Email or password is incorrect'), {
        status: 400,
      })
    }

    // Generate JWT
    const token = generateToken({ userId: admin.id, email: admin.email })

    console.log('[token]', token)

    const { data: session, error: sessionError } = await supabase
      .from('admin_sessions')
      .insert({
        admin_id: admin.id,
        session_token: token,
        expires_at: new Date(Date.now() + 60 * 60 * 24 * 7), // 7 days in seconds
      })

    if (sessionError) {
      console.log('[sessionError]', sessionError)
      return new Response(JSON.stringify('Something went wrong'), {
        status: 500,
      })
    }

    return new Response(
      JSON.stringify({
        message: 'Login successfully',
        token: token,
      }),
      {
        status: 200,
      }
    )
  } catch (error) {
    console.error('[login]', error)
    return new Response(JSON.stringify('Something went wrong'), {
      status: 500,
    })
  }
}
