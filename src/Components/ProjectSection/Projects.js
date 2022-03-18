import { Container } from '../Container.style';
import Moment from '../../Images/moment.png';
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
          <h3>Moment Newsletter</h3>
          <a
            href="https://gracious-engelbart-7195b9.netlify.app/"
            target="blank"
          >
            <img src={Moment} alt="Moment Newsletter" />
          </a>
        </div>
        <div className="Project-1 Projects">
          <h3>Sweet Dreams Landing Page/Shopping Cart</h3>
          <a href="https://keen-easley-6d3730.netlify.app/" target="blank">
            <img src={SwtDrms} alt="Sweet Dreams" />
          </a>
        </div>
      </StyledProjectImg>
    </StyledProjects>
  );
}
