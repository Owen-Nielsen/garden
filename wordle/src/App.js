import React, {useState, useEffect} from 'react';
import './App.css';
import './config/firebase.js';
import {words} from './words.js';
import {Auth} from './components/auth.js';




function App() {

  var guessesLeft = 5;
  var guessesUsed = 0;
  let word = "";
  var row = 1;
  var col= 0;
  var record = 0;

  const getWords = async () => {
    var num =Math.floor(Math.random() * 2309);
    word = words[num];
    console.log(word);
    
  }

  const resetBoxes = async () => {
    var guessesLeft = 5;
    var guessesUsed = 0;
    let word = "";

    alert("Resetting the game!");



    for(row = 1; row < 6; row++){
      for(col = 1; col < 6; col++){
        document.getElementById(row + "."+ col).style.backgroundColor = "white";
        document.getElementById(row +"."+ col).ariaReadOnly = true;
        document.getElementById(row +"."+ col).value = "";
      }
    }

    row = 1;
    col = 0;
    
  };



  const Reset = async () => {
    resetBoxes();
    getWords();
  };

  useEffect(() => {
    Reset();
  }, []);

  const Submit = async () => {

      
    

      for(col = 1; col < 6; col++){
        
        var correct = 0;
        var cell = document.getElementById(row + "." + col);
        
        
        if(word.includes(cell.value.toLowerCase()) && cell.value.toLowerCase() !== word.charAt(col - 1) && cell.value !== ""  ){
          cell.style.backgroundColor = "yellow";
          cell.ariaReadOnly = true;
        }
        else if(cell.value.toLowerCase() === word.charAt(col - 1) && cell.value !== "" ){
          cell.style.backgroundColor = "green";
          cell.ariaReadOnly = true;
          correct = correct + 1;
        }
        else if(cell.value !== "" ){
          cell.style.backgroundColor = "grey";
          cell.ariaReadOnly = true;
        }
      }

      for(col = 1; col < 6; col++){
        if(guessesUsed === row){
          document.getElementById(row + "." + col).ariaReadOnly = true;
          var nextRow = row + 1;
          document.getElementById(nextRow + "." + col).ariaReadOnly = false;
        }
      }

      console.log("this works");

      guessesLeft = guessesLeft - 1;
      guessesUsed = guessesUsed + 1;

      if(document.getElementById(row + "." + 1).value.toLowerCase() === word.charAt(0) && document.getElementById(row + "." + 1).value !== "" && document.getElementById(row + "." + 2).value.toLowerCase() === word.charAt(1) && document.getElementById(row + "." + 2).value !== ""  && document.getElementById(row + "." + 3).value.toLowerCase() === word.charAt(2) && document.getElementById(row + "." + 3).value !== "" &&document.getElementById(row + "." + 4).value.toLowerCase() === word.charAt(3) && document.getElementById(row + "." + 4).value !== ""  && document.getElementById(row + "." + 5).value.toLowerCase() === word.charAt(4) && document.getElementById(row + "." + 4).value !== "" ){
        record = record + 1;
        window.alert("You win! The word was " + word + "!" + " Your record is " + record);
      } else if(guessesLeft === 0){ 
        record = 0;
        window.alert("You lost! The word was " + word + "!" + " Your record is " + record);
      }

    
    row = row + 1;
    col = col + 1;

   
  }



  return (
    <div className="App">
      <div className="top-bar">
        <div className="user-profile">User Profile</div>
        <Auth />
      </div>
      <div className="info-grid">
        <button className="grid-item">Record</button>
        <button className="grid-item">Infinite</button>
        {/* Add more grid items as needed */}
      </div>
      
      <br />

      <div className="game-board">
        <div className="game-board-row" id="1">
          <input className="game-board-cell" maxlength="1" id="1.1"/>
          <input className="game-board-cell" maxlength="1" id="1.2"/>
          <input className="game-board-cell" maxlength="1" id="1.3"/>
          <input className="game-board-cell" maxlength="1" id="1.4"/>
          <input className="game-board-cell" maxlength="1" id="1.5"/>
        </div>
        <div className="game-board-row" id="2">
          <input className="game-board-cell" maxlength="1"  id="2.1"/>
          <input className="game-board-cell" maxlength="1"  id="2.2"/>
          <input className="game-board-cell" maxlength="1"  id="2.3"/>
          <input className="game-board-cell" maxlength="1"  id="2.4"/>
          <input className="game-board-cell" maxlength="1"  id="2.5"/>
        </div>
        <div className="game-board-row" id="3">
          <input className="game-board-cell" maxlength="1"  id="3.1"/>
          <input className="game-board-cell" maxlength="1"  id="3.2"/>
          <input className="game-board-cell" maxlength="1"  id="3.3"/>
          <input className="game-board-cell" maxlength="1"  id="3.4"/>
          <input className="game-board-cell" maxlength="1"  id="3.5"/>
        </div>
        <div className="game-board-row" id="4">
          <input className="game-board-cell" maxlength="1"  id="4.1"/>
          <input className="game-board-cell" maxlength="1"  id="4.2"/>
          <input className="game-board-cell" maxlength="1"  id="4.3"/>
          <input className="game-board-cell" maxlength="1"  id="4.4"/>
          <input className="game-board-cell" maxlength="1"  id="4.5"/>
        </div>
        <div className="game-board-row" id="5">
          <input className="game-board-cell" maxlength="1"  id="5.1"/>
          <input className="game-board-cell" maxlength="1"  id="5.2"/>
          <input className="game-board-cell" maxlength="1"  id="5.3"/>
          <input className="game-board-cell" maxlength="1"  id="5.4"/>
          <input className="game-board-cell" maxlength="1"  id="5.5"/>
        </div>
        <div className="game-board-row">
          <button className="game-board-cell" onClick={Submit}>Submit</button>
          <button className="game-board-cell" onClick={Reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;