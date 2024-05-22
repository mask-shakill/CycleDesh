import { BiCart } from "react-icons/bi";
import cycleOne from "../../../assets/cycle_one.png";
const BestProductCard = () => {
  return (
    <div className="mt-16">
      <div className="w-[400px]  p-2  group ">
        <div className="bg-[#f0f0f0] py-10 rounded relative  ">
          <button className="w-1/2 rounded-lg p-2 hidden group-hover:flex absolute top-3 right-2 gap-x-1 bg-[#ff899a] text-white  items-center justify-center transition-all">
            Add to Cart <BiCart className="text-xl" />
          </button>
          <img src={cycleOne} className="w-[350px] h-[200px]" alt="" />
        </div>

        <div className="mt-8 flex items-center gap-x-5">
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-500"
              checked
            />
          </div>

          <p>1 Reviews</p>
        </div>

        {/* brand */}
        <p className="mt-3">
          brand: <span className="font-semibold">Artionas</span>
        </p>
        {/* name price  */}
        <div className="flex items-center justify-between mt-6">
          <h1 className="font-semibold text-xl ">Gear Long 24d5</h1>
          <p className="font-semibold text-xl">$129.00</p>
        </div>
      </div>
    </div>
  );
};

export default BestProductCard;
