'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Portfolio() {
  const blogPosts = [
    {
      date: '11/25/25',
      title: 'The Difficulty with Creating AI Agents',
      link: 'blog/difficulty-with-creating-ai-agents',
    },
    {
      date: '11/24/25',
      title: 'Creating Verbuu - Determining Common Words',
      link: 'blog/creating-verbuu',
    },
  ];

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
          Sky Roth
        </motion.h1>

        <motion.h3 
          className="text-md text-gray-500 mb-12"
          variants={itemVariants}
        >
          Web Developer
        </motion.h3>

        {/* Bio */}
        <motion.p 
          className="text-lg leading-relaxed mb-16"
          variants={itemVariants}
        >
          I'm a TypeScript enthusiast specializing in Web and Mobile Apps. Currently somewhere trying to learn German.
        </motion.p>

        {/* Blog Posts */}
        <motion.div 
          className="space-y-6 mb-20"
          variants={itemVariants}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="flex gap-4"
              variants={itemVariants}
            >
              <span className="text-gray-600 whitespace-nowrap">{post.date}</span>
              <Link href={post.link} className="hover:underline">
                {post.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Links */}
        <motion.div 
          className="flex gap-4 mb-12 text-gray-700"
          variants={itemVariants}
        >
          <Link href="https://github.com/concordgrape" className="flex items-center gap-2 hover:underline bg-gray-100 rounded-full px-2">
            <span className="text-xl">↗</span> github
          </Link>
          <Link href="mailto:hi@skyroth.com" className="flex items-center gap-2 hover:underline bg-gray-100 rounded-full px-2">
            <span className="text-xl">↗</span> email me
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}