
import './App.css';
import Footer from './navigation/Footer'
import Navigation from './navigation/Navigation'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Experience from './pages/experience/Experience';
import Landing from './pages/landing/Landing';
import Projects from './pages/projects/Projects'



function App() {






  return (
    

    <div>
      

      <Navigation></Navigation>

      <Landing></Landing>

      {/* <About></About> */}
      
      <Projects></Projects>

      <Experience></Experience>

      <Contact></Contact>

      <Footer></Footer> 

    </div>
  );
}

export default App;
