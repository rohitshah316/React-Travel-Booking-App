import React, { useState } from 'react'
import SearchBox from '../components/common/SearchBox'
import { destinationsData } from '../data/data';
import Results from '../components/common/Results';


const Home = () => {

  const [destination,setDestination]=useState("");
  const [date,setDate]=useState("");
  const [people,setPeople]=useState(1);
  const [rooms,setRooms]=useState(0);

  const [results,setResults]=useState(null)


  const handleSearch=()=>{
      const found=destinationsData.find((item)=>(
        item.name.toLowerCase()===destination.toLowerCase()
      ))


      if(found && (found.name==="Kathmandu" || found.name==="Pokhara")){
        setResults(found);
      }else{
        setResults("not-found")
      }
  }

  return (
    <section className='max-w-4xl mt-10 mx-auto bg-white text-black p-10 md:rounded flex flex-col'>
        <h2 className='text-4xl font-bold mx-auto'>Find Your Stay</h2>
        <p className='text-xl mx-auto mb-6'>Hotels, Places To Explore</p>

        <SearchBox
        destination={destination}
        setDestination={setDestination}
        date={date}
        setDate={setDate}
        people={people}
        setPeople={setPeople}
        rooms={rooms}
        setRooms={setRooms}
        onSearch={handleSearch}
        />


        <div>
          {results==="not-found" && (
            <p className='text-gray-800 text-center mt-5'>No result found. Try Searching "Kathmandu" or "Pokhara"</p>
          )}
        </div>


        <div>
          {results && results!=='not-found' && (
            <Results data={results}/>
          )}
        </div>
    </section>
  )
}

export default Home