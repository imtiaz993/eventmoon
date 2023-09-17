const mob_variants = {
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

const desktop_variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: [1, 0.5, 0],
  },
};

const tab_variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const tab_content_variants = {
  shrink: { scale: 0.92 },
  full: { scale: 1 },
};

const search_view_wrapper_variants = {
  hidden: {
    x: 640,
  },
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      duration: 0.15,
    },
  },
  exit: {
    x: 640,
    transition: {
      when: "afterChildren",
      duration: 0.15,
    },
  },
};

const search_view_variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export {
  mob_variants,
  desktop_variants,
  tab_variants,
  tab_content_variants,
  search_view_wrapper_variants,
  search_view_variants,
};
