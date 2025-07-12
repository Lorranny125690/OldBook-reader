// components/MobileMenu.tsx
interface MobileMenuProps {
  isOpen: boolean;
}

export const Menu = ({ isOpen }: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-6 overflow-hidden transition-all duration-500 md:hidden ${
        isOpen ? "max-h-96 py-6" : "max-h-0 py-0"
      }`}
    >
      <a href="#" className="hover:text-cyan-300 text-lg">Home</a>
      <a href="#" className="hover:text-cyan-300 text-lg">Coleções públicas</a>
      <a href="#" className="hover:text-cyan-300 text-lg">Transcrever</a>
    </div>
  );
};
