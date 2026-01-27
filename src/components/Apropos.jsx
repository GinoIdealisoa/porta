export default function Apropos() {
  return (
    <section
      id="propos"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0b0b0b] text-black dark:text-white px-6 py-20 transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(2,132,199,0.15),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,rgba(2,132,199,0.1),transparent_65%)]"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          À propos de <span className="text-sky-600 dark:text-sky-400">Notre Entreprise</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-10">
          Nous créons des sites web modernes et performants, pensés pour vos
          visiteurs et optimisés pour le référencement. Chaque projet est unique
          et conçu avec passion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-sky-600 transition">
            <h3 className="text-sky-600 dark:text-sky-400 text-xl font-bold mb-2">Design Moderne</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Des interfaces épurées et professionnelles qui captivent l'attention.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-sky-600 transition">
            <h3 className="text-sky-600 dark:text-sky-400 text-xl font-bold mb-2">SEO & Performance</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Sites optimisés pour Google et pour des temps de chargement ultra rapides.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-sky-600 transition">
            <h3 className="text-sky-600 dark:text-sky-400 text-xl font-bold mb-2">Support & Suivi</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Nous accompagnons chaque client avec un suivi personnalisé et réactif.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-sky-600 transition">
            <h3 className="text-sky-600 dark:text-sky-400 text-xl font-bold mb-2">Solutions Uniques</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Chaque projet est pensé pour se démarquer et correspondre à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
