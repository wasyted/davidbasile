import Hero from './Hero';
import Header from './Header';
import Projects from './Projects';
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery';

function App() {
  return (
    <div style={{position: 'relative'}}>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Gallery />
      <div className='noise'></div>
    </div>
  )
}

export default App
