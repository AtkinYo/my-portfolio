import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import HeaderSection from './Components/HeroSection/HeroSection';
import { DesktopNavbar, MobileNavbar } from './Components/Navbar/Navbar.style';

function App() {

  return (
    <div className="App">
      <MobileNavbar />
      <DesktopNavbar />
      <HeaderSection />
      <AboutMe />
    </div>
  );
}

export default App;
