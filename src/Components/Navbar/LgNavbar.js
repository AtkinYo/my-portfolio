import { DesktopNav, DesktopNavLeft, DesktopNavRight } from "./Navbar.style";
import { ArrowUpOutlined } from '@ant-design/icons';
import {Link} from 'react-scroll'


export default function DesktopNavbar({ className }) {

  const Press = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const Press2 = () => {
    window.scrollTo({
      top: 10000,
      behavior: 'smooth'
    })
  }

  return (
    <DesktopNav>
      <DesktopNavLeft>
        <ArrowUpOutlined onClick={Press} />
      </DesktopNavLeft>

      <DesktopNavRight>
        <ul>
          <li><Link to="about" smooth="true "offset={-100}>About</Link></li>
          <li><Link to="projects" smooth="true "offset={-100}>Projects</Link></li>
          <li><Link onClick={Press2} >Contact</Link></li>
        </ul>
      </DesktopNavRight>
    </DesktopNav>
  );
}
