import React from 'react';



const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {

    return (
        <div id= "parent">
        <div>
            <p className = 'f3'>
                {'This Magic Brain will detect face in your pictures'}
            </p>
        </div>
        <div className= 'center'>
            <div className = 'form pa4 br3 shadow-5'>
                <input className = 'f4 pa2 w-90 center' type = 'tex' onChange = {onInputChange}/>
                

            </div>
            <button className = 'w-10 grow f4 link dib white bg-light-purple' onClick = {onButtonSubmit}>Detect</button>
            
        </div>
        </div>

       
    );
}

export default ImageLinkForm;