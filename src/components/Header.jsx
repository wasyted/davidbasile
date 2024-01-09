import Clock from './Clock'
import './Header.css'

export default function Header(){
	return (
		<header>
			<div className='header-title'>
				<h1>david basile</h1>
				<p>director audiovisual</p>
			</div>
			<div className='header-clock'>
				<h1>buenos aires, argentina</h1>
				<p><Clock /> GMT-3</p>
			</div>
			<ul className='header-links'>
				<li>
					inicio
				</li>
				<li>
					proyectos
				</li>
				<li>
					contacto
				</li>
			</ul>
		</header>
	)
}