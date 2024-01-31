import Container from "../../../component/Container";
import "./RecentEvent.css";
import recent_1 from "../../../assets/recent_event/recent_1.png";
import recent_2 from "../../../assets/recent_event/recent_2.png";
import recent_3 from "../../../assets/recent_event/recent_3.png";
import recent_4 from "../../../assets/recent_event/recent_4.png";
import recent_5 from "../../../assets/recent_event/recent_5.png";
import recent_6 from "../../../assets/recent_event/recent_6.png";

const RecentEvent = () => {
  return (
    <Container className="my-16">
      <div className="flex justify-center items-center lg:flex-row flex-col">
        <div className="mx-auto grid lg:grid-cols-3 grid-cols-2 gap-5">
          
          <img
            style={{ width: 190, height: 190, borderRadius: 26.34 }}
            src={recent_1}
          />
          <img
            style={{ width: 190, height: 190, borderRadius: 26.21 }}
            src={recent_3}
          />
          <img
            style={{ width: 190, height: 190, borderRadius: 114 }}
            src={recent_2}
          />

          <img
            style={{
              width: 190,
              height: 190,
              background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
              borderRadius: 115,
            }}
            src={recent_5}
          />
          <img
            style={{ width: 190, height: 190, borderRadius: 26.07 }}
            src={recent_4}
          />
          <img
            style={{
              width: 190,
              height: 190,
              background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
              borderRadius: 26.21,
            }}
            src={recent_6}
          />
        </div>
      
      <div className="max-w-[400px] lg:max-w-[520px]">
        <h1 className="recentHead ">Recent Events</h1>
        <p className="max-w-[500px] mt-6">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <button className="text-white bg-blue-600 hover:bg-blue-800 px-10 py-2 mt-9">
          Learn More
        </button>
      </div>
      </div>
    </Container>
  );
};

export default RecentEvent;
