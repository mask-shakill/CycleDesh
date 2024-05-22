import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.css"; // Import CSS for AOS

const Reliability = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    }); // Initialize AOS
  }, []);

  return (
    <div className="mx-16 mt-48 mb-40">
      <div className="grid grid-cols-4 gap-3">
        <div
          data-aos="fade-right"
          className="shadow-lg border rounded-lg hover:shadow-xl hover:shadow-orange-500 p-3 flex gap-x-3 w-[300px] items-center"
        >
          <img
            className="w-20 h-20"
            src="https://cdn-icons-png.freepik.com/256/12964/12964181.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais_hybrid"
            alt=""
          />
          <div>
            <h1 className="text-xl font-semibold">Fast Delivery</h1>
            <p className="">Fast and reliable delivery service.</p>
          </div>
        </div>

        {/* 2 */}
        <div
          data-aos="fade-left"
          className="shadow-lg border rounded-lg p-3 flex gap-x-3 w-[300px] items-center hover:shadow-xl hover:shadow-blue-500"
        >
          <img
            className="w-20 h-20"
            src="https://cdn-icons-png.freepik.com/256/12043/12043522.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais_hybrid"
            alt=""
          />
          <div>
            <h1 className="text-xl font-semibold">Quality Guaranteed</h1>
            <p className="">Authentic, high-quality merchandise guaranteed.</p>
          </div>
        </div>
        {/* 3 */}
        <div
          data-aos="fade-down"
          className="shadow-lg border rounded-lg p-3 flex gap-x-3 w-[300px] items-center hover:shadow-xl hover:shadow-teal-500"
        >
          <img
            className="w-20 h-20"
            src="https://cdn-icons-png.freepik.com/256/4961/4961759.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais_hybrid"
            alt=""
          />
          <div>
            <h1 className="text-xl font-semibold">24X7 Support</h1>
            <p className="">Round-the-clock assistance available.</p>
          </div>
        </div>
        {/* 4 */}
        <div
          data-aos="fade-up"
          className="shadow-lg border  p-3 flex gap-x-3 w-[300px] items-center hover:shadow-xl hover:shadow-pink-500 rounded-lg"
        >
          <img
            className="w-20 h-20"
            src="https://cdn-icons-png.freepik.com/256/10861/10861650.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais_hybrid"
            alt=""
          />
          <div>
            <h1 className="text-xl font-semibold">7 Days Return</h1>
            <p className="">Seven-day hassle-free return policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reliability;
