import React from 'react';
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Contact = () => {
    return (
        <section className='max-w-4xl mx-auto p-10'>
            <h2 className='text-3xl font-bold my-10 text-center'>Contact Us</h2>

            <p className='text-lg text-center text-gray-600'>
                We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
            </p>

            <div className='bg-indigo-800 gap-6 p-6 rounded-xl flex md:flex-row flex-col my-10 text-white'>

                <div className='bg-indigo-700 p-4 rounded flex flex-col justify-center flex-1'>
                    <h3 className='text-xl font-semibold mb-2'>Address</h3>
                    <p>
                        123 Wanderlust Avenue<br />
                        Travel City, TC 45678<br />
                        Nepal
                    </p>
                </div>

                <div className='bg-indigo-700 p-4 rounded flex flex-col justify-center flex-1'>
                    <h3 className='text-xl font-semibold mb-2'>Phone</h3>
                    <p>+977 9800000000</p>
                </div>

                <div className='bg-indigo-700 p-4 rounded flex flex-col justify-center flex-1'>
                    <h3 className='text-xl font-semibold mb-2'>Email</h3>
                    <p>support@reacttravelbooking.app</p>
                </div>

                <div className='bg-indigo-700 p-4 rounded flex flex-col justify-center flex-1'>
                    <h3 className='text-xl font-semibold mb-2'>Working Hours</h3>
                    <p>
                        Monday – Friday: 9:00 AM – 6:00 PM<br />
                        Saturday: 10:00 AM – 4:00 PM<br />
                        Sunday: Closed
                    </p>
                </div>

            </div>

            <div>
                <h3 className='text-xl font-semibold text-center'>Connect With Us</h3>

                <div className='flex gap-6 my-8 justify-center text-indigo-700'>
                    <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-4xl hover:text-gray-500 transition duration-300'
                    >
                        <FaInstagramSquare />
                    </a>

                    <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-4xl hover:text-gray-500 transition duration-300'
                    >
                        <FaFacebookSquare />
                    </a>

                    <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-4xl hover:text-gray-500 transition duration-300'
                    >
                        <AiFillTikTok />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;