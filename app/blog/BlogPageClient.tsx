// app/blog/BlogPageClient.tsx (CLIENT COMPONENT)
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
}

interface BlogPageClientProps {
  posts: Post[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
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
              className="text-2xl font-bold mb-12"
              variants={itemVariants}
            >
              Blog
            </motion.h1>

                    <motion.div 
          className="space-y-6"
          variants={itemVariants}
        >
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              className="flex gap-4"
              variants={itemVariants}
            >
              <span className="text-gray-600 whitespace-nowrap">{post.date}</span>
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
          </motion.div>
        </div>
  );
}