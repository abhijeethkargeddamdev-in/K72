import React from 'react'
import Vedio from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center'>
        <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]' > L'étincelle  </div>
        <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]' > qui
          <div className='h-[8vw] rounded-full overflow-hidden'> <Vedio /> </div>
          génère  
        </div>
        <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]' > la créativité  </div>
    </div>
  )
}

export default HomeHeroText