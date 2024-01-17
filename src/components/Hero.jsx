import './Hero.scss';

function Hero() {
  return (
		<div className='hero'>
			<div className='hero-container'>
				{/* <div className='hero-title-left'>
					<h3><span>davidbasile</span></h3>
				</div>
				<img className='hero-logo' src="src/assets/logo-tall.png" alt="" />
				<div className='hero-title-right'>
					<h3>director audiovisual</h3>
				</div> */}
				<h1>david <br></br>
				basile <br></br>
				director <br></br>
				audiovisual</h1>
				<div>
					<a href="">
						<img src="src/assets/instagram.png" alt="" />@dav1dbasile
					</a>
					<a href="">
						<img src="src/assets/youtube-icon.png" alt="" />Playlist
					</a>
				</div>
			</div>
			<ul style={{textAlign: 'end'}}>
					<li><a href="" target="_blank" rel="noopener noreferrer">galería</a></li>
					<li><a href="" target="_blank" rel="noopener noreferrer">sobre mi</a></li>
					<li><a href="" target="_blank" rel="noopener noreferrer">contacto</a></li>
					<li><a href="" target="_blank" rel="noopener noreferrer">proyectos</a></li>
				</ul>
				<div className='bg-asset'>
        <video autoPlay muted loop src="src/assets/photos/Snapinsta.app_video_2C45A51F4D3850D5215F6F40DAA3FBA0_video_dashinit.mp4" alt="" />
      </div>
		</div>
		)
}

export default Hero