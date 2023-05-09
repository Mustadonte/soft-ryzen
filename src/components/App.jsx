import { About } from './About';
import { Blog } from './Blog';
import { Cases } from './Cases';
import { Contact } from './Contact';
import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { Team } from './Team';

export const App = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </Container>
  );
};
