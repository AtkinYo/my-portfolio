import { Container } from '../Container.style';
import Imac from '../../Images/imac-img.png';
import { StyledProjects, StyledProjectImg } from '../Styles/StyledProjects'

export default function Project() {
    return (

        <StyledProjects>
            <Container>
                <h2>Projects</h2>
            </Container>

                <StyledProjectImg>

                    <div className="Project-1 Projects">
                        <h3>Seedlip Landing Page</h3>
                    <img src={Imac} alt="Sweet Dreams" />
                    </div>

                    <div className="Project-2 Projects">
                    <h3>Sweet Dreams Landing Page/Shopping Cart</h3>
                    <img src={Imac} alt="Sweet Dreams" />
                    </div>

                </StyledProjectImg>
        </StyledProjects>
    );
  }