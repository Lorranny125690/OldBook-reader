import { useState, useRef, useEffect } from "react";
import { FaBars, FaRegUser, FaTimes } from "react-icons/fa";
import { Menu } from "./MobileMenu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="absolute top-0 w-full flex items-center justify-between px-6 sm:px-10 md:px-20 py-4 bg-transparent text-white">
      <div className="text-xl">
        <span className="text-blue-400 font-semibold">OldBook</span>
        <span className="font-light"> Reader</span>
      </div>

      <nav className="hidden md:flex space-x-6 text-sm font-light items-center scale-120">
        <a href="#" className="text-blue-400 hover:scale-125 transition-all duration-300 hover:px-2">Home</a>
        <span className="text-white">•</span>
        <a href="#" className="hover:text-cyan-300 hover:scale-125 hover:px-2 transition-all duration-300">Coleções públicas</a>
        <span className="text-white">•</span>
        <a href="#" className="hover:text-cyan-300 hover:scale-125 hover:px-2 transition-all duration-300">Transcrever</a>
      </nav>

      <div className="flex items-center justify-center space-x-4 scale-120">
        <button className="hover:text-cyan-300 cursor-pointer transition duration-300">
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

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setUserMenuOpen(prev => !prev)}
            className="hover:text-cyan-300 mt-2 cursor-pointer transition duration-300"
          >
            <FaRegUser />
          </button>

          <div
            className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 bg-slate-500 text-white overflow-hidden transform transition-all duration-300 ease-in-out origin-top
              ${userMenuOpen ? 'scale-y-100 opacity-100 max-h-96' : 'scale-y-0 opacity-0 max-h-0'}
            `}
          >
            <ul className="py-2 text-sm">
              <li>
                <button className="block w-full text-left px-4 py-2 hover:text-gray-300 transition">
                  Ver perfil
                </button>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 hover:text-gray-300 transition">
                  Editar perfil
                </button>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 text-red-600 hover:text-red-300 transition">
                  Sair
                </button>
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white hover:text-cyan-300 transition"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <Menu isOpen={menuOpen} />
    </header>
  );
};
