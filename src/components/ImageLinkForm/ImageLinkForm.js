import React from 'react';



const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {

    return (
        <div id= "parent">
        <div>
            <p className = 'f3'>
                {'SmartFoodie helps high blood pressure patients find what to eat and what to avoid!'}
            </p>
        </div>
        <div className= 'center'>
            <div className = 'form pa4 br3 shadow-5'>
                <input placeholder = "Put URL of uploaded image here" className = 'f5 pa2 w-90 center' type = 'text'  onChange = {onInputChange}/>
                <h4> OR </h4>
                <input className = 'f4 pa2 w-90 center' type = 'file'  onChange = {onInputChange}/>
                

         </div>
         
            
            <button className = 'w-10 grow f4 link dib white bg-light-purple but' onClick = {onButtonSubmit}>Detect</button>
                
            
        </div>
        
        <h4> Note: The upload function does not work in this version. You need to put the url in the text box. You can upload your image to drive and get a link. 
            </h4> <h4> To get a URL for your image go to <a href="https://imgur.com/upload?beta"  target="_blank"> https://imgur.com/upload?beta </a> , upload your image and right click on the image and click on 'open image in new tab'. Copy and paste that page's link.</h4>
            <h4>For testing you can use any image from google.</h4>
        
        </div>
       

       
    );
}

export default ImageLinkForm;