import React from "react";
import image2 from './assets/image2.png';
import image1 from './assets/image1.png';
import image3 from './assets/image3.jpg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Importando os ícones

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Header section */}
      <header className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${image1})` }}>

        {/* Header content */}
        <div className="relative z-10 flex text-2xl justify-between items-center w-full px-6 py-4">
          {/* Left side: Navigation */}
          <nav className="flex items-center gap-3 text-white font-serif">
            <span className="text-[#0077FF] font-semibold">OldBook</span>
            <span>Reader</span>
          </nav>

          {/* Right side: Links */}
          <div className="text-white flex items-center gap-6 font-serif group">
            <a
              href="#register"
              className="transition-all duration-300 group-hover:scale-90 hover:scale-120"
            >
              Cadastre-se
            </a>
            <a
              href="#login"
              className="text-[#0077FF] font-semibold transition-all duration-300 group-hover:scale-90 hover:scale-120"
            >
              Login
            </a>
          </div>
        </div>

        {/* Centered text in the middle */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white font-serif px-4">
          <div>
            <p className="text-blue-400 text-xl font-medium mb-4">Descubra</p>
            <p className="text-2xl sm:text-3xl font-light leading-relaxed max-w-4xl mx-auto">
              Os ecos do passado. Cadastre-se para explorar manuscritos raros e ajudar a reescrever a história.
            </p>
          </div>
        </div>
      </header>

      {/* Main content section */}
      <main className="bg-white rounded-t-3xl justify-center items-center shadow-lg w-[100%] h-[70.8vh] gap-40 flex flex-row">
        {/* Left side - document icon */}
        <div className="flex justify-center">
          <img
            src={image2}
            alt="Minimal black outlined icon of two overlapping documents, one slightly tilted"
            className="w-138 h-122"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://placehold.co/400x300?text=No+Image";
            }}
          />
        </div>

        {/* Right side - login form */}
        <div className="flex w-100 h-100 flex-col justify-center">
          <form className="space-y-6 w-full max-w-lg mx-auto">
            <div>
              <label htmlFor="email" className="block text-xl font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full h-16 bg-white border border-gray-300 rounded-md px-4 py-3 text-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xl font-medium text-gray-700 mb-1">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Senha"
                className="w-full h-16 bg-white border border-gray-300 rounded-md px-4 py-3 text-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-30 cursor-pointer justify-center py-3 px-6 bg-black text-white rounded-full font-medium text-sm transition-colors hover:bg-gray-900"
                >
                  Entrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Bottom quote section */}
      <section className="relative flex h-[60vh] items-center justify-center text-center py-24">
        <img
          src={image3}
          alt="Open ancient manuscript book laid out flat with handwritten text"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://placehold.co/1920x600?text=No+Image";
          }}
        />
        <div className="relative flex justify-center items-center z-10 max-w-4xl mx-auto px-6">
          <blockquote className="text-white text-2xl font-serif leading-relaxed italic">
            "Explore manuscritos antigos com uma experiência moderna, intuitiva e poderosa — onde tecnologia encontra história."
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#1F1F1F] to-[#333333] text-white py-12">
        <div className="max-w-7xl justify-center mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
            {/* Left side: Copyright */}
            <div className="text-center sm:text-left text-xs font-light">
              <p>&copy; {new Date().getFullYear()} Valter. Todos os direitos reservados.</p>
            </div>

            {/* Center: Links */}
            <div className="flex space-x-6">
              <a href="#about" className="hover:text-[#0077FF] transition duration-300">Sobre</a>
              <a href="#privacy" className="hover:text-[#0077FF] transition duration-300">Privacidade</a>
              <a href="#terms" className="hover:text-[#0077FF] transition duration-300">Termos</a>
            </div>

            {/* Right side: Social Icons */}
            <div className="flex space-x-6 justify-center">
              <a href="#" className="hover:text-[#0077FF] transition duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-[#0077FF] transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-[#0077FF] transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-[#0077FF] transition duration-300">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
