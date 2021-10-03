import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

function Navbar({ className }) {
  const Press = () => {
    alert('Hello');
  };

  return (
    <div>
      <nav className={className}>
        <MenuOutlined onClick={Press} />
      </nav>
    </div>
  );
}

export default Navbar;
