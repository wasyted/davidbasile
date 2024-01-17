import './About.scss'

export default function About(){
  return(
    <div className='about'>
      <div>
        <div className='about-image-container'>
          <img src="src/assets/photos/Snapinsta.app_382272747_3649193942036170_7882138028072430043_n_1080.jpg" alt="" />
        </div>
        <div className='about-container'>
          <h1>
            Soy David Basile, vivo en Buenos Aires y tengo XX años. <br /><br />
            Soy parte del mundo audiovisual hace más de 8 años; trabajé como asistente, camarografo, editor, productor y actualmente me desarrollo como director audiovisual. <br></br><br></br> 
            Durante los ultimos 3 años me dediqué de lleno a la dirección de videoclips para varios artistas de diferentes géneros. 
            <br></br><br></br>
            Con mi trabajo busco generar un ambiente de comodidad para todo el equipo, contar una historia de calidad en cada video, adaptarme a la esencia de cada artista, llevar la música un nivel mas arriba con los videoclips.
          </h1>
        </div>
      </div>
    </div>
  )
}