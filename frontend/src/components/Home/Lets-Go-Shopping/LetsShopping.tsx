import { BsArrowRight } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";
import ProductCard from "./ProductCard";

const LetsShopping = () => {
  return (
    <div className="mx-16 mt-28">
      <h1 className="flex items-center gap-x-4 text-2xl font-bold text-[#ff733b]">
        <MdDoubleArrow /> Lets Go Shopping Our Products
      </h1>
      <div className="flex items-start justify-between mt-9">
        <p className="w-[45%]">
          We are one of the biggest bicycle-families in the world. Our services
          include all types of repair, search of a perfect bike for every
          customer, sport events organization and much more
        </p>
        <button className="flex items-center gap-x-1 hover:underline hover:text-blue-600">
          More Collection
          <BsArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-3">
        <ProductCard />
      </div>
    </div>
  );
};

export default LetsShopping;
