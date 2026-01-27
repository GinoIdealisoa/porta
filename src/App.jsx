import { useState } from "react"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Apropos from "./components/Apropos.jsx"

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    // Ajoute la classe "dark" sur le parent pour Tailwind
    <div className={`${darkMode ? "dark" : ""}`}>
      {/* Header sticky */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content avec padding-top pour Header */}
      <main className="pt-24 transition-colors duration-500 bg-white dark:bg-[#0b0b0b]">
        <Hero />
        <Apropos />
      </main>
    </div>
  )
}
