import Hero from './Hero';
import Header from './Header';
import Projects from './Projects';
import About from './About'

function App() {
  return (
    <div style={{position: 'relative'}}>
      <Header />
      <Hero />
      <Projects />
      <About />
      <div className='noise'></div>
    </div>
  )
}

export default App
