import React from 'react'
import telephone from '../assets/telephone.png'
import email from '../assets/email.png'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <div className='flex justify-center items-center px-4 md:px-10 py-16'>
        <div className='bg-co rounded-lg w-full max-w-5xl shadow-lg p-6 md:p-12 flex flex-col lg:flex-row gap-10'>

          {/* Left - Contact Info */}
          <div className='flex-1 flex flex-col gap-8'>
            <h1 className='bg-head text-3xl md:text-4xl font-semibold'>Contact Us</h1>

            <div className='flex gap-4 items-center'>
              <img className='w-8 h-8 md:w-10 md:h-10' src={telephone} alt="phone" />
              <p className='text-sm md:text-base'>Phone Number<br /><strong>+91 9770833980</strong></p>
            </div>

            <div className='flex gap-4 items-center'>
              <img className='w-8 h-8 md:w-10 md:h-10' src={email} alt="email" />
              <p className='text-sm md:text-base'>Email<br /><strong>workvibeconsultancy@gmail.com</strong></p>
            </div>
          </div>

          {/* Right - Form */}
          <div className='flex-1'>
            <h1 className='bg-head text-3xl md:text-4xl font-semibold mb-6'>Get in Touch</h1>
            <form
              action="https://formsubmit.co/workvibeconsultancy@gmail.com"
              method="POST"
              className='flex flex-col gap-4'
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded outline-none"
              />
              <input
                type="number"
                name="number"
                required
                placeholder="Phone No."
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded outline-none"
              />
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Your Message"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-clientt text-white bg-section bg- py-2 px-4 rounded hover:bg-opacity-90 transition w-full sm:w-40"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Optional Go Back Button */}
      <div className="flex justify-end px-4 md:px-10 pb-10">
        <button className='bg-clientt text-white bg-section
        e py-2 px-6 rounded hover:bg-opacity-90 transition'>Go Back</button>
      </div>

      <Footer />
    </>
  )
}

export default Contact
