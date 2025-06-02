import bcrypt from 'bcrypt'
import jwt, { PublicKey, Secret, SignOptions } from 'jsonwebtoken';
import { serialize } from 'cookie'; // For setting cookies

const JWT_SECRET = process.env.JWT_SECRET;
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 12; // How many rounds to hash the password
const EXPIRES_IN = Number(process.env.EXPIRES_IN) || 60 * 60 * 24 * 7; // 7 days in seconds

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

export function generateToken(payload: string | Buffer | object) {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is required');
  }
  const options: SignOptions = { expiresIn: EXPIRES_IN };
  return jwt.sign(payload, JWT_SECRET, options);
}

export function verifyToken(token: string) {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is required');
  }
  try {
    return jwt.verify(token, JWT_SECRET as Secret | PublicKey);
  } catch (error) {
    return null; // Token is invalid or expired
  }
}