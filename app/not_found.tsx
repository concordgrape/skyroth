'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      filter: 'blur(10px)',
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <div className="min-h-screen max-w-150 bg-white px-4 py-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >

        <Navbar itemVariants={itemVariants} />

        {/* Title */}
        <motion.h1 
          className="text-2xl font-bold"
          variants={itemVariants}
        >
          Not Found
        </motion.h1>

        <motion.h3 
          className="text-md text-gray-500 mb-12"
          variants={itemVariants}
        >
          This page cannot be found - 404
        </motion.h3>
      </motion.div>
    </div>
  );
}