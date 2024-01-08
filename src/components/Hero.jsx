import './Hero.scss'

function Hero() {
  return (
		<div className='hero'>
			<div className='hero-container'>
				<div className='hero-title'>
					<img style={{maxWidth: '100%', filter: 'invert(100%)'}} src="src/assets/logo-small.png" alt="" />
					<h1>DAVID BASILE</h1>
					<h1>PRODUCTOR AUDIOVISUAL</h1>
					<h1>CAMAROGRAFO</h1>
					<h1>PRODUCTOR</h1>
				</div>
			</div>
			<div className='hero-image'>
				<img src="src/assets/photos/MAB_3056.jpg" alt="" />
			</div>
		</div>
		)
}

export default Hero