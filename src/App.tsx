import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="flex min-h-screen flex-col w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;