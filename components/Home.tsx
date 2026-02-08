import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;