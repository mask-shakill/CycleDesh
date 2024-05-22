import { BsArrowRight } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";
import ProductCard from "./ProductCard";

const LetsShopping = () => {
  return (
    <div className="mx-16 mt-40">
      <h1 className="flex items-center gap-x-4 text-2xl font-bold text-[#ff733b]">
        <MdDoubleArrow /> Lets Go Shopping Our Other Products
      </h1>
      <div className="flex items-start justify-between mt-9">
        <p className="w-[45%]">
          We are one of the world's largest bicycle communities, offering a wide
          range of services including all types of repairs, personalized bike
          searches, sports event organization, and much more.
        </p>
        <button className="flex items-center gap-x-1 hover:underline hover:text-blue-600">
          More Collection
          <BsArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-3 mt-28 gap-x-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default LetsShopping;
