import './Hero.css'

function Hero() {
  return (
		<div className='hero'>
			<div className='hero-container'>
				<div>
					<img className='hero-logo' src="src/assets/logo-small.png" alt="" />
				</div>
				<div>
					<img className='ray1' src="src/assets/30.png" alt="" />
				</div>
				<div>
					<img className='ray2' src="src/assets/30.png" alt="" />
				</div>
			</div>
			{/* <img src="src/assets/55.png" alt="" className="chain1" /> */}
			<video className='bg-asset' autoPlay loop muted src="src/assets/videos/COLORES FRIOS VIDEOCLIP OFICIAL.mp4"></video>
			{/* <img className='bg-asset' src="src/assets/Liquid Metal_0000s_0024_8.jpg" alt="" /> */}
    </div>
  )
}

export default Hero