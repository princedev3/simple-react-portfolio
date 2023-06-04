import './App.css';
import Portfolio from './components/Portfolios/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import ButtonToTop from './ButtonToTop';
function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <ButtonToTop/>
    </div>
  );
}
//{}[]
export default App;
