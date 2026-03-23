import React from 'react'
import about_page from '../assets/images/about_page.jpg'
import about_page2 from '../assets/images/about_page_image_2.jpg'
const About = () => {
  return (
    <section className='mx-auto max-w-4xl p-10'>
        <h2 className='text-2xl font-bold mt-10'>About Us</h2>
       <div className='flex flex-col gap-10 text-xl'>
        <div className='flex flex-col md:flex-row gap-10 '>
             <p>Welcome to our travel booking platform — a modern, user-friendly web application built to make exploring the world easier and more accessible. This project is designed as a practice application using React.js, showcasing how a real-world travel service might look and function.</p>

         <img src={about_page} alt="about_page"  className='w-100'/>
        </div>
       


        <div className='flex flex-col md:flex-row gap-10'>
            <img src={about_page2} alt="about_page"  className='w-100'/>
         <p>
            Our platform allows users to browse destinations, discover exciting travel packages, and simulate booking experiences with a smooth and responsive interface. From searching for popular locations to viewing detailed trip information, every feature is crafted to demonstrate practical front-end development skills.
        </p>
        </div>

        <p>
            This project focuses on creating an intuitive user experience, reusable components, and clean design patterns commonly used in modern web applications. While the bookings are not real, the goal is to replicate the feel of a real travel service and improve development skills along the way.
        </p>
        <p>
            Whether you're exploring beaches, mountains, or city adventures, this app is a small step toward building something bigger.
        </p>
       </div>
    </section>
  )
}

export default About