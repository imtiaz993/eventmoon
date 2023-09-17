import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeLeft = ({ children, duration }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: duration }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeft;
