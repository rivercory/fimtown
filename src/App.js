import { Route, Routes } from 'react-router-dom';
import './components/css/App.css';
import Home from './pages/Home';
import Bae from './pages/board/Bae';
import Haewon from './pages/board/Haewon';
import Jiwoo from './pages/board/Jiwoo';
import Kyujin from './pages/board/Kyujin';
import Lily from './pages/board/Lily';
import Sullyoon from './pages/board/Sullyoon';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/bae" element={<Bae />} />
          <Route path="/board/haewon" element={<Haewon />} />
          <Route path="/board/jiwoo" element={<Jiwoo />} />
          <Route path="/board/kyujin" element={<Kyujin />} />
          <Route path="/board/lily" element={<Lily />} />
          <Route path="/board/sullyoon" element={<Sullyoon />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
