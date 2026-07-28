import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 70,
  once = true,
}) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.15,
  });

  const variants = {
    up: { opacity: 0, y: distance },
    down: { opacity: 0, y: -distance },
    left: { opacity: 0, x: -distance },
    right: { opacity: 0, x: distance },
    scale: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction] || variants.up}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }
          : variants[direction] || variants.up
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;