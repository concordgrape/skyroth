'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from './components/Navbar';
import { containerVariants, itemVariants } from './helpers/constants';

export default function NotFound() {
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