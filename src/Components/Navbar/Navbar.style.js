import styled from 'styled-components';
import Navbar from './Navbar';

export const MobileNavbar = styled(Navbar)`
  width: 100%;
  height: 8vh;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  font-size: 1.5rem;

  @media (min-width: 991px) {
    display: none;
  }
`;

export const DesktopNav = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  position: fixed;
  z-index: 1;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const DesktopNavLeft = styled.div`
  display: flex;
`;

export const DesktopNavRight = styled.div`
  ul {
    display: flex;
    list-style-type: none;

    li {
      display: flex;
      justify-content: space-around;
      width: 10rem;
    }
  }
`;
