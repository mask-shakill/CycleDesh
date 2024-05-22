import { BiCart } from "react-icons/bi";
import cycleOne from "../../../assets/cycle_one.png";
const ProductCard = () => {
  return (
    <div>
      <div className="">
        <div>
          <img src={cycleOne} className="w-[350px] h-[200px] " alt="" />
        </div>
        <div>
          <div></div>
          <div className="flex items-center justify-between">
            <h1>Gear BiCycle 213ds </h1>
            <p>$634.00</p>
          </div>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            autem nemo corporis dicta.
          </p>
          <button className="flex w-full border border-black rounded-full items-center justify-center p-2 hover:bg-black hover:text-white">
            Add to cart <BiCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
