import ComponentHeader from '@/components/Shared/ComponentHeader'
import { addToCart } from '@/src/features/cartSlice'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function Success() {
    const dispatch = useDispatch()
  const handleDispatch = () =>{
    dispatch(addToCart({}))
  }
  handleDispatch()
    return (
        <div className='bg-white min-h-screen'>
             <Head>
        <title>Payment Successful</title>
      </Head>
             <div className="container mx-auto w-full object-contain overflow-hidden pb-14">
        <ComponentHeader 
        data={{title : 'Payment Completed' , description:"Thanks For Payment"}}
        />
           <div className='my-16'>
           <Image  
            width={800}
            height={500}
            alt="Success picture"
           className='w-64 block mx-auto' src='https://res.cloudinary.com/dpr7otqhn/image/upload/v1682210876/thumbnail_payment_successful_be75d553a4.png'/>
            <h2 className='text-green-500 font-bold text-center text-xl'>Payment Successful</h2>
            <h2 className=' font-bold text-center text-sm'>The course will be added on your account under few times.</h2>
            <Link className='custom-btn block mx-auto' href={'/'}>Back to Home</Link>
           </div>
        </div>
        </div>
    )
}

export default Success
