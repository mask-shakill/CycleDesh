import { BiCart } from "react-icons/bi";
import cycleOne from "../../../assets/cycle_two.png";
const ProductCard = () => {
  return (
    <div>
      <div className="">
        <div className="bg-gray-100 py-8 rounded-lg">
          <img src={cycleOne} className="w-[350px] h-[200px] " alt="" />
        </div>
        <div>
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
          <div className="flex items-center justify-between mt-8 text-2xl font-semibold">
            <h1>Gear BiCycle 213ds </h1>
            <p>$634.00</p>
          </div>

          <p className="mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            autem nemo corporis dicta.
          </p>
          <button className="flex w-full border border-black rounded-full items-center justify-center p-2 mt-6 font-semibold  hover:bg-black hover:text-white">
            Add to cart <BiCart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
