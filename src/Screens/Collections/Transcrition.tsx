import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPlus,
  FaTrash,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const mockItems = [
  {
    id: 1,
    title: "Exemplo 1",
    image: "https://i.pinimg.com/736x/ef/27/07/ef2707f278cac200943fcea2a290244d.jpg",
  },
  {
    id: 2,
    title: "Exemplo 2",
    image: "https://i.pinimg.com/736x/ef/27/07/ef2707f278cac200943fcea2a290244d.jpg",
  },
];

const Collections = () => {
  const [items, setItems] = useState(mockItems);
  const navigation = useNavigate();

  const handleAdd = () => {
    const id = items.length + 1;
    const newItem = {
      id,
      title: `Exemplo ${id}`,
      image: "https://i.pinimg.com/736x/ef/27/07/ef2707f278cac200943fcea2a290244d.jpg",
    };
    setItems([...items, newItem]);
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div
      className="flex h-screen bg-gray-900 text-white font-serif" id="collec"
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
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <p className="text-gray-400 text-xl mb-4">Vazio</p>
          <button
            onClick={handleAdd}
            className="text-blue-400 underline hover:text-blue-600 transition"
          >
            Adicionar nova leitura
          </button>
        </div>
      ) : (
        <motion.div
        onClick={() => navigation("/book")}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8}} 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-b-xl overflow-hidden shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* Imagem */}
              <div className="h-60 w-full bg-gray-700 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover h-full w-full"
                />
              </div>

              {/* Rodapé */}
              <div className="bg-[#1e1e1e] px-4 py-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-400 hover:text-red-600 transition"
                >
                  <FaTrash size={12} />
                </button>
              </div>
            </div>
          ))}

          {/* Botão de adicionar novo */}
          <button
            onClick={handleAdd}
            className="bg-gray-700 hover:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-60"
          >
            <FaPlus className="text-blue-300" size={24} />
          </button>
        </motion.div>
      )}
      </main>
    </div>
  );
};

export default Collections;
