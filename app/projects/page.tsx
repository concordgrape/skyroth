"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { containerVariants, itemVariants } from "../helpers/constants";
import { ExternalLinkIcon } from "lucide-react";

export default function Portfolio() {
  const projectLinks = [
    {
      date: "11/24/25",
      title: "Verbuu.com - Learn Common Words in any Language",
      link: "https://verbuu.com",
    },
    {
      date: "11/23/25",
      title: "WordHunt.io - Daily Word Search Game",
      link: "https://wordhunt.io",
    },
    {
      date: "03/26/26",
      title: "WordGames.net - Simple online word games (Under development)",
      link: "https://wordgames.net",
    },
  ];
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
              <Link href={post.link} className="hover:underline">
                {post.title}
              </Link>
              <ExternalLinkIcon size={14} className="text-gray-600 mt-1" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
