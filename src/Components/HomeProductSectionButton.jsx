import React from 'react'
import { Link } from 'react-router-dom'

const HomeProductSectionButton = ({text}) => {
  return (
    <Link>
      <div className='mt-10 text-center'>
        <span className='border-2 border-[#23A6F0] rounded text-[#23A6F0] tracking-wider text-sm font-semibold py-3 px-10'>{text}</span>
      </div>
    </Link>
  )
}

export default HomeProductSectionButton