import Container from "../../../component/Container";
import './Booking.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Booking = () => {
  AOS.init();
  return (
    <Container className="bookingBg my-12 rounded-md py-12">
      <div className=" flex lg:flex-row flex-col justify-center items-center gap-12">
        <div data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="500"  className="lg:max-w-lg px-8 mx-auto">
          <h1 className="text-5xl font-extrabold">Book Your Service Now!!</h1>
          <p className="text-lg font-medium my-12">
            By submitting this booking request, you agree to our terms and
            conditions. Our team will contact you to confirm availability and
            finalize the booking details. Please note that submitting this form
            does not guarantee your booking until it is confirmed by our team.
          </p>
        </div>
        <div className="mx-auto">
          <form className="flex flex-col gap-2 justify-center">
            <label  data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500" className="flex flex-col w-[250px] lg:w-[400px]">
              Full Name:
              <input
                className="p-2 rounded-md bg-slate-600/40 text-white font-semibold"
                type="text"
                placeholder="FullName"
              />
            </label>
            <label  data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500" className="flex flex-col w-[250px] lg:w-[400px]">
              Email:
              <input
                className="p-2 rounded-md bg-slate-600/40 text-white font-semibold"
                type="email"
                placeholder="Email"
              />
            </label>
            <label  data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500" className="flex flex-col w-[250px] lg:w-[400px]">
              Phone Number:
              <input
                className="p-2 rounded-md bg-slate-600/40 text-white font-semibold"
                type="tel"
                placeholder="Phone Number"
              />
            </label>
            <label  data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500" className="flex flex-col w-[250px] lg:w-[400px]">
              Service/Event Name:
              <input
                className="p-2 rounded-md bg-slate-600/40 text-white font-semibold"
                type="text"
                placeholder="Service Name"
              />
            </label>
            <label  data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500" className="flex flex-col w-[250px] lg:w-[400px]">
              Date:
              <input
                className="p-2 rounded-md bg-slate-600/40 text-white font-semibold"
                type="date"
                placeholder="Date"
              />
            </label>
            <label  data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500" className="flex flex-col w-[250px] lg:w-[400px]">
              Time:
              <input
                className="p-2 rounded-md bg-slate-600/40 text-white font-semibold"
                type="time"
                placeholder="Time"
              />
            </label>
            <label  data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500" className="flex flex-col w-[250px] lg:w-[400px]">
              Number of Attendees:
              <input
                className="p-2 rounded-md bg-slate-600/40 text-white font-semibold"
                type="number"
                placeholder="Attendees"
              />
            </label>
            <label  data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500" className="flex flex-col w-[250px] lg:w-[400px]">
              Additional Comments:
              <textarea
                className="p-2 rounded-md bg-slate-600/40 text-white font-semibold"
                placeholder="Additional Comments"
              />
            </label>
            <div>
              <button data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="500"
                className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-2 rounded my-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
