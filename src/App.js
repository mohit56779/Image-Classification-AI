import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Rank />
      <ImageLinkForm />
      {/*}
      <FaceRecognition />*/}
    </div>
  );
}

export default App;
