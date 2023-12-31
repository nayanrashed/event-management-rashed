import { Link, NavLink } from "react-router-dom";
import userDefPic from "../../../assets/user.png";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  console.log(user?.email);
  console.log(user?.photoURL);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink
          className="border bg-amber-400 text-black font-semibold"
          to="/getquote"
        >
          Get A Quote
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-amber-400 rounded-b-sm md:bg-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
        <Link to="/">
          <img className="w-24 md:w-36" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
      {/* {user?.photoURL && 
          <img className="rounded-full w-6 md:w-10" src={user?.photoURL} />} */}
        {user?.photoURL ? (
          <img className="rounded-full w-6 md:w-10" src={user?.photoURL} />
        ) : (
          user && <img className="rounded-full w-6 md:w-10" src={userDefPic} />
        )}
        {user && (
          <p className="hidden md:inline px-1 md:px-1 md:text-lg text-xs">{user?.email}</p>
        )}
        {user ? (
          <button onClick={handleSignOut} className="btn btn-sm md:btn-outline bg-gray-200">
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="btn btn-sm md:btn-outline bg-gray-200">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
