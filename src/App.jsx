import { Routes, Route, Link } from "react-router-dom"
import Hero from "./components/Hero.jsx"
import Header from "./components/Header.jsx"
import Apropos from "./components/Apropos.jsx"
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header fixé en haut */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>

      {/* Hero avec marge en haut */}
      <div className="pt-24">
        <Hero />
         <Apropos />
      </div>

    </div>
  )
}




