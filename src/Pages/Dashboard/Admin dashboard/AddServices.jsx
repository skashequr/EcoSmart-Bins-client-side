import { useForm } from "react-hook-form";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import useAxiosPrivate from "./../../../axios/axiosprivate";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { notifyFun } from "../../../fun/notifyFun";
import useAuth from "../../../Hooks/UseAuth";

const AddServices = () => {
  const { user } = useAuth();
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const Servicedata = {
      img: data.img,
      title: data.title,
      drescaption: data.drescaption,
    };
    axios
      .post("/services", Servicedata)
      .then(() => reset())
      .then(() => {
        notifyFun(user?.email, "You add a new service.");
        toast.success("New Service Added Successfully");
        navigate("/dashboard/manageServices");
      });
  };
  return (
    <div className="font-andika">
      <SectionTitle heading={"add new service"} />
      <div className="border max-w-xl lg:max-w-3xl rounded-xl  mx-auto p-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" rounded-xl space-y-4"
        >
          <input
            type="text"
            placeholder="Add Image(URL)"
            className="input input-bordered w-full"
            {...register("img", { required: true })}
          />
          <input
            type="text"
            placeholder="Add Title"
            className="input input-bordered w-full"
            {...register("title", { required: true })}
          />
          <textarea
            placeholder="Add Drescaption"
            className="input input-bordered w-full min-h-36"
            {...register("drescaption", { required: true })}
          ></textarea>
          <input
            type="submit"
            className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-500 lg:text-xl capitalize text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color w-full"
            value={"add service"}
          />
        </form>
      </div>
    </div>
  );
};

export default AddServices;
