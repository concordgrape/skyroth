import { motion, Variants } from "framer-motion";

interface FooterProps {
    itemVariants: Variants
}

export default function Footer({ itemVariants }: FooterProps) {
    return (
        <>
        {/* Copyright */}
        <motion.p 
          className="text-gray-600"
          variants={itemVariants}
        >
          © 2024 MIT Licensed
        </motion.p>
        </>
    );
}