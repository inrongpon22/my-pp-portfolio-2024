import bcrypt from "bcrypt"
import jwt, { PublicKey, Secret, SignOptions } from "jsonwebtoken"
import { serialize } from "cookie" // For setting cookies
import { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"

const JWT_SECRET = process.env.JWT_SECRET
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 12 // How many rounds to hash the password
const EXPIRES_IN = Number(process.env.EXPIRES_IN) || 60 * 60 * 24 * 7 // 7 days in seconds

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, SALT_ROUNDS)
}

export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(password, hash)
}

export function generateToken(payload: string | Buffer | object) {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is required")
  }
  const options: SignOptions = { expiresIn: EXPIRES_IN }
  return jwt.sign(payload, JWT_SECRET, options)
}

export function verifyToken(token: string) {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is required")
  }
  try {
    return jwt.verify(token, JWT_SECRET as Secret | PublicKey)
  } catch (error) {
    return null // Token is invalid or expired
  }
}

// Middleware to check if the user is authenticated
type Handler = (req: NextRequest, context?: any) => Promise<Response>

export function withAuth(handler: Handler): Handler {
  return async (req: NextRequest, context) => {
    const token = req.headers.get("Authorization")?.split(" ")[1]
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      })
    }
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // check token is valid on admin_session table and not expired
    const { data, error } = await supabase
      .from("admin_session")
      .select("*")
      .eq("token", token)
      .gte("expires_at", new Date().toISOString())
      .single()

    if (error || !data) {
      console.log("withAuth", error)
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      })
    }

    // If authenticated, call the original handler
    return handler(req, context)
  }
}
