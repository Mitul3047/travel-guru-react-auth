import { NavLink } from "react-router-dom";
import logo from "../../../public/images/logo.png"

const NavBar = () => {

    const navlinks = <div className="space-x-5 text-white flex items-center font-medium justify-center">
        <li><NavLink to={'/news'}>News</NavLink></li>
        <li><NavLink to={'/destination'}>Destination</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li><NavLink className={"bg-[#F9A51A] rounded text-black "} to={'/login'}>Login</NavLink></li>
    </div>



    return (
        <div className="navbar bg-base-100 bg-transparent">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost"><img className="w-28 invert" src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <input type="text" placeholder="Search your Destination..." className="input input-bordered w-[370px] mr-11 text-white bg-white bg-opacity-20" />
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>

        </div>
    );
};

export default NavBar;