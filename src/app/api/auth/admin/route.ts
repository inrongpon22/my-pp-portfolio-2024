import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  const token = request.headers.get('Authorization')?.split(' ')[1]

  if (!token) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), {
      status: 401,
    })
  }
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // check if token is exist, not revoked, not expired
    const { data, error } = await supabase
      .from('admin_sessions')
      .select('*')
      .eq('session_token', token)
      .is('revoked_at', null)
      .gte('expires_at', new Date().toISOString())
      .single()

    if (error) {
      console.log(error)
      return new Response(JSON.stringify({ message: 'Unauthorized' }), {
        status: 401,
      })
    }

    // get admin data from admin_id
    const { data: adminData, error: adminError } = await supabase
      .from('admins')
      .select('*')
      .eq('id', data.admin_id)
      .single()

    if (adminError) {
      console.log('[adminError]', adminError)
      return new Response(JSON.stringify({ message: 'Unauthorized' }), {
        status: 200,
      })
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Success', data: adminData }),
      {
        status: 200,
      }
    )
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
    })
  }
}
