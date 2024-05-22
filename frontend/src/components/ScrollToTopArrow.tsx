// src/components/ScrollToTopArrow.js
import { useState, useEffect } from "react";
import { BiUpArrow } from "react-icons/bi";

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed right-10 bottom-6 bg-[#3b86ff] text-white p-3 rounded-full cursor-pointer  transition"
        >
          <BiUpArrow className="font-bold text-xl" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopArrow;
