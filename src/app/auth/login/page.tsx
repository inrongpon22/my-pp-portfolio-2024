'use client'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { adminServices } from '@/services/AdminServices'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, LogIn, Eye, EyeClosed, LoaderCircle } from 'lucide-react'

interface LoginForm {
  email: string
  password: string
}

const LoginSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
})

const Login = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await adminServices.signInWithEmail(data.email, data.password)
      localStorage.setItem('token', res.token)
      toast.success('Login successful')
      router.push('/admin/dashboard')
    } catch (error) {
      console.log(error)
      toast.error('Invalid email or password')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      router.push('/admin/dashboard')
    }
  }, [router])

  return (
    <section className='max-w-xs md:max-w-md relative text-center border rounded-lg p-10 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto'>
      <Link
        href='/'
        className='absolute top-10 left-10 text-black bg-slate-100 rounded-full hover:bg-slate-200 transition-all duration-300'
      >
        <ArrowLeft className='h-6 w-6 text-xl p-1' />
      </Link>
      <div className='flex flex-col items-center justify-center gap-2 mb-10'>
        <LogIn className='h-10 w-10 text-2xl border rounded-xl p-2' />
        <h1 className='text-2xl font-bold'>Sign In with email</h1>
        <p className='text-sm text-gray-500'>
          Please enter your email and password to sign in
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <div className='fv-row mb-3'>
          <input
            disabled={isSubmitting || isLoading}
            placeholder='Email'
            {...register('email')}
            className={clsx(
              'w-full p-2 border rounded-md',
              errors.email && 'border-red-500'
            )}
          />
          {errors.email && (
            <p className='text-red-500 text-start'>{errors.email.message}</p>
          )}
        </div>
        <div className='relative mb-3'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            disabled={isSubmitting || isLoading}
            {...register('password')}
            className={clsx(
              'w-full p-2 border rounded-md',
              errors.password && 'border-red-500'
            )}
          />
          {showPassword ? (
            <Eye className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500' onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <EyeClosed className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500' onClick={() => setShowPassword(!showPassword)} />
          )}
          {errors.password && (
            <p className='text-red-500 text-start'>{errors.password.message}</p>
          )}
        </div>
        <button
          type='submit'
          className={clsx(
            'w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md',
            isSubmitting || (isLoading && 'opacity-50 cursor-not-allowed')
          )}
        >
          {!isSubmitting && !isLoading ? (
            'Sign In'
          ) : (
            <LoaderCircle className='h-4 w-4 animate-spin' />
          )}
        </button>
      </form>
    </section>
  )
}

export default Login
