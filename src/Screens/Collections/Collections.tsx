import Logo from "../../assets/Logo.png";
import { FiPaperclip } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Collections = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex h-screen bg-gray-900 text-white font-serif overflow-hidden"
    >
      {/* Sidebar (aparece só em sm+) */}
      <aside className="hidden sm:flex bg-gray-800 w-14 hover:w-72 px-4 py-4 flex-col justify-center hover:justify-start items-center text-sm tracking-widest font-light transition-all hover:z-10 duration-300 ease-out group overflow-hidden gap-6">
        <span className="rotate-[-90deg] whitespace-nowrap text-3xl leading-none group-hover:hidden">
          MAIS INFORMAÇÕES
        </span>

        <div className="hidden group-hover:flex flex-col items-start space-y-4 text-white text-left mt-4">
          <span className="text-base font-medium">NÚMERO:</span>
          <span className="text-sm text-gray-300">+55 (xx) xxxxx-xxxx</span>

          <span className="text-base font-medium">EMAIL:</span>
          <span className="text-sm text-gray-300">contato@oldbook.com</span>

          <span className="text-base font-medium">Redes Sociais:</span>
          <div className="flex gap-4 mt-1">
            <a href="#" className="hover:text-[#0077FF] transition duration-300">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-[#1DA1F2] transition duration-300">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-[#C13584] transition duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-[#0A66C2] transition duration-300">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 sm:px-8 md:px-20 flex flex-col mt-30 relative gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* Imagem simulada */}
              <div className="h-60 w-full bg-gray-700 flex items-center justify-center">
                <img
                  src="/caminho/para/sua-imagem.png" // substitua pelo caminho real
                  alt={`Manuscrito ${index + 1}`}
                  className="object-cover h-full w-full"
                />
              </div>

              {/* Rodapé com nome */}
              <div className="bg-[#1e1e1e] px-4 py-3 text-center">
                <p className="text-sm font-semibold text-white">
                  Manuscrito Antigo #{index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default Collections;
