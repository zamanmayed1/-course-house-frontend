import ComponentHeader from '@/components/Shared/ComponentHeader'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function Success() {
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
           <img  className='w-64 block mx-auto' src='https://res.cloudinary.com/dpr7otqhn/image/upload/v1682210876/thumbnail_payment_successful_be75d553a4.png'/>
            <h2 className='text-green-500 font-bold text-center text-xl'>Payment Successful</h2>
            <h2 className=' font-bold text-center text-sm'>The course will be added on your account under few times.</h2>
            <Link className='custom-btn block mx-auto' href={'/'}>Back to Home</Link>
           </div>
        </div>
        </div>
    )
}

export default Success
