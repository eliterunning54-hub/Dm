import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Services from './pages/Services';
import Refit from './pages/Refit';
import Rigging from './pages/Rigging';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        {/* pt-24 compensa a altura do header fixed (py-6 = 24px top+bottom + logo) */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/refit" element={<Refit />} />
            <Route path="/rigging" element={<Rigging />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
