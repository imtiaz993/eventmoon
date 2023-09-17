import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeTop = ({ children, duration, y = 100, ease = "easeInOut" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    hidden: { y: y, opacity: 0 },
    visible: {
      y: 0,
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
      transition={{ ease: ease, duration: duration }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeTop;
