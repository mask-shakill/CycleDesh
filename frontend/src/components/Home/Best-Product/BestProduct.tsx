import { BsArrowRight } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";
import BestProductCard from "./BestProductCard";

const BestProduct = () => {
  return (
    <div className="mx-16 mt-28">
      <h1 className="flex items-center gap-x-4 text-2xl font-bold text-[#ff733b]">
        <MdDoubleArrow /> Best Cycles in 2024
      </h1>

      <div className="flex items-start justify-between mt-9 ">
        <p className="w-[45%]">
          Where your cycling journey begins! As avid cyclists not ourselves, we
          understand the joy and freedom that for a comes from pedaling
        </p>
        <button className="flex items-center gap-x-1 hover:underline hover:text-blue-600">
          More Collection
          <BsArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-x-5">
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
      </div>
    </div>
  );
};

export default BestProduct;
