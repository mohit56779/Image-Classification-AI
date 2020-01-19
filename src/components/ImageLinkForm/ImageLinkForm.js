import React from 'react';



const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {

    return (
        <div id= "parent">
        <div>
            <p className = 'f3'>
                {'SmartFoodie will help you know what you can eat!'}
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
        
        
        
        </div>
       

       
    );
}

export default ImageLinkForm;