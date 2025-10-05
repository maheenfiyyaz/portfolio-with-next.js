import Header from '../../components/Header';
import Home from '../../components/Home';
import About from '../../components/About';
import Tools from '../../components/Tools';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Tools />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}