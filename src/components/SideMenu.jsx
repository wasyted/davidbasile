import React from 'react';
import './SideMenu.scss';  // Import the corresponding SCSS file

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`sideMenu ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose} className='closeButton'>
        <img style={{maxWidth: '25px'}} src="src/assets/hyped/Chrome Shapes FREE SAMPLE/01_chrome_shape.png" alt="" />
      </button>
      <ul className='menuList'>
			  <li>
					<a href="">inicio</a>
				</li>
        <li>
					<a href="">proyectos</a>
				</li>
				<li>
					<a href="">sobre mi</a>
				</li>
        <li>
					<a href="">galería</a>
				</li>
				<li>
					<a href="">contacto</a>
				</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default SideMenu;