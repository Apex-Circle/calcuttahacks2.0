import React from 'react';
import { Code, Landmark, Target, Sparkles, Bus, Award } from 'lucide-react';
import GlareHover from '../Components/GlareHover';
import { FaArrowRight, FaCloudRain } from 'react-icons/fa6';


export const VintageCard = ({ children, className }) => {
  return (
    <div
      className={`rounded-lg p-1 mx-[2vw] my-[2vh] shadow-2xl transform transition-all hover:scale-[1.02] ${className}`}
    >
      <div className="relative z-10 rounded-lg bg-white/6 backdrop-blur-md border border-white/10 flex flex-col w-full h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const Tracks = () => {
  const tracks = [
    {
      title: 'Web 3',
      icon: Code,
      desc: 'Explore blockchain, decentralized apps, and smart contracts to shape the future of the internet.',
      glareColor: '#3e2c1d',
    },
    {
      title: 'Heritage Tech',
      icon: Landmark,
      desc: 'Leverage technology to preserve, showcase, and digitize cultural and historical heritage.',
      glareColor: '#3e2c1d',
    },
    {
      title: 'Cyber Security',
      icon: Target,
      desc: 'Develop solutions to protect digital systems, data, and networks from cyber threats.',
      glareColor: '#3e2c1d',
    },
    {
      title: 'AI & ML',
      icon: Sparkles,
      desc: 'Create intelligent systems using artificial intelligence and machine learning algorithms.',
      glareColor: '#3e2c1d',
    },
    {
      title: 'Smart City',
      icon: Bus,
      desc: 'Use technology and data to create sustainable, efficient, and connected urban spaces.',
      glareColor: '#3e2c1d',
    },
    {
      title: 'Open Innovation',
      icon: Award,
      desc: 'Bring your boldest ideas to life — build anything that pushes the boundaries of innovation.',
      glareColor: '#3e2c1d',
    },
  ];

  return (
    <section id="tracks" className="py-20 h-fit bg-linear-to-b from-red-900/20 via-black to-red-900/30 relative" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-[10vh]">
        <div className="text-center mb-16">
        


          <h2 className="blowbrush text-[4vw] leading-none text-transparent bg-clip-text bg-linear-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
                HACKATHON TRACKS
      </h2>



          <div className="w-32 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="font-serif text-2xl text-white max-w-4xl mx-auto">
            Choose your track and build solutions that matter
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, idx) => (
            <div key={idx} className="relative ">
              <VintageCard className="w-full py-2 px-2 ">
                {/* <div className="flex flex-col items-center justify-center h-full p-6 text-center">
               
            
                </div> */}

                <GlareHover
                  glareColor={track.glareColor}
                  glareOpacity={0.12}
                  glareAngle={-30}
                  glareSize={220}
                  transitionDuration={600}
                  playOnce={false}
                  className="flex flex-col h-[30vh] w-full p-6 text-left "
                >

                     <div className="absolute w-20 h-20 rounded-full bg-linear-to-tr from-amber-400/30 via-orange-500/25 to-rose-500/10 blur-2xl opacity-80 z-30 -right-5 -top-5"></div>

                    <div className="absolute w-20 h-20 rounded-full bg-linear-to-bl from-amber-400/30 via-orange-500/25 to-rose-500/10 blur-2xl opacity-80 z-30 -left-5 -bottom-5"></div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full p-3 bg-linear-to-tr from-orange-500 to-pink-600 text-white shadow-md">
                      {track.icon ? <track.icon className="w-6 h-6" /> : <FaCloudRain className="w-6 h-6" />}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-orange-500 to-red-500">
                      {track.title}
                    </h3>
                  </div>
                  <p className="rajdhani text-gray-200 leading-relaxed text-[1.150rem] mb-4">{track.desc}</p>
                  <div className="mt-auto w-full flex justify-end ">
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold shadow-sm hover:brightness-105 transition">
                    Learn More <FaArrowRight />
                    </button>
                  </div>
                </GlareHover>
              </VintageCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;