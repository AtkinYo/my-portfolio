import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

function Navbar({ className }) {
  return (
    <div>
      <nav className={className}>
        <MenuOutlined />
      </nav>
    </div>
  );
}

export default Navbar;
