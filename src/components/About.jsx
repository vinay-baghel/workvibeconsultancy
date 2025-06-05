import React from 'react'
import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'
// import fourth from '../assets/fourth.png'
import Banner from '../pages/Banner'

const About = () => {
  return (
    <div className='bg-home flex justify-center min-h-screen px-4 sm:px-6 md:px-12 py-16' id='about' >
      <div className='flex flex-col items-center w-full max-w-7xl'>
        
        <div className='w-full mb-8'>
          <Banner />
        </div>

        <h1 className='bg-head text-2xl sm:text-3xl font-semibold text-center mt-8'>About Us</h1>
        <div className='w-24 sm:w-48 h-1 bg-black my-2'></div>

        <p
          className='text-blue-950 mt-6 text-sm sm:text-base leading-relaxed text-justify sm:text-center max-w-5xl'
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <br /><strong>Welcome to WorkVibe Consultancy</strong><br />
          Your Trusted Partner in Career Success<br /><br />

          At Workvibe, we believe in transforming aspirations into achievements. Established with a vision to bridge the gap between talent and opportunity, we are a premier job consultancy group dedicated to empowering individuals and organizations alike. With a client-centric approach, cutting-edge strategies, and a passion for excellence, we are committed to shaping careers and building successful futures.<br /><br />

          <strong>Our Mission</strong><br />
          Our mission is simple yet powerful: to connect the right talent with the right opportunities. We strive to empower job seekers with the tools, guidance, and opportunities they need to succeed in today’s competitive job market, while helping businesses find the perfect candidates to drive their growth.<br /><br />

          <strong>What We Do</strong><br />
          We offer a comprehensive range of services designed to cater to the diverse needs of job seekers and employers:<br /><br />

          <strong>For Job Seekers:</strong> Personalized career counseling, resume building, interview preparation, skill development workshops, and access to exclusive job opportunities across industries.<br /><br />

          <strong>For Employers:</strong> End-to-end recruitment solutions, including talent sourcing, screening, and placement, tailored to meet the specific needs of businesses, from startups to multinational corporations.<br /><br />

          <strong>Industry-Specific Expertise:</strong> We specialize in sectors such as IT, healthcare, finance, engineering, hospitality, and more, ensuring that both candidates and employers receive targeted, industry-relevant support.<br /><br />

          <strong>Why Choose Workvibe?</strong><br />
          • Personalized Approach: We understand that every individual and business is unique. Our solutions are customized to meet your specific goals and aspirations.<br />
          • Extensive Network: With a vast network of employers and industry connections, we provide access to opportunities that align with your skills and ambitions.<br /><br />

          <strong>Our Vision</strong><br />
          To be the most trusted job consultancy group in India, recognized for our innovation, integrity, and unwavering dedication to transforming lives through meaningful career opportunities.<br /><br />

          <strong>Join Us Today</strong><br />
          Whether you’re a job seeker looking to take the next step in your career or an employer searching for the perfect candidate, Workvibe is here to make it happen. Let’s work together to turn opportunities into success stories.<br /><br />

          <strong>Contact Us:</strong> Reach out to us today via WhatsApp at <strong>+91-9770833980</strong> or email us at <strong>your.email@example.com</strong> to start your journey with us.<br />
        </p>

        <div className='flex flex-wrap justify-center gap-4 sm:gap-8 mt-10'>
          <img className='bg-clienttt cursor-pointer w-32 sm:w-40 md:w-48' src={first} alt="client-1"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          />
          <img className='bg-clienttt cursor-pointer w-32 sm:w-40 md:w-48' src={second} alt="client-2"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          <img className='bg-clienttt cursor-pointer w-32 sm:w-40 md:w-48' src={third} alt="client-3"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          {/* <img src={fourth} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default About
