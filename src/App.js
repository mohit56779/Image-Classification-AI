import React from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FoodRecognition from './components/FoodRecognition/FoodRecognition';
import InferText from './components/InferText/InferText.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';




import './App.css';

const app = new Clarifai.App({
  apiKey: '923853faa8cc48c683ebc28b4508f980'
 });

class App extends React.Component {
  constructor(){
    super();
    this.check = "";
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
    //var con_list;
    //con_list = [];
    for(var i=0; i< concepts.length;i++){
      //console.log(i);
      //con_list.put(concepts[i].name)
      var string_1 = concepts[i].name;
      if (string_1.includes("salt")
          || string_1.includes("fat") 
          || string_1.includes("sweet") 
          || string_1.includes("carb") 
          || string_1.includes("sodium") 
          || string_1.includes("crystal") 
          || string_1.includes("sugar")){
            return false;
          }

    }
    return true;
  }
  onButtonSubmit = () =>{
   // console.log("submit");
    this.setState({imageUrl:this.state.input});
    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict(this.state.input);
      })
      .then(response => {
        
        var concepts = response['outputs'][0]['data']['concepts'];
      //  console.log(concepts);
        this.check = this.infer(concepts);
        //console.log(check);
        if(this.check === true){
          console.log("OK");
        }
        else{
          console.log("NOT OK!");
        }



      })
  }
  

  render(){
  if(this.check === true){
    
    return (
      <div className="App">
        
        
        <Navigation />
        
        <InferText inferText = "true"/>
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>

    
        <FoodRecognition imageUrl = {this.state.imageUrl} />
      </div>
    );
      }

      else if(this.check === false){
    
        return (
          <div className="App">
            
            
            <Navigation />
            
            <InferText inferText = "false"/>
            <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
    
        
            <FoodRecognition imageUrl = {this.state.imageUrl} />
          </div>
        );
          }

          else{
    
            return (
              <div className="App">
                
                
                <Navigation />
                
                <InferText inferText = ""/>
                <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
        
            
                <FoodRecognition imageUrl = {this.state.imageUrl} />
              </div>
            );
              }
  
}
}

export default App;
