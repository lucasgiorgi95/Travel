import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <>
      
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes>
    </>
  );
}

export default App;
