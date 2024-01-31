import React from 'react'
import './Client.css'
import Container from '../../../component/Container'
import spotify from '../../../assets/spotify.png'
import google from '../../../assets/google.png'
import uber from '../../../assets/uber.png'
import microsoft from '../../../assets/microsoft.png'
import shopify from '../../../assets/shopify.png'
import evernote from '../../../assets/evernote.png'
import adobe from '../../../assets/adobe.png'
import paypal from '../../../assets/paypal.png'
import amazon from '../../../assets/amazon.png'
import asana from '../../../assets/asana.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Client = () => {
  AOS.init();
  return (
    <div className='clientBg py-[60px]'>
      <Container >
     <div className=' '>
     <h1 className='clientText mb-[20px]'>Our Valuable Clients</h1>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2'>

            <img data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000" className='mx-auto my-[45px]' src={spotify} alt="" />
            <img data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000" className='mx-auto my-[45px]' src={google} alt="" />
            <img data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000" className='mx-auto my-[45px]' src={uber} alt="" />
            <img data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000" className='mx-auto my-[45px]' src={microsoft} alt="" />
            <img data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000" className='mx-auto my-[45px]' src={shopify} alt="" />
            <img data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000" className='mx-auto my-[45px]' src={evernote} alt="" />
            <img data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000" className='mx-auto my-[45px]' src={adobe} alt="" />
            <img data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000" className='mx-auto my-[45px]' src={paypal} alt="" />
            <img data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000" className='mx-auto my-[45px]' src={amazon} alt="" />
            <img data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000" className='mx-auto my-[45px]' src={asana} alt="" />
      </div>
     </div>
    </Container>
    </div>
  )
}

export default Client