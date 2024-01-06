import { Route, Routes } from 'react-router-dom';
import './components/css/App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Chaewon from './pages/board/Chaewon';
import Eunchae from './pages/board/Eunchae';
import Kazuha from './pages/board/Kazuha';
import Sakura from './pages/board/Sakura';
import Yunjin from './pages/board/Yunjin';

function App() {
    return (
        <>
            <Navbar />
            <div className="ml-4 mr-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/board/chaewon" element={<Chaewon />} />
                    <Route path="/board/eunchae" element={<Eunchae />} />
                    <Route path="/board/kazuha" element={<Kazuha />} />
                    <Route path="/board/sakura" element={<Sakura />} />
                    <Route path="/board/yunjin" element={<Yunjin />} />
                </Routes>
            </div>
        </>
    )
}

export default App;
