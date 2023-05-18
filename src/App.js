import { useState } from 'react';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false)
  return (

      <div className="App">
        <Nav />
        <Header isModalOpened = {isModalOpened} setIsModalOpened = {setIsModalOpened}/>
        <Modal isModalOpened = {isModalOpened} setIsModalOpened = {setIsModalOpened} />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Footer />
      </div>

    
  );
}

export default App;
