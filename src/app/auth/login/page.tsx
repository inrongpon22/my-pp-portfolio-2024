'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { Button, Card, Divider, Input } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { adminServices } from '@/services/AdminServices'
import { toast } from 'react-hot-toast'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useForm } from 'react-hook-form'

const initialValues = {
  email: 'admin@demo.com',
  password: 'admin123',
}

const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <section className='max-w-4xl mx-auto border rounded-lg p-10'>
      <Link href='/' className='text-black bg-slate-100 p-1 rounded'>
        <ArrowLeftOutlined />
      </Link>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* begin::Heading */}
        <div className='text-center mb-11'>
          <h1 className='text-black font-bold mb-3'>Sign In</h1>
        </div>
        {/* begin::Heading */}

        {/* begin::Form group */}
        <div className='fv-row mb-3'>
          <Input
            placeholder='Email'
            disabled={loading}
          />
        </div>
        {/* end::Form group */}

        {/* begin::Form group */}
        <div className='fv-row mb-3'>
          <Input
            type='password'
            disabled={loading}
          />
        </div>
        {/* end::Form group */}

        {/* begin::Action */}
        <div className='grid mb-10'>
          <Button
            // type="primary"
            id='kt_sign_in_submit'
            size='large'
            loading={loading}
          >
            {!loading ? 'Sign In' : 'Please wait...'}
          </Button>
        </div>
        {/* end::Action */}
      </form>
    </section>
  )
}

export default Login
