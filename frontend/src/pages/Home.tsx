import BestProduct from "../components/Home/Best-Product/BestProduct";
import ElectricBanner from "../components/Home/Electric-Cycle-Banner/ElectricBanner";
import HeroBanner from "../components/Home/HeroBanner";
import LetsShopping from "../components/Home/Lets-Go-Shopping/LetsShopping";
import ProductCategories from "../components/Home/Product-Categories/ProductCategories";
import Reliability from "../components/Home/Reliability";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Reliability />
      <BestProduct />
      <ElectricBanner />
      <ProductCategories />
      <LetsShopping />
    </div>
  );
};

export default Home;
