'use client';

import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollTopbar() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className='scroll-topbar'
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}