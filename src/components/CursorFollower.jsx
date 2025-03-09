import { useEffect, useRef } from "react";
import gsap from "gsap";

const CursorFollower = () => {
  const cursorRef = useRef(null);
  
  // Default small size
  const smallSize = {
    width: "1.1vw",
    height: "1.1vw"  // Using vw for consistent circle shape
  };

  // Expanded large size
  const largeSize = {
    width: "5vw",
    height: "5vw"
  };

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Initial setup
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      ...smallSize
    });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    const handleEnter = () => {
      gsap.to(cursor, {
        ...largeSize,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const handleLeave = () => {
      gsap.to(cursor, {
        ...smallSize,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Dynamic element detection
    const checkElements = setInterval(() => {
      const elements = document.querySelectorAll('.elem');
      if (elements.length > 0) {
        elements.forEach(el => {
          el.addEventListener('mouseenter', handleEnter);
          el.addEventListener('mouseleave', handleLeave);
        });
        clearInterval(checkElements);
      }
    }, 100);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      const elements = document.querySelectorAll('.elem');
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
      clearInterval(checkElements);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed -top-1 -left-1 bg-gray-200 rounded-full pointer-events-none mix-blend-difference z-1500"
      style={{
        transform: "translate(-50%, -50%)",
        transformOrigin: "center center"
      }}
    ></div>
  );
};

export default CursorFollower;