import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-6">

      {/* Profile Details */}
      <div className="max-w-7xl mx-auto mt-20 flex flex-col lg:flex-row gap-6">
        {/* Left - Avatar */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center w-full lg:w-1/3">
          <img
            src="https://i.pinimg.com/736x/c5/e2/77/c5e2772cd29ca8b34542d7ec5d65f093.jpg"
            alt="Profile"
            className="rounded-full w-50 h-45 mb-4"
          />
          <h2 className="text-xl font-semibold">Brick Mojo</h2>
          <p className="text-green-400 text-sm">Premium User</p>
        </div>

        {/* Right - Bio */}
        <div className="bg-gray-800 rounded-lg p-6 w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 text-sm">Trabalho</p>
            <p>Beatmaker</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Nível de Experiência</p>
            <p>Intermediate</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Artistas que gosto</p>
            <p>Ninho, Travis Scott, Metro Boomin</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Tipo de Música</p>
            <p>Trap</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Nota para a plataforma</p>
            <p>Ableton</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Humor Musical</p>
            <p>Melancholic</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Cidade</p>
            <p>California, USA</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Badges</p>
            <p className="text-blue-400">🏅 Top Collaborator</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Tags</p>
            <p>#Drill, #Melancholic, #Rap-US</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
        <div className="flex gap-4 text-2xl">
          <FaYoutube className="hover:text-red-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaTiktok className="hover:text-gray-300 cursor-pointer" />
        </div>
      </div>

      {/* My Productions */}
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Minhas transcrições</h3>
        <p className="text-gray-400 text-sm">Vazio</p>
      </div>
    </div>
  );
}