import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeNews from './component/HomeNews';
import DetailArt from './component/DetailArt';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar />
     
     <Routes>
      <Route path='/' element={<HomeNews />} />
      <Route path='/:idArt' element={<DetailArt />} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
