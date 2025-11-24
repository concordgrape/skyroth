import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface NavbarProps {
    itemVariants: Variants
}

export default function Navbar({ itemVariants }: NavbarProps) {
    return (
        <>
        {/* Navigation */}
        <motion.nav 
          className="flex gap-6 mb-16 text-md"
          variants={itemVariants}
        >
          <Link href="/" className="hover:underline">
            home
          </Link>
          <Link href="/blog" className="hover:underline">
            blog
          </Link>
          <Link href="/projects" className="hover:underline">
            projects
          </Link>
        </motion.nav>
        </>
    );
}