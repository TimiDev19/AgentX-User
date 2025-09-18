import { motion } from "framer-motion";
import { ReactNode } from "react";

type Pulse3DProps = {
  children: ReactNode;
  delay?: number; // optional, defaults to 0
};

export default function Pulse3D({ children, delay = 0 }: Pulse3DProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotateX: [0, 10, 0],
        rotateY: [0, -10, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        delay,
      }}
      style={{
        display: "inline-block",
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
    >
      {children}
    </motion.div>
  );
}
