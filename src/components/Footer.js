import React from 'react'
import logo from '../assets/logo.png';



export default function Footer() {
  return (
    <div className="font-poppins py-5">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-20 font-font-dmsans px-5'>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-baseline justify-evenly font-font-dmsans py-12">

          <div className="flex flex-col gap-y-6">

            <div className="space-y-3">

              <a href="/" className="text-white-100">
                <img src={logo} alt="Logo" />
              </a>

            </div>
            <p className='text-white-50 lg:w-9/12 font-poppins'>
              The point of using Lorem Ipsum is that it has re-or-less normal distribution of letters, as it look like readable English.
            </p>

            <p className='text-white-50'>© {new Date().getFullYear()}. All rights reserved.</p>

          </div>

          <div className="space-y-5">

            <h4 className='text-2xl font-dmsans font-bold'>
              Individuals
            </h4>
            <ul className='space-y-2 text-white-50'>
              <li><a href='#about'>About</a></li>
              <li><a href='#tokenomics'>Tokenomics</a></li>
              <li><a href='#roadmap'>Roadmap</a></li>
              <li><a href='#chart'>Chart</a></li>
              <li><a href='#about'>Whitepaper</a></li>
            </ul>

          </div>

          <div className="space-y-5">

            <h4 className='text-2xl font-dmsans font-bold'>
              Support
            </h4>
            <ul className='space-y-2 text-white-50'>
              <li><a href=''>Help center</a></li>
              <li><a href=''>Contact us</a></li>
              <li><a href=''>Account information</a></li>
            </ul>

          </div>

          <div className="space-y-5">

            <h4 className='text-2xl font-dmsans font-bold'>
              Follow Us On
            </h4>
            <ul className='space-y-2 text-white-50'>
              <li><a href='/'>Fecebook</a></li>
              <li><a href='/'>Twitter</a></li>
              <li><a href='/'>Instagram</a></li>
            </ul>

          </div>

        </div>

      </footer >
    </div >

  )
}
