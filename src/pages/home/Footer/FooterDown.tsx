import Container from "../../../component/Container";
import { TbWorld } from "react-icons/tb";
import { FaEuroSign } from "react-icons/fa";
import { FaUniversalAccess } from "react-icons/fa6";

const FooterDown = () => {
  return (
    <Container className="flex justify-between items-center lg:flex-row flex-col space-y-4">
      <div>@2024.All rights reserved</div>
      <div className="flex  items-center gap-4">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Contact</p>
        <p className="flex items-center gap-2">
          <TbWorld />
          EN
        </p>

        <p className="flex items-center gap-2">
          <FaEuroSign />
          EUR
        </p>
        <p>
          <FaUniversalAccess />
        </p>
      </div>
    </Container>
  );
};

export default FooterDown;
