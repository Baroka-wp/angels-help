import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AngelsDetails from './components/Pages/AngelsDetails';
import AngelsList from './components/Pages/AngelsList';
import { fetchAgels } from './components/redux/angels/angels';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAgels());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/angelsList" element={<AngelsList />} />
      <Route path="/angelsDetails" element={<AngelsDetails />} />
    </Routes>
  );
};

export default App;
