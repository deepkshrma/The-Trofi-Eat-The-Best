import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

export default function Login() {
  const { login, requestNotificationPermission } = useAppContext();

  const handleLogin = () => {
    //login from API
    const fakeToken = "sample_auth_token_123";
    login(fakeToken);
    toast.success("Login successful!");
    requestNotificationPermission(); // Ask for push notifications
  };

  return (
    <div>
      {/* <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button> */}
      <div className="fixed flex w-full h-screen ">
        {/* left side */}
        <div className="w-1/2 h-full  bg-[linear-gradient(120deg,red,orange,#ffb3b3)]"></div>

        {/* right side */}
        <div className="w-1/2 h-full bg-gray-200"></div>
      </div>
      
    </div>
  );
}
