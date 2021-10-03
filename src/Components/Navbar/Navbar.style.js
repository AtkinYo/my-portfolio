import styled from 'styled-components';
import LgNavbar from './LgNavbar';
import Navbar from './Navbar';

export const MobileNavbar = styled(Navbar)`
  width: 100%;
  height: 8vh;
  background-color: #000;
  color: blue;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  font-size: 1.5rem;

  @media (min-width: 991px) {
    display: none;
  }
`;

export const DesktopNavbar = styled(LgNavbar)`
  width: 100%;
  height: 8vh;
  background-color: green;

  @media (max-width: 991px) {
    display: none;
  }
`;
