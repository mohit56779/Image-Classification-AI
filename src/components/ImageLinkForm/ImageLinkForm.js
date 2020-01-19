import React from 'react';



const ImageLinkForm = () => {

    return (
        <div id= "parent">
        <div>
            <p className = 'f3'>
                {'This Magic Brain will detect face in your pictures'}
            </p>
        </div>
        <div className= 'center'>
            <div className = 'form center pa4 br3 shadow-5'>
                <input className = 'f4 pa2 w-70 center' type = 'text' />

            </div>
            <button className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
        </div>
        </div>

       
    );
}

export default ImageLinkForm;