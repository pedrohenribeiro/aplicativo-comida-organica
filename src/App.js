import React from 'react';
import ClientesProdutos from './components/ClienteProdutos';
import ClienteProdutoPequeno from './components/ClienteProdutoPequeno';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<ClientesProdutos />}></Route>
          <Route exact path='/cestaPequena' element={<ClienteProdutoPequeno />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
