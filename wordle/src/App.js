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
    var num = Math.floor(Math.random() * 2309);
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


  var startTime; // to keep track of the start time
  var stopwatchInterval; // to keep track of the interval
  var elapsedPausedTime = 0; // to keep track of the elapsed time while stopped
  var displayTime; // to keep track of the formatted time

  function startStopwatch() {
    if (!stopwatchInterval) {
      startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
      stopwatchInterval = setInterval(updateStopwatch, 1000); // update every second
    }
  }

  function stopStopwatch() {
    clearInterval(stopwatchInterval); // stop the interval
    elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
    stopwatchInterval = null; // reset the interval variable
  }

  function resetStopwatch() {
    stopStopwatch(); // stop the interval
    elapsedPausedTime = 0; // reset the elapsed paused time variable
    document.getElementById("stopwatch").innerHTML = "00:00:00"; // reset the display
  }

  function updateStopwatch() {
    var currentTime = new Date().getTime(); // get current time in milliseconds
    var elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
    var seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
    var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
    var hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
    displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // format display time
    document.getElementById("stopwatch").innerHTML = displayTime; // update the display
  }
  
  function pad(number) {
    // add a leading zero if the number is less than 10
    return (number < 10 ? "0" : "") + number;
  }

  const Reset = async () => {
    resetBoxes();
    getWords();
    resetStopwatch();
    startStopwatch();
  };

  useEffect(() => {
    Reset();
  }, []);

  const Submit = async () => {

      
    

      for(col = 1; col < 6; col++){
        
        var correct = 0;
        var cell = document.getElementById(row + "." + col);
        
        
        if(word.includes(cell.value.toLowerCase()) && cell.value.toLowerCase() !== word.charAt(col - 1) && cell.value !== "" ){
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
        startStopwatch();
        window.alert("You won in "+ displayTime +"! The word was " + word + "!" + " Your record is " + record);
        
      } else if(guessesLeft === 0){ 
        record = 0;
        window.alert("You lost! The word was " + word + "!" + " Your record is " + record);
        guessesLeft = 5;
        guessesUsed = 0;
      }

    
    row = row + 1;
    col = col + 1;

   
  }



  return (
    <div className="App">
      <div className="top-bar">
        <div className="user-profile">User Profile</div>
        <div className="stopwatch" id="stopwatch">00:00:00</div>
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
          <input className="game-board-cell" maxlength="1" id="2.1"/>
          <input className="game-board-cell" maxlength="1" id="2.2"/>
          <input className="game-board-cell" maxlength="1" id="2.3"/>
          <input className="game-board-cell" maxlength="1" id="2.4"/>
          <input className="game-board-cell" maxlength="1" id="2.5"/>
        </div>
        <div className="game-board-row" id="3">
          <input className="game-board-cell" maxlength="1" id="3.1"/>
          <input className="game-board-cell" maxlength="1" id="3.2"/>
          <input className="game-board-cell" maxlength="1" id="3.3"/>
          <input className="game-board-cell" maxlength="1" id="3.4"/>
          <input className="game-board-cell" maxlength="1" id="3.5"/>
        </div>
        <div className="game-board-row" id="4">
          <input className="game-board-cell" maxlength="1" id="4.1"/>
          <input className="game-board-cell" maxlength="1" id="4.2"/>
          <input className="game-board-cell" maxlength="1" id="4.3"/>
          <input className="game-board-cell" maxlength="1" id="4.4"/>
          <input className="game-board-cell" maxlength="1" id="4.5"/>
        </div>
        <div className="game-board-row" id="5">
          <input className="game-board-cell" maxlength="1" id="5.1"/>
          <input className="game-board-cell" maxlength="1" id="5.2"/>
          <input className="game-board-cell" maxlength="1" id="5.3"/>
          <input className="game-board-cell" maxlength="1" id="5.4"/>
          <input className="game-board-cell" maxlength="1" id="5.5"/>
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