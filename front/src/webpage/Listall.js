import React from "react";
import { render } from "react-dom";
import axios from 'axios';


import './Listall.css'


function getURL(){
    const URL = "http://127.0.0.1:5000"
    + window.location.pathname
    + window.location.search
    + "/list";
    return URL;
}

class Listall extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            NowCount: 0,
            AllCount: 0
        };
    }

    async componentDidMount(){
        const response = await axios.get(getURL());
        console.log(response);
        this.setState({NowCount: response.data.Nowlist, AllCount: response.data.Alllist});
    }

    render(){
        return(
            <div id="ListContainer">
                {this.state.NowCount} / {this.state.AllCount}
            </div>
        );
    }
}

export default Listall;