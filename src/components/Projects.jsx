import './Projects.scss'

export default function Projects(){
  return(
    <>
      <h1 className="section-header" style={{margin: '5px'}}>Proyectos</h1>
      <div className="container">
        <div className="project-container project">
          <a href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop src="src/assets/photos/Snapinsta.app_video_121528736_716159057099589_1786428663547344825_n.mp4" alt="" />
            <div className='link-overlay'>
              <h1>#01</h1>
            </div>
          </a>
        </div>
        <div className="project-container project">
            <a href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop src="src/assets/photos/Snapinsta.app_video_C241EE4CC1CD2FCC36DE554E53AEA4B7_video_dashinit.mp4" alt="" />
            <div className='link-overlay'>
              <h1>#02 <br /> COLORES <br /> FRIOS</h1>
            </div>
          </a>
        </div>
        <div className="project-container project">
          <a href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop src="src/assets/photos/Snapinsta.app_video_2946E6698D84399A1810364F104EBE8F_video_dashinit.mp4" alt="" />
            <div className='link-overlay'>
              <h1>#03</h1>
            </div>
          </a>
        </div>
        <div className="project-container project">
          <a href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop src="src/assets/photos/Snapinsta.app_video_121528736_716159057099589_1786428663547344825_n.mp4" alt="" />
            <div className='link-overlay'>
              <h1>#04</h1>
            </div>
          </a>
        </div>
        <div className="project-container project">
            <a href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop src="src/assets/photos/Snapinsta.app_video_C241EE4CC1CD2FCC36DE554E53AEA4B7_video_dashinit.mp4" alt="" />
            <div className='link-overlay'>
              <h1>#05</h1>
            </div>
          </a>
        </div>
        <div className="project-container project">
          <a href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop src="src/assets/photos/Snapinsta.app_video_2946E6698D84399A1810364F104EBE8F_video_dashinit.mp4" alt="" />
            <div className='link-overlay'>
              <h1>#06</h1>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}