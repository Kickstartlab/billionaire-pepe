import React, { useState } from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-russo  text-white-100 h-28">
        <a href="/" className="logo lg:my-12">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-6 items-center">
            <li><a href="#about" className="font-semibold">About</a></li>
            <li><a href="#proposals" className=" font-semibold">Proposals</a></li>
            <li><a href="#tokenomics" className="font-semibold">Tokenomics</a></li>
            <li><a href="#roadmap" className="font-semibold">Roadmap</a></li>
            <li><a href="#chart" className="font-semibold">Chart</a></li>
            <li><a href="#whitepaper" className="font-semibold">Whitepaper</a></li>
            <li><a href="#whitepaper" className="font-semibold">DAPP</a></li>
            <li className="text-white-100 btn-gradient py-3 md:px-6 px-3 rounded-3xl font-bold mt-5 uppercase">
              <a href='/'>Connect wallet</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-russo">
        <a href="/" className="text-white-100">
          <img src={logo} alt="Logo" />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 left-0 p-2 w-3/4 overflow-y-auto text-center font-russo font-semibold btn-gradient z-20">

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="text-white-100">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer  text-white-100">
            <a href="#about" className="text-lg ml-4 font-semibold">About</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 text-white-100">
            <a href="#proposals" className="text-lg ml-4 font-semibold">Proposals</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#tokenomics" className="text-lg ml-4 font-semibold">Tokenomics</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#roadmap" className="text-lg ml-4 font-semibold">Roadmap</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#chart" className="text-lg ml-4 font-semibold">Chart</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#whitepaper" className="text-lg ml-4 font-semibold">Whitepaper</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
            <a href="#whitepaper" className="text-lg ml-4 font-semibold">DAPP</a>
          </button>
        </div> : null
      }


    </header >
  )
}
