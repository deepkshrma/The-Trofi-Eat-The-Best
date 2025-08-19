import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.jpg";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { IoIosList, IoMdPersonAdd } from "react-icons/io";
import { MdCategory, MdPolicy } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { BsPersonFillGear } from "react-icons/bs";
import { FaCircleUser, FaChevronDown } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import {
  Squares2X2Icon,
  CalendarIcon,
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
          link: "/dashboard",
          dropdown: false,
        },
      ],
      border: true,
    },
    ...(userRole === "admin" || userRole === "superadmin"
      ? [
          {
            section: "Admin Management",
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
      section: "Category Management",
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
      section: "User Management",
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
      section: "Report Management",
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
      section: "Promotion Management",
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
    {
      section: "Booking Management",
      items: [
        {
          name: "Booking",
          icon: <CalendarIcon className="w-4" />,
          dropdown: true,
          link: "#",
          subItems: [{ name: "Booking Requests", link: "/BookingRequest" }],
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
    const savedDropdown = localStorage.getItem("sidebar_open_dropdown");
    if (savedDropdown) {
      setOpenDropdown(savedDropdown);
    }
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
    <div
      className={`sidebar bg-white h-screen fixed left-0 top-0 w-64 shadow-lg
        transform transition-transform duration-500 ease-in-out z-20
        ${isToggle ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Logo + Close */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
        <img src={logo} alt="Logo" className="w-[110px]" />
        {isToggle && (
          <HiX
            size={20}
            onClick={handleToggle}
            className="text-gray-500 cursor-pointer hover:text-[#F9832B] transition"
          />
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-2">
        <ul className="flex flex-col h-[82vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#F9832B] scrollbar-track-gray-100 px-2">
          {filteredSidebarData.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              {section.section && (
                <span className="text-[11px] font-Montserrat uppercase tracking-[1px] mx-3 text-[#9C9C9C] my-3">
                  {section.section}
                </span>
              )}
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-1">
                  {item.dropdown ? (
                    <div
                      onClick={() => handleMainClick(item)}
                      className="flex justify-between items-center pl-3 py-3 pr-3 rounded-lg cursor-pointer hover:bg-[#FFF3EB] text-gray-700 transition-all"
                    >
                      <div className="flex items-center gap-3 font-Montserrat text-[14px]">
                        {item.icon}
                        {item.name}
                      </div>
                      <FaChevronDown
                        className={`w-3 transition-transform duration-200 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={() => handleMainClick(item)}
                      className={`flex items-center gap-3 pl-3 pr-3 py-3 rounded-lg font-Montserrat text-[14px] transition-all
                        ${
                          activePath === item.link
                            ? "bg-[#F9832B] text-white font-semibold"
                            : "text-gray-700 hover:bg-[#FFF3EB]"
                        }`}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  )}

                  {/* Submenu */}
                  {item.dropdown &&
                    openDropdown === item.name &&
                    item.subItems && (
                      <ul className="ml-6 mt-1 flex flex-col gap-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.link}
                              onClick={() => handleSubClick(subItem.link)}
                              className={`block px-3 py-2 rounded-md text-sm font-Montserrat transition-all
                                ${
                                  activePath === subItem.link
                                    ? "text-[#F9832B] font-semibold"
                                    : "text-gray-600 hover:text-[#F9832B]"
                                }`}
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
                <span className="flex my-2 border-t border-gray-200"></span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
