import { Container } from '../Container.style';
import Seedlip from '../../Images/seedlip-img.png';
import SwtDrms from '../../Images/swt-drms-img.png';
import { StyledProjects, StyledProjectImg } from '../Styles/StyledProjects';

export default function Project() {
  return (
    <StyledProjects>
      <Container>
        <h2 id="projects">Projects</h2>
      </Container>

      <StyledProjectImg>
        <div className="Project-2 Projects">
          <h3>Sweet Dreams Landing Page/Shopping Cart</h3>
         <a href="https://www.google.com" target="blank"><img src={SwtDrms} alt="Sweet Dreams" /></a>
        </div>
        <div className="Project-1 Projects">
          <h3>Seedlip Landing Page</h3>
          <a href="/" target="blank"><img src={Seedlip} alt="Seedlip" /></a>

        </div>
      </StyledProjectImg>
    </StyledProjects>
  );
}
