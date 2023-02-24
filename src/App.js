import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Api/Home";
import About from "./components/About";
import Contactus from "./components/Contactus";
import FetchApi from "./components/Api/FetchApi";
import Axiosapi from "./components/Api/Axiosapi";
import Form from "./components/Api/Form";
import Array1 from "./components/Api/Array1";
import Calculator from "./components/Calculator/Calculator";


import App1 from "./components/Snapshort/App1";
import Item from "./components/Snapshort/components/Item";
import NotFound from "./components/Snapshort/components/NotFound";


import App2 from "./components/Weather/App2";
import Home2 from "./components/Api/Home2";
import App3 from "./components/EmojisSearch/App3";

function App() {
  
  return (
    <div >
      <Router>
        <Navbar/>
    
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home2/>}>
              <Route path="fetchapi" element={<FetchApi/>}/>
              <Route path="axiosapi" element={<Axiosapi/>}/>
              <Route path="form" element={<Form/>}/>
              <Route path="array1" element={<Array1/>}/>
            
          </Route>
          
          
          <Route path="/about" element={<About/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
         
         {/* calculator */}
          <Route path="/calculator" element={<Calculator/>}/>
          

          {/* snapshort */}
          <Route path="/snapshort" element={<App1/>}>
            <Route path="mountain" element={<Item/>}/>
            <Route path="beaches" element={<Item/>}/>
            <Route path="birds" element={<Item/>}/>
            <Route path="food" element={<Item/>}/>
            <Route component={NotFound} />
          </Route>

          {/* Weather */}

          <Route path="/weather" element={<App2/>}/>

          {/* Emojis Search */}
          <Route path="/emojisearch" element={<App3/>}/>






        </Routes>
      </Router>
    </div>
  );
}

export default App;
