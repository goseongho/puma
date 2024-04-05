import './Styles/App.css';
import './Styles/reset.css';
import './Styles/response.css';
// Router
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import MainVisual from './Pages/MainVisual';
import ProductAll from './Pages/ProductAll';
import Login from './Pages/Login';
import PrivateRoute from './Route/PrivateRoute';
import { useEffect, useState } from 'react';
import ProductCard from './Components/ProductCard';
import ProductDetail from './Pages/ProductDetail';

function App() {
  const [authentication, setAuthentication]=useState(false);
  useEffect(()=>{
    console.log('aaa',authentication);
  },[authentication])
  return (
    <div>
     <Header/>
     <Routes>
        <Route path='/' element= {<ProductAll/>} />
        <Route path='/login' element={<Login setAuthentication={setAuthentication}/>}/>
        <Route path='/product/:id' element={<PrivateRoute authentication={authentication}/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
