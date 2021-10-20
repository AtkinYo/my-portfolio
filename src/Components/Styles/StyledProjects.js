import styled from 'styled-components';

export const StyledProjects = styled.div`
  width: 100%;
  height: 100%;

  h2 {
    font-weight: 800;
  }
`;

export const StyledProjectImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .Projects {
    margin: 0 auto;
    text-align: center;

    img {
      cursor: pointer;
      max-width: 100%;
      height: auto;
      margin-bottom: 6rem;
    }
  }

  @media (min-width: 991px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const DragCTA = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;
