import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #1e1e1e;
  color: #fff;
`;

export const StyledFooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .phone_number {
    color: #fff;
    text-decoration: none;
    font-size: 1.3rem;
  }
`;

export const StyledFooterIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  font-size: 2rem;

  p {
    cursor: pointer;
    transition: 800ms;

    :hover {
      margin-top: 0.2px;
    }
  }
`;
