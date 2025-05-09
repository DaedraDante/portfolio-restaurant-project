import { useEffect, useState } from 'react'
import HeroSection from './HeroSection'
import AboutUsSection from './AboutUsSection'
import MenuSection from './MenuSection'
import OurChefSection from './OurChefSection'
import NavSection from './NavSection'
import ContactSection from './ContactSection'

function App() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
          entry.target.classList.add("show");
        }else {
          entry.target.classList.remove("show");
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    }


  });
  return (
    <>
      <NavSection/>
      <HeroSection/>
      <AboutUsSection/>
      <OurChefSection/>
      <MenuSection/>
      <ContactSection/>
    </>
  )
}

export default App
