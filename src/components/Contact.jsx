import './Contact.scss'

export default function Contact(){
  return(
    <div className='contact'> 
      <form action="">
      <h1>Hablemos de tu proyecto</h1>
        <div>
          <label htmlFor="name">
            Nombre
            <input id="name" type="text" />
          </label>
          <label htmlFor="last-name">
            Apellido
            <input id="last-name" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input id="email" type="email" />
          </label>
          <label htmlFor="social-media">
            Redes
            <input placeholder='Spotify/YouTube/Instagram' id="social-media" type="text" />
          </label>
        </div>
        <label htmlFor="message">
          Mensaje
          <textarea cols={45} rows={10} id="message" type="text" />
        </label>
        <label htmlFor="submit-buttom">
          <input type="submit" value="Enviar" />
        </label>
      </form>
      <div>
        <img style={{maxWidth: '100%', maxHeight: '500px'}} src="src/assets/photos/341178225_883912402701690_3193155091112110281_n.jpg" alt="" />
      </div>
    </div>
  )
}