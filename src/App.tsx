import React from "react";
import Logo from "./assets/Logo.png"
import { FiPaperclip } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white font-serif">
      {/* Sidebar */}
      <aside className="bg-gray-800 w-14 hover:w-48 flex flex-col items-center justify-center text-sm tracking-widest font-light transition-all hover:z-10 duration-300 ease-out group overflow-hidden">
        {/* Texto "MAIS INFORMAÇÕES" (some ao hover) */}
        <span className="rotate-[-90deg] whitespace-nowrap text-3xl leading-none group-hover:hidden">
          MAIS INFORMAÇÕES
        </span>

        {/* Texto "NÚMERO" (aparece ao hover) */}
        <span className="rotate-[-90deg] whitespace-nowrap text-3xl leading-none hidden group-hover:block text-white">
          NÚMERO
        </span>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-20 flex items-center justify-center relative">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl hover:text-6xl transition-all duration-300 font-light leading-snug">
            Onde o passado <br />
            <span className="text-cyan-400 font-bold">Ganha voz no futuro</span>
          </h1>
          <p className="text-lg font-light text-gray-300">
            Bem-vindo ao OldBook Reader, onde manuscritos esquecidos ganham nova
            vida através da tecnologia – leia, descubra e transcreva séculos de
            história em um só lugar
          </p>
          <div className="mt-6">
            <FiPaperclip className="w-6 h-6"/>
          </div>
        </div>

        {/* Right image composition */}
        <div className="flex ml-10 transition-transform transform scale-80 hover:scale-90 transition-all duration-300">
          <img src={Logo} alt="OldBook Logo" />
        </div>
      </main>

      {/* Top Navigation */}
      <header className="absolute top-0 w-full flex justify-between items-center px-20 py-4 bg-transparent text-white">
        <div className="text-xl">
          <span className="text-blue-400 font-semibold">OldBook</span>
          <span className="font-light"> Reader</span>
        </div>
        <nav className="space-x-6 hidden md:flex text-sm font-light scale-120">
          <a href="#" className="text-blue-400 hover:scale-125 transition-all duration-300 hover:px-2 transition-all duration-300">Home</a>
          <span className="text-white group-hover:scale-125">•</span>
          <a href="#" className="hover:text-cyan-300 hover:scale-125 hover:px-2 transition-all duration-300">Coleções públicas</a>
          <span className="text-white">•</span>
          <a href="#" className="hover:text-cyan-300 hover:scale-125 hover:px-2 transition-all duration-300">Transcrever</a>
        </nav>
        <div className="space-x-4 flex items-center scale-120">
          <button>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button>
            <FaRegUser/>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;
