import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Main from "./pages/Main/Main";
import Department from "./pages/Department/Department";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<Main/>}/>
          <Route 
            path="/department" 
            element={<Department/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </div>
  );
}

export default App;

