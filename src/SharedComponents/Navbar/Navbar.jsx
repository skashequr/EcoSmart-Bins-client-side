import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import { Badge } from "@material-tailwind/react";
import useAuth from "../../Hooks/UseAuth";
import { toast } from "react-hot-toast";
import {
  FaAngleDown,
  FaAngleUp,
  FaRegBell,
  FaRegUser,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchService } from "../../Redux/ServiceSlice";
import ServiceNavbar from "./ServiceNavbar";
import Btn from "../../Components/Btn";
import { io } from "socket.io-client";
import { axiosPrivate } from "../../axios/axiosprivate";
import getIndustriesApi from "../../API/IndustriesApi/getIndustriesApi";
import IndustriesNavbar from "./IndustriesNavbar";
import { MdManageAccounts } from "react-icons/md";

const Navbar = () => {
  const [notification, setNotification] = useState([]);
  const [loading, setloading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();
  const { service: data } = useSelector((state) => state.services);
  const [industry] = getIndustriesApi();
  useEffect(() => {
    dispatch(fetchService(6));
  }, [dispatch]);
  const location = useLocation();
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  //console.log(cart.length)
  useEffect(() => {
    try {
      if (!user) {
        setNotification([]);
        setloading(false);
        return;
      }

      const socket = io(axiosPrivate.defaults.baseURL).connect();

      socket.emit("notification", { email: user.email });

      socket.on("receive-notification", (data) => {
        setNotification(data);
        setloading(false);
      });

      return () => {
        socket.disconnect();
      };
    } catch (error) {
      console.error("Socket setup error:", error);
    }
  }, [user]);

  const handleLogOut = async () => {
    try {
      logOut();
      toast.success("Log Out Successfully!!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const togglePagesDropdown = () => {
    setPagesDropdownOpen(!pagesDropdownOpen);
  };

  const navLinks = (
    <>
      {/* Home */}
      <li className="text-lg hover:text-brand-color font-semibold">
        {" "}
        <NavLink to={"/"}>Home </NavLink>
      </li>

      {/* Services Dropdown */}
      <div className="dropdown ">
        <div
          tabIndex={0}
          role="button"
          className="lg:text-lg px-2 py-1 lg:px-0 lg:py-0 text-sm hover:text-brand-color font-semibold flex justify-center items-center"
          onClick={toggleServicesDropdown}
        >
          <p>Services</p>{" "}
          {servicesDropdownOpen ? (
            <FaAngleUp className="mt-1" />
          ) : (
            <FaAngleDown className="mt-1" />
          )}
        </div>
        <ul
          className={`dropdown-content lg:mt-10 ml-28 lg:ml-0 z-[1] menu p-2 bg-opacity-90 shadow bg-blue-950 rounded-md lg:w-[575px] w-40 overflow-hidden ${
            servicesDropdownOpen ? "block" : "hidden"
          }`}
        >
          <div className="lg:flex ">
            <div className="lg:border-r-2 lg:pr-10 border-slate-400">
              <motion.li
                whileHover={{ scale: 1.1, originX: 0, color: "#3A9E1E" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="font-semibold text-white  "
              >
                <div className="">
                  <Link
                    className="border-b rounded-none border-slate-400 "
                    to={"/services"}
                  >
                    All Services
                  </Link>
                </div>
              </motion.li>
              {data?.map((service) => (
                <ServiceNavbar key={service?._id} data={service} />
              ))}
            </div>
            <div className="lg:pl-10">
              <motion.li
                whileHover={{ scale: 1.1, originX: 0, color: "#3A9E1E" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="font-semibold text-white   overflow-hidden"
              >
                <div className="">
                  <p className="border-b-4 border-slate-400"></p>
                  <Link
                    className="border-b rounded-none border-slate-400 "
                    to={"/industries"}
                  >
                    All Industries
                  </Link>
                </div>
              </motion.li>
              {industry?.map((item) => (
                <IndustriesNavbar key={item?._id} industry={item} />
              ))}
            </div>
          </div>
        </ul>
      </div>
      {/* PickUp Request */}
      <li className="text-lg hover:text-brand-color font-semibold">
        {" "}
        <NavLink to={"/pickUpReq"}>PickUp Request</NavLink>
      </li>
      {/* Shop */}
      <li className="text-lg hover:text-brand-color font-semibold">
        {" "}
        <NavLink to={"/shop"}>Shop</NavLink>
      </li>
      {/* Pages Dropdown */}
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="lg:text-lg text-sm px-2 py-1 lg:px-0 lg:py-0 lg:btn-neutral hover:text-brand-color font-semibold flex justify-center items-center "
          onClick={togglePagesDropdown}
        >
          <p>Company</p>{" "}
          {pagesDropdownOpen ? (
            <FaAngleUp className="mt-1" />
          ) : (
            <FaAngleDown className="mt-1" />
          )}
        </div>
        <ul
          className={`dropdown-content lg:mt-10 ml-28 lg:ml-0 z-[1] menu p-2 shadow bg-blue-950 bg-opacity-90 rounded-md w-40 lg:w-60 py-3 overflow-hidden ${
            pagesDropdownOpen ? "block" : "hidden"
          }`}
        >
          <motion.li
            whileHover={{ scale: 1.1, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white  "
          >
            {" "}
            <Link
              className="border-b py-3 rounded-none border-slate-400"
              to={"/about"}
            >
              About Us
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="font-semibold text-white  "
          >
            {" "}
            <Link
              className="border-b py-3 rounded-none border-slate-400"
              to={"/team"}
            >
              Team
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white"
          >
            {" "}
            <Link
              className="border-b py-3 rounded-none border-slate-400"
              to={"/contact"}
            >
              Contact Us
            </Link>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white "
          >
            {" "}
            <Link
              className="border-b py-3 rounded-none border-slate-400"
              to={"/blogs"}
            >
              Blog
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white "
          >
            {" "}
            <Link
              to={"/career"}
              className=" py-3 rounded-none border-slate-400 "
            >
              Career
            </Link>
          </motion.li>
        </ul>
      </div>

      {/* PickUp Request */}
      <li className="text-lg hover:text-brand-color font-semibold">
        {" "}
        <NavLink to={"/priceTable"}>Packages</NavLink>
      </li>
      {/* PickUp Request */}
    </>
  );
  return (
    <div className="">
      {/* Top Bar */}
      <div className="bg-green-900">
        <div className="container mx-auto flex lg:min-h-16 relative min-h-12 px-5 lg:px-10 xl:px-0 lg:py-5 p-2 justify-between text-white">
          <div>
            <p className="flex items-center gap-2">
              <FaPhone className=" text-lg"></FaPhone> Phone: 333 666 0000
            </p>
          </div>
          <div className=" flex gap-5 lg:gap-10 ">
            <Link to="my-cart">
              <button>
                <Badge content={cart?.length} className="lg:w-5 w-3 ml-3">
                  <FaShoppingCart className="md:text-2xl text-2xl" />
                </Badge>
              </button>
            </Link>
            <button onClick={() => setShowNotification(!showNotification)}>
              <Badge
                content={
                  notification?.length > 10 ? "10+" : notification?.length
                }
                className="lg:w-5 w-3 ml-3"
              >
                <FaRegBell className="md:text-2xl text-2xl" />
              </Badge>
            </button>
          </div>
          {!loading && showNotification && (
            <div className="absolute p-6 bg-[#0e1d40] capitalize text-lg font-bold overflow-y-scroll top-20 sm:right-10 mx-4 right-0 z-30 rounded-xl border-2 outline-brand-color outline lg:w-80 h-96">
              {notification?.length ? (
                notification?.map((item) => (
                  <div
                    key={item?._id}
                    className="last:border-none py-4 border-b"
                  >
                    <p>{item?.massage}</p>
                    <span className="text-sm text-gray-400">
                      {new Date(item?.date).toLocaleDateString()}
                    </span>
                  </div>
                ))
              ) : (
                <div className="flex h-full items-center justify-center">
                  no data
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navbar */}
      <div className="sticky border-b-2 border bg-white bg-opacity-90 top-0 z-20 font-andika">
        <div className="navbar lg:px-10 xl:px-0 lg:py-7 drop-shadow-md container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul className="bg-white bg-opacity-90 menu-sm dropdown-content mt-3 z-[2] p-2 shadow space-y-2 rounded-box w-52">
                {navLinks}
              </ul>
            </div>

            <div className="flex items-center">
            <img src="/logo.png" className="w-20 h-20 rounded-lg " alt="" />
            <Link to={"/"} className="text-lg lg:text-2xl font-bold">
              <div><span className=" text-brand-color">Eco</span>SmartBin</div>
            </Link>
            </div>
            
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" flex gap-5 ">{navLinks}</ul>
          </div>

          {user ? (
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className=" rounded-full">
                    <img
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : "https://i.ibb.co/8X8stTp/user.webp"
                      }
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow bg-blue-950 bg-opacity-80 rounded-md w-40 h-48 mt-7 md:w-64 text-white font-bold"
                >
                  {user && (
                    <motion.li
                      whileHover={{ scale: 1.2, originX: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-white p-2"
                    >
                      <NavLink to={"/dashboard/overview"}>
                        Manage My Account{" "}
                        <span className="text-2xl">
                          <MdManageAccounts />
                        </span>
                      </NavLink>
                    </motion.li>
                  )}
                  <span className="border border-slate-400"></span>
                  <motion.li
                    whileHover={{ scale: 1.2, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white p-2"
                  >
                    <Link to={"/profile"}>
                      View My Profile <FaRegUser />
                    </Link>
                  </motion.li>
                  <span className="border border-slate-400"></span>

                  <motion.li
                    whileHover={{ scale: 1.2, originX: 0, color: "#f54242" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white p-2 text-lg"
                  >
                    {" "}
                    <button onClick={handleLogOut}>
                      Logout <FaSignOutAlt></FaSignOutAlt>
                    </button>
                  </motion.li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="navbar-end capitalize">
              {location.pathname === "/login" ? (
                <Link to={"/register"}>
                  <Btn>register</Btn>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <Btn>login</Btn>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
