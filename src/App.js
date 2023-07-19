import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import Product from './components/pages/Product/Product';
import SignUp from './components/pages/SignUp/SignUp';

function App() {
  return (
    <>
      
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/services' exact Component={Services}/>
          <Route path='/products' exact Component={Product}/>
          <Route path='/sign-up' component={SignUp} />
        </Routes>
    </>
  );
}

export default App;
