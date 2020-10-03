import React, {Component} from 'react';

import './App.css';
import CurrentWord from './CurrentWord';
import Keyboard from './Keyboard'
class App extends Component{

  state ={
    wordCollection : ["wordpres","gare","train","glace","code","licorne"],
    currentWord: null,
    alphabet : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(''),
    usedLetter: [],
    win : 0, // 0:neutre / -1 perdu / 1 gagné
    attempt: 0 ,
    limitattempt:9
  
  }

  componentDidMount(){

    window.addEventListener("keyup",(e) => {
      
      if(e.keyCode===13){
        this.initGame()
      }
      
  })
    this.initGame()
  }
  
  clickLetter = (letter) => {
    console.log("=> " +letter)

    if(this.state.usedLetter.indexOf(letter) === -1 && this.state.attempt<this.state.limitattempt ){
      let attempt = this.state.attempt
        
      const usedLetter = [ letter, ...this.state.usedLetter]

      if( this.state.currentWord.indexOf(letter)===-1 ){
        attempt = this.state.attempt + 1
        
      }
      

      let win = 1
      for (let i = 0; i< this.state.currentWord.length;i++){
        if( usedLetter.indexOf(this.state.currentWord[i])===-1){
          win = 0
        }
      }


      if (attempt===this.state.limitattempt && win===0){
        win=-1
      }
    this.setState({usedLetter,attempt,win})

      
    }else {
      console.log("la lettre est déja traitée")
    }
    // decremente nombre de tentative

    //si lettre fait partie du mot bingo
      //affichage de lettre
      //changement etat
        //gagne ou perd


  }
  initGame = () => { 
      const motfinal=this.state.wordCollection[Math.floor(Math.random() * this.state.wordCollection.length)]
      this.setState({currentWord:motfinal,usedLetter:[],win:0,attempt:0})
  }
  render() {
    return (
      <div>
      <h1>Pendu</h1>
      win = {this.state.win}
      <br></br>
      {this.state.attempt}
      
      {
        (this.state.currentWord !==null) && 
          <CurrentWord 
            currentWord={this.state.currentWord}
            usedLetter = {this.state.usedLetter}
          />
        
      }
      {
      this.state.win===0 ?
      <Keyboard 
        alphabet={this.state.alphabet}
        action={this.clickLetter}
        usedLetter={this.state.usedLetter}
      />
      : this.state.win===1?
        <h1>Gagné</h1> :
       <h1>Perdu il fallait trouver {this.state.currentWord}</h1>
    }
      </div>
    
    )
  }
}


export default App;
