"use client";

import { JSXElementConstructor } from "react";
import { motion } from "framer-motion";

const MotionTagA = ({
  href,
  Icon,
}: {
  href: string;
  Icon: JSXElementConstructor<any>;
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      className="w-6"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon />
    </motion.a>
  );
};

export default MotionTagA;
