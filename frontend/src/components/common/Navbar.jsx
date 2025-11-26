import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../../data/navbar-links"
import { matchPath,useLocation } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"
import ProfileDropdown from "../core/Auth/ProfileDropdown"


function Navbar() {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const { totalItems } = useSelector((state) => state.cart)
    const location = useLocation();
    const matchRoute = (route) =>{
        return matchPath({path:route} , location.pathname);
    }
  return (
    <div className='flex h-14 items-center justify-center border-b border-b-[#2C333F]'>
        <div  className="flex w-9/12 max-w-maxContent items-center justify-between">
           <Link to="/">
               <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
           </Link>

           {/* Navigation links */}
              <nav className="hidden md:block">
                <ul className="flex gap-x-6 text-[#DBDDEA]">
                  {
                    NavbarLinks.map( (link,index) => (
                        <li key={index}>
                            {
                                link.title === "Catalog" ? (<div></div>) : (
                                    <Link to={link?.path}>
                                        <p className={` ${matchRoute(link?.path)
                                          ? "text-[#FFE83D]"
                                          : "text-[#DBDDEA]"
                                        }`}>
                                            {link.title}
                                        </p>
                                    </Link>
                                )
                            }
                        </li>
                    ))
                }
                </ul>
              </nav>  

              {/* login/signup/dashboard */}
              <div className="hidden items-center gap-x-4 md:flex">
                   {user && user?.accountType != "Instructor" && (
                      <Link to="/dashboard/cart" className="relative">
                           <AiOutlineShoppingCart className="text-2xl text-[#AFB2BF]" />
                           {totalItems > 0 && (
                            <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-[#424854] text-center text-xs font-bold text-[#E7C009]">
                            {totalItems}
                            </span>
                            )}
                     </Link>
                    )}

                    {token === null && (
                       <Link to="/login">
                         <button className="rounded-lg border border-[#2C333F] bg-[#161D29] px-3 py-2 text-[#AFB2BF]">
                           Log in
                         </button>
                      </Link>
                    )}

                    {token === null && (
                       <Link to="/signUp">
                         <button className="rounded-lg border border-[#2C333F] bg-[#161D29] px-3 py-2 text-[#AFB2BF]">
                           Sign Up
                         </button>
                      </Link>
                    )}

                    {
                       token !== null && <ProfileDropdown />
                    }
              </div>
        </div>
    </div>
  );
}

export default Navbar