import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';


import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      input:""
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onButtonSubmit = () =>{
    console.log("click");
    app.models.predict("bd367be194cf45149e75f01d59f77ba7", "https://samples.clarifai.com/food.jpg").then(
      function(response) {
      // do something with response
    },
      function(err) {
      // there was an error
    }
  );
  }
  render(){
  return (
    <div className="App">
      
      
      <Navigation />
      <Rank />
      <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>

      {/*}
      <FaceRecognition />*/}
    </div>
  );
    }
}

export default App;
