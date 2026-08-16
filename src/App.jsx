import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'


import Navbar from './Components/Navbar'
import Footer from './Components/Footer'



import Homepage from './Pages/Home'
import Aboutpage from './Pages/About'
import Contactpage from './Pages/Contact'
import Projectpage from './Pages/Projects'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/projects" element={<Projectpage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App
