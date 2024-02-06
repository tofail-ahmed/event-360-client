import React from 'react'
import Container from '../../../component/Container'
import './Pricing.css'
import PricingCardPink from './PricingCard/PricingCardPink'
import PricingCardBlue from './PricingCard/PricingCardBlue'
import PricingCardOrange from './PricingCard/PricingCardOrange'
const Pricing = () => {
  return (
    <Container className="py-16">
      <div>
        <h1 className="priceHead my-6">Explore our pricing plans</h1>
        <p className="priceDescrp lg:max-w-[1080px] max-w-[520px] mx-auto my-6">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 grid-cols-1 mt-24">
          <PricingCardPink></PricingCardPink>
          <div className="relative ">
            {" "}
            <p className="bg-blue-600 text-white px-2 py-0.5 rounded-t-lg absolute z-0 -top-6 lg:left-[30%] left-[38%] flex">
              RECOMMENDED
            </p>
            <div className="z-50">
              <PricingCardBlue></PricingCardBlue>
            </div>
          </div>
          <PricingCardOrange></PricingCardOrange>
        </div>
      </div>
    </Container>
  );
}

export default Pricing