import {
  HeaderLeft,
  HeaderRight,
  StyledHeaderSection,
} from '../Styles/StyledHeaderSection';
import Img from '../../Images/hero-bg.png';
import { Container } from '../Container.style';

export default function HeaderSection() {
  return (
    <StyledHeaderSection>
      <HeaderLeft style={{ backgroundImage: `url(${Img})` }}>
        <Container>
          <h2>Hi, Im</h2>
          <h1>Malik Young</h1>
          <h3>Front-End Developer</h3>
          <p>
            Specializing in responsive web development utilizing modern tech
            solutions.
          </p>
          <div className="HeaderOverlay"></div>
        </Container>
      </HeaderLeft>

      <HeaderRight>
        <Container>
          <h2>Hi, Im</h2>
          <h1>Malik Young</h1>
          <h3>Front-End Developer</h3>
          <p>
            Specializing in responsive web development utilizing modern tech
            solutions.
          </p>
        </Container>
      </HeaderRight>
    </StyledHeaderSection>
  );
}
