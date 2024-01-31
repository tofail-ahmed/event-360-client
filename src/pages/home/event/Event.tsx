import React from "react";
import Container from "../../../component/Container";
import event_1 from "../../../assets/event_1.png";
import event_2 from "../../../assets/event_2.png";
import event_3 from "../../../assets/event_3.png";
import event_4 from "../../../assets/event_4.png";
import event_5 from "../../../assets/event_5.png";
import event_6 from "../../../assets/event_6.png";
import './Event.css'
const Event = () => {
  return (
    <Container >
      <div className="text-center my-16">
            <h1 className="eventHead mb-3">Event Items</h1>
            <p className="max-w-[700px] mx-auto mb-14">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        <div className="grid grid-rows-2 mx-auto gap-5">
          <div className="bg-white/40 p-6 rounded-md">
            <img src={event_1} alt="" />
            <p className="font-bold">Event Item-1</p>
          </div>
          <div className="flex gap-5">
            <div className="bg-white/40 p-6 rounded-md">
              <img src={event_2} alt="" />
              <p className="font-bold">Event Item-2</p>
            </div>
            <div className="bg-white/40 p-6 rounded-md">
              <img src={event_3} alt="" />
              <p className="font-bold">Event Item-3</p>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="bg-white/40 p-6 rounded-md mb-7">
            <img src={event_4} alt="" />
            <p className="font-bold">Event Item-4</p>
          </div>
          <div className="bg-white/40 p-6 rounded-md">
            <img src={event_5} alt="" />
            <p className="font-bold">Event Item-5</p>
          </div>
        </div>
        <div className="mx-auto bg-white/40 p-6 rounded-md">
          <img src={event_6} alt="" />
          <p className="font-bold">Event Item-6</p>
        </div>
      </div>
     
    </Container>
  );
};

export default Event;
