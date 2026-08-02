import { useState,useEffect } from "react";

import Intro from "../../Components/Intro";
import Navbar from "../../Components/Navbar";
// import Hero from "../components/hero/Hero";

export default function Home() {

  const [showIntro, setShowIntro] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showHero, setShowHero] = useState(false);
  
  useEffect(() => {
  const introPlayed = sessionStorage.getItem("introPlayed");

  if (introPlayed) {
    setShowIntro(false);
    setShowNavbar(true);
    setShowHero(true);
  } else {
    setShowIntro(true);
  }
}, []);
 
 const handleIntroComplete = () => {
  sessionStorage.setItem("introPlayed", "true");

  setShowIntro(false);

  setTimeout(() => {
    setShowNavbar(true);
  }, 100);

  setTimeout(() => {
    setShowHero(true);
  }, 500);
};

  return (
    <>
      {showIntro && (
        <Intro
          onComplete={handleIntroComplete}
        />
      )}

      {showNavbar && <Navbar />}

      {/* {showHero && <Hero />} */}
    </>
  );
}