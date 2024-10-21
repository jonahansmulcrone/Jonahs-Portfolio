import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';


function App() {
  return (

    <div className="App">
      <Header />
      <div className='links-group'>
        <ul>
          <li><a href="https://github.com/jonahansmulcrone" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" color="#ffffff" />
          </a></li>
          <li><a href="https://www.linkedin.com/in/jonah-mulcrone-964037198/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#ffffff" />
          </a></li>
        </ul>
      </div>
      <div className='links-line'></div>
      <div className='scroll-line'></div>
      <div className='email'>jonahmulcrone@gmail.com</div>
      <LandingPage />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
