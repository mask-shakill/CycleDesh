import BestProduct from "../components/Home/Best-Product/BestProduct";
import HeroBanner from "../components/Home/HeroBanner";
import LetsShopping from "../components/Home/Lets-Go-Shopping/LetsShopping";
import Reliability from "../components/Home/Reliability";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Reliability />
      <BestProduct />
      <LetsShopping />
    </div>
  );
};

export default Home;
