import React from 'react'
import HomeProductSection from './HomeProductSection'
import { assets, serviceProviders } from '../assets/assets'
const RelatedProducts = () => {
  return (
    <div>
      <HomeProductSection 
        title2={'More Like This'}
        data={serviceProviders}
        buttonText={'SEE ALL'}
        mobileItemCount={2}
        desktopItemCount={4}
      />
    </div>
  )
}

export default RelatedProducts