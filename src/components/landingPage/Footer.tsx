import { animated, useSpring } from '@react-spring/web';
import { Heart } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import {Facebook,Instagram} from 'lucide-react'
const Footer = () => {
    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }

  return (
    <footer className="bg-black text-white py-8">
      <motion.div variants={staggerChildren} className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Heart className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-bold">Dear U</span>
            </div>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Express your feelings, safely and anonymously.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-4 mb-6 md:mb-0">
            <a href="#" className="hover:text-rose-500 transition-colors duration-300">About</a>
            <a href="#" className="hover:text-rose-500 transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-rose-500 transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-rose-500 transition-colors duration-300">Contact</a>
          </nav>

          <div className="flex space-x-4">
            {['Facebook', 'Instagram', 'Twitter'].map((platform, index) => (
              <a key={index} href="#" className="hover:text-pink-500 transition-colors duration-300">
                <span className="sr-only">{platform}</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none" />
                  <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="10" fill="white">
                    {platform[0]}
                  </text>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;