import React from 'react'
import corporate from '../../../assets/corporate_event.png'
import check from '../../../assets/fi_check.png'
import './ServiceCard.css'
const ServiceCard = () => {
  return (
    <div className=" w-[410px] h-[560px] bg-slate-500/10 p-7 rounded-md" >
      <img src={corporate} alt="" />
      <h1 className='serviceCardHead mt-6 mb-3'>Corporate Event</h1>
      <div  className='flex items-center gap-2 mb-3'>
                <img className='bg-white rounded-[50%] p-1' src={check} alt="" />

        <p className='feature'>One day pas access all lecture</p>
      </div>
      <div  className='flex items-center gap-2 mb-3'>
                <img className='bg-white rounded-[50%] p-1' src={check} alt="" />

        <p className='feature'>Lunch and Snack</p>
      </div>
      <div  className='flex items-center gap-2 mb-3'>
                <img className='bg-white rounded-[50%] p-1' src={check} alt="" />

        <p className='feature'>Meet Event Speaker</p>
      </div>
      <div  className='flex items-center gap-2 mb-3'>
                <img className='bg-white rounded-[50%] p-1' src={check} alt="" />

        <p className='feature'>Front Seat</p>
      </div>
      <div  className='flex items-center gap-2 mb-3'>
                <img className='bg-white rounded-[50%] p-1' src={check} alt="" />

        <p className='feature'>One day pas access all lecture</p>
      </div>
      
    </div>
  )
}

export default ServiceCard