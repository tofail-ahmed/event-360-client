import React from 'react'
import corporate from '../../../assets/corporate_event.png'
import check from '../../../assets/fi_check.png'
import './ServiceCard.css'
const ServiceCard = ({data}) => {
console.log("data from card",data)
// const {service,description,features,image}=data
  return (
    <div className=" w-[410px] h-[560px] bg-slate-500/10 p-7 rounded-md" >
      <img src={data?.image} alt="" />
      <h1 className='serviceCardHead mt-6 mb-3'>{data?.service}</h1>
      
      <ul>
     
            {data?.features?.split(',').map((feature, index) => (
               <div className="flex items-center gap-2">
                <img className="bg-white rounded-[50%] p-1" src={check} alt="" />
              <li className="feature " key={index}>{feature.trim()}</li>
               </div>
            ))}
          </ul>
     
      
    </div>
  )
}

export default ServiceCard