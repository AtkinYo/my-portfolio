import styled from 'styled-components';

export const StyledProjects = styled.div`
  width: 100%;
  height: 100%;

  h2{
    font-weight: 800;
  }
`;

export const StyledProjectImg = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  .Projects{
    margin: 0 auto;
    text-align: center;

    img{
      cursor: pointer;
      max-width: 100%;
      height: auto;
    }
  }

  
  @media (min-width: 991px) {
    flex-direction: row;
  justify-content: space-evenly;

  }

`;