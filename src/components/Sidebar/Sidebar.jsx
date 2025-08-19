import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.jpg";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { IoIosList } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { BsPersonFillGear } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import { MdPolicy } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa6";
import {
  Squares2X2Icon,
  CalendarIcon,
  ChevronDownIcon,
  UserIcon,
  TagIcon,
  TicketIcon,
  WalletIcon,
  Bars3Icon,
  XMarkIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

function Sidebar({ setIs_Toggle, isToggle }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const location = useLocation();
  const navigate = useNavigate();
  const userRole = "admin";
  const activePath = location.pathname;
  const filteredSidebarData = [
    {
      section: null,
      items: [
        {
          name: "Dashboard",
          icon: <Squares2X2Icon className="w-4" />,
          link: "/Dashboard",
          dropdown: false,
        },
      ],
      border: true,
    },
    ...(userRole === "admin" || userRole === "superadmin"
      ? [
          {
            section: "Feedback & Reviews Insights",
            items: [
              {
                name: "Admin Roles",
                icon: <Cog6ToothIcon className="w-4" />,
                dropdown: true,
                link: "#",
                subItems: [
                  { name: "Admin Role Setup", link: "/RoleUpdate" },
                  { name: "Roles", link: "/Roles" },
                ],
              },
              {
                name: "Admin List",
                icon: <IoIosList className="w-4" />,
                dropdown: false,
                link: "/admin_list",
              },
              {
                name: "Create Admin",
                icon: <IoMdPersonAdd className="w-4" />,
                dropdown: false,
                link: "/CreateAdmin",
              },
            ],
            border: true,
          },
        ]
      : []),
    {
      section: "User Activity & Demographics",
      items: [
        {
          name: "Main Categories",
          icon: <MdCategory className="w-4" />,
          dropdown: false,
          link: "/MainCategories",
        },
        {
          name: "Sub Categories",
          icon: <TbCategoryPlus className="w-4" />,
          dropdown: true,
          link: "#",
          subItems: [
            { name: "Add Categories", link: "/AddCategories" },
            { name: "Category List", link: "/Categories" },
          ],
        },
      ],
      border: true,
    },
    {
      section: "Restaurant & Dish Performance",
      items: [
        {
          name: "Provider",
          icon: <BsPersonFillGear className="w-4" />,
          dropdown: true,
          link: "#",
          subItems: [
            { name: "Provider List", link: "/ProviderList" },
            { name: "Pending Request", link: "/PendingRequest" },
          ],
        },
        {
          name: "User",
          icon: <FaCircleUser className="w-4" />,
          dropdown: true,
          link: "#",
          subItems: [{ name: "User List", link: "/CustomerList" }],
        },
      ],
      border: true,
    },
    {
      section: "Flags & Moderation",
      items: [
        {
          name: "Policies",
          icon: <MdPolicy className="w-4" />,
          dropdown: true,
          link: "#",
          subItems: [
            { name: "Policies List", link: "/PoliciesList" },
            { name: "Create Policies", link: "/CreatePolicies" },
          ],
        },
      ],
      border: true,
    },
    {
      section: "Check-ins & Engagement",
      items: [
        {
          name: "Banners",
          icon: <AiFillSound className="w-4" />,
          dropdown: true,
          link: "#",
          subItems: [
            { name: "Banner List", link: "/BannerList" },
            { name: "Create Banner", link: "/Createbanner" },
          ],
        },
      ],
      border: true,
    },
  ];

  const handleMainClick = (item) => {
    const newDropdown = openDropdown === item.name ? null : item.name;
    setOpenDropdown(newDropdown);
    localStorage.setItem("sidebar_open_dropdown", newDropdown || "");
  };

  useEffect(() => {
    //dropdown
    const savedDropdown = localStorage.getItem("sidebar_open_dropdown");
    if (savedDropdown) {
      setOpenDropdown(savedDropdown);
    }

    //subitems
    const savedActiveItem = localStorage.getItem("sidebar_active_item");
    if (savedActiveItem) {
      setActiveItem(savedActiveItem);
    }
  }, []);

  const handleSubClick = (link) => {
    setActiveItem(link);
    localStorage.setItem("sidebar_active_item", link);
  };

  const handleToggle = () => {
    setIs_Toggle(!isToggle);
  };
  return (
    <>
      <div className="flex">
        <div
          className={`sidebar bg-[#ffffff] h-[calc(100vh-56px)] fixed top-14 left-0 w-64
    transform transition-transform duration-500 ease-in-out z-9 
    ${isToggle ? "translate-x-0" : "-translate-x-full"} shadow-lg`}
        >
          {isToggle && (
            <FaCaretLeft
              size={25}
              onClick={handleToggle}
              className="scale-x-100 w-8 cursor-pointer  rounded text-white hover:text-[#0A2C38]  bg-[#F9832B] translate-x-[235px] mt-5 mb-3"
            />
          )}

          {/* Navigation */}
          <nav className="relative">
            <ul className="flex flex-col h-[82vh] overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
              {filteredSidebarData.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  {section.section && (
                    <span className="text-[12px] mx-4 text-[#F9832B] my-2">
                      {section.section}
                    </span>
                  )}
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`text-sm   mx-4 rounded-sm  leading-[100%] tracking-[0.3px] transition-colors duration-200 group relative`}
                    >
                      {item.dropdown ? (
                        <div
                          onClick={() => handleMainClick(item)}
                          className={`flex justify-between items-center pl-3 py-4 pr-3 rounded cursor-pointer  hover:bg-[#ffe0cc] text-gray-800`}
                        >
                          <div className="flex items-center gap-3 font-medium">
                            {item.icon}
                            {item.name}
                          </div>
                          <FaChevronDown
                            className={`w-2 transition-transform duration-200 ${
                              openDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      ) : (
                        <Link
                          to={item.link}
                          onClick={() => handleMainClick(item)}
                          className={`flex justify-between items-center pl-3 py-4 pr-3 rounded cursor-pointer hover:bg-[#ffe0cc] text-gray-800 
                              `}
                        >
                          <div className="flex items-center gap-3 font-medium">
                            {item.icon}
                            {item.name}
                          </div>
                        </Link>
                      )}

                      {item.dropdown &&
                        openDropdown === item.name &&
                        item.subItems && (
                          <ul className="ml-6 mt-2 flex flex-col gap-1 list-disc pl-6">
                            {item.subItems.map((subItem, subIndex) => (
                              <li
                                key={subIndex}
                                className={` font-medium  cursor-pointer rounded ${
                                  activePath === subItem.link
                                    ? "text-[#F9832B] font-semibold"
                                    : "text-black hover:text-[#F9832B]"
                                }`}
                                onClick={() => handleSubClick(subItem.link)}
                              >
                                <Link
                                  to={subItem.link}
                                  className="block px-3 py-4"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}
                  {section.border && (
                    <span className="flex my-2 border-t-1 border-gray-200"></span>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
