import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InViewAnimation = ({
  children,
  duration,
  hiddenProps,
  visibleProps,
  transitionProps,
  ...rest
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    hidden: { ...hiddenProps },
    visible: { ...visibleProps },
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
      variants={variants}
      transition={transitionProps}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimation;
