import { useState } from 'react'
import SideMenu from './SideMenu';
import Clock from './Clock'
import './Header.scss'

export default function Header(){
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
	return (
		<header>
			<div>
				{/* <div className='header-title'>
					<h1>david basile</h1>
					<p>director audiovisual</p>
				</div> */}
				<div className='header-clock'>
					<h1>buenos aires, argentina</h1>
					<p><Clock /> GMT-3</p>
				</div>
			</div>
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', maxHeight: '40px', flex: 1}}>
				<img style={{maxWidth: '150px'}} src="src/assets/logo-small.png" alt="" />
			</div>
			<div style={{flex: 1, justifySelf: 'end', display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
				<button onClick={toggleSideMenu}><img src="src/assets/kisspng-hamburger-button-menu-computer-icons-5aec355f4b22d7.2596969515254295993078.png" alt="" /></button>
				<SideMenu isOpen={isSideMenuOpen} onClose={toggleSideMenu} />
			</div>
			{/* <ul style={{flex: 1}} className='header-links'>
			<li>
					<a href="">inicio</a>
				</li>
				<li>
					<a href="">proyectos</a>
				</li>
				<li>
					<a href="">contacto</a>
				</li>
			</ul> */}
		</header>
	)
}