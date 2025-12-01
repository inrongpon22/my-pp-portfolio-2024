import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/supabase/client'
import { hashPassword } from '@/app/lib/with-auth'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()

  if (!email || !password) {
    return new Response(JSON.stringify('Email and password are required'), {
      status: 400,
    })
  }

  console.log('[sign-up]', email, password)

  try {
    const supabase = createClient()

    const { data: existingUser } = await supabase
      .from('admins')
      .select('*')
      .eq('email', email)
      .single()

    if (existingUser) {
      console.log('[sign-up]', existingUser)
      return new Response(JSON.stringify('User already exists'), {
        status: 400,
      })
    }

    const hashedPassword = await hashPassword(password)

    const { error: newUserError } = await supabase
      .from('admins')
      .insert({
        role: 'super_admin',
        email: email,
        password_hashed: hashedPassword,
      })

    if (newUserError) {
      console.log('[sign-up]', newUserError)
      return new Response(JSON.stringify('Something went wrong'), {
        status: 500,
      })
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'sign-up admin success',
    }), {
      status: 200,
    })
  } catch (error) {
    console.error('[sign-up] error', error)
    return new Response(JSON.stringify('Something went wrong'), {
      status: 500,
    })
  }
}
