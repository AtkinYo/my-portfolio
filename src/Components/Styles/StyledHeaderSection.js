import styled from 'styled-components';

export const StyledHeaderSection = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  justify-content: center;

  @media (min-width: 991px) {
    p,
    h1,
    h2,
    h3 {
      display: none;
    }
  }

  .HeaderOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: #000;
  }
`;

export const HeaderRight = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 991px) {
    display: none;
  }
`;
