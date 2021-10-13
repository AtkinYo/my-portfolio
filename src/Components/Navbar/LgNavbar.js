import { DesktopNav, DesktopNavLeft, DesktopNavRight } from "./Navbar.style";
import { ArrowUpOutlined } from '@ant-design/icons';

export default function DesktopNavbar({ className }) {
  return (
    <DesktopNav>
      <DesktopNavLeft>
        <ArrowUpOutlined />
      </DesktopNavLeft>

      <DesktopNavRight>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </DesktopNavRight>
    </DesktopNav>
  );
}
