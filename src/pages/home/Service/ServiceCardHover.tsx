import check from "../../../assets/fi_check.png";
import "./ServiceCard.css";

interface ServiceData {
  service: string;
  description: string;
  features: string;
  image: string;
}

const ServiceCardHover: React.FC<{ data: ServiceData }> = ({ data }) => {
  return (
    <div className="relative w-[410px] h-[560px] bg-slate-500/10 p-7 rounded-md">
      <h1 className="serviceCardHead">{data?.service}</h1>
      <p className="hoverDescrp mt-3 mb-7">{data?.description}</p>
      <ul>
        {data?.features?.split(",").map((feature, index) => (
          <div className="flex items-center gap-2" key={index}>
            <img className="bg-white rounded-[50%] p-1" src={check} alt="" />
            <li className="feature" key={index}>
              {feature.trim()}
            </li>
          </div>
        ))}
      </ul>
      <button className="w-[360px] py-2 bg-blue-500 text-white hover:bg-blue-600 absolute bottom-8">
        Check It Out
      </button>
    </div>
  );
};

export default ServiceCardHover;
