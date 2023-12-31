import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-transparent-png.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useTheme from "../../hooks/useTheme";
const Navbar = () => {
  const {user, logoutUser} = useAuth()
  const {theme, setTheme} = useTheme()
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-orange-800" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-orange-800" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-orange-800" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  const handleLogout = ()=>{
    logoutUser()
    .then(()=>{
      toast.success("logged out")
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }
  return (
    <div className="absolute navbar z-[100]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <img className="w-20 md:w-24" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 px-1 text-white">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {
          user ? <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            
            <li><a>{user.displayName}</a></li>
            <li onClick={handleLogout}><a>Logout</a></li>
          </ul>
        </div> :  <Link to="/login" className="btn btn-sm border-none md:text-white md:bg-orange-800 md:btn hover:text-black">
          Login
        </Link>
        }
       
      </div>
      <div className="flex flex-col ml-4">
      <input onClick={()=> setTheme(!theme)} type="checkbox" className="toggle bg-orange-800"  />
      <span className="text-white text-xs">{theme ? "Dark" : "Light"}</span>
      </div>
    </div>
  );
};

export default Navbar;
 