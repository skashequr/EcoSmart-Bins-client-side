import { Link } from "react-router-dom";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchService } from "../Redux/ServiceSlice";

import ServiceFooter from "./ServiceFooter";

const Footer = () => {
  const dispatch = useDispatch();
  const { service: data } = useSelector((state) => state.services);
  useEffect(() => {
    dispatch(fetchService(6));
  }, [dispatch]);
  return (
    <div className="bg-green-950 text-white font-andika">
      <footer className="container mx-auto footer grid-cols-2 md:grid-cols-4 px-5 py-10">
        <nav className="">
          <img src="/logo.png" className="w-16 h-16 rounded-lg " alt="" />
          <p className="font-bold py-2">Eco Smart Bins</p>
          <p className="w-4/5 ">
            We recognize that the right service for home is most important
            choice.we provide the waste collection you need for your home with
            trusted service.
          </p>
        </nav>

        <nav>
          <header className="footer-title ">Company</header>
          <Link
            to={"/about"}
            className="group relative cursor-pointer inline-block"
          >
            About us
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-brand-color origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <Link to="/contact">
            <a className="group relative cursor-pointer inline-block">
              Contact
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-brand-color origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
          </Link>
          <Link
            to={"/services"}
            className="group relative cursor-pointer inline-block"
          >
            Services
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-brand-color origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <Link
            to={"/blogs"}
            className="group relative cursor-pointer inline-block"
          >
            Blogs
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-brand-color origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <h2 className="footer-title font-bold my-2">Working Hours</h2>
          <p>Mon - Fri: 9:00AM - 6:00PM</p>
          <p>Sat - Sun: 8:00AM - 4:00PM</p>
        </nav>

        <nav>
          <header className="footer-title">Services</header>

          {data?.map((service) => (
            <ServiceFooter key={service?._id} data={service} />
          ))}
        </nav>

        <nav className="">
          <header className="footer-title">Get In Touch</header>
          <a>
            <p className="flex items-center gap-2">
              <FaLocationDot className="text-brand-color text-xl"></FaLocationDot>{" "}
              New Park, NY 11040
            </p>
          </a>
          <a>
            <p className="flex items-center gap-2 my-2">
              <MdOutlineMail className="text-brand-color text-xl"></MdOutlineMail>{" "}
              EcoSmart@Bins.com
            </p>
          </a>
          <a>
            <p className="flex items-center gap-2">
              <FaPhone className="text-brand-color text-xl"></FaPhone> Phone:
              333 666 0000
            </p>
          </a>
          <h2 className="footer-title font-bold mt-8">Follow Us On</h2>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-sky-300"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-red-600"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://web.facebook.com/?_rdc=1&_rdr">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-blue-600"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <hr />
      <footer className="footer footer-center p-4">
        <aside>
          <p>Copyright © 2024 - All right reserved by Eco Smart Bins</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
