import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lore from './pages/Lore';
import Rules from './pages/Rules';
import Events from './pages/Events';
import Ip from './pages/Ip';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/reglas" element={<Rules />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/ip" element={<Ip />} />
      </Routes>
    </Router>
  );
}

export default App;