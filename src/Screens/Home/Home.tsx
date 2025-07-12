import Logo from "../../assets/Logo.png"
import { FiPaperclip } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegUser,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "../../components/Header";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <main className="flex-1 px-6 sm:px-8 md:px-20 py-10 flex flex-col md:flex-row items-center justify-center relative gap-10">
        <div className="max-w-2xl space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl hover:text-6xl transition-all duration-300 font-light leading-snug">
            Onde o passado <br />
            <span className="text-cyan-400 font-bold">Ganha voz no futuro</span>
          </h1>
          <p className="text-base md:text-lg font-light text-gray-300">
            Bem-vindo ao OldBook Reader, onde manuscritos esquecidos ganham nova
            vida através da tecnologia – leia, descubra e transcreva séculos de
            história em um só lugar
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <FiPaperclip className="w-6 h-6 text-cyan-400" />
          </div>
        </div>

        {/* Logo */}
        <div className="flex transition-transform transform scale-95 hover:scale-100 transition-all duration-300">
          <img src={Logo} alt="OldBook Logo" />
        </div>
      </main>

      {/* Top Navigation */}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-6 overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-96 py-6" : "max-h-0 py-0"
        }`}
      >
        <a href="#" className="hover:text-cyan-300 text-lg">Home</a>
        <a href="#" className="hover:text-cyan-300 text-lg">Coleções públicas</a>
        <a href="#" className="hover:text-cyan-300 text-lg">Transcrever</a>
      </div>
    </motion.div>
  );
};

export default Home;
