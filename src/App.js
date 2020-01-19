import React from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FoodRecognition from './components/FoodRecognition/FoodRecognition';
import Rank from './components/Rank/Rank.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';




import './App.css';

const app = new Clarifai.App({
  apiKey: '923853faa8cc48c683ebc28b4508f980'
 });

class App extends React.Component {
  constructor(){
    super();
    this.state={
      input:"",
      imageUrl: ""
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }
  infer = (concepts) =>{
    console.log("hello");
    var con_list;
    con_list = [];
    for(var i=0; i< concepts.length;i++){
      console.log(i);
      con_list.put(concepts[i].name)

    }
    console.log(con_list);
  }
  onButtonSubmit = () =>{
    this.setState({imageUrl:this.state.input});
    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict(this.state.input);
      })
      .then(response => {
        
        var concepts = response['outputs'][0]['data']['concepts'];
        this.infer(concepts);


      })
  }

 
  render(){
  return (
    <div className="App">
      
      
      <Navigation />
      <Rank />
      <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>

  
      <FoodRecognition imageUrl = {this.state.imageUrl} />
    </div>
  );
    }
}

export default App;
