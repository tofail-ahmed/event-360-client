import React from 'react'
import Container from '../../../component/Container'
import './Pricing.css'
import PricingCard from './PricingCard/PricingCard'
const Pricing = () => {
  return (
    <Container>
      <div>
            <h1 className='priceHead'>Explore our pricing plans</h1>
            <p className='priceDescrp max-w-[1080px] mx-auto'>Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
            <div className='grid lg:grid-cols-3 gap-5 grid-cols-1'>
              <PricingCard></PricingCard>
              <PricingCard></PricingCard>
              <PricingCard></PricingCard>
            </div>
      </div>
    </Container>
  )
}

export default Pricing