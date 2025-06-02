// pages/api/instruments.js
import { createClient } from '@/app/utils/supabase/server'
import { NextApiRequest, NextApiResponse } from 'next'

export async function GET(request: Request) {
  // For example, fetch data from your DB here
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
