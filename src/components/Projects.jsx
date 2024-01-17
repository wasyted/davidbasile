import React, { useRef } from 'react';
import './Projects.scss';

export default function Projects() {
  const videoRefs = Array.from({ length: 6 }, () => useRef(null));

  const playVideo = (index) => () => {
    if (videoRefs[index].current) {
      videoRefs[index].current.playbackRate = 0.8; // Adjust the playback speed as needed
      videoRefs[index].current.play();
    }
  };

  const pauseVideo = (index) => () => {
    if (videoRefs[index].current) {
      const video = videoRefs[index].current;
      video.playbackRate = 1; // Reset playback rate to normal
      video.pause();
    };
  }
  return(
    <>
      <h1 className="section-header" style={{margin: '5px'}}>Proyectos</h1>
      <div className="container">
        <div className="project-container project">
          <a 
            onMouseOver={playVideo(0)} 
            onMouseOut={pauseVideo(0)} 
            href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" 
            target="_blank" 
            rel="noopener noreferrer">
            <video
              ref={videoRefs[0]}
              loading="lazy" 
              muted 
              loop 
              src="src/assets/photos/Snapinsta.app_video_121528736_716159057099589_1786428663547344825_n.mp4" 
              alt="" />
            <div className='link-overlay'>
              <h1>#01 <br /> VISUAL <br /> WAVES </h1>
            </div>
          </a>
        </div>
        <div className="project-container project">
            <a
              onMouseOver={playVideo(1)} 
              onMouseOut={pauseVideo(1)} 
              href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" 
              target="_blank" 
              rel="noopener noreferrer">
            <video
              ref={videoRefs[1]}
              loading="lazy" 
              muted 
              loop 
              src="src/assets/photos/Snapinsta.app_video_C241EE4CC1CD2FCC36DE554E53AEA4B7_video_dashinit.mp4" 
              alt="" />
            <div className='link-overlay'>
              <h1>#02 <br /> COLORES <br /> FRIOS</h1>
            </div>
          </a>
        </div>
        <div className="project-container project">
          <a 
            href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseOver={playVideo(2)} 
            onMouseOut={pauseVideo(2)} >
            <video
              ref={videoRefs[2]}
              loading="lazy" 
              muted 
              loop 
              src="src/assets/photos/Snapinsta.app_video_2946E6698D84399A1810364F104EBE8F_video_dashinit.mp4" 
              alt="" />
            <div className='link-overlay'>
              <h1>#03</h1>
            </div>
          </a>
        </div>
        <div className="project-container project">
          <a 
            onMouseOver={playVideo(3)} 
            onMouseOut={pauseVideo(3)} 
            href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" 
            target="_blank" 
            rel="noopener noreferrer">
            <video
              style={{
                transform: 'scale(250%)'
              }}
              ref={videoRefs[3]}
              loading="lazy" 
              muted 
              loop 
              src="src/assets/photos/Snapinsta.app_video_GE3WsRB80WTG-W8CABJWj3x87OoUbq_EAAAF.mp4" 
              alt="" />
            <div className='link-overlay'>
              <h1>#04 <br /> DIABLA</h1>
            </div>
          </a>
        </div>
        <div className="project-container project">
            <a
              onMouseOver={playVideo(4)} 
              onMouseOut={pauseVideo(4)} 
              href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" 
              target="_blank" 
              rel="noopener noreferrer">
            <video
              style={{
                transform: 'scale(320%)'
              }}
              ref={videoRefs[4]}
              loading="lazy" 
              muted 
              loop 
              src="src/assets/photos/Snapinsta.app_video_322424068_633668278961237_7802048398855171815_n.mp4" 
              alt="" />
            <div className='link-overlay'>
              <h1>#05 <br /> CAFÉ CON <br /> MEDIALUNAS</h1>
            </div>
          </a>
        </div>
        <div className="project-container project">
          <a 
            href="https://www.youtube.com/channel/UCwqBITNdfBy6j1UwWz24R8Q" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseOver={playVideo(5)} 
            onMouseOut={pauseVideo(5)} >
            <video
              ref={videoRefs[5]}
              loading="lazy" 
              muted 
              loop 
              src="src/assets/photos/Snapinsta.app_video_2946E6698D84399A1810364F104EBE8F_video_dashinit.mp4" 
              alt="" />
            <div className='link-overlay'>
              <h1>#03</h1>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}