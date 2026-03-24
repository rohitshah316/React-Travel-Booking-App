import React from 'react'
import { MdStarRate } from "react-icons/md";

const HotelCard = ({hotel}) => {

    const rateColor=(rating)=>{
        if(rating>4) return 'text-green-800';
        if(rating>3) return 'text-yellow-800';
        if(rating>2) return 'text-yellow-500'
        else return 'text-red-500'
    }
    
  return (
    <div className='flex md:flex-row flex-col md:h-64 overflow-hidden bg-gray-300 gap-2 my-6 p-6 rounded-2xl ring hover:-translate-y-2 cursor-pointer'>
        <img src={hotel.image} alt={hotel.title} className=' md:overflow-hidden'/>
        <div>
            <h2 className='font-semibold text-2xl'>{hotel.title}</h2>
        <p className='text-gray-800'>{hotel.description}</p>
        </div>

        <div className='flex flex-col gap-2'>
            <p className='text-white font-bold text-2xl bg-green-500 text-center px-6 rounded-2xl hover:bg-green-600'>${hotel.price}</p>
            <p className={`${rateColor(hotel.rating)} font-semibold flex items-center`}>{hotel.rating}<MdStarRate/></p>
            <p className={`${hotel.availability===true?'text-green-500':'text-red-500'} bg-blue-900 font-bold px-6 py-1 rounded-2xl text-center text-sm`}>{hotel.availability===true?'Available':'Not Available'} </p>
        </div>

    </div>
  )
}

export default HotelCard