import { useDispatch } from "react-redux";
import authServies from "../../appwrite/config";
import Logout from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authServies.logout().then(() => {});
    dispatch(Logout());
  };

  return (
    <button
      className="
   bg-blue-500
   hover:bg-blue-700
   text-white
   font-bold
   py-2
   px-4
   rounded-full
   inline-block
   duration-200
   
   ">
      Logout
    </button>
  );
};
export default LogoutBtn;
