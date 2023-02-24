import React from 'react'
import "./Style/App.css";
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import PhotoContextProvider from './context/PhotoContext';
const App1 = () => {

  return (
    <>
      <PhotoContextProvider/>
        <Header />


        <Outlet/>
        
    </>
  )
}

export default App1