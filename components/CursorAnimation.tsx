import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 10, y: 10 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  // Simplified cursor without variants
  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block fixed top-0 left-0 z-50 pointer-events-none"
        animate={{
          x: mousePosition.x - 17,
          y: mousePosition.y - 17,
        }}

        transition={{
          type: "tween",
          duration: 0.05
        }}
      >
        <div className="relative">
          <div className="absolute w-4 h-4 rounded-full bg-primary/20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-2 h-2 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </motion.div>
    </>
  );
};

export default CursorAnimation; 