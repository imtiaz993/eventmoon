export const variants = {
  shown: {
    maxHeight: '100vh',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  hidden: {
    maxHeight: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

export const children_variants = {
  shown: { opacity: 1 },
  hidden: { opacity: 0 },
};
