import Link from 'next/link'
import React from 'react'
import { AiOutlineFieldTime } from 'react-icons/ai';

function UnitCard({data}) {
    return (
        <Link href={`/units/${data?.id}`} className='text-blue-900  pointer-events-none my-2 border w-full h-14 min flex items-center justify-between hover:shadow-sm duration-300 px-2 hover:bg-indigo-50/20 '>
            <h1 className='' >{data?.attributes.title}</h1>
            <div className='flex gap-4'>
                <AiOutlineFieldTime className='text-xl '/> <h2>{data?.attributes.duration} Min</h2>
            </div>
        </Link>
    )
}

export default UnitCard
