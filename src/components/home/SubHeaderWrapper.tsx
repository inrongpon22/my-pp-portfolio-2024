'use client'
import React from 'react'
import './subheader.css'
import { Image } from 'antd'

const SubHeaderWrapper = () => {
  return (
    <div id='home' className='flex flex-col items-center md:flex-row gap-10 mx-auto pt-28'>
      <Image
        alt='profile'
        src='https://placehold.co/52x52'
        className='w-48 rounded-full object-cover'
        width={100}
        height={100}
      />
      <div className='lg:pb-0'>
        <h1 className='text-center text-4xl'>
          I&apos;m <span className='text-orange-400'>Phanupong</span>, Front-End
          Developer.
        </h1>
      </div>

      {/* <div className="container order-2 lg:order-1">
        <div
          data-text="Pic1"
          className="box box-1"
          style={{
            backgroundImage: `url("https://picsum.photos/id/1/640/800")`,
          }}
        ></div>
        <div
          data-text="Pic2"
          className="box box-2"
          style={{
            backgroundImage: `url("https://picsum.photos/id/2/640/800")`,
          }}
        ></div>
        <div
          data-text="Pic3"
          className="box box-3"
          style={{
            backgroundImage: `url("https://picsum.photos/id/3/640/800")`,
          }}
        ></div>
        <div
          data-text="Pic4"
          className="box box-4"
          style={{
            backgroundImage: `url("https://picsum.photos/id/4/640/800")`,
          }}
        ></div>
      </div> */}
    </div>
  )
}

export default SubHeaderWrapper
