import './App.css'
import Nav from'./components/nav_compo/Nav';
import About from './components/about_compo/About';
import Header from './components/header_compo/Header';
import Experience from './components/experience_compo/Experience';
import Services from './components/services_compo/Services';
import Portfolio from './components/portfolio_compo/Portfolio';
import Testimonials from './components/testimonials_compo/Testimonials';
import Contact from './components/contact_compo/Contact';
import Footer from './components/footer_compo/Footer';

function App() {
  return (
    <h1>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </h1>
  );
}

export default App;
