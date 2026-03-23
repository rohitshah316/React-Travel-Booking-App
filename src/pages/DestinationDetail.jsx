import React from 'react'
import { useParams } from 'react-router-dom'
import { destinationsData } from '../data/data';
import { FaMapMarkedAlt } from 'react-icons/fa';

const DestinationDetail = () => {

    const {id}=useParams();
    const dest=destinationsData.find(d=>d.id===parseInt(id));
  return (
    <section className='max-w-4xl mx-auto py-10 px-6'>
        <h2 className='text-3xl font-bold mb-6 flex gap-2 items-center'><FaMapMarkedAlt className='text-gray-400'/>{dest.name}</h2>

        <div className='relative inset-0 flex md:flex-row flex-col gap-6 w-full md:h-64 group overflow-hidden rounded-2xl'>
            
            <img src={dest.image} className='w-full object-cover group-hover:scale-110 ' />
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30'>
                <p className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 '>{dest.description}</p>
            </div>

        
        </div>
        <h2 className='mt-10 text-2xl font-bold'>Places To Explore</h2>
            <div>
                {dest.places.map(place=>(
                    <div key={place.id} >
                        <h3>{place.title}</h3>
                        <img src={place.image} alt={place.title} />
                        <p>{place.description}</p>
                    </div>
                ))}
            </div>
    </section>
  )
}

export default DestinationDetail