import Container from "../../../component/Container";
import { IoIosMail } from "react-icons/io";
import {
  FaPhoneVolume,
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagramSquare } from "react-icons/fa";
import {motion} from "framer-motion"
const Team = () => {
  AOS.init();

  const team = [
    {
      image:
        "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg",
      name: "John Doe",
      designation: "CEO",
      email: "john@example.com",
      contact: "+1 (123) 456-7890",
      address: "123 Main Street, City, Country",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/serious-successful-arabian-businessman-formal-260nw-1879913899.jpg",
      name: "Jane Smith",
      designation: "Marketing Manager",
      email: "jane@example.com",
      contact: "+1 (234) 567-8901",
      address: "456 Elm Street, City, Country",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/young-smiling-happy-successful-employee-260nw-2332391925.jpg",
      name: "David Johnson",
      designation: "CTO",
      email: "david@example.com",
      contact: "+1 (345) 678-9012",
      address: "789 Oak Street, City, Country",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/young-confident-handsome-man-full-260nw-1416442523.jpg",
      name: "Emily Williams",
      designation: "HR Manager",
      email: "emily@example.com",
      contact: "+1 (456) 789-0123",
      address: "012 Pine Street, City, Country",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/serious-young-bearded-business-man-260nw-1564948399.jpg",
      name: "Michael Brown",
      designation: "Sales Manager",
      email: "michael@example.com",
      contact: "+1 (567) 890-1234",
      address: "345 Maple Street, City, Country",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/confident-cute-smart-business-man-260nw-609130922.jpg",
      name: "Sarah Taylor",
      designation: "Operations Manager",
      email: "sarah@example.com",
      contact: "+1 (678) 901-2345",
      address: "678 Cedar Street, City, Country",
    },
    {
      image:
        "https://image.shutterstock.com/image-photo/successful-excited-young-guy-glasses-260nw-679912606.jpg",
      name: "Alex Johnson",
      designation: "Software Engineer",
      email: "alex@example.com",
      contact: "+1 (789) 012-3456",
      address: "901 Walnut Street, City, Country",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/portrait-attractive-female-student-wearing-260nw-653682898.jpg",
      name: "Laura Martinez",
      designation: "Finance Manager",
      email: "laura@example.com",
      contact: "+1 (890) 123-4567",
      address: "234 Birch Street, City, Country",
    },
  ];

  return (
    <Container>
      <div>
        <h1 className="text-5xl font-extrabold text-center my-6 lg:mx-6 mx-12">
          Meet our Dynamic Team{" "}
        </h1>
        <div  className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          {team.map((member) => (
            <motion.div drag dragSnapToOrigin={true}  className="bg-zinc-600/30 p-2 rounded-md ">
              <img
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
                className="rounded-full w-[200px] h-[200px] mx-auto border-2 border-neutral-900 p-2"
                src={member.image}
                alt=""
              />
              <div className="text-center">
                <p className="text-xl font-bold">{member.name}</p>
                <p className="text-md font-semibold">{member.designation}</p>
                <div className="flex gap-2 justify-center items-center">
                  <IoIosMail />
                  {member.email}
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <FaPhoneVolume />
                  {member.contact}
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <IoLocation />
                  {member.address}
                </div>
                <div className="flex justify-center items gap-2 text-3xl text-blue-700/50 my-6">
                  <BsLinkedin />
                  <FaSquareFacebook />
                  <FaTelegram />
                  <FaSquareWhatsapp />
                  <FaInstagramSquare />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Team;
