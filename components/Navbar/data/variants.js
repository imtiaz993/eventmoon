const fragment_variants = {
  hidden: {
    y: 999,
  },
  visible: {
    y: 0,
    transition: { type: "spring", duration: 0.65, bounce: 0.2 },
  },
  exit: {
    y: 999,
    transition: { duration: 0.4 },
  },
};

export { fragment_variants };
