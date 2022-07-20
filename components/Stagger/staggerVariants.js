const container = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export const animationVariants = { container, card };
