"use client";

import { motion } from "framer-motion";
import "./markdown.css";
import Navbar from "@/app/components/Navbar";
import { containerVariants, itemVariants } from "@/app/helpers/constants";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  content?: string;
}

interface BlogPostClientProps {
  post: Post;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <div className="min-h-screen max-w-150 bg-white px-4 py-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Navbar itemVariants={itemVariants} />

        <motion.article
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.header className="mb-8" variants={itemVariants}>
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
            <div className="text-gray-600 mb-6">
              <time>{post.date}</time>
              {post.author && <span> • {post.author}</span>}
            </div>
          </motion.header>

          <motion.div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
            variants={itemVariants}
          />
        </motion.article>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Audio Player 
          <AudioPlayer
            audioSrc={`/audio/${post.slug}.mp3`}
            title={post.title}
          />*/}
        </motion.div>
      </motion.div>
    </div>
  );
}
