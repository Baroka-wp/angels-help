import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AngelsDetails from './components/Pages/AngelsDetails';
import AngelsList from './components/Pages/AngelsList';
import { fetchAgels } from './redux/angels/angels';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAgels());
  }, []);

  return (
    <Routes>
      <Route path="/angels-help" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/angels-help/angelsList" element={<AngelsList />} />
      <Route path="/angels-help/angelsDetails" element={<AngelsDetails />} />
    </Routes>
  );
};

export default App;
