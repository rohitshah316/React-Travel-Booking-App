import React from 'react'

const SearchBox = () => {
  return (
    <div className=' rounded p-2 flex flex-col md:flex-row  md:justify-center bg-indigo-800 text-white gap-2 m-5'>
            <div className='flex w-1/3'>
                <input type="text" placeholder='Search Place or Destination' className='bg-indigo-600 rounded-l-xl p-3 outline-none flex-1'/>
            
            </div>
            <div className='w-1/3 flex-1 flex flex-col justify-center items-center bg-indigo-600 rounded-2xl'>
                <h3>Select Date</h3>
                <input type="date"  />
            </div>
            <div className='bg-indigo-600 pl-3 rounded-2xl w-1/3'>
                <div className='flex gap-2'>
                    <h3>Rooms</h3>
                <input type="number" className='bg-indigo-500 w-20 outline-none rounded-tr-xl'/>
                </div>
                <div className='flex gap-2'>
                    <h3>People</h3>
                <input type="number" className='bg-indigo-500 w-20 outline-none rounded-br-xl' />
                </div>
                
            </div>
            <button className='bg-red-500 p-3 rounded-r-xl'>Search</button>
        </div>
  )
}

export default SearchBox