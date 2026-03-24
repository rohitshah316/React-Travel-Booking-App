import React from 'react'

const SearchBox = ({destination,setDestination,date,setDate,people,setPeople,rooms,setRooms,onSearch}) => {

   
  return (
    <div className='bg-indigo-700 text-white p-6 rounded-lg flex flex-col md:flex-row gap-2'>
        <input type="text" 
        list='destinations'
        placeholder='Search Destination' 
        className='flex-1 bg-indigo-900 px-6 py-2 rounded-xl outline-none'
        value={destination}
        onChange={(e)=>setDestination(e.target.value)}
        />
        <datalist id='destinations' className='w-full'>
            <option value="Kathmandu"></option>
            <option value="Pokhara"></option>
        </datalist>
        <div className='flex flex-col items-center flex-1 bg-indigo-900 px-6 py-2 justify-center rounded-xl'>
            <h3 className='font-semibold'>Select Date</h3>
            <input type="date" className='outline-none cursor-pointer'
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            />
        </div>

        <div className='flex flex-col gap-2 flex-1 bg-indigo-900 px-6 rounded-xl py-1'>
            <div className='flex items-center gap-2'>
            <p>People:</p>
            <button onClick={(e)=>setPeople(c=>c+1)} className='bg-indigo-400 px-2 rounded w-6 flex items-center justify-center hover:bg-indigo-500 cursor-pointer'>+</button>
            <span>{people}</span>
            <button onClick={(e)=>setPeople(c=>c>1?c-1:1)} className='bg-indigo-400 px-2 rounded w-6 flex items-center justify-center hover:bg-indigo-500 cursor-pointer'>-</button>
        </div>
        <div className='flex items-center gap-2'>
            <p>Rooms:</p>
            <button onClick={(e)=>setRooms(c=>c+1)} className='bg-indigo-400 px-2 rounded w-6 flex items-center justify-center hover:bg-indigo-500 cursor-pointer'>+</button>
            <span>{rooms}</span>
            <button onClick={(e)=>setRooms(c=>c>0?c-1:0)} className='bg-indigo-400 px-2 rounded w-6 flex items-center justify-center hover:bg-indigo-500 cursor-pointer'>-</button>
        </div>
        </div>

        <button className='bg-green-500 px-6 rounded-xl cursor-pointer' onClick={onSearch}>Search</button>
        
    </div>
  )
}

export default SearchBox