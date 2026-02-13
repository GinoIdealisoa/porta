import React, { useState } from "react";
import ReactImg from '../assets/images/front.PNG';
import { FaGithub } from "react-icons/fa";
import antsa from '../assets/images/antsa.PNG'; 
const LaravelImg = "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg";
const FlaskImg = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg";


export default function Service() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const services = [
    {
      title: "React",
      description: [
        "Interface dynamique et responsive avec Tailwind CSS.",
        "Création de composants réutilisables et gestion efficace du DOM virtuel.",
        "Assure une expérience utilisateur fluide et moderne."
      ],
      image: ReactImg,
      github: "https://github.com/GinoIdealisoa/frontmaster",
    },
    {
      title: "Laravel",
      description: [
        "API REST, gestion des données et CRUD complet.",
        "Architecture MVC et respect des principes SOLID.",
        "Sécurisation des routes avec authentification, rôles, permissions et JWT."
      ],
      image: LaravelImg,
      github: "https://github.com/GinoIdealisoa/apimaster",
    },
    {
      title: "Flask",
      description: [
        "Algorithmes de recommandation : scoring, filtrage et ranking.",
        "Analyse des préférences utilisateur pour fournir des suggestions personnalisées.",
        "Optimisation des résultats pour l’orientation des étudiants."
      ],
      image: FlaskImg,
      github: "https://github.com/GinoIdealisoa/flaskmaster",
    },
    {
      title: "Ny antsa ministry",
      description: [
        "Système complet d’orientation pour Madagascar.",
        "Combine React, Laravel et Flask pour fournir des recommandations personnalisées.",
        "Aide les étudiants à choisir les formations adaptées à leur profil et objectifs."
      ],
      image: antsa,
      github: "https://github.com/GinoIdealisoa/ny_antsa_ministry",
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section 
    id="service"
    className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 pt-12 pb-0">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
       <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
  Mes <span className="text-sky-600 dark:text-sky-400">Projets</span>
</h2>
        <p className="text-center mb-16 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Découvrez mes projets phares, alliant innovation et expertise pour répondre aux besoins de demain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 flex flex-col justify-between"
              style={{ aspectRatio: '1 / 1' }} // cartes carrées
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>

              <div className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow overflow-hidden">
                {expandedIndex === index
                  ? item.description.map((p, i) => <p key={i} className="mb-1">{p}</p>)
                  : <p>{item.description[0]}...</p>}
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-1 text-sky-600 dark:text-sky-400 font-medium text-sm underline hover:text-white-500 dark:hover:text-white-300"
                >
                  {expandedIndex === index ? "Lire moins" : "Lire la suite"}
                </button>
                <br />
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 px-4 py-2 border border-sky-600 text-sky-600 dark:border-sky-400 dark:text-sky-400 rounded-lg hover:bg-sky-600 hover:text-white dark:hover:bg-sky-400 transition mx-auto"
                >
                  <FaGithub size={18} />
                  Voir sur GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
