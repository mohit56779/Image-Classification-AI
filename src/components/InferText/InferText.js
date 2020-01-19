import React from 'react';

const InferText = (check) => {
    console.log(check);
    if (check.inferText === "true") {
        return (
            <div className = "center">
                <h2> "This food is SAFE to eat for high blood pressure condition!" </h2>
    
            </div>
        );
    }
    else if (check.inferText === "false"){
        return (
            <div className = "center">
                <h2> "This food is NOT SAFE to eat for high blood pressure condition. Please Avoid it!" </h2>
    
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
