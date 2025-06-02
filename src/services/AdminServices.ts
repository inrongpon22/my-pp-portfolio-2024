import { createClient } from '@/app/utils/supabase/client'
import axios from 'axios'

export const adminServices = {
  async signUpWithEmail(email: string, password: string) {
    const res = await axios.post('/api/auth/admin/sign-up', {
      email: email,
      password: password,
    })

    return res.data
  },

  async signInWithEmail(email: string, password: string) {
    const res = await axios.post('/api/auth/admin/sign-in', {
      email: email,
      password: password,
    })

    return res.data
  }
}