import { getPostBySlug, getAllPostSlugs } from '@/app/lib/posts';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

export const dynamic = 'force-dynamic';

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  try {
    const post = await getPostBySlug(slug);
    return <BlogPostClient post={post} />;
  } catch (error) {
    notFound();
  }
}