import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import { FaPlayCircle } from "react-icons/fa";
import logo from "../../assets/images/logo.jpg";
import { MdEmail } from "react-icons/md";
import bgImage from "../../assets/images/loginImage.jpg";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const { login, requestNotificationPermission } = useAppContext();

  const navigate = useNavigate();
  const handleLogin = () => {
    //login from API
    // const fakeToken = "sample_auth_token_123";
    // login(fakeToken);
    // toast.success("Login successful!");
    // requestNotificationPermission(); // Ask for push notifications
    navigate("/Dashboard");
  };

  return (
    <div>
      <div className="fixed flex flex-col md:flex-row w-full h-screen">
        {/* left side */}
        <div
          className="w-full md:w-[60%] h-1/2 md:h-full px-[1%] py-6 flex flex-col bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* right side */}
        <div className="flex flex-col items-center justify-center w-full h-1/2 px-6 py-4 overflow-y-auto bg-[#FFFEF6] md:w-2/5 md:h-full">
          <div className="w-4/6">
            {/* Heading */}
            <div className="mb-8 ">
              <h2 className="text-xl font-semibold md:text-2xl whitespace-nowrap">
                Enter the login credentials
              </h2>
            </div>

            {/* Form */}
            <form className="w-full space-y-4">
              {/* Email Input */}
              <div className="flex items-center w-full px-3 py-3 bg-gray-300 rounded-lg shadow-md gap-3">
                <MdEmail size={22} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent focus:outline-none"
                />
              </div>

              {/* Password Input */}
              <div className="flex items-center w-full px-3 py-3 bg-gray-300 rounded-lg shadow-md gap-3">
                <MdEmail size={22} />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent focus:outline-none"
                />
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="w-full px-8 py-2 text-lg font-semibold text-white rounded-full cursor-pointer bg-[#F9832B] hover:bg-[#0A2C38]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

//  <div>
//       {/* <h1>Login Page</h1>
//       <button onClick={handleLogin}>Login</button> */}
//       <div className="fixed flex w-full h-screen ">
//         {/* left side */}
//         <div className="w-1/2 h-full  bg-gradient-to-br from-[#ff7e5f] via-[#feb47b] to-[#fff5e1] px-[5%] ">
//           <div className="w-full h-1/4 ">
//             <img
//               src={logo}
//               alt="logo"
//               className="w-50 h-50 mix-blend-multiply"
//             />
//           </div>
//           <div className="w-full h-3/4 ">
//             <h1 className="text-[60px] font-bold  text-white">Welcome</h1>
//             <div>
//               <p className="w-3/4 mb-10">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Soluta, deleniti?Lorem ipsum dolor sit amet consectetur,
//                 adipisicing elit. Soluta, deleniti?
//               </p>
//               <div className="flex items-center gap-2 w-1/4 bg-white rounded-full px-4 py-2">
//                 <span className="text-base leading-none">Learn More</span>
//                 <FaPlayCircle size={25} className="text-lg cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* right side */}
//         <div className="w-1/2 h-full bg-gray-200 px-[5%] py-[3%]">
//           <div className="mb-10">
//             <h2 className="text-[25px] font-[600] mb-5">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             </h2>
//             <p className="font-medium text-gray-500">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
//               quidem vero impedit nam qui expedita maiores voluptas mollitia,
//               consequatur in! Lorem ipsum dolor, sit amet consectetur
//               adipisicing
//             </p>
//           </div>
//           <form action="#">
//             <div className="w-3/4 flex items-center gap-5 shadow-lg py-3 bg-gray-300 rounded-lg px-3 mb-5">
//               <MdEmail size={23} />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="focus:outline-none focus:ring-0"
//               />
//             </div>
//             <div className="w-3/4 flex items-center gap-5 shadow-lg py-3 bg-gray-300 rounded-lg px-3 mb-5">
//               <MdEmail size={23} />
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="focus:outline-none focus:ring-0"
//               />
//             </div>
//             <div className="w-3/4 flex items-center gap-5 shadow-lg py-3 bg-gray-300 rounded-lg px-3 mb-3">
//               <MdEmail size={23} />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="focus:outline-none focus:ring-0"
//               />
//             </div>
//             <div className="mb-5">
//               <input
//                 type="radio"
//                 name=""
//                 id=""
//                 className="border border-gray-700 "
//               />{" "}
//               I agree all the terms and conditions
//             </div>
//             <button className="font-semibold text-lg bg-[linear-gradient(120deg,red,orange,red)] text-white px-10 py-1 rounded-lg cursor-pointer">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
