import {
  
  FaArrowRight,
  FaCheck,
 
 
  FaRocket,
} from "react-icons/fa";
const PricingCardOrange = () => {
  return (
    <div className=" bg-white/40 p-5 rounded-md border-t-4  border-[#e76215] lg:mx-0 mx-14 ">
      <div className="flex justify-between items-center text-4xl font-bold text-[#df704e]">
        <div className="bg-[#df834e49] p-4 rounded-md mb-5 text-md rotate-0">
          {/* <FaCodepen /> */}
          {/* <FaHive /> */}
          <FaRocket />
        </div>
        <p>$21</p>
      </div>

      <div className="mt-5">
        <h1 className="text-xl font-bold my-5">Standard</h1>
        <p className="mb-5">
          Upgrade your social portfolio with a stunning profile & enhanced
          shots.
        </p>
        <button className="flex items-center gap-3 mb-6 text-blue-600 border-2 border-blue-600 rounded-md py-1 px-2 hover:text-white hover:bg-blue-600">
          Get This Package <FaArrowRight />
        </button>
      </div>
      <hr />
      <div className="mt-8">
        <div className="flex items-center gap-2 my-2 ">
          <span className="text-green-600 text-sm bg-green-400/50 p-2 rounded-[50%]">
            <FaCheck />
          </span>
          <p>User Dashboard</p>
        </div>
        <div className="flex items-center gap-2 my-2">
          <span className="text-green-600 text-sm bg-green-400/50 p-2 rounded-[50%]">
            <FaCheck />
          </span>
          <p>Post 3 Ads per week</p>
        </div>
        <div className="flex items-center gap-2 my-2">
          <span className="text-green-600 text-sm bg-green-400/50 p-2 rounded-[50%]">
            <FaCheck />
          </span>
          <p>Multiple images & videos</p>
        </div>
        <div className="flex items-center gap-2 my-2">
          <span className="text-green-600 text-sm bg-green-400/50 p-2 rounded-[50%]">
            <FaCheck />
          </span>
          <p>Basic customer support</p>
        </div>
        <div className="flex items-center gap-2 my-2">
          <span className="text-green-600 text-sm bg-green-400/50 p-2 rounded-[50%]">
            <FaCheck />
          </span>
          <p>Featured ads </p>
        </div>
        <div className="flex items-center gap-2 my-2">
          <span className="text-green-600 text-sm bg-green-400/50 p-2 rounded-[50%]">
            <FaCheck />
          </span>
          <p>Special ads badges</p>
        </div>
        <div className="flex items-center gap-2 my-2">
          <span className="text-green-600 text-sm bg-green-400/50 p-2 rounded-[50%]">
            <FaCheck />
          </span>
          <p>Call to Action in Every Ads</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCardOrange;
