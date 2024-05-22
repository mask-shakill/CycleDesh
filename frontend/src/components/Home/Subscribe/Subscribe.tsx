import { BiRightArrow } from "react-icons/bi";
import imageSub from "../../../assets/subcribe.jpg";

const Subscribe = () => {
  return (
    <div className="mt-40 mx-10 relative">
      <img src={imageSub} className="rounded-[70px] h-[550px] w-full" alt="" />
      <h1 className="font-bold text-[80px] absolute top-0 left-9 text-[#ff733b]">
        Discover Your <br /> Favorite Bike
      </h1>
      <input
        type="text"
        className=" px-10 absolute bottom-[250px] w-[500px] h-[50px] rounded-full left-[40px]"
        name=""
        placeholder="Enter your email"
        id=""
      />
      <button className="bg-black absolute bottom-[255px] flex items-center justify-center p-2 gap-x-2 text-white rounded-full left-[390px] px-2">
        Subscribe Now <BiRightArrow />
      </button>
    </div>
  );
};

export default Subscribe;
