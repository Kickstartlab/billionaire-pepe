import React from 'react'
import logo from '../assets/logo.png';
import twitter_1 from '../assets/twitter_1.png';
import telegram_1 from '../assets/telegram_1.png';
import three from '../assets/3rd.png';
import four from '../assets/4th.png';
import five from '../assets/5th.png';
import six from '../assets/6th.png';



export default function Footer() {
  return (
    <div className="font-poppins py-5 bg-black-100">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-20 font-font-cehua px-5'>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-baseline lg:justify-items-center font-font-cehua py-12 gap-y-8">

          <div className="flex flex-col gap-y-6">

            <div className="space-y-3">

              <a href="/" className="text-white-100">
                <img src={logo} alt="Logo" className='w-1/2' />
              </a>

            </div>
            <p className='text-white-50 lg:w-9/12 font-poppins'>
              The point of using Lorem Ipsum is that it has re-or-less normal distribution of letters, as it look like readable English.
            </p>

            <div className='flex items-center gap-x-4 pt-3'>
              <div className='border border-white-100 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                <a href='/'><img src={telegram_1} alt="Logo" /></a>
              </div>
              <div className='border border-white-100 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                <a href='/'><img src={twitter_1} alt="Logo" /></a>
              </div>
              <div className='border border-white-100 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                <a href='/'><img src={three} alt="Logo" /></a>
              </div>
              <div className='border border-white-100 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                <a href='/'><img src={four} alt="Logo" /></a>
              </div>
              <div className='border border-white-100 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                <a href='/'><img src={five} alt="Logo" /></a>
              </div>
              <div className='border border-white-100 rounded-full p-2 w-10 h-10 flex items-center justify-center'>
                <a href='/'><img src={six} alt="Logo" /></a>
              </div>
            </div>

          </div>

          <div className="space-y-5">

            <h4 className='text-2xl font-cehua font-bold'>
              Individuals
            </h4>
            <ul className='space-y-2 text-white-50'>
              <li><a href='#about'>About</a></li>
              <li><a href='#tokenomics'>Tokenomics</a></li>
              <li><a href='#roadmap'>Roadmap</a></li>
              <li><a href='#buy'>Buy</a></li>
              <li><a href='#about'>Whitepaper</a></li>
            </ul>

          </div>

          <div className="space-y-5">

            <h4 className='text-2xl font-cehua font-bold'>
              Support
            </h4>
            <ul className='space-y-2 text-white-50'>
              <li><a href='/'>Help center</a></li>
              <li><a href='/'>Contact us</a></li>
              <li><a href='/'>Account information</a></li>
            </ul>

          </div>

          <div className="space-y-5">

            <h4 className='text-2xl font-cehua font-bold'>
              Follow Us On
            </h4>
            <ul className='space-y-2 text-white-50'>
              <li><a href='/'>Fecebook</a></li>
              <li><a href='/'>Discord</a></li>
              <li><a href='/'>Instagram</a></li>
            </ul>

          </div>

        </div>

        <p className='text-white-100 text-center'>© Pepe Billionaire {new Date().getFullYear()}. All rights reserved.</p>

      </footer >
    </div >

  )
}
