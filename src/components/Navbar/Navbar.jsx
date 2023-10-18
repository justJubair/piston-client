import { NavLink } from "react-router-dom"
import logo from "../../assets/logo-transparent-png.png"


const Navbar = () => {
    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addProduct">Add Product</NavLink></li>
    <li><NavLink to="/myCart">My Cart</NavLink></li>
    </>

  return (
    <div className="absolute navbar z-[100]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    
        <img className="w-20 md:w-24" src={logo} alt="" />
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-sm border-none md:text-white md:bg-orange-800 md:btn">Login</a>
  </div>
</div>
  )
}

export default Navbar
 