import { Contact } from './components/contact/Contact';
import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import Services from './components/services/Services';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import { Testimonials } from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
