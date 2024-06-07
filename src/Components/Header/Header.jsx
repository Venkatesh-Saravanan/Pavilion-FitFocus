import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../../Styles/Header.css';
import UseAuth from "../../Hook/useAuth";

import { FcInvite } from "react-icons/fc";
const Header = () => {
  const { user, logOut } = UseAuth();
  const navigate = useNavigate();

  return (
    <div className="shadow-2xl w-full font-Rilway container mx-auto  ">
{/* upper navbar */}
     


      <div className="m-0 p-0 shadow-2xl z-10 ">
        <Navbar fluid rounded>
          <Navbar.Brand href="#">
            <img src="https://i.ibb.co/zXvSWPK/logo-removebg-preview.png" className="w-15 mr-3 lg:ml-10 h-15 sm:h-9" alt="PlateswapLogo" />
            <span className="self-center uppercase whitespace-nowrap text-2xl font-semibold dark:text-white italic">FitFocus</span>
          </Navbar.Brand>
          <div className="flex md:order-2 ">
            {user ? (
              <Dropdown arrowIcon={false} inline label={<Avatar img={user.photoURL} rounded className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />}>

                <Dropdown.Header>
                  <span className="block text-sm">{user.displayName}</span>
                  <span className="block truncate text-sm font-medium">{user.email}</span>
                </Dropdown.Header>
                <Dropdown.Item className="">
                  <Link to={`/MyFoods/${user.email}`} className=" " href="#" activeClassName="active">
                    <div className="flex items-center gap-1 justify-center">
                      <span></span>
                    </div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to={`/MyFoodsRequest/${user.email}`} className="" href="#" activeClassName="active">
                    <div className="flex items-center gap-1 justify-center">
                      <span></span>
                    </div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => {
                  logOut();
                  navigate("/");
                }}>Sign out</Dropdown.Item>
              </Dropdown>
            ) : (

              <Link to="/login">
                <button className="align-middle mr-3 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#2F7955] border border-[#3aaf01] text-[#fff] hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]" type="button">
                  Sign In
                </button>
              </Link>
            )

            }

            <Navbar.Toggle />
          </div>

      {/* navbar     */}
          <Navbar.Collapse className="">
            <NavLink to="/" className="font-normal text-base" href="#" activeClassName="active">
              <div className="flex items-center  justify-center">
                <span>Home</span>
              </div>
            </NavLink>
            <div className="border-r-2"></div>

            <NavLink to="/trainers" className="font-normal text-base" href="#" activeClassName="active">
              <div className="flex items-center gap-1 justify-center">
               
                <span>All Trainer Page</span>
              </div>
            </NavLink>
            <div className="border-r-2"></div>
            <NavLink to="/allclass" className="font-normal text-base" href="#" activeClassName="active">
              <div className="flex items-center gap-1 justify-center">
               
                <span>All Classes page</span>
              </div>
            </NavLink>

            {/* conditional navbar */}
            <div className="border-r-2"></div>
            <NavLink to="/AvailableFoods" className="font-normal text-base" href="#" activeClassName="active">
              <div className="flex items-center gap-1 justify-center">
               
                <span>Community</span>
              </div>
            </NavLink>

            {/* conditional navbar */}
            <div className="border-r-2"></div>
            {user &&
              <>
                <NavLink to="/deshboard" className="font-normal text-base" href="#" activeClassName="active">
                  <div className="flex items-center gap-1 justify-center">
                    
                    <span>deshboard</span>
                  </div>
                </NavLink>
                <div className="border-r-2"></div>
                <NavLink to={`/MyFoods/${user.email}`} className="font-normal text-base" href="#" activeClassName="active">
                  <div className="flex items-center gap-1 justify-center">
                   
                    <span></span>
                  </div>
                </NavLink>
                <div className="border-r-2"></div>
                <NavLink to={`/MyFoodsRequest/${user.email}`} className="font-normal text-base" href="#" activeClassName="active">
                  <div className="flex items-center gap-1 justify-center">
                    <FcInvite />
                    <span> </span>
                  </div>
                </NavLink>
                <div className="border-r-2"></div>


              </>

            }
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;