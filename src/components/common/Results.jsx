import React, { useState } from 'react'
import HotelCard from './HotelCard';

const Results = ({data}) => {


    const [activeTab,setActiveTab]=useState("hotels");

  return (
    <div>

        <button onClick={()=>setActiveTab('hotels')} className='cursor-pointer px-2 py-2 bg-indigo-200 ml-1'>Hotels</button>
        <button onClick={()=>setActiveTab('places')} className='cursor-pointer px-2 py-2 bg-indigo-200 ml-1'>Places To Explore</button>



        <div>
            {activeTab==='hotels' && (
                data.hotels.map((hotel)=>(
                <HotelCard hotel={hotel} key={hotel.id}/>
                ))
            )}
            {activeTab==='places' && (
                data.places.map((places)=>(
                <div>{places.title}</div>
                ))
            )}
        </div>
    </div>
  )
}

export default Results