import React from 'react'
import image from '../assets/Images/hero3.png'
import { FaCalendar, FaLocationDot } from 'react-icons/fa6'
import HeroGlassBarCard from '../Components/HeroGlassBarCard'
import { IoIosPeople } from 'react-icons/io'
import { IoInformationCircle } from 'react-icons/io5'

const Hero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">

   
      <img
        src={image}
        alt="Hero"
        className="absolute w-full h-full object-cover z-0"
      />

  
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-red-900/30 via-black/60 to-red-900/50" />

     
      <div className="relative z-20 w-full h-full flex items-center justify-center text-white px-4">

        <div className="flex flex-col items-center text-center max-w-4xl mb-[10vh]">

         
          <h1 className="orbitron text-[6vw] font-bold tracking-widest text-gray-200">
            CALCUTTA
          </h1>

          <div className="flex items-center gap-4 mt-2">

            <h2 className="blowbrush text-[8.5vw] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
              HACKS
            </h2>

          
            <span className="orbitron text-[2.5vw] ml-2 px-4 py-2 bg-gradient-to-br from-red-600 to-red-900 text-black font-bold rounded-lg shadow-[0_0_20px_rgba(255,0,60,0.6)]">
              2.0
            </span>

          </div>

       
          <p className="rajdhani text-[1.6vw]  text-gray-300 tracking-wide font-bold">
            Hack the System. Rewrite Reality
          </p>

          {/* CTA */}
          <button className="mt-2 px-10 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-800 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,60,0.8)] transition-all duration-300 font-semibold tracking-wide">
            ENTER THE NETWORK
          </button>

        </div>
      </div>

      {/* 🔻 Bottom Glass Bar */}
      <div className="absolute bottom-0 w-full flex justify-center z-30">
        <div className="flex items-center justify-between p-2 w-fit h-[9vh] bg-black/80 backdrop-blur-md border border-red-900/40 rounded-t-xl shadow-[0_0_20px_rgba(255,0,60,0.2)]">
        
        <HeroGlassBarCard title={'Date'} highlight={'24th - 26th Dec'} icon={<FaCalendar className='text-4xl text-red-900' />} />
         <HeroGlassBarCard title={'Venue'} highlight={'Kolkata, India'} icon={<FaLocationDot className='text-4xl text-red-900' /> }/>
          <HeroGlassBarCard title={'Format'} highlight={'Offline'} icon={<IoInformationCircle className='text-4xl text-red-900'/>}/>
           <HeroGlassBarCard title={'Participarns'}  highlight={'5000+'} icon={<IoIosPeople className='text-4xl text-red-900'/>}/>
            
        </div>
      </div>

    </div>
  )
}

export default Hero