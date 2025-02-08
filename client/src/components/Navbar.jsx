import { useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { Modal } from "../components";
import Auth from "../utils/auth";
import logo from "../assets/logo.png"; // Import the logo image

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [signIn, setSignIn] = useState(false);

    const handleOnClose = () => setSignIn(false);

    return (
        <nav className="w-fill flex justify-between items-center navbar z-[5] bg-black py-2 text-[rgba(207,181,59)] font-economica border-b-4 border-[#d2b947]">
            <Modal onClose={handleOnClose} visible={signIn} />

            {/* Navbar logo with the imported logo image */}
            <Link
                className={`font-skranji cursor-pointer text-[20px] text-white mr-10`}
                aria-current="page"
                to="/"
            >
                <img src={logo} alt="Lake View Cabana Paradise & Villa Logo" className="w-[250px] h-[100px] ml-4" />
            </Link>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[5]">
                <li>
                    <Link
                        className={`cursor-pointer text-[22px] text-[#d2b947] mr-12 hover:text-[#faf7ab] focus:text-[#faf7ab] hover:transition ease-in-out delay-150 duration-300`}
                        aria-current="page"
                        to="/Rooms"
                    >
                        Booking
                    </Link>
                </li>
                <li>
                    <Link
                        className={`cursor-pointer text-[22px] text-[#d2b947] mr-12 hover:text-[#faf7ab] focus:text-[#faf7ab] hover:transition ease-in-out delay-150 duration-300`}
                        aria-current="page"
                        to="/Food"
                    >
                        Food Menu
                    </Link>
                </li>
                <li>
                    <Link
                        className={`cursor-pointer text-[22px] text-[#d2b947] mr-12 hover:text-[#faf7ab] focus:text-[#faf7ab] hover:transition ease-in-out delay-150 duration-300`}
                        aria-current="page"
                        to="/nearby"
                    >
                        Nearby Attractions
                    </Link>
                </li>
                
                
                <li>
                    {Auth.loggedIn() ? (
                        <Link
                            onClick={Auth.logout}
                            className={`cursor-pointer text-[22px] text-[#d2b947] mr-12 hover:text-[#faf7ab] focus:text-[#faf7ab] hover:transition ease-in-out delay-150 duration-300`}
                            aria-current="page"
                        >
                            Logout
                        </Link>
                    ) : (
                        <Link
                            onClick={() => setSignIn(true)}
                            className={`cursor-pointer text-[22px] text-[#d2b947] mr-12 hover:text-[#faf7ab] focus:text-[#faf7ab] hover:transition ease-in-out delay-150 duration-300`}
                            aria-current="page"
                        >
                            Sign-In
                        </Link>
                    )}
                </li>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center mr-10">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />
                <div
                    className={`${
                        toggle ? "flex" : "hidden"
                    } p-6 bg-black-gradient absolute top-40 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        <li>
                            <Link
                                className={`cursor-pointer text-[20px] text-[rgba(207,181,59)] mr-10`}
                                aria-current="page"
                                to="/booking"
                            >
                                Booking
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`cursor-pointer text-[20px] text-[rgba(207,181,59)] mr-10`}
                                aria-current="page"
                                to="/foodMenu"
                            >
                                Food Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`cursor-pointer text-[20px] text-[rgba(207,181,59)] mr-10`}
                                aria-current="page"
                                to="/attractions"
                            >
                                Nearby Attractions
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`cursor-pointer text-[20px] text-[rgba(207,181,59)] mr-10`}
                                aria-current="page"
                                to="/transport"
                            >
                                Transport
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`cursor-pointer text-[20px] text-[rgba(207,181,59)] mr-10`}
                                aria-current="page"
                                to="/liveChat"
                            >
                                Live Chat
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;