import Container from "../../../component/Container";


import './EventItems.css'
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../component/Loader";
const EventItems = () => {
  const fetchData = async () => {
    const res = await fetch(`https://event360-gold.vercel.app/eventItems`);
    const data = await res.json();
    return data;
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["eventItems"],
    queryFn: fetchData,
  });
  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Container>
      <div className="text-center my-16">
        <h1 className="eventHead mb-3">Event Items</h1>
        <p className="max-w-[700px] mx-auto mb-14">
          Upcoming Event: Join us for a day of impact! Our service project event
          promises to be a transformative experience. From hands-on volunteering
          to engaging workshops, there's something for everyone. Together, let's
          make a meaningful difference in the lives of those in need. Save the
          date and join us!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        <div className="grid grid-rows-2 mx-auto gap-5">
          <div className="bg-white/40 p-6 rounded-md">
            <img className="w-[280px] h-[140px]" src={data[0].image} alt="" />
            <p className="font-bold">{data[0].eventItem}</p>
          </div>
          <div className="flex gap-5">
            <div className="bg-white/40 p-6 rounded-md">
              <img className="w-[107px] h-[140px]" src={data[1].image} alt="" />
              <p className="font-bold">{data[1].eventItem.slice(0, 9)}</p>
            </div>
            <div className="bg-white/40 p-6 rounded-md">
              <img className="w-[107px] h-[140px]" src={data[2].image} alt="" />
              <p className="font-bold">{data[2].eventItem.slice(0, 9)}</p>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="bg-white/40 p-6 rounded-md mb-7">
            <img className="w-[280px] h-[140px]" src={data[3].image} alt="" />
            <p className="font-bold">{data[3].eventItem}</p>
          </div>
          <div className="bg-white/40 p-6 rounded-md">
            <img className="w-[280px] h-[140px]" src={data[4].image} alt="" />
            <p className="font-bold">{data[4].eventItem}</p>
          </div>
        </div>
        <div className="mx-auto bg-white/40 p-6 rounded-md">
          <img className="w-[283px] h-[375px]" src={data[5].image} alt="" />
          <p className="font-bold">{data[5].eventItem}</p>
        </div>
      </div>
    </Container>
  );
};

export default EventItems;