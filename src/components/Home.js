import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import ca from '../assets/ca.png';
import utility_1 from '../assets/utility_1.png';
import utility_2 from '../assets/utility_2.png';
import utility_3 from '../assets/utility_3.png';
import buy_1 from '../assets/buy_1.png';
import buy_2 from '../assets/buy_2.png';
import buy_3 from '../assets/buy_3.png';
import buy_4 from '../assets/buy_4.png';
import top from '../assets/top.png';
import top_1 from '../assets/top_1.png';
import bottom from '../assets/bottom.png';
import globe from '../assets/globe.png';
import globe_2 from '../assets/globe_2.png';
import globe_3 from '../assets/globe_3.png';
import star from '../assets/star.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Particle from './Particle';


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

                <img data-aos="zoom-in" src={globe_2} alt="Logo" className='absolute right-0 lg:block hidden mt-32 w-44' />

                <img data-aos="zoom-in" src={globe_3} alt="Logo" className='absolute left-0 lg:block hidden mt-56' />

                <div className='container mx-auto  relative z-20'>

                    <Menu />

                    <Particle />

                    <div className="lg:flex justify-center items-center gap-x-12 lg:py-20 py-12 space-y-8">

                        <div className="lg:w-1/2 w-full">

                            <h3 data-aos="fade-down" className='md:text-5xl text-2xl font-cehua  font-semibold text-white-100 pb-5'>
                                Pepe Billionaire
                            </h3>

                            <h1 data-aos="slide-up" className='md:text-2xl text-xl font-cehua font-bold text-white-100'>
                                The most affluent pepe meme coin inherits his fathers good fortune and is now ready to share it with the world. $PepeBillionaire now has to his credit, themed tokens that provide unbelievable returns and gratifying remuneration.
                            </h1>

                            <p data-aos="fade-in" className='pt-6 pb-4 text-white-100 font-inter'>
                                If Meme Coins with Utility, Use Case & 1000x's are your thing, adding to the latest hype of Pepe tokens, Pepe Billionaire is sure to be your new fetish!
                            </p>

                            <a href="/">
                                <button data-aos="zoom-in" className="text-white-100 bg-green-100 py-3.5 border-2 border-green-100 hover:border-white-50 hover:bg-black-50 md:px-8 px-3 rounded-full font-medium mt-5 flex items-center gap-x-2 text-sm">
                                    <img src={ca} alt="Logo" className='' />

                                    Explore Now
                                </button>
                            </a>

                        </div>

                        <div>
                            <img data-aos="zoom-in" src={top} alt="Logo" className='lg:float-right w-9/12 lg:block flex mx-auto' />
                        </div>
                    </div>

                    <div id='about' className='mt-12'>
                        <p data-aos="fade-down" className='font-inter text-center font-semibold text-white-100 pb-5'>
                            PEPE BILLIONAIRE
                        </p>

                        <h3 data-aos="slide-up" className='md:text-5xl text-2xl font-cehua text-center font-bold text-white-100'>
                            About Us
                        </h3>

                        <div className="flex flex-col justify-center items-center gap-x-12 py-12 space-y-12 lg:w-8/12 mx-auto">

                            <p data-aos="slide-up" className='text-xl text-center font-cehua font-bold text-white-100'>
                                Pepe Billionaire is the son of the famous and now trending meme coin Pepe.
                            </p>

                            <div>
                                <img data-aos="zoom-in" src={top_1} alt="Logo" className='flex mx-auto w-10/12' />
                            </div>

                            <p data-aos="slide-up" className='text-center lg:leading-loose font-cehua font-bold text-white-100'>
                                He was born this year with a golden spoon and in the lap of Pepe luxury. He has a flair for all things exquisite and loves to travel aristocratic style. Treading and trading in splendor and class are his hobbies.
                                He rewards his holders with immense prosperity. He ensures incredible rewards to token holders from around the world. Are you ready to embark on a prosperous journey of opulence?
                                Start by becoming proud holders of his tokens.
                            </p>

                            <img src={star} alt="Logo" className='absolute right-44 mt-12 lg:block hidden animate-pulse' />

                            <img src={star} alt="Logo" className='absolute left-24 translate-y-32 lg:block hidden animate-pulse' />

                        </div>
                    </div>

                </div>
            </div>

            <img data-aos="zoom-in" src={globe} alt="Logo" className='absolute right-0 -mt-44 w-56 lg:block hidden' />

            {/*  */}


            <div id='buy' className="">

                <div className="lg:pt-20 py-5 lg:px-20 px-5 container mx-auto">
                    <p data-aos="fade-down" className='font-inter text-center font-semibold text-white-100 pb-5'>
                        PEPE BILLIONAIRE
                    </p>

                    <h2 data-aos="slide-up" className='md:text-7xl text-3xl font-cehua text-center font-bold text-white-100'>
                        How To Buy?
                    </h2>

                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-1 items-center justify-items-center gap-28 mt-16'>

                        <div data-aos="flip-right" className='flex flex-col gap-y-8 items-center justify-center text-center bg-gradient-2 border-2 border-white-50 p-6'>
                            <img src={buy_1} alt="Logo" className='bg-circle -mt-32' />

                            <h5 className='font-cehua lg:text-2xl text-xl'>Create A Wallet</h5>

                            <p className='font-inter leading-loose'>
                                Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.
                            </p>
                        </div>

                        <div data-aos="flip-left" className='flex flex-col gap-y-6 items-center justify-center text-center bg-gradient-2 p-6 border-2 border-white-50'>
                            <img src={buy_2} alt="Logo" className='bg-circle -mt-32' />

                            <h5 className='font-cehua lg:text-2xl text-xl'>Get Some ETH</h5>

                            <p className='font-inter leading-loose'>
                                Have ETH in your wallet to switch to $PEPEBillionaire. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
                            </p>
                        </div>

                        <div data-aos="flip-right" className='flex flex-col gap-y-6 items-center justify-center text-center bg-gradient-2 p-6 border-2 border-white-50'>
                            <img src={buy_3} alt="Logo" className='bg-circle -mt-32' />

                            <h5 className='font-cehua lg:text-2xl text-xl'>Go to Uniswap</h5>

                            <p className='font-inter leading-loose'>
                                Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPEBillionaire token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign.
                            </p>
                        </div>

                        <div data-aos="flip-left" className='flex flex-col gap-y-8 items-center justify-center text-center bg-gradient-2 p-6 border-2 border-white-50'>
                            <img src={buy_4} alt="Logo" className='bg-circle -mt-32' />

                            <h5 className='font-cehua lg:text-2xl text-xl'>Switch ETH for $PEPEBillionaire</h5>

                            <p className='font-inter leading-loose'>
                                Switch ETH for $PEPEBillionaire. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* tokenomics section */}

            <div id='tokenomics' className="">

                <div className="lg:pt-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div data-aos="fade-up" data-aos-delay="350" className='lg:w-10/12 flex flex-col mx-auto'>

                        <h2 data-aos="slide-up" className='md:text-7xl text-3xl font-cehua text-center font-bold text-white-100'>
                            Tokenomics
                        </h2>

                        <p data-aos="slide-up" className='text-center text-lg lg:leading-loose font-cehua font-bold text-white-100 mt-6'>
                            Like our father, No Taxes, No Bullshit. LP tokens Burnt and Contract Renounced <br></br>
                            Allotment for Staking is 10%, to be implemented post launch in the road map so as to encourage and reward our esteemed holders till further utilities roll out. Furthermore other allotments such as Marketing, Initial Burn, Airdrops, CEX listings are mentioned below.
                        </p>

                        <div data-aos="zoom-in" className='border-2 border-yellow-50 p-8 mt-12'>

                            <div data-aos="fade-out" className='lg:flex items-baseline justify-between space-y-6'>
                                <h2 className='md:text-5xl text-2xl font-cehua font-bold text-white-100'>
                                    0% Total Buy Tax
                                </h2>

                                <h2 className='md:text-5xl text-2xl font-cehua font-bold text-white-100'>
                                    0% Total Sell Tax
                                </h2>
                            </div>

                            <hr className='text-yellow-50 my-8'>
                            </hr>

                            <div className='lg:flex items-baseline justify-between space-y-6'>

                                <div>
                                    <div className='space-y-3'>
                                        <p className='font-cehua font-regular lg:text-3xl text-xl'>
                                            Name : Pepe Billionaire
                                        </p>

                                        <p className='font-cehua font-regular lg:text-3xl text-xl'>
                                            Symbol / Tickr : PEPEBillionaire
                                        </p>

                                        <p className='font-cehua font-regular lg:text-3xl text-xl'>
                                            Supply: 420,690,000,000,000
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className='space-y-3'>
                                        <p className='font-cehua font-regular lg:text-3xl text-xl'>
                                            Liquidity Tokens : 60%
                                        </p>

                                        <p className='font-cehua font-regular lg:text-3xl text-xl'>
                                            Staking : 10%
                                        </p>

                                        <p className='font-cehua font-regular lg:text-3xl text-xl'>
                                            Marketing : 10%
                                        </p>

                                        <p className='font-cehua font-regular lg:text-3xl text-xl'>
                                            Initial Burn : 10%
                                        </p>

                                        <p className='font-cehua font-regular lg:text-3xl text-xl'>
                                            Airdrops : 5%
                                        </p>

                                        <p className='font-cehua font-regular lg:text-3xl text-xl'>
                                            Centralized Exchange Listings : 5%
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

                    <h2 data-aos="slide-up" className='md:text-7xl text-3xl font-cehua text-center font-bold text-white-100'>
                        Roadmap
                    </h2>

                    <div className="relative text-white-100 font-inter text-sm font-semibold lg:py-12">

                        <div className="hidden lg:block w-1 btn-gradient absolute h-full left-1/2 transform -translate-x-1/2 line"></div>

                        <div className='flex flex-col items-center justify-center lg:gap-y-36 gap-y-8'>

                            <div className="translate-y-12">
                                <div className="lg:flex items-center justify-center gap-x-24 space-y-4">
                                    <h2 data-aos="fade-right" className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2 lg:text-right'>
                                        Phase - 1
                                    </h2>

                                    <div data-aos="zoom-in" className="lg:block hidden z-20 absolute">
                                        <svg width="35" height="35" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="22.3999" cy="22.9218" r="18.5217" fill="white" stroke="black" strokeWidth="7.4087" />
                                        </svg>
                                    </div>

                                    <ul data-aos="fade-right" className='text-lg font-poppins text-white-50 font-thin lg:w-1/2 list-disc lg:p-0 p-4'>
                                        <li>
                                            Meme
                                        </li>
                                        <li>
                                            Top Graphics team deployment
                                        </li>
                                        <li>
                                            Logo Creation & Website Development
                                        </li>
                                        <li>
                                            Ultra High Quality Content for promotions
                                        </li>
                                        <li>
                                            Telegram channel Creation
                                        </li>
                                        <li>
                                            Presence on all social media platforms
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="">
                                <div className="lg:flex hidden items-center justify-center gap-x-24 space-y-4">
                                    <ul data-aos="fade-right" className='text-lg font-poppins text-white-50 font-thin lg:w-1/2 lg:text-right list-disc list-inside lg:p-0 p-4'>
                                        <li>
                                            Stealth Launch
                                        </li>
                                        <li>
                                            Initiate Aggressive Marketing Campaigns & Advertisements
                                        </li>
                                        <li>
                                            Dextools socials updation
                                        </li>
                                        <li>
                                            Get Trending on Dextools
                                        </li>
                                        <li>
                                            Coingecko Listing
                                        </li>
                                        <li>
                                            Coinmarketcap Listing
                                        </li>
                                    </ul>

                                    <div data-aos="zoom-in" className="lg:block hidden z-20 absolute">
                                        <svg width="35" height="35" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="22.3999" cy="22.9218" r="18.5217" fill="white" stroke="black" strokeWidth="7.4087" />
                                        </svg>
                                    </div>

                                    <h2 data-aos="fade-left" className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2'>
                                        Phase - 2
                                    </h2>
                                </div>
                            </div>

                            <div className="lg:hidden block space-y-4">
                                <h2 data-aos="fade-right" className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2'>
                                    Phase - 2
                                </h2>

                                <ul data-aos="fade-right" className='text-lg font-poppins text-white-50 font-thin lg:w-1/2 lg:text-right list-disc p-4'>
                                    <li>
                                        Stealth Launch
                                    </li>
                                    <li>
                                        Initiate Aggressive Marketing Campaigns & Advertisements
                                    </li>
                                    <li>
                                        Dextools socials updation
                                    </li>
                                    <li>
                                        Get Trending on Dextools
                                    </li>
                                    <li>
                                        Coingecko Listing
                                    </li>
                                    <li>
                                        Coinmarketcap Listing
                                    </li>
                                </ul>
                            </div>

                            <div className="">
                                <div className="lg:flex items-center justify-center gap-x-24 space-y-4">
                                    <h2 data-aos="fade-right" className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2 lg:text-right'>
                                        Phase - 3
                                    </h2>

                                    <div data-aos="zoom-in" className="lg:block hidden z-20 absolute">
                                        <svg width="35" height="35" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="22.3999" cy="22.9218" r="18.5217" fill="white" stroke="black" strokeWidth="7.4087" />
                                        </svg>
                                    </div>

                                    <ul data-aos="fade-left" className='text-lg font-poppins text-white-50 font-thin lg:w-1/2 list-disc lg:p-0 p-4'>
                                        <li>
                                            1000+ Holders
                                        </li>
                                        <li>
                                            Strong Community Vibe
                                        </li>
                                        <li>
                                            Logo appearance on each platform
                                        </li>
                                        <li>
                                            Investment on a big scale on all social media platform promotions & Influencers/Celebrity endorsements
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="">
                                <div className="lg:flex hidden items-center justify-center gap-x-24 space-y-4">
                                    <ul data-aos="fade-right" className='text-lg font-poppins text-white-50 font-thin lg:w-1/2 list-disc text-right list-inside'>
                                        <li>
                                            Huge Marketing push with top crypto influencers
                                        </li>
                                        <li>
                                            Staking
                                        </li>
                                        <li>
                                            CEX Listings
                                        </li>
                                        <li>
                                            10000+ holders
                                        </li>
                                    </ul>

                                    <div data-aos="zoom-in" className="lg:block hidden z-20 absolute">
                                        <svg width="35" height="35" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="22.3999" cy="22.9218" r="18.5217" fill="white" stroke="black" strokeWidth="7.4087" />
                                        </svg>
                                    </div>

                                    <h2 data-aos="fade-left" className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2'>
                                        Phase - 4
                                    </h2>
                                </div>

                                <div className="lg:hidden block space-y-4">
                                    <h2 data-aos="fade-right" className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase'>
                                        Phase - 4
                                    </h2>

                                    <ul data-aos="fade-right" className='text-lg font-poppins text-white-50 font-thin lg:w-1/2 list-disc p-4'>
                                        <li>
                                            Huge Marketing push with top crypto influencers
                                        </li>
                                        <li>
                                            Staking
                                        </li>
                                        <li>
                                            CEX Listings
                                        </li>
                                        <li>
                                            10000+ holders
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="">
                                <div className="lg:flex items-center justify-center gap-x-24 space-y-4">
                                    <h2 data-aos="fade-right" className='md:text-5xl text-2xl font-cehua font-bold text-gradient uppercase lg:w-1/2 lg:text-right'>
                                        Phase - 5
                                    </h2>

                                    <div data-aos="zoom-in" className="lg:block hidden z-20 absolute">
                                        <svg width="35" height="35" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="22.3999" cy="22.9218" r="18.5217" fill="white" stroke="black" strokeWidth="7.4087" />
                                        </svg>
                                    </div>

                                    <ul data-aos="fade-left" className='text-lg font-poppins text-white-50 font-thin lg:w-1/2 list-disc'>
                                        <li>
                                            Pepe Billionaire Merchandise
                                        </li>
                                        <li>
                                            Pepe Billionaire NFT'S
                                        </li>
                                        <li>
                                            Join Pepe at every party
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <p className='text-xl font-cehua lg:leading-loose lg:w-1/2 flex mx-auto text-center lg:mt-20 my-6'>
                        Outdated information will eventually be replaced with next stages of the project.
                        Do not be dissuaded that Phase 5 is the final stage.
                    </p>
                </div>

            </div>

            {/* Utilities  */}

            <div id='utiilities' className="lg:px-20 px-5">

                <div className='container mx-auto'>

                    <h2 data-aos="slide-up" className='md:text-7xl text-3xl font-cehua text-center font-bold text-white-100'>
                        Utilities
                    </h2>

                    <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-items-center gap-20 mt-16'>

                        <div data-aos="fade-right" className='border border-white-50 bg-gradient p-8'>
                            <div className='lg:flex gap-4 font-inter'>
                                <div className='space-y-6 lg:w-1/2'>
                                    <h5 className='font-cehua lg:text-3xl text-xl'>Super Staking Platforms</h5>

                                    <p className='font-medium leading-loose'>
                                        Staking platforms that boast high yield REALISTIC APY's  ( not the 150 & 200%  moonboy scams) in crypto with an additional in house compounding feature. Accompanied by real world rewards, luxury prices, and exclusive perks.
                                    </p>
                                </div>

                                <div className='lg:w-1/2 ml-12 lg:-mt-16 lg:absolute left-1/2'>
                                    <img src={utility_1} alt="team" className='' />
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-right" className='border border-white-50 bg-gradient p-8'>
                            <div className='lg:flex gap-4 font-inter'>
                                <div className='space-y-6 lg:w-1/2'>
                                    <h5 className='font-cehua lg:text-3xl text-xl'>NFT's</h5>

                                    <p className='font-medium leading-loose'>
                                        These avant-garde NFT'S, will be meticulously curated by renowned artists, who bring to you their labour of love in a limited collection offering real world perks in connection with Premium lifestyle.
                                    </p>
                                </div>

                                <div className='lg:w-1/2 lg:ml-16 lg:-mt-16 lg:absolute left-1/2'>
                                    <img src={utility_2} alt="team" className='' />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div data-aos="fade-right" className='border border-white-50 bg-gradient p-8 lg:mt-20 mt-6 lg:w-9/12 flex mx-auto'>
                        <div className='lg:flex gap-4 items-center font-inter'>
                            <div className='space-y-6 lg:w-1/2'>
                                <h5 className='font-cehua lg:text-3xl text-xl'>The Pepe Billionaire Merch</h5>

                                <p className='font-medium leading-loose'>
                                    Our name is synonymous with the quirky and effervescent energy and virality of the Pepe Meme.
                                </p>

                                <p className='font-medium leading-loose'>
                                    The merchandise collection is slated to be a sensation, donned and flaunted by popular influencers through collaborations. Our valued holders of the NFT's will also enjoy exclusive access to the same.
                                </p>
                            </div>

                            <div className='lg:absolute lg:right-0 lg:-mr-24'>
                                <img src={utility_3} alt="team" className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Join The Community */}

            <div id='conclusion' className="lg:h-screen">

                <div data-aos="fade-in">
                    <img src={bottom} alt="Logo" className='absolute right-0 left-0' />
                </div>

                <div className="lg:py-20 py-8 lg:px-20 px-5 container mx-auto relative z-20 lg:translate-y-32">

                    <div className='lg:w-7/12 text-center flex flex-col mx-auto'>

                        <h3 data-aos="fade-in" className='font-poppins font-semibold text-white-100 mb-6'>
                            PEPE BILLIONAIRE
                        </h3>

                        <h2 data-aos="slide-up" className=' lg:text-4xl text-2xl font-cehua text-center font-semibold text-white-100'>
                            Disclaimer
                        </h2>

                        <p data-aos="fade-out" className='text-white-100 mt-6'>
                            Crypto Currency investments are subject to market risks. Do your own research before investing. High rewards come along with High risks as well. The team or the creators of this token ($PepeBillionaire) or project ($PepeBillionaire) are not held responsible in any way for your loss or profit for that matter for the duration of your investment in the same.
                        </p>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
