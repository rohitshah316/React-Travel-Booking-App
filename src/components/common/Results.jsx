import React, { useState } from 'react'
import HotelCard from './HotelCard';
import { FaMapMarkerAlt } from "react-icons/fa";


const Results = ({data}) => {


    const [activeTab,setActiveTab]=useState("hotels");

  return (
    <div>

    <div className='flex gap-0.5 mt-5'>
        <button onClick={()=>setActiveTab('hotels')} className={`cursor-pointer px-2 py-2  border-b-2 ${activeTab==='hotels'?'border-b-2 bg-blue-100 rounded-t-xl':'border-b-gray-400'}`}>Hotels</button>
        <button onClick={()=>setActiveTab('places')} className={`cursor-pointer px-2 py-2  border-b-2 ${activeTab==='places'?'border-b-2 bg-blue-100 rounded-t-xl':'border-b-gray-400'}`}>Places To Explore</button>
    </div>



        <div>
            {activeTab==='hotels' && (
                data.hotels.map((hotel)=>(
                <HotelCard hotel={hotel} key={hotel.id}/>
                ))
            )}

        </div>

        <div className='flex flex-col md:flex-row  gap-6 mt-6 text-white'>
            {activeTab==='places' && (
                data.places.map((place)=>(
                 <div  className='relative w-full aspect-4/5 overflow-hidden rounded-lg group'>
                                <img src={place.image} alt={place.title} className='w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110'/>
                
                                <div className='absolute inset-0 bg-black/10 rounded px-2 group-hover:bg-black/60 cursor-pointer'>
                                    <h3 className='absolute bottom-2 font-semibold z-10 flex items-center'> <FaMapMarkerAlt />{place.title}</h3>
                
                                    <p className='absolute inset-0 flex items-center justify-center px-4 opacity-0 group-hover:opacity-100'>{place.description}</p>
                                </div>
                                </div>
                ))
            )}
        </div>
    </div>
  )
}

export default Results