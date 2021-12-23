import './App.css';
import FourButton from './webpage/Button';
import React, {Component} from 'react';
import Listall from './webpage/Listall';
import ImageBox from './webpage/ImageBox';

class App extends Component{
  render(){
    return(
      <div>
        <FourButton></FourButton>
        <Listall></Listall>
        <ImageBox></ImageBox>
      </div>
    );
  }
}

export default App;
