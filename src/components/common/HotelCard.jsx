import React from 'react'

const HotelCard = ({hotel}) => {

    
  return (
    <div className='flex h-64'>
        <img src={hotel.image} alt={hotel.title} />
        <div>
            <h2>{hotel.title}</h2>
        <p>{hotel.description}</p>
        </div>

        <div>
            <p>${hotel.price}</p>
            <p>{hotel.rating}</p>
            <p>{hotel.availability===true?'Available':'Not Available'}</p>
        </div>

    </div>
  )
}

export default HotelCard