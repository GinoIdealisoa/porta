import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0b0b0b] text-gray-800 dark:text-gray-200 px-6 py-12 transition-colors duration-500 relative overflow-hidden">
      {/* Glow arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-sky-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            E-K
          </div>
          <span className="text-xl font-bold">E-KAODY</span>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#home" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Accueil</a>
          <a href="#propos" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">À propos</a>
          <a href="#langage" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Technologies</a>
          <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Contact</a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"><FaFacebookF /></a>
          <a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"><FaTwitter /></a>
          <a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"><FaInstagram /></a>
        </div>

      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center mt-10 text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} E-KAODY. Tous droits réservés.
      </div>
    </footer>
  );
}
