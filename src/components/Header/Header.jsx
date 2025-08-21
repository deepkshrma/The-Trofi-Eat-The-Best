import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import profilePhoto from "../../assets/images/loginImage.jpg";
import { FaChevronDown } from "react-icons/fa";
import headerlogo from "/favicon.png";
import { GoBellFill } from "react-icons/go";

function Header({ setIs_Toggle, isToggle }) {
  const [userDropdown, setUserDropdown] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleUserDropdown = () => {
    // setUserDropdown(!userDropdown);
    if (isAnimating) return;

    setIsAnimating(true);
    setUserDropdown((prev) => !prev);

    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleToggle = () => {
    setIs_Toggle(!isToggle);
  };
  return (
    <>
      <div className="header header_top_menu fixed top-0 left-0 z-10 flex w-full py-1 items-center justify-between bg-[#F9832B] pl-12 pr-6 shadow-sm rounded-bl-full rounded-br-full">
        <span className="flex gap-5 items-center">
          {isToggle ? (
            "" // <HiMenu size={18} onClick={handleToggle} />
          ) : (
            // <HiX size={18} onClick={handleToggle} />
            <HiMenu
              size={25}
              onClick={handleToggle}
              className="scale-x-100 w-8 cursor-pointer  rounded text-[#F9832B] hover:text-[#0A2C38]  bg-white"
            />
          )}
          <div>
            <img src={headerlogo} alt="" />
          </div>
        </span>

        <div className="flex justify-end">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3 cursor-pointer px-3 py-1 rounded-[8px]">
              <div className="relative">
                {/* Notification Count */}
                <div
                  className="flex justify-center items-center w-[15px] h-[15px] 
                  bg-red-500 absolute right-0 rounded-xl 
                  text-white text-[11px] z-10"
                >
                  9
                </div>

                {/* Bell with hover effect */}
                <GoBellFill
                  className="w-7 h-7 text-blue-500 
               transition-transform duration-200 
               hover:scale-110 hover:rotate-6 hover:drop-shadow-lg"
                />
              </div>

              <div className="rounded-full bg-[#D8D8D8] overflow-hidden">
                <img
                  src={profilePhoto}
                  className="w-11 h-11 object-cover"
                  alt="profile_pic"
                />
              </div>
              <div>
                <p className="text-[14px] font-Montserrat font-[500] text-white">
                  Admin
                </p>
                {/* <p className="text-[12px] font-Montserrat font-[400] text-[#9C9C9C]">
                  {roleName}
                </p> */}
              </div>
              <div
                className="w-5 h-5 rounded-full  bg-white flex items-center justify-center transition-all duration-300 ease-out"
                onClick={handleUserDropdown}
              >
                <span>
                  <FaChevronDown
                    className={`${
                      !userDropdown && "rotate-180"
                    } text-[#F9832B] hover:text-[#0A2C38]  bg-white`}
                    size={9}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12"></div>
    </>
  );
}

export default Header;
