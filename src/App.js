import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AngelsDetails from './components/Pages/AngelsDetails';
import AngelsList from './components/Pages/AngelsList';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/angelsList" element={<AngelsList />} />
    <Route path="/angelDetails" element={<AngelsDetails />} />
  </Routes>
);

export default App;
