import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaRegCalendarAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="footer-section"
      className="bg-black text-white font-poppins pt-10 "
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <p className="font-economica text-[32px] pb-2 text-[rgba(207,181,59)] ">
            Lake View Cabana Paradise & Villa
          </p>
        </div>
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[250px] h-[100px] items-center pb-2"
          />
        </div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[5]">
          <li>
            <Link
              className={` cursor-pointer text-[18px] text-[rgba(207,181,59)] mr-10 hover:text-[#faf7ab] focus:text-[#faf7ab] 
                            hover:transition ease-in-out delay-150  duration-300`}
              aria-current="page"
              to="/Rooms"
            >
              Booking
            </Link>
          </li>

          <li>
            <Link
              className={` cursor-pointer text-[18px] text-[rgba(207,181,59)]  mr-10 hover:text-[#faf7ab] focus:text-[#faf7ab] 
              hover:transition ease-in-out delay-150  duration-300`}
              aria-current="page"
              to="/Food"
            >
              Food Menu
            </Link>
          </li>
          <li>
            <Link
              className={` cursor-pointer text-[18px] text-[rgba(207,181,59)]  mr-10 hover:text-[#faf7ab] focus:text-[#faf7ab] 
              hover:transition ease-in-out delay-150  duration-300`}
              aria-current="page"
              to="/spa2"
            >
              Nearby Attractions
            </Link>
          </li>
          
        </ul>
      </div>
      <div>
        <div className="flex justify-center py-10 text-center text-[rgba(207,181,59)]">
          <div className="flex flex-col items-center gap-6 text-[40px]">
            {" "}
            {/* Centered icons and adjusted size */}
            <div className="flex gap-8">
              <a
                href="https://www.booking.com/hotel/lk/lake-view-cabana-restaurant.html"
                className="text-[#0073bb] hover:text-[#005f8a]"
                title="Booking.com"
              >
                <FaRegCalendarAlt />
              </a>
              <a
                href="https://www.facebook.com"
                className="text-[#3b5998] hover:text-[#2d4373]"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-[#e1306c] hover:text-[#9c1b4b]"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com"
                className="text-[#FF0000] hover:text-[#c4302b]"
                title="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="mt-4 text-center">
              {" "}
              {/* Copyright near icons */}
              <p className="text-[18px]">
                © 2025 Lake View Cabana. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
