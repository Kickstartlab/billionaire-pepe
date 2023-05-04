import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import safe from '../assets/safe.png';
import chart from '../assets/chart.png';
import sec_1 from '../assets/sec_1.png';
import sec_2 from '../assets/sec_2.png';
import sec_3 from '../assets/sec_3.png';
import audit_1 from '../assets/audit_1.png';
import audit_2 from '../assets/audit_2.png';
import list_1 from '../assets/list_1.png';
import list_2 from '../assets/list_2.png';
import list_3 from '../assets/list_3.png';
import r_1 from '../assets/r_1.png';
import r_2 from '../assets/r_2.png';
import r_3 from '../assets/r_3.png';
import tick from '../assets/tick.png';
import ca from '../assets/ca.png';
import team_1 from '../assets/team_1.png';
import team_2 from '../assets/team_2.png';
import team_3 from '../assets/team_3.png';
import top from '../assets/top.png';
import token from '../assets/token.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: false,
            easing: 'ease',
            delay: 350
        });
        Aos.refresh();
    }, [])

    return (
        <div className="bg-gradient font-poppins overflow-hidden text-white-100">

            {/* top section */}

            <div className="lg:px-20 px-5 bg-top">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex block justify-center items-center gap-x-12 py-12">
                        <div data-aos="fade-right" data-aos-delay="350" className="lg:w-1/3 w-full">

                            <h2 className='md:text-5xl text-3xl tracking-wide font-dmsans font-bold uppercase'>
                                Billionaire Pepe!
                                SAFEST GROWING MEME
                                UTILITY TOKEN.
                            </h2>

                            <p className='pt-6 pb-4 text-white-100 font-poppins'>
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                            </p>

                            <ul className='space-y-5'>
                                <li className='flex items-center gap-x-4 capitalize'>
                                    <img src={tick} alt="Logo" className='' />
                                    Easy to access
                                </li>
                                <li className='flex items-center gap-x-4 capitalize'>
                                    <img src={tick} alt="Logo" className='' />
                                    exclusive rewards
                                </li>
                                <li className='flex items-center gap-x-4 capitalize'>
                                    <img src={tick} alt="Logo" className='' />
                                    No hidden T&Cs
                                </li>
                            </ul>

                            <div className="flex items-center gap-8 font-poppins">
                                <a href="/">
                                    <button className="text-white-100 btn-gradient py-3 md:px-6 px-3 rounded-md font-bold mt-5 uppercase flex items-center gap-x-2 text-sm">
                                        Buy now

                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.1666 10.5H15.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.99994 4.66675L15.8333 10.5001L9.99994 16.3334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </button>
                                </a>

                                <a href="/">
                                    <button className="text-white-100 font-poppins font-bold py-2 md:px-8 px-3 mt-5 uppercase text-sm 
                                    underline flex items-center gap-2">
                                        <img src={ca} alt="Logo" className='' />

                                        CONTRACT ADDRESS
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className="img md:mt-0 mt-12">
                            <img src={top} alt="Logo" className='w-9/12 lg:float-right sm:flex mx-auto' />
                        </div>
                    </div>

                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="flex flex-col justify-center text-center items-center gap-x-12 py-12">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full md:mt-0 mt-12">
                            <h3 className='font-poppins font-semibold text-white-50 mb-6'>
                                About us
                            </h3>

                            <h2 className='md:text-4xl text-3xl font-dmsans font-semibold text-white-100'>
                                Fast, Simple & Secure
                            </h2>

                            <p className='pt-6 pb-4 text-white-50 font-poppins'>
                                It is a long established fact that a reader will be distracted by the readable content of a page
                            </p>

                        </div>

                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 items-center flex-wrap mt-8'>

                            <div className='flex flex-col gap-y-5 items-center justify-center'>
                                <img src={sec_1} alt="Logo" className='' />

                                <p className='text-white-50 font-poppins'>
                                    It is a long established fact
                                    that a reader will be distracted by the readable
                                    content of a page
                                </p>

                                <h2 className='md:text-4xl text-3xl font-poppins font-bold text-purple-50'>
                                    MEME
                                </h2>
                            </div>

                            <div className='flex flex-col gap-y-5 items-center justify-center'>
                                <img src={sec_2} alt="Logo" className='' />

                                <p className='text-white-50 font-poppins'>
                                    It is a long established fact
                                    that a reader will be distracted by the readable
                                    content of a page
                                </p>

                                <h2 className='md:text-4xl text-3xl font-poppins font-bold text-purple-50'>
                                    UTILITY
                                </h2>
                            </div>

                            <div className='flex flex-col gap-y-5 items-center justify-center'>
                                <img src={sec_3} alt="Logo" className='' />

                                <p className='text-white-50 font-poppins'>
                                    It is a long established fact
                                    that a reader will be distracted by the readable
                                    content of a page
                                </p>

                                <h2 className='md:text-4xl text-3xl font-poppins font-bold text-purple-50'>
                                    HUGE MARKET
                                </h2>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* tokenomics section */}

            <div id='tokenomics' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div data-aos="fade-up" data-aos-delay="350" className='lg:w-8/12 flex flex-col mx-auto bg-blue-50 p-12 rounded-xl'>

                        <img src={token} alt='token' className='w-8/12 flex mx-auto'></img>

                        <div className='lg:flex items-baseline justify-between space-y-6'>

                            <div>
                                <div className='space-y-6'>
                                    <p className='flex items-center gap-x-6 font-dmsans font-bold text-lg'>

                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 0.916626C7.45002 0.916626 0.916687 7.44996 0.916687 15.5C0.916687 23.55 7.45002 30.0833 15.5 30.0833C23.55 30.0833 30.0834 23.55 30.0834 15.5C30.0834 7.44996 23.55 0.916626 15.5 0.916626ZM12.5834 22.7916L5.29169 15.5L7.34794 13.4437L12.5834 18.6645L23.6521 7.59579L25.7084 9.66663L12.5834 22.7916Z" fill="#8059B4" />
                                        </svg>

                                        4% Total Buy Tax
                                    </p>

                                    <p className='flex items-center gap-x-6 font-dmsans font-bold text-lg'>

                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 0.916626C7.45002 0.916626 0.916687 7.44996 0.916687 15.5C0.916687 23.55 7.45002 30.0833 15.5 30.0833C23.55 30.0833 30.0834 23.55 30.0834 15.5C30.0834 7.44996 23.55 0.916626 15.5 0.916626ZM12.5834 22.7916L5.29169 15.5L7.34794 13.4437L12.5834 18.6645L23.6521 7.59579L25.7084 9.66663L12.5834 22.7916Z" fill="#8059B4" />
                                        </svg>

                                        12% Total Sell Tax
                                    </p>

                                    <div className='flex items-center gap-x-6 font-dmsans font-bold text-lg'>

                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 0.916626C7.45002 0.916626 0.916687 7.44996 0.916687 15.5C0.916687 23.55 7.45002 30.0833 15.5 30.0833C23.55 30.0833 30.0834 23.55 30.0834 15.5C30.0834 7.44996 23.55 0.916626 15.5 0.916626ZM12.5834 22.7916L5.29169 15.5L7.34794 13.4437L12.5834 18.6645L23.6521 7.59579L25.7084 9.66663L12.5834 22.7916Z" fill="#8059B4" />
                                        </svg>

                                        <div>
                                            Total Maximum Supply

                                            <p className='text-xs text-purple-50'>
                                                1 000 000 000 000 000 SG
                                            </p>
                                        </div>

                                    </div>

                                    <p className='flex items-center gap-x-6 font-dmsans font-bold text-lg underline'>

                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 0.916626C7.45002 0.916626 0.916687 7.44996 0.916687 15.5C0.916687 23.55 7.45002 30.0833 15.5 30.0833C23.55 30.0833 30.0834 23.55 30.0834 15.5C30.0834 7.44996 23.55 0.916626 15.5 0.916626ZM12.5834 22.7916L5.29169 15.5L7.34794 13.4437L12.5834 18.6645L23.6521 7.59579L25.7084 9.66663L12.5834 22.7916Z" fill="#8059B4" />
                                        </svg>

                                        Contract
                                    </p>

                                    <li className='flex items-center gap-x-6 font-dmsans font-bold text-lg underline'>

                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 0.916626C7.45002 0.916626 0.916687 7.44996 0.916687 15.5C0.916687 23.55 7.45002 30.0833 15.5 30.0833C23.55 30.0833 30.0834 23.55 30.0834 15.5C30.0834 7.44996 23.55 0.916626 15.5 0.916626ZM12.5834 22.7916L5.29169 15.5L7.34794 13.4437L12.5834 18.6645L23.6521 7.59579L25.7084 9.66663L12.5834 22.7916Z" fill="#8059B4" />
                                        </svg>

                                        PCS Liquidity
                                    </li>

                                    <li className='flex items-center gap-x-6 font-dmsans font-bold text-lg underline'>

                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 0.916626C7.45002 0.916626 0.916687 7.44996 0.916687 15.5C0.916687 23.55 7.45002 30.0833 15.5 30.0833C23.55 30.0833 30.0834 23.55 30.0834 15.5C30.0834 7.44996 23.55 0.916626 15.5 0.916626ZM12.5834 22.7916L5.29169 15.5L7.34794 13.4437L12.5834 18.6645L23.6521 7.59579L25.7084 9.66663L12.5834 22.7916Z" fill="#8059B4" />
                                        </svg>

                                        Treasury / Marketing
                                    </li>

                                    <li className='flex items-center gap-x-6 font-dmsans font-bold text-lg underline'>

                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 0.916626C7.45002 0.916626 0.916687 7.44996 0.916687 15.5C0.916687 23.55 7.45002 30.0833 15.5 30.0833C23.55 30.0833 30.0834 23.55 30.0834 15.5C30.0834 7.44996 23.55 0.916626 15.5 0.916626ZM12.5834 22.7916L5.29169 15.5L7.34794 13.4437L12.5834 18.6645L23.6521 7.59579L25.7084 9.66663L12.5834 22.7916Z" fill="#8059B4" />
                                        </svg>

                                        Deployer Wallet
                                    </li>
                                </div>
                            </div>

                            <div className='space-y-6'>
                                <p className='flex items-center gap-x-6 font-dmsans font-bold text-lg underline'>

                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5 0.916626C7.45002 0.916626 0.916687 7.44996 0.916687 15.5C0.916687 23.55 7.45002 30.0833 15.5 30.0833C23.55 30.0833 30.0834 23.55 30.0834 15.5C30.0834 7.44996 23.55 0.916626 15.5 0.916626ZM12.5834 22.7916L5.29169 15.5L7.34794 13.4437L12.5834 18.6645L23.6521 7.59579L25.7084 9.66663L12.5834 22.7916Z" fill="#8059B4" />
                                    </svg>

                                    Staking Contract
                                </p>

                                <p className='flex items-center gap-x-6 font-dmsans font-bold text-lg underline'>

                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5 0.916626C7.45002 0.916626 0.916687 7.44996 0.916687 15.5C0.916687 23.55 7.45002 30.0833 15.5 30.0833C23.55 30.0833 30.0834 23.55 30.0834 15.5C30.0834 7.44996 23.55 0.916626 15.5 0.916626ZM12.5834 22.7916L5.29169 15.5L7.34794 13.4437L12.5834 18.6645L23.6521 7.59579L25.7084 9.66663L12.5834 22.7916Z" fill="#8059B4" />
                                    </svg>

                                    Lp Staking Contract
                                </p>

                                <img src={safe} alt='safe'></img>
                            </div>

                        </div>

                        <hr className='text-purple-50 mt-8'>
                        </hr>

                        <div className='lg:flex items-center justify-center pt-8 gap-x-12 space-y-4'>
                            <h2 className='md:text-3xl text-xl font-dmsans font-bold text-white-100'>
                                Want to get an in-depth View
                                have a look at our Whitepaper
                            </h2>

                            <a href="/">
                                <button className="text-white-100 btn-gradient py-3 md:px-6 px-3 rounded-md font-bold mt-5 uppercase flex items-center gap-x-4">
                                    Whitepaper

                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.1666 10.5H15.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.99994 4.66675L15.8333 10.5001L9.99994 16.3334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </button>
                            </a>
                        </div>

                    </div>

                </div>
            </div>

            {/* roadmap */}

            <div id='roadmap' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <h2 className='md:text-6xl text-2xl font-poppins text-center font-bold text-purple-100 uppercase'>
                        THE BILLIONAIRE ROADMAP
                    </h2>

                    <div className='lg:flex items-center justify-center gap-x-16 space-y-5 mt-12'>

                        <div className=''>
                            <img src={r_1} alt='token' className=''></img>
                        </div>

                        <div className='lg:w-1/3 '>
                            <h3 className='font-poppins font-semibold text-white-50'>
                                Roadmap
                            </h3>

                            <h2 className='md:text-3xl text-2xl font-dmsans font-semibold text-white-100 py-5'>
                                Phase - 1
                            </h2>

                            <p className='text-white-50 lg:leading-6'>
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>

                            <div className='mt-6'>
                                <div className='flex items-center gap-3 text-white-50'>

                                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 1.83333L13.825 0.658325L8.54167 5.94166L9.71667 7.11666L15 1.83333ZM18.5333 0.658325L9.71667 9.47499L6.23333 5.99999L5.05833 7.17499L9.71667 11.8333L19.7167 1.83333L18.5333 0.658325ZM0.341667 7.17499L5 11.8333L6.175 10.6583L1.525 5.99999L0.341667 7.17499Z" fill="#FF5EE8" />
                                    </svg>

                                    <p>The Internet <span className='font-semibold'>tend repeat</span> predefined chunks.</p>
                                </div>

                                <div className='flex items-center gap-3 text-white-50'>

                                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 1.83333L13.825 0.658325L8.54167 5.94166L9.71667 7.11666L15 1.83333ZM18.5333 0.658325L9.71667 9.47499L6.23333 5.99999L5.05833 7.17499L9.71667 11.8333L19.7167 1.83333L18.5333 0.658325ZM0.341667 7.17499L5 11.8333L6.175 10.6583L1.525 5.99999L0.341667 7.17499Z" fill="#FF5EE8" />
                                    </svg>

                                    <p>Dictionary of over 200 <span className='font-semibold'>Latin words</span>.</p>
                                </div>

                                <div className='flex items-center gap-3 text-white-50'>

                                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 1.83333L13.825 0.658325L8.54167 5.94166L9.71667 7.11666L15 1.83333ZM18.5333 0.658325L9.71667 9.47499L6.23333 5.99999L5.05833 7.17499L9.71667 11.8333L19.7167 1.83333L18.5333 0.658325ZM0.341667 7.17499L5 11.8333L6.175 10.6583L1.525 5.99999L0.341667 7.17499Z" fill="#FF5EE8" />
                                    </svg>

                                    <p>Generate Lorem which looks reasonable.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='lg:flex items-center justify-center gap-x-16 space-y-5 mt-12'>

                        <div className='lg:w-1/3 '>
                            <h3 className='font-poppins font-semibold text-white-50'>
                                Roadmap
                            </h3>

                            <h2 className='md:text-3xl text-2xl font-dmsans font-semibold text-white-100 py-5'>
                                Phase - 2
                            </h2>

                            <p className='text-white-50 lg:leading-6'>
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>

                            <div className='mt-6'>
                                <div className='flex items-center gap-3 text-white-50'>

                                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 1.83333L13.825 0.658325L8.54167 5.94166L9.71667 7.11666L15 1.83333ZM18.5333 0.658325L9.71667 9.47499L6.23333 5.99999L5.05833 7.17499L9.71667 11.8333L19.7167 1.83333L18.5333 0.658325ZM0.341667 7.17499L5 11.8333L6.175 10.6583L1.525 5.99999L0.341667 7.17499Z" fill="#FF5EE8" />
                                    </svg>

                                    <p>The Internet <span className='font-semibold'>tend repeat</span> predefined chunks.</p>
                                </div>

                                <div className='flex items-center gap-3 text-white-50'>

                                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 1.83333L13.825 0.658325L8.54167 5.94166L9.71667 7.11666L15 1.83333ZM18.5333 0.658325L9.71667 9.47499L6.23333 5.99999L5.05833 7.17499L9.71667 11.8333L19.7167 1.83333L18.5333 0.658325ZM0.341667 7.17499L5 11.8333L6.175 10.6583L1.525 5.99999L0.341667 7.17499Z" fill="#FF5EE8" />
                                    </svg>

                                    <p>Dictionary of over 200 <span className='font-semibold'>Latin words</span>.</p>
                                </div>

                                <div className='flex items-center gap-3 text-white-50'>

                                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 1.83333L13.825 0.658325L8.54167 5.94166L9.71667 7.11666L15 1.83333ZM18.5333 0.658325L9.71667 9.47499L6.23333 5.99999L5.05833 7.17499L9.71667 11.8333L19.7167 1.83333L18.5333 0.658325ZM0.341667 7.17499L5 11.8333L6.175 10.6583L1.525 5.99999L0.341667 7.17499Z" fill="#FF5EE8" />
                                    </svg>

                                    <p>Generate Lorem which looks reasonable.</p>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <img src={r_2} alt='token' className=''></img>
                        </div>
                    </div>

                    <div className='lg:flex items-center justify-center gap-x-16 space-y-5 mt-12'>

                        <div className=''>
                            <img src={r_3} alt='token' className=''></img>
                        </div>

                        <div className='lg:w-1/3 '>
                            <h3 className='font-poppins font-semibold text-white-50'>
                                Roadmap
                            </h3>

                            <h2 className='md:text-3xl text-2xl font-dmsans font-semibold text-white-100 py-5'>
                                Phase - 3
                            </h2>

                            <p className='text-white-50 lg:leading-6'>
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>

                            <div className='mt-6'>
                                <div className='flex items-center gap-3 text-white-50'>

                                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 1.83333L13.825 0.658325L8.54167 5.94166L9.71667 7.11666L15 1.83333ZM18.5333 0.658325L9.71667 9.47499L6.23333 5.99999L5.05833 7.17499L9.71667 11.8333L19.7167 1.83333L18.5333 0.658325ZM0.341667 7.17499L5 11.8333L6.175 10.6583L1.525 5.99999L0.341667 7.17499Z" fill="#FF5EE8" />
                                    </svg>

                                    <p>The Internet <span className='font-semibold'>tend repeat</span> predefined chunks.</p>
                                </div>

                                <div className='flex items-center gap-3 text-white-50'>

                                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 1.83333L13.825 0.658325L8.54167 5.94166L9.71667 7.11666L15 1.83333ZM18.5333 0.658325L9.71667 9.47499L6.23333 5.99999L5.05833 7.17499L9.71667 11.8333L19.7167 1.83333L18.5333 0.658325ZM0.341667 7.17499L5 11.8333L6.175 10.6583L1.525 5.99999L0.341667 7.17499Z" fill="#FF5EE8" />
                                    </svg>

                                    <p>Dictionary of over 200 <span className='font-semibold'>Latin words</span>.</p>
                                </div>

                                <div className='flex items-center gap-3 text-white-50'>

                                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 1.83333L13.825 0.658325L8.54167 5.94166L9.71667 7.11666L15 1.83333ZM18.5333 0.658325L9.71667 9.47499L6.23333 5.99999L5.05833 7.17499L9.71667 11.8333L19.7167 1.83333L18.5333 0.658325ZM0.341667 7.17499L5 11.8333L6.175 10.6583L1.525 5.99999L0.341667 7.17499Z" fill="#FF5EE8" />
                                    </svg>

                                    <p>Generate Lorem which looks reasonable.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* our team  */}

            <div id='team' className="lg:px-20 px-5">

                <div className='container mx-auto'>

                    <h2 className='md:text-6xl text-2xl font-poppins text-center font-bold text-purple-100 uppercase'>
                        MEET THE TEAM
                    </h2>

                    <div className='grid lg:grid-cols-3 grid-cols-1 items-center justify-evenly gap-8 mt-12'>

                        <div>
                            <img src={team_1} alt="team" className='' />
                        </div>

                        <div>
                            <img src={team_2} alt="team" className='' />
                        </div>

                        <div>
                            <img src={team_3} alt="team" className='' />
                        </div>

                    </div>

                </div>
            </div>

            {/* chart */}

            {/* tokenomics section */}

            <div id='chart' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div data-aos="fade-up" data-aos-delay="350" className='lg:w-8/12 flex flex-col mx-auto bg-blue-50 p-12 rounded-xl'>

                        <h2 className='md:text-6xl text-2xl font-poppins text-center font-bold text-purple-100 uppercase'>
                            chart
                        </h2>

                        <div className='py-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center gap-x-2'>

                            <div className='flex items-center gap-4 text-lg'>

                                <img src={tick} alt='token' className=''></img>

                                MARKET CAP
                                $12.00 M
                            </div>

                            <div className='flex items-center gap-4 text-lg'>

                                <img src={tick} alt='token' className=''></img>

                                VOLUME (24H)
                                $1.24 M
                            </div>

                            <div className='flex items-center gap-4 text-lg'>

                                <img src={tick} alt='token' className=''></img>

                                CIRCULATING SUPPLY
                                999.98 T
                            </div>

                            <div className='flex items-center gap-4 text-lg'>

                                <img src={tick} alt='token' className=''></img>

                                MAX SUPPLY
                                1.00 Qa
                            </div>

                        </div>

                        <img src={chart} alt='token' className='w-10/12 flex mx-auto'></img>

                    </div>

                </div>
            </div>

            {/* logos */}

            <div className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-12 py-12">

                        <div>
                            <h2 className='md:text-6xl text-2xl font-poppins text-center font-bold text-purple-100 uppercase'>
                                Audited by
                            </h2>

                            <div className='lg:flex items-center gap-x-8 mt-6 space-y-4 '>
                                <img src={audit_1} alt='token' className='flex mx-auto'></img>
                                <img src={audit_2} alt='token' className='flex mx-auto'></img>
                            </div>
                        </div>

                        <div>
                            <h2 className='md:text-6xl text-2xl font-poppins text-center font-bold text-purple-100 uppercase'>
                                Listed on
                            </h2>

                            <div className='lg:flex items-center gap-x-8 mt-6 space-y-4 '>
                                <img src={list_1} alt='token' className='flex mx-auto'></img>
                                <img src={list_2} alt='token' className='flex mx-auto'></img>
                                <img src={list_3} alt='token' className='flex mx-auto'></img>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* info */}

            <div data-aos="zoom-in" data-aos-delay="350" id='conclusion' className="">

                <div className="lg:py-20 py-8 lg:px-20 px-5 container mx-auto">

                    <div className='lg:w-7/12 text-center flex flex-col mx-auto'>

                        <h3 className='font-poppins font-semibold text-white-100 mb-6'>
                            TAKE 5-MINUTES
                        </h3>

                        <h2 className='text-3xl font-dmsans text-center font-semibold text-white-100'>
                            Get started in just a few minutes
                        </h2>

                        <p className='text-white-50 mt-6'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.

                        </p>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
