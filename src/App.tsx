import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Navbar />
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;