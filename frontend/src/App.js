import React, { Component } from 'react';
import ImageUploader from './imageUpload';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="image-uploader-container">
            <ImageUploader/>
        </div>
      </div>
    );
  }
}

export default App;
