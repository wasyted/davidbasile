import './Projects.scss'

export default function Projects(){
  return(
    <>
      <div class="container">
        <div class="project-container project">
          <video autoPlay muted loop src="src/assets/photos/Snapinsta.app_video_121528736_716159057099589_1786428663547344825_n.mp4" alt="" />
          <div className='link-overlay'>
            <h1>SOBRE MÍ</h1>
          </div>
        </div>
        <div class="project-container project">
          <video autoPlay muted loop src="src/assets/photos/Snapinsta.app_video_C241EE4CC1CD2FCC36DE554E53AEA4B7_video_dashinit.mp4" alt="" />
          <div className='link-overlay'>
            <h1>PROYECTOS</h1>
          </div>
        </div>
        <div class="project-container project">
          <video autoPlay muted loop src="src/assets/photos/Snapinsta.app_video_2946E6698D84399A1810364F104EBE8F_video_dashinit.mp4" alt="" />
          <div className='link-overlay'>
           <h1>CONTACTO</h1>
          </div>
        </div>
      </div>
    </>
  )
}