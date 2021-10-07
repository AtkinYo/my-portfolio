import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Project from './Components/ProjectSection/Projects';
import HeaderSection from './Components/HeroSection/HeroSection';
import { DesktopNavbar, MobileNavbar } from './Components/Navbar/Navbar.style';
import Card from './Components/Skills/Skills';

function App() {

  return (
    <div className="App">
      <MobileNavbar />
      <DesktopNavbar />
      <HeaderSection />
      <AboutMe />
      <Project />
      <Card />
    </div>
  );
}

export default App;
