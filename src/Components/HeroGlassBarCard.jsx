import React from 'react'
import PropTypes from 'prop-types'
import { FaLocationDot } from 'react-icons/fa6'

const HeroGlassBarCard = ({
    title,

    highlight,
    icon,

}) => {
  return (
    <div className="Hero-Glass-BarCard text-white flex items-center justify-between w-fit gap-2 border-r border-red-500 px-8">
            {icon}
            <div className="flex flex-col">
                <h4 className='uppercase rajdhani  text-[1vw] font-bold'>{title}</h4>
                 <h3 className='uppercase rajdhani text-[0.9vw] font-extrabold'>{highlight}</h3>
            </div>
        </div>
  )
}

// 


export default HeroGlassBarCard


