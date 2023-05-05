import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import join from '../assets/join.png';
import follow from '../assets/follow.png';
import chart from '../assets/chart.png';
import audit_1 from '../assets/audit_1.png';
import audit_2 from '../assets/audit_2.png';
import list_1 from '../assets/list_1.png';
import list_2 from '../assets/list_2.png';
import list_3 from '../assets/list_3.png';
import tick from '../assets/tick.png';
import ca from '../assets/ca.png';
import team_1 from '../assets/team_1.png';
import team_2 from '../assets/team_2.png';
import team_3 from '../assets/team_3.png';
import top from '../assets/top.png';
import bg_top from '../assets/bg_top.png';
import bottom from '../assets/bottom.png';
import globe from '../assets/globe.png';
import globe_2 from '../assets/globe_2.png';
import star from '../assets/star.png';
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
        <div className="bg-black-50 font-poppins overflow-hidden text-white-100">

            {/* top section */}

            <div className="lg:px-20 px-5">
                <img src={bg_top} alt="Logo" className='absolute top-0 right-0 left-0' />

                <img src={globe_2} alt="Logo" className='absolute right-0 lg:block hidden mt-32' />

                <div className='container mx-auto  relative z-20'>

                    <Menu />

                    <div className="flex flex-col justify-center items-center gap-x-12 lg:py-20 py-12">

                        <div data-aos="fade-right" data-aos-delay="350" className="lg:w-7/12 text-center w-full">

                            <h3 className='md:text-4xl text-2xl font-cehua text-center font-semibold text-white-100 pb-5'>
                                Pepe Billionaire
                            </h3>

                            <h1 className='md:text-7xl text-2xl font-cehua text-center font-bold text-white-100'>
                                Safest <span className='text-yellow-50'>Growing</span> Meme
                                Utility Token
                            </h1>

                            <p className='pt-6 pb-4 text-white-100 font-inter'>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and many web sites still in their infancy.
                            </p>

                            <a href="/">
                                <button className="text-white-100 bg-green-100 py-3.5 border-2 border-green-100 hover:border-white-50 hover:bg-black-50 md:px-8 px-3 rounded-full font-medium mt-5 flex items-center gap-x-2 text-sm mx-auto">
                                    <img src={ca} alt="Logo" className='' />

                                    Explore Now
                                </button>
                            </a>

                        </div>
                    </div>

                    <div id='about' className='mt-12'>
                        <p className='font-inter text-center font-semibold text-white-100 pb-5'>
                            THE COLLECTION
                        </p>

                        <h3 className='md:text-5xl text-2xl font-cehua text-center font-bold text-white-100'>
                            Fast, Simple & Secure
                        </h3>

                        <img src={globe} alt="Logo" className='absolute right-0 w-1/4 -mt-12 lg:block hidden' />

                        <div className="lg:flex justify-center items-center gap-x-12 py-12 space-y-12">

                            <div className='flex flex-col lg:gap-y-28 gap-y-12'>
                                <div className='lg:text-right'>
                                    <h3 className='text-2xl font-cehua font-bold text-white-100'>
                                        Lorem
                                    </h3>
                                    <p className='leading-loose'>
                                        Find digital artwork by professionals and discover the true meaning of the artwork
                                    </p>
                                </div>

                                <div className='lg:text-right'>
                                    <h3 className='text-2xl font-cehua font-bold text-white-100'>
                                        Lorem
                                    </h3>
                                    <p className='leading-loose'>
                                        Find digital artwork by professionals and discover the true meaning of the artwork
                                    </p>
                                </div>
                            </div>

                            <div>
                                <img src={top} alt="Logo" className='flex mx-auto' />
                            </div>

                            <div className='flex flex-col gap-y-28'>
                                <div className='lg:block hidden'>

                                </div>

                                <div className=''>
                                    <h3 className='text-2xl font-cehua font-bold text-white-100'>
                                        Lorem
                                    </h3>
                                    <p className='leading-loose'>
                                        Find digital artwork by professionals and discover the true meaning of the artwork
                                    </p>
                                </div>
                            </div>

                        <img src={star} alt="Logo" className='absolute right-44 mt-12 lg:block hidden' />

                        <img src={star} alt="Logo" className='absolute left-1/3 -ml-16 translate-y-52 lg:block hidden' />

                        </div>
                    </div>

                </div>
            </div>

            {/* tokenomics section */}

            <div id='tokenomics' className="">

                <div className="lg:pt-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div data-aos="fade-up" data-aos-delay="350" className='lg:w-8/12 flex flex-col mx-auto'>

                        <h2 className='md:text-7xl text-2xl font-cehua text-center font-bold text-white-100'>
                            Tokenomics
                        </h2>

                        <div className='border-2 border-yellow-50 p-8 mt-12'>

                            <div className='lg:flex items-baseline justify-between space-y-6'>
                                <h2 className='md:text-5xl text-2xl font-cehua font-bold text-white-100'>
                                    4% Total Buy Tax
                                </h2>

                                <h2 className='md:text-5xl text-2xl font-cehua font-bold text-white-100'>
                                    12% Total Sell Tax
                                </h2>
                            </div>

                            <hr className='text-yellow-50 my-8'>
                            </hr>

                            <div className='lg:flex items-baseline justify-between space-y-6'>

                                <div>
                                    <div className='space-y-10'>
                                        <p className='flex items-center gap-x-4 font-cehua font-semibold underline lg:text-3xl text-xl'>
                                            Treasury / Marketing

                                            <svg width="40" height="18" viewBox="0 0 49 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.5 24V24.5H24.7071L24.8536 24.3536L24.5 24ZM48.5 0L42.9232 1.49429L47.0057 5.57678L48.5 0ZM0 24.5H24.5V23.5H0V24.5ZM24.8536 24.3536L45.6716 3.53553L44.9645 2.82843L24.1464 23.6464L24.8536 24.3536Z" fill="white" />
                                            </svg>
                                        </p>

                                        <p className='flex items-center gap-x-4 font-cehua font-semibold underline lg:text-3xl text-xl'>
                                            Deployer Wallet

                                            <svg width="40" height="18" viewBox="0 0 49 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.5 24V24.5H24.7071L24.8536 24.3536L24.5 24ZM48.5 0L42.9232 1.49429L47.0057 5.57678L48.5 0ZM0 24.5H24.5V23.5H0V24.5ZM24.8536 24.3536L45.6716 3.53553L44.9645 2.82843L24.1464 23.6464L24.8536 24.3536Z" fill="white" />
                                            </svg>
                                        </p>

                                        <p className='flex items-center gap-x-4 font-cehua font-semibold underline lg:text-3xl text-xl'>
                                            Contract

                                            <svg width="40" height="18" viewBox="0 0 49 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.5 24V24.5H24.7071L24.8536 24.3536L24.5 24ZM48.5 0L42.9232 1.49429L47.0057 5.57678L48.5 0ZM0 24.5H24.5V23.5H0V24.5ZM24.8536 24.3536L45.6716 3.53553L44.9645 2.82843L24.1464 23.6464L24.8536 24.3536Z" fill="white" />
                                            </svg>
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className='space-y-10'>
                                        <p className='flex items-center gap-x-4 font-cehua font-semibold underline lg:text-3xl text-xl'>
                                            Staking Contract

                                            <svg width="40" height="18" viewBox="0 0 49 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.5 24V24.5H24.7071L24.8536 24.3536L24.5 24ZM48.5 0L42.9232 1.49429L47.0057 5.57678L48.5 0ZM0 24.5H24.5V23.5H0V24.5ZM24.8536 24.3536L45.6716 3.53553L44.9645 2.82843L24.1464 23.6464L24.8536 24.3536Z" fill="white" />
                                            </svg>
                                        </p>

                                        <p className='flex items-center gap-x-4 font-cehua font-semibold underline lg:text-3xl text-xl'>
                                            Lp Staking Contract

                                            <svg width="40" height="18" viewBox="0 0 49 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.5 24V24.5H24.7071L24.8536 24.3536L24.5 24ZM48.5 0L42.9232 1.49429L47.0057 5.57678L48.5 0ZM0 24.5H24.5V23.5H0V24.5ZM24.8536 24.3536L45.6716 3.53553L44.9645 2.82843L24.1464 23.6464L24.8536 24.3536Z" fill="white" />
                                            </svg>
                                        </p>

                                        <p className='flex items-center gap-x-4 font-cehua font-semibold underline lg:text-3xl text-xl'>
                                            PCS Liquidity

                                            <svg width="40" height="18" viewBox="0 0 49 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.5 24V24.5H24.7071L24.8536 24.3536L24.5 24ZM48.5 0L42.9232 1.49429L47.0057 5.57678L48.5 0ZM0 24.5H24.5V23.5H0V24.5ZM24.8536 24.3536L45.6716 3.53553L44.9645 2.82843L24.1464 23.6464L24.8536 24.3536Z" fill="white" />
                                            </svg>
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className='text-center space-y-3 pt-12'>
                                <h2 className='md:text-3xl text-xl font-cehua text-center font-semibold text-white-100'>
                                    Total Maximum Supply
                                </h2>

                                <p className='text-white-50 font-poppins'>1 000 000 000 000 000 SG</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* roadmap */}

            <div id='roadmap' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <h2 className='md:text-7xl text-2xl font-cehua text-center font-bold text-white-100'>
                        Roadmap
                    </h2>

                    <div className="relative text-white-100 font-inter text-sm font-semibold lg:py-12">

                        <div className="hidden lg:block w-1 btn-gradient absolute h-full left-1/2 transform -translate-x-1/2 line"></div>

                        <div className='flex flex-col items-center justify-center lg:gap-y-56 gap-y-8'>
                            <div className="translate-y-12">
                                <div className="lg:flex items-center justify-center gap-x-24 space-y-4">
                                    <h2 className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2 lg:text-right'>
                                        Phase - 1
                                    </h2>

                                    <div className="lg:block hidden z-20 absolute">
                                        <svg width="35" height="35" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="22.3999" cy="22.9218" r="18.5217" fill="white" stroke="black" strokeWidth="7.4087" />
                                        </svg>
                                    </div>

                                    <p className='text-lg font-poppins text-white-50 font-thin lg:w-1/2'>
                                        1 out of evry 100 owners will get 0,004 ETH back.
                                    </p>
                                </div>
                            </div>

                            <div className="">
                                <div className="lg:flex hidden items-center justify-center gap-x-24 space-y-4">
                                    <p className='text-lg font-poppins text-white-50 font-thin lg:w-1/2 lg:text-right'>
                                        Members will also be involed in tons of important
                                        decision-making.
                                    </p>

                                    <div className="lg:block hidden z-20 absolute">
                                        <svg width="35" height="35" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="22.3999" cy="22.9218" r="18.5217" fill="white" stroke="black" strokeWidth="7.4087" />
                                        </svg>
                                    </div>

                                    <h2 className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2'>
                                        Phase - 2
                                    </h2>
                                </div>
                            </div>


                            <div className="lg:hidden block space-y-4">
                                <h2 className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2'>
                                    Phase - 2
                                </h2>

                                <p className='text-lg font-poppins text-white-50 font-thin lg:w-1/2 lg:text-right'>
                                    Members will also be involed in tons of important
                                    decision-making.
                                </p>
                            </div>

                            <div className="">
                                <div className="lg:flex items-center justify-center gap-x-24 space-y-4">
                                    <h2 className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2 lg:text-right'>
                                        Phase - 3
                                    </h2>

                                    <div className="lg:block hidden z-20 absolute">
                                        <svg width="35" height="35" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="22.3999" cy="22.9218" r="18.5217" fill="white" stroke="black" strokeWidth="7.4087" />
                                        </svg>
                                    </div>

                                    <p className='text-lg font-poppins text-white-50 font-thin lg:w-1/2'>
                                        Based onthe decision of our community, a 99 district play to earn game will be developed.
                                    </p>
                                </div>
                            </div>

                            <div className="">
                                <div className="lg:flex hidden items-center justify-center gap-x-24 space-y-4">
                                    <p className='text-lg font-poppins text-white-50 font-thin lg:w-1/2 lg:text-right'>
                                        We will give 100 random stange<br></br> turtles to pop stars, soccer stars, artists and entrepreneurs around the world.
                                    </p>

                                    <div className="lg:block hidden z-20 absolute">
                                        <svg width="35" height="35" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="22.3999" cy="22.9218" r="18.5217" fill="white" stroke="black" strokeWidth="7.4087" />
                                        </svg>
                                    </div>

                                    <h2 className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2'>
                                        Phase - 4
                                    </h2>
                                </div>

                                <div className="lg:hidden block space-y-4">
                                    <h2 className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2'>
                                        Phase - 4
                                    </h2>

                                    <p className='text-lg font-poppins text-white-50 font-thin lg:w-1/2 lg:text-right'>
                                        We will give 100 random stange turtles to pop stars, soccer stars, artists and entrepreneurs around the world.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

            {/* our team  */}

            <div id='team' className="lg:px-20 px-5">

                <div className='container mx-auto'>

                    <h2 className='md:text-7xl text-2xl font-cehua text-center font-bold text-white-100'>
                        Meet the Team
                    </h2>

                    <div className='grid lg:grid-cols-3 grid-cols-1 items-center justify-items-center gap-8 mt-16'>

                        <div>
                            <img src={team_1} alt="team" className='w-10/12 flex mx-auto' />
                        </div>

                        <div>
                            <img src={team_2} alt="team" className='w-10/12 flex mx-auto' />
                        </div>

                        <div>
                            <img src={team_3} alt="team" className='w-10/12 flex mx-auto' />
                        </div>

                    </div>

                </div>
            </div>

            {/* chart */}

            <div id='chart' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div data-aos="fade-up" data-aos-delay="350" className=''>

                        <h2 className='md:text-7xl text-2xl font-cehua text-center font-bold text-white-100'>
                            Chart
                        </h2>

                        <div className='py-8 lg:flex items-center justify-between gap-x-24 space-y-6'>

                            <div>
                                <img src={chart} alt='token' className=''></img>
                            </div>

                            <div className='lg:w-1/3 space-y-12'>
                                <div className='flex items-center gap-6 lg:text-2xl text-lg font-cehua'>

                                    <img src={tick} alt='token' className=''></img>

                                    MARKET CAP<br></br>
                                    $12.00 M
                                </div>

                                <div className='flex items-center gap-6 lg:text-2xl text-lg font-cehua'>

                                    <img src={tick} alt='token' className=''></img>

                                    CIRCULATING SUPPLY<br></br>
                                    999.98 T
                                </div>

                                <div className='flex items-center gap-6 lg:text-2xl text-lg font-cehua'>

                                    <img src={tick} alt='token' className=''></img>

                                    MAX SUPPLY<br></br>
                                    1.00 Qa
                                </div>

                                <div className='flex items-center gap-6 lg:text-2xl text-lg font-cehua'>

                                    <img src={tick} alt='token' className=''></img>

                                    VOLUME (24H)<br></br>
                                    $1.24 M
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* logos */}

            <div className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-baseline gap-x-12 py-12 lg:w-9/12 mx-auto border-2 border-yellow-50 lg:p-8 p-5 space-y-6">

                        <div>
                            <h2 className='md:text-6xl text-2xl font-cehua text-center font-bold'>
                                Audited by
                            </h2>

                            <div className='flex items-center gap-x-8 mt-6 space-y-4 '>
                                <img src={audit_1} alt='token' className='flex mx-auto lg:w-full w-1/4'></img>
                                <img src={audit_2} alt='token' className='flex mx-auto lg:w-full w-1/4'></img>
                            </div>
                        </div>

                        <div className=''>
                            <h2 className='md:text-6xl text-2xl font-cehua text-center font-bold'>
                                Listed on
                            </h2>

                            <div className='flex items-center gap-x-8 mt-6 space-y-4 flex-wrap'>
                                <img src={list_1} alt='token' className='flex mx-auto w-1/4'></img>
                                <img src={list_2} alt='token' className='flex mx-auto w-1/4'></img>
                                <img src={list_3} alt='token' className='flex mx-auto w-1/4'></img>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Join The Community */}

            <div data-aos="zoom-in" data-aos-delay="350" id='conclusion' className="lg:h-screen">

                <div>
                    <img src={bottom} alt="Logo" className='absolute right-0 left-0' />
                </div>

                <div className="lg:py-20 py-8 lg:px-20 px-5 container mx-auto relative z-20 lg:translate-y-32">

                    <div className='lg:w-7/12 text-center flex flex-col mx-auto'>

                        <h3 className='font-poppins font-semibold text-white-100 mb-6'>
                            JOIN US
                        </h3>

                        <h2 className=' lg:text-4xl text-2xl font-cehua text-center font-semibold text-white-100'>
                            Join The Community
                        </h2>

                        <p className='text-white-100 mt-6'>
                            Join our discord channel or follow us on twitter keep up to date with our latest work and announcements
                        </p>

                        <div className="flex items-center gap-8 font-poppins justify-center">
                            <a href="/">
                                <button className="text-white-100 bg-green-100 py-3.5 border-2 border-green-100 hover:border-white-50 hover:bg-black-50 md:px-8 px-3 rounded-full font-medium mt-5 flex items-center gap-x-2 text-sm">
                                    <img src={join} alt="Logo" className='' />

                                    Join Discord
                                </button>
                            </a>

                            <a href="/">
                                <button className="text-white-100 font-poppins font-medium py-3.5 md:px-8 px-3 mt-5 text-sm 
                                    flex items-center gap-2 border-2 border-white-50 hover:border-green-100 hover:bg-green-100 rounded-full">
                                    <img src={follow} alt="Logo" className='' />

                                    Follow Twitter
                                </button>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
