import { BsArrowRight } from "react-icons/bs";
import electricBanner from "../../../assets/bike_banner.png";
const ElectricBanner = () => {
  return (
    <div className="bg-[#ff733b] w-full h-[410px] mt-44 relative">
      <img
        className="absolute top-0 left-6 w-[60%] animate-left-right_electric_banner_img"
        src={electricBanner}
        alt=""
      />

      <p className="text-black font-semibold text-3xl w-[40%] absolute right-0 top-28 uppercase ">
        <span className="text-white">Akij Cycle</span> revolutionized electric
        scooters and is now bringing the same innovation to electric{" "}
        <span className="text-white">bikes.</span>
      </p>

      <button className="absolute bottom-24 right-[390px] flex items-center gap-x-3 font-semibold text-xl">
        Learn More <BsArrowRight className="text-xl font-bold" />
      </button>
    </div>
  );
};

export default ElectricBanner;
