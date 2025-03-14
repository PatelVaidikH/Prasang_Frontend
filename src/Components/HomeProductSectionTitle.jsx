import React from 'react'

const HomeProductSectionTitle = ({text1, text2, text3}) => {
  return (
    <div className='w-full text-center mt-10 sm:mt-12 mb-6'>
      <p className='text-lg text-[#737373]'>{text1}</p>
      <p className='text-2xl font-bold text-[#252B42]'>{text2}</p>
      <p className='text-base text-[#737373]'>{text3}</p>
    </div>
  )
}

export default HomeProductSectionTitle