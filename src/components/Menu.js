import React, { useState } from 'react'
import logo from '../assets/logo.png';
import twitter_1 from '../assets/twitter_1.png';
import telegram_1 from '../assets/telegram_1.png';
import three from '../assets/3rd.png';
import four from '../assets/4th.png';
import five from '../assets/5th.png';
import six from '../assets/6th.png';




export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-poppins  text-white-100 h-32">
        <div>
          <a href="/" className="logo lg:my-12">
            <img src={logo} alt="Logo" className='w-9/12' />
          </a>

          <div className='flex items-center gap-x-8 pt-3'>
            <a href='/'><img src={telegram_1} alt="Logo" className='' /></a>
            <a href='/'><img src={twitter_1} alt="Logo" className='' /></a>
            <a href='/'><img src={three} alt="Logo" className='' /></a>
            <a href='/'><img src={four} alt="Logo" className='' /></a>
            <a href='/'><img src={five} alt="Logo" className='' /></a>
            <a href='/'><img src={six} alt="Logo" className='' /></a>
          </div>
        </div>

        <nav>
          <ul className="text-md flex justify-center gap-12 items-center font-poppins font-normal">
            <li><a href="#about" className="font-semibold text-white-50 hover:text-yellow-50">About</a></li>
            <li><a href="#tokenomics" className="font-semibold text-white-50 hover:text-yellow-50">Tokenomics</a></li>
            <li><a href="#roadmap" className="font-semibold text-white-50 hover:text-yellow-50">Roadmap</a></li>
            <li><a href="#team" className="font-semibold text-white-50 hover:text-yellow-50">Team</a></li>
            <li><a href="#whitepaper" className="font-semibold text-white-50 hover:text-yellow-50">Whitepaper</a></li>
          </ul>
        </nav>

        <a href='/'>
          <button className="text-black-100 btn-gradient py-3 md:px-6 px-3 rounded-3xl font-bold mt-5 uppercase">
            Connect wallet
          </button>
        </a>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-russo">

        <div>
          <a href="/" className="text-white-100">
            <img src={logo} alt="Logo" className='w-8/12' />
          </a>
          <div className='flex items-center gap-x-2 pt-3'>
            <a href='/'><img src={telegram_1} alt="Logo" className='' /></a>
            <a href='/'><img src={twitter_1} alt="Logo" className='' /></a>
            <a href='/'><img src={three} alt="Logo" className='' /></a>
            <a href='/'><img src={four} alt="Logo" className='' /></a>
            <a href='/'><img src={five} alt="Logo" className='' /></a>
            <a href='/'><img src={six} alt="Logo" className='' /></a>
          </div>
        </div>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 left-0 p-2 w-3/4 overflow-y-auto text-center font-russo font-semibold btn-gradient z-20 font-cehua">

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="text-white-100">
              <img src={logo} alt="Logo" className='w-10/12' />
            </a>

            <div className='flex items-center gap-x-2 pt-3'>
              <a href='/'><img src={telegram_1} alt="Logo" className='' /></a>
              <a href='/'><img src={twitter_1} alt="Logo" className='' /></a>
              <a href='/'><img src={three} alt="Logo" className='' /></a>
              <a href='/'><img src={four} alt="Logo" className='' /></a>
              <a href='/'><img src={five} alt="Logo" className='' /></a>
              <a href='/'><img src={six} alt="Logo" className='' /></a>
            </div>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer  text-white-100">
            <a href="#about" className="text-lg ml-4 font-semibold">About</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#tokenomics" className="text-lg ml-4 font-semibold">Tokenomics</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#roadmap" className="text-lg ml-4 font-semibold">Roadmap</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#team" className="text-lg ml-4 font-semibold">Team</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#whitepaper" className="text-lg ml-4 font-semibold">Whitepaper</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer text-white-100 bg-black-50">
            <a href="#whitepaper" className="text-lg ml-4 font-semibold">Connect Wallet</a>
          </button>
        </div> : null
      }


    </header >
  )
}
