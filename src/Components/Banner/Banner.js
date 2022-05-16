import React from 'react'
import { BannerSection } from './style'

function Banner() {
  return (
    <BannerSection style={{backgroundImage:`url("/images/page-header-bg.jpg")`}}>
      <h2>Shopping Cart</h2>
      <p className='mb-0'>Shop</p>
    </BannerSection>
  )
}

export default Banner