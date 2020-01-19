import React from 'react';

const InferText = (check) => {
    console.log(check);
    if (check.inferText === "true") {
        return (
            <div className = "center">
                <h2> "This food is okay to eat!" </h2>
    
            </div>
        );
    }
    else if (check.inferText === "false"){
        return (
            <div className = "center">
                <h2> "This food is NOT okay to eat!" </h2>
    
            </div>
        );

 
    }

    else if (check.inferText === ""){
        return (
            <div className = "center">
                <h2> Put an image of a Food. </h2>
    
            </div>
        );

 
    }
    
    


}

export default InferText;
