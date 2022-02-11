import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';
import './App.scss';
import Main from "./pages/Main/Main";
import Department from "./pages/Department/Department";

// #F35F51 - red
// #243A7E - blue
// #EFEFEF - white
// #424242 - gray


function App() {

  return (
    // <DepartmentContext.Provider value={}>
      <div className="App">
        <Container maxWidth="lg">
          <Routes>
            <Route 
              path="/" 
              element={<Main/>}/>
            <Route 
              path={`/department/:id/:title`} 
              element={<Department/>}/>
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
        </Container>
      </div>
    // </DepartmentContext.Provider>
  );
}

export default App;

