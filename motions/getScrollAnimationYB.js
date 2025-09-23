export default function getScrollAnimationYB() {
  return {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: ({ delay } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
         bounce: 0.2,
        duration: 0.8,
        delay: delay || 0,
      },
    }),
  };
}