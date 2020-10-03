import React from 'react';

import './App.css';


const CurrentWord = ({currentWord,usedLetter}) => {
    
    return (
        
        <div> 
          {
          currentWord.split('').map(
              (letter,key)=> {

                let status ="finded"

                if(usedLetter.indexOf(letter) ===-1) {
                    status="notfinded"
                }
                  return <span key={"letter_"+key} className={status}>
                      {status === "finded" ? letter : "?" }
                  </span>
              }
          )
          }
          
        </div>

    )
}

export default CurrentWord