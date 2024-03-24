import check from '../../../assets/fi_check.png';
import './ServiceCard.css';

interface ServiceData {
  service: string;
  description: string;
  features: string;
  image: string;
}

const ServiceCard: React.FC<{ data: ServiceData }> = ({ data }) => {
  return (
    <div className="w-[400px] h-[560px] bg-slate-500/10 p-7 rounded-md">
      <img className='lg:w-350px] w-[300px] mx-auto'  src={data?.image} alt="" />
      <h1 className='serviceCardHead mt-6 mb-3'>{data?.service}</h1>
      <ul>
        {data?.features?.split(',').map((feature, index) => (
          <div className="flex items-center gap-2" key={index}>
            <img className="bg-white rounded-[50%] p-1" src={check} alt="" />
            <li className="feature">{feature.trim()}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
