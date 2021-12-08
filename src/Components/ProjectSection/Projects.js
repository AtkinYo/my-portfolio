import { Container } from '../Container.style';
import Seedlip from '../../Images/seedlip-img.png';
import SwtDrms from '../../Images/swt-drms-img.png';
import Chipotle from '../../Images/chip-email.png';
import Promo from '../../Images/snk-email.png';
import { StyledProjects, StyledProjectImg } from '../Styles/StyledProjects';

export default function Project() {
  return (
    <StyledProjects>
      <Container>
        <h2 id="projects">Projects</h2>
      </Container>

      <StyledProjectImg>
        <div className="Project-2 Projects">
          <h3>Chipotle Receipt Email</h3>
          <a
            href="https://elegant-visvesvaraya-d47593.netlify.app/"
            target="blank"
          >
            <img src={Chipotle} alt="Sweet Dreams" />
          </a>
        </div>
        <div className="Project-1 Projects">
          <h3>On Promo Email</h3>
          <a href="https://gifted-leavitt-531c1f.netlify.app" target="blank">
            <img src={Promo} alt="On Email" />
          </a>
        </div>
      </StyledProjectImg>

      <StyledProjectImg>
        <div className="Project-2 Projects">
          <h3>Sweet Dreams Landing Page/Shopping Cart</h3>
          <a href="https://keen-easley-6d3730.netlify.app/" target="blank">
            <img src={SwtDrms} alt="Sweet Dreams" />
          </a>
        </div>
        <div className="Project-1 Projects">
          <h3>Seedlip Landing Page</h3>
          <a href="https://kind-dubinsky-4507a1.netlify.app/" target="blank">
            <img src={Seedlip} alt="Seedlip" />
          </a>
        </div>
      </StyledProjectImg>
    </StyledProjects>
  );
}
