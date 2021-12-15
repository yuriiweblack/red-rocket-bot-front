import React from 'react';
import './App.css';
import Events from './Components/Events';
import Certificates from './Components/Certificates';
import SignIn from './Components/SignIn';
import EventsFunctional from "./Components/EventsEdit";

function App() {
  return (
    <div className="App">
    <Events />
    <EventsFunctional />
    <Certificates />
    <SignIn />
    </div>
  );
}

export default App;
