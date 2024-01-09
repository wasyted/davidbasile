import './Hero.scss'

function Hero() {
  return (
		<div className='hero'>
			<div className='hero-container'>
				<div className='hero-title-left'>
					<h3><span>davidbasile</span></h3>
				</div>
				<img className='hero-logo' src="src/assets/logo-tall.png" alt="" />
				<div className='hero-title-right'>
					<h3>director audiovisual</h3>
				</div>
			</div>
			<div className='hero-image'>
			</div>
		</div>
		)
}

export default Hero