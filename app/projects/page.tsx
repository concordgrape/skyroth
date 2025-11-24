"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Portfolio() {
  const projectLinks = [
    {
      date: "November 24, 2025",
      title: "Verbuu.com - Learn Common Words in any Language",
      link: "https://verbuu.com",
    },
    {
      date: "November 23, 2025",
      title: "WordHunt.io - Daily Word Search Game",
      link: "https://wordhunt.io",
    },
    {
      date: "April 11, 2025",
      title: "white_border - Add White Borders to Photos (iOS)",
      link: "https://apps.apple.com/ca/app/white-border/id1574787497",
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
      filter: "blur(10px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen max-w-200 bg-white px-4 py-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Navbar itemVariants={itemVariants} />

        {/* Title */}
        <motion.h1 className="text-2xl font-bold mb-12" variants={itemVariants}>
          My Projects
        </motion.h1>

        {/* Project Links */}
        <motion.div className="grid grid-cols-1 gap-6" variants={itemVariants}>
          {projectLinks.map((post, index) => (
            <motion.div
              key={index}
              className="flex gap-4"
              variants={itemVariants}
            >
              <span className="text-gray-600 whitespace-nowrap">
                {post.date}
              </span>
              <Link href={post.link} className="hover:underline">
                {post.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
