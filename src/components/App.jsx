import Hero from './Hero';
import Header from './Header';
import Projects from './Projects';

function App() {
  return (
    <div style={{backgroundColor: '#000', position: 'relative'}}>
      <Header />
      <Hero />
      <Projects />
      <div className='noise'></div>
    </div>
  )
}

export default App
