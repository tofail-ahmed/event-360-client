import React from 'react'
import './Button.css'
interface Itext{
      text:string
}
const Button = ({text}) => {
  return (
     <div className='main'>
       <button className="btn">{text}</button>
     </div> 
  )
}

export default Button