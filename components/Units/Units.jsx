import React from 'react'
import ComponentHeader from '../Shared/ComponentHeader'
import UnitCard from './UnitCard'

function Units({units}) {

    return (
        <div className="container  cursor-pointer mx-auto w-full object-contain overflow-hidden pb-14">
         <div className="my-6">
            <h2 className="text-xl font-bold">All Units</h2>
            <hr></hr>
        </div>
        {units?.length ? units?.map((data , i) =><UnitCard data={data} key={i}/>) : "No Units Found"}
    
            
        </div>
    )
}

export default Units
