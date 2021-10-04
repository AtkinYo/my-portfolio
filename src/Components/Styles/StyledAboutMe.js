import styled from 'styled-components';

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: #1e1e1e;
  color: #fff;

  h2 {
    text-transform: uppercase;
  }

  p {
    line-height: 1.5rem;
  }
`;

export const AboutMeText = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  line-height: 1.5rem;
`;
