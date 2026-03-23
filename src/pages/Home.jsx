import React from 'react'
import SearchBox from '../components/common/SearchBox'

const Home = () => {
  return (
    <section className='max-w-4xl mx-auto bg-white text-black p-10 md:rounded flex flex-col'>
        <h2 className='text-4xl font-bold mx-auto'>Find Your Stay</h2>
        <p className='text-xl mx-auto'>Hotels, Places To Explore</p>

        <SearchBox/>
    </section>
  )
}

export default Home