import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ContactPage} from "./pages/ContactPage.tsx";
import {LegalPage} from "./pages/LegalPage.tsx";

function App() {
  return (
      <Router>
        <div className="flex min-h-screen flex-col w-full dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/legal" element={<LegalPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;