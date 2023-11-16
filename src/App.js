
//import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './ui-components/Main.jsx';
import Dash from './elements/Dash.jsx';
import List from './elements/List.jsx';
import Form from './elements/Form.jsx';


const App=()=> {
  return (
    <div>
     <Routes>
        <Route path="/EmployeeAPP" element={<Dash/>}/>
        <Route path="/detail" element={<Main child ={<List/>}/>}/>
        <Route path="/add" element={<Main child ={<Form/>}/>}/>
</Routes>
    </div>
  );
}

export default App;
