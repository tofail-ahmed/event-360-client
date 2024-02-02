import Container from '../../../component/Container';
import Carousel from './Carousel';

const ClientSay = () => {
 
  // const array=[
  //   '/src/assets/gallery/Picture_1.png',
  //   '/src/assets/gallery/Picture_2.png',
  //   '/src/assets/gallery/Picture_3.png',
  //   '/src/assets/gallery/Picture_4.png',
  //   '/src/assets/gallery/Picture_5.png',
  //   '/src/assets/gallery/Picture_6.png',
  //   '/src/assets/gallery/Picture_7.png',
  //   '/src/assets/gallery/Picture_8.png',
  //   '/src/assets/gallery/Picture_9.png',
  //   '/src/assets/gallery/Picture_10.png',
  // ]


  return (
    <Container className='mx-auto rounded-lg'>
      {/* <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <div className="grid grid-cols-3">
        {array.slice(currentImg, currentImg + 2.5).map((image, index) => (
          <div key={index}>
            <ClientSayCard img={image}></ClientSayCard>
          </div>
        ))}
      </div> */}
      <Carousel></Carousel>
    </Container>
  );
};

export default ClientSay;
