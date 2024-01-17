import Hero from './Hero';
import Header from './Header';
import Projects from './Projects';
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery';
import WavesProject from './WavesProject';

function App() {
  return (
    <div style={{position: 'relative'}}>
      <Header />
      <Hero />
      <Projects />
      <h1 className="section-header" style={{margin: '5px', marginBottom: '10px'}}>Sobre mi</h1>
      <About />
      <h1 className="section-header" style={{backgroundColor: 'var(--black)', color: 'var(--white)', borderColor: 'var(--white)'}}>Conocé Visual Waves</h1>
      <WavesProject />
      <h1 className="section-header" style={{margin: '5px', marginBottom: '10px'}}>Contacto</h1>
      <Contact />
      <Gallery />
      <div className='noise'></div>
    </div>
  )
}

export default App
