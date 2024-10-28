import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'; 

export default function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
      </>
  );
}
