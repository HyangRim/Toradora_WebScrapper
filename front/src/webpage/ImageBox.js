import React from "react";
import axios from "axios";
import { render } from "react-dom";

import "./ImageBox.css";

function ImgURL(){
    const URL = "http://127.0.0.1:5000"
    + window.location.pathname
    + window.location.search;


    return URL;
}

class ImageBox extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            ImageUrl : "",
        };
    }

    async componentDidMount(){
        const ImageURL = ImgURL();
        this.setState({ImageUrl : ImageURL});
    }

    render(){
        return(
            <div id="ImageBoxContainer">
                <img src={this.state.ImageUrl}></img>
            </div>
        );
    }
}

export default ImageBox;