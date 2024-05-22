import bannerImage from "../../assets/cycle_banner.png";
const HeroBanner = () => {
  return (
    <div className="flex w-full h-[580px] relative">
      <section className="w-[60%]  bg-[#fcfcfc] pl-36">
        <h1 className="text-6xl font-sans leading-[80px] font-semibold mt-28 uppercase">
          Quality <span className="text-[#ff733b]">Bikes</span> <br /> for Every{" "}
          <br /> Adventure
        </h1>
        <button className="text-white font-bold bg-[#ff733b] hover:bg-[#d54309] px-14 py-4 mt-10 rounded-full uppercase">
          Buy Now
        </button>
      </section>

      <section className="w-[40%] bg-[#ff733b]"></section>
      <div>
        <img
          src={bannerImage}
          className="absolute top-36 right-10 w-[60%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroBanner;
