
import { motion } from 'framer-motion';
import icon1 from "../../assets/images/5065663-200.png"
import icon2 from "../../assets/images/icon.png"
import img2 from "../../assets/images/service1.jpg";
import animation from "./chooseUs.json"
import Lottie from "lottie-react";

const ChoseUs = () => {
  return (
    <div className=" font-andika" >
      <div className="max-w-7xl mx-auto xl:px-0 px-5  my-12 lg:flex justify-start items-center gap-12 ">

        {/* image section */}
        <div className=" lg:w-1/2 ">
          <div className="lg:w-5/6"><img src={img2} alt="" className="rounded-xl" /></div>
          <div className=" lg:-mt-40 lg:ml-72 w-2/3 lg:w-fit -mt-16 "><Lottie className=" mx-auto" animationData={animation} loop={true} /></div>
        </div>

        {/*content section  */}
        <div className="flex-[1]">
          <h5 className="text-2xl text-green-600 font-bold">Why Choose Us</h5>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-black py-6">
            Why choose our EcoSmart Bins services
          </h1>
          <p className="text-black">
            Choose our EcoSmart Bins services for a cutting-edge and sustainable
            approach to waste management. Our innovative solutions are designed to
            revolutionize the way you handle waste, providing efficiency,
            cost-effectiveness, and environmental responsibility.
          </p>

          {/* card sections */}
          <div className="">
            <div className="p-3 my-5 ">

              <motion.img src={icon1} alt=""
                className="w-20 "
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <div>
              <h5 className="font-bold text-xl  my-3 text-brand-color">Optimized Collection</h5>
              <p>
                Our sensor-equipped bins communicate real-time data, allowing for
                the creation of optimized collection routes. This leads to fuel
                and time savings, contributing to a more sustainable waste
                management process.
              </p>
              </div>
            </div>
            <div className="p-3 my-5 ">
              <motion.img src={icon2} alt=""
                className="w-20"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <h5 className="font-bold text-xl  my-3 text-brand-color">Cost Savings</h5>
              <p>
                By efficiently managing waste collection schedules based on actual
                fill levels, you can significantly reduce operational costs
                associated with unnecessary pickups and transportation.
              </p>
            </div>
          </div>
        </div>

      </div>
     
    </div>
  );
};

export default ChoseUs;
