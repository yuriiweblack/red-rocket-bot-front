import React from 'react';
import './App.css';
import Events from './Components/Events';
import Certificates from './Components/Certificates';
import SignIn from './Components/SignIn';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <Events />
    <Certificates />
    <SignIn />
    </div>
  );
}

export default App;
