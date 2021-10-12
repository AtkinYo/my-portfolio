import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Project from './Components/ProjectSection/Projects';
import HeaderSection from './Components/HeroSection/HeroSection';
import { DesktopNavbar, MobileNavbar } from './Components/Navbar/Navbar.style';
import Carousel from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <MobileNavbar />
      <DesktopNavbar />
      <HeaderSection />
      <AboutMe />
      <Project />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
