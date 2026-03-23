import React from 'react'
import { destinationsData } from '../data/data'
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Destinations = () => {
  return (
    <section className='max-w-4xl mx-auto py-10 px-6'>
        <h2 className='text-3xl font-bold my-10 text-center'>Key Destinations</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
            {destinationsData.map(dest=>{
                
                const isClickable=dest.id===1 || dest.id ===2;

                const CardContent=(
                <div  className='relative w-full aspect-4/5 overflow-hidden rounded-lg group'>
                <img src={dest.image} alt={dest.name} className='w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110'/>

                <div className='absolute inset-0 bg-black/10 rounded px-2 group-hover:bg-black/60 cursor-pointer'>
                    <h3 className='absolute bottom-2 font-semibold z-10 flex items-center'> <FaMapMarkerAlt />{dest.name}</h3>

                    <p className='absolute inset-0 flex items-center justify-center px-4 opacity-0 group-hover:opacity-100'>{dest.description}</p>
                </div>
                </div>
            ) 
        
        return isClickable?(
            <Link key={dest.id} to={`/destinations/${dest.id}`}>{CardContent}</Link>
        ):(
            <div key={dest.id}>{CardContent}</div>
        )
        
        }
            
            )}
        </div>
    </section>
  )
}

export default Destinations