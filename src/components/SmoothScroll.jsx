import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import Locomotive CSS

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const locomotiveScroll = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      locomotiveScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08, // Lower values = smoother (default is 0.1)
        multiplier: 0.8, // Adjust scrolling speed (lower = slower, smoother)
      });
    }

    return () => {
      locomotiveScroll.current?.destroy();
    };
  }, []);

  return <div ref={scrollRef} data-scroll-container>{children}</div>;
};

export default SmoothScroll;
