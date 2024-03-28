import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  class Crop{
    constructor(name, price, value, growthTime, waterAmount){
      this.name = name;
      this.price = price;
      this.value = value;
      this.growthTime = growthTime;
      this.waterAmount = waterAmount;
    }
  
  }

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [signInVisible, setSignInVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleSignIn = () => {
    setSignInVisible(!signInVisible);
  };



  return (
    <div className="App">
      <div className="header">
        <button onClick={toggleSignIn}>Sign In</button>
        <div>Coins: ??</div>
        <div>Time: ??</div>
        <div>Level: ??</div>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </div>
      {signInVisible && (
        <div className="signInModal">
          <form>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <button onClick={toggleSignIn}>Close</button>
        </div>
      )}
      {sidebarVisible && (
        <div className="sidebar">
          <div>Water</div>
          <div>Harvest</div>
          <div>Plant</div>
          <div>Shop</div>
          <div>Settings</div>
          <div>Social</div>
        </div>
      )}
      <div className="flexbox-container-rows">
        {Array(5).fill().map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array(5).fill().map((_, boxIndex) => (
              <div className="box" id={`box-${rowIndex}-${boxIndex}`} key={boxIndex}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;