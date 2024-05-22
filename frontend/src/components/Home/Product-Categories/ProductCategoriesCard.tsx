import CountUp from "react-countup";
const ProductCategoriesCard = () => {
  return (
    <div className="mx-28 grid grid-cols-5 pt-44 gap-x-8">
      <div className="flex flex-col gap-y-3">
        <img
          className="w-16 h-16 rounded-full"
          src="https://img.freepik.com/premium-photo/sport-workout-gloves-closeup-male-hands-gym-training_361816-6640.jpg?w=740"
          alt=""
        />
        <h1 className="font-semibold">Bike Gloves</h1>
        <h1 className="flex items-center gap-x-2">
          <CountUp start={0} end={187} duration={20} separator="," prefix="">
            {({ countUpRef }) => (
              <div className="font-bold text-xl text-[#ff733b]">
                <span ref={countUpRef} />
                <span>+</span>
              </div>
            )}
          </CountUp>
          Products Available
        </h1>
      </div>

      {/* 2 */}

      <div className="flex flex-col gap-y-3">
        <img
          className="w-16 h-16 rounded-full"
          src="https://img.freepik.com/free-photo/senior-woman-riding-bike-outdoors_23-2148685748.jpg?t=st=1716399634~exp=1716403234~hmac=5badc72640a25731846e5ed00512aa19d498a88b082168221d44e0cec3c5a5a4&w=360"
          alt=""
        />
        <h1 className="font-semibold">Bike Helmate</h1>
        <h1 className="flex items-center gap-x-2">
          <CountUp start={0} end={280} duration={20} separator="," prefix="">
            {({ countUpRef }) => (
              <div className="font-bold text-xl text-[#ff733b]">
                <span ref={countUpRef} />
                <span>+</span>
              </div>
            )}
          </CountUp>
          Products Available
        </h1>
      </div>
      {/* 3 */}

      <div className="flex flex-col gap-y-3">
        <img
          className="w-16 h-16 rounded-full"
          src="https://img.freepik.com/free-photo/asphalt-background-biking-active-adult_1303-2604.jpg?t=st=1716399722~exp=1716403322~hmac=bea6e21290e124d858a8fa21d029a1670f6ad4d62f12d3bcd867abd326c2dc8e&w=740"
          alt=""
        />
        <h1 className="font-semibold">Gear Cycle</h1>
        <h1 className="flex items-center gap-x-2">
          <CountUp start={0} end={450} duration={20} separator="," prefix="">
            {({ countUpRef }) => (
              <div className="font-bold text-xl text-[#ff733b]">
                <span ref={countUpRef} />
                <span>+</span>
              </div>
            )}
          </CountUp>
          Products Available
        </h1>
      </div>

      {/* 4 */}

      <div className="flex flex-col gap-y-3">
        <img
          className="w-16 h-16 rounded-full"
          src="https://img.freepik.com/premium-photo/retiree-happy-man-with-gray-beard-have-rest-after-tennis-workout-nature-near-eco-scooter-with-amazing-view-mountains-beach_175356-12416.jpg?w=740"
          alt=""
        />
        <h1 className="font-semibold">Electric Cycle</h1>
        <h1 className="flex items-center gap-x-2">
          <CountUp start={0} end={130} duration={20} separator="," prefix="">
            {({ countUpRef }) => (
              <div className="font-bold text-xl text-[#ff733b]">
                <span ref={countUpRef} />
                <span>+</span>
              </div>
            )}
          </CountUp>
          Products Available
        </h1>
      </div>
      {/* 5
       */}

      <div className="flex flex-col gap-y-3">
        <img
          className="w-16 h-16 rounded-full"
          src="https://img.freepik.com/free-photo/child-bicycle-asphalt-road-summer-bike-park_1157-40307.jpg?t=st=1716399901~exp=1716403501~hmac=87f59e8445817543a7369e769e125890db4f45399636aa2ba4baf2d7bad6784f&w=360"
          alt=""
        />
        <h1 className="font-semibold">Kids bike</h1>
        <h1 className="flex items-center gap-x-2">
          <CountUp start={0} end={170} duration={20} separator="," prefix="">
            {({ countUpRef }) => (
              <div className="font-bold text-xl text-[#ff733b]">
                <span ref={countUpRef} />
                <span>+</span>
              </div>
            )}
          </CountUp>
          Products Available
        </h1>
      </div>
    </div>
  );
};

export default ProductCategoriesCard;
