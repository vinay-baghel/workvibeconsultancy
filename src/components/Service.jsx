import React from 'react'
import oil from '../assets/oil.png'
import ship from '../assets/ship.png'
import construction from '../assets/construction.png'
import ports from '../assets/ports.png'
import transportation from '../assets/transportation.png'
import healthcare from '../assets/healthcare.png'
import airport from '../assets/airport.png'
import retailer from '../assets/retailer.png'
import hotel from '../assets/hotel.png'
import pharmacy from '../assets/pharmacy.png'
import healthy from '../assets/healthy.png'
import trolley from '../assets/trolley.png'

const Service = () => {
    return (
        <div className='flex justify-center flex-col min-h-screen items-center px-4 sm:px-6 md:px-12 py-12' id='service'>
            <h1 className='bg-head text-2xl sm:text-3xl font-semibold mt-16 text-center'>Services</h1>
            <div className='w-24 sm:w-48 h-1 bg-black my-2'></div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 md:gap-12 w-full max-w-6xl mt-10 bg-service p-4 rounded-lg'>
                {[
                    { img: oil, text: 'Oil & Gas' },
                    { img: ship, text: 'MARINE' },
                    { img: construction, text: 'CONSTRUCTION' },
                    { img: ports, text: 'PORT SERVICE' },
                    { img: transportation, text: 'LOGISTICS & TRANSPORT' },
                    { img: healthcare, text: 'HEALTH CARE' },
                    { img: airport, text: 'AVIATION' },
                    { img: retailer, text: 'RETAIL' },
                    { img: hotel, text: 'HOTEL & RESTAURANT' },
                    { img: pharmacy, text: 'PHARMACEUTICAL' },
                    { img: healthy, text: 'FMCG' },
                    { img: trolley, text: 'FOOD & BEVERAGES' },
                ].map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-duration="1000"
                        className="flex flex-col items-center text-center"
                    >
                        <img src={item.img} alt={item.text} className='w-16 h-16 sm:w-20 sm:h-20 object-contain' />
                        <p className='bg-head mt-4 text-sm sm:text-base'>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service
