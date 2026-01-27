import React from 'react'

export default function Apropos() {
  return (
   <section className="min-h-screen flex flex-col items-center justify-center bg-[#0b0b0b] text-white px-6 py-20 relative">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(2,132,199,0.15),transparent_65%)]"></div>

      <div className="relative z-10 max-w-4xl text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          À propos de <span className="text-sky-600">Notre Entreprise</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-10">
          Nous créons des sites web modernes et performants, 
          pensés pour vos visiteurs et optimisés pour le référencement. 
          Chaque projet est unique et conçu avec passion.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-[#111111] p-6 rounded-xl shadow-lg hover:shadow-sky-600 transition">
            <h3 className="text-sky-600 text-xl font-bold mb-2">Design Moderne</h3>
            <p className="text-gray-300">
              Des interfaces épurées et professionnelles qui captivent l'attention.
            </p>
          </div>
          <div className="bg-[#111111] p-6 rounded-xl shadow-lg hover:shadow-sky-600 transition">
            <h3 className="text-sky-600 text-xl font-bold mb-2">SEO & Performance</h3>
            <p className="text-gray-300">
              Sites optimisés pour Google et pour des temps de chargement ultra rapides.
            </p>
          </div>
          <div className="bg-[#111111] p-6 rounded-xl shadow-lg hover:shadow-sky-600 transition">
            <h3 className="text-sky-600 text-xl font-bold mb-2">Support & Suivi</h3>
            <p className="text-gray-300">
              Nous accompagnons chaque client avec un suivi personnalisé et réactif.
            </p>
          </div>
          <div className="bg-[#111111] p-6 rounded-xl shadow-lg hover:shadow-sky-600 transition">
            <h3 className="text-sky-600 text-xl font-bold mb-2">Solutions Uniques</h3>
            <p className="text-gray-300">
              Chaque projet est pensé pour se démarquer et correspondre à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
