import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Home />
        <Services />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;