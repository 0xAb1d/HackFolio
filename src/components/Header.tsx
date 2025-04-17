
import React from 'react';

const Header = () => {
  return (
    <div className="terminal-header">
      <span className="terminal-circle bg-red-500"></span>
      <span className="terminal-circle bg-yellow-500"></span>
      <span className="terminal-circle bg-green-500"></span>
      <span className="text-xs text-gray-400 ml-2">$ ls -la ~/abid-ahmad</span>
    </div>
  );
};

export default Header;
