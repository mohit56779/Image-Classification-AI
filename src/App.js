import React from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
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
      imageUrl: "",
<<<<<<< HEAD
      route: 'signin'
=======
      change:""
>>>>>>> b5b04e06d47e32eb99289beb02a18b19198485b1
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(console.log)
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }
  // returns true or false based on if it's ok for patients or not
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
        
        // state changed to change check text
        this.setState({change:true});
        //console.log(check);
        //if(this.check === true){
        //  console.log("OK");
       // }
        //else{
        //  console.log("NOT OK!");
        //}



      })
  }
  

<<<<<<< HEAD
  onRouteChange = (route) => {
    this.setState({route: route});

  }
 
  render(){
  return (
    <div className="App">
      
      
      <Navigation onRouteChange={this.onRouteChange} />
      { this.state.route === 'signin'
        ? <Signin onRouteChange={this.onRouteChange} />
        : <div>
            <Rank />
            <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>

    
            <FoodRecognition imageUrl = {this.state.imageUrl} />
          </div>
      }
    </div>
  );
    }
=======
  render(){

  if(this.check === true){
    
    return (
      <div className="App">
        
        
        <Navigation />
        
        
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>


        <InferText inferText = "true"/>
        <FoodRecognition imageUrl = {this.state.imageUrl} />
      </div>
    );
      }

      else if(this.check === false){
    
        return (
          <div className="App">
            
            
            <Navigation />
            
            
            <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
            <InferText inferText = "false"/>
        
            <FoodRecognition imageUrl = {this.state.imageUrl} />
          </div>
        );
          }

          else{
    
            return (
              <div className="App">
                
                
                <Navigation />
                
                
                <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
        
                <InferText inferText = ""/>
                <FoodRecognition imageUrl = {this.state.imageUrl} />
              </div>
            );
              }
  
}
>>>>>>> b5b04e06d47e32eb99289beb02a18b19198485b1
}

export default App;
