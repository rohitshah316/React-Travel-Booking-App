import React from 'react'
import { useParams } from 'react-router-dom'
import { destinationsData } from '../data/data';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

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
        <h2 className='my-10 text-2xl font-bold'>Places To Explore</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
                
                {dest.places.map(place=>(
                    <div key={place.id} className='aspect-4/5 overflow-hidden w-full rounded-lg group relative'>
                        <img src={place.image} alt={place.title} className='w-full h-full object-cover group-hover:scale-110'/>
                        <div className='absolute inset-0 group-hover:bg-black/60'>
                            <h3 className='absolute left-4 bottom-4 z-10 flex items-center'><FaMapMarkerAlt/>{place.title}</h3>
                        
                        <p className='absolute inset-0 flex items-center p-6 opacity-0 group-hover:opacity-100'>{place.description}</p>
                        </div>
                    </div>
                ))}
            
            </div>
    </section>
  )
}

export default DestinationDetail