import React, {Component} from "react";
import axios from "axios";
import { render } from "react-dom";


import LArrow from "../img/LArrow.png";
import LDArrow from "../img/LDArrow.png";
import RArrow from "../img/RArrow.png";
import RDArrow from "../img/RDArrow.png";

import './Button.css'


//Page Move

let AllListCount, NowListCount;
function nextpage(){
    if(AllListCount === NowListCount) {
        alert("Last Page");
    }
    else{
        //window.location.hostname으로 바꾸기.
        const URL = "http://127.0.0.1:3000"
        let temp = window.location.pathname;
        let Pathname_Num = parseInt(temp.replace(/[^0-9]/g,''));
        const Pathname_str = temp.replace(/[0-9]/g,"");
        Pathname_Num += 1;
        const FinalURL = URL + Pathname_str + Pathname_Num.toString();
        window.location.replace(FinalURL);
    }
}

function prevpage(){
    if(NowListCount === 1){
        alert("First Page");
    }
    else{
        //window.location.hostname으로 바꾸기.
        const URL = "http://127.0.0.1:3000"
        let temp = window.location.pathname;
        let Pathname_Num = parseInt(temp.replace(/[^0-9]/g,''));
        const Pathname_str = temp.replace(/[0-9]/g,"");
        Pathname_Num -= 1;
        const FinalURL = URL + Pathname_str + Pathname_Num.toString();
        window.location.replace(FinalURL);
    }
}

function lastpage(){
    //window.location.hostname으로 바꾸기.
    const URL = "http://127.0.0.1:3000"
    let temp = window.location.pathname;
    const Pathname_str = temp.replace(/[0-9]/g,"");
    const Pathname_Num = AllListCount.toString();
    const FinalURL = URL + Pathname_str + Pathname_Num;
    window.location.replace(FinalURL);
}

function firstpage(){
    //window.location.hostname으로 바꾸기.
    const URL = "http://127.0.0.1:3000"
    let temp = window.location.pathname;
    const Pathname_str = temp.replace(/[0-9]/g,"");
    const FinalURL = URL + Pathname_str + "1";
    window.location.replace(FinalURL);
}



//GET List API Link

function GetListAPIURL(){
    const URL = "http://127.0.0.1:5000"
    + window.location.pathname
    + window.location.search
    + "/list";
    return URL;
}


class FourButton extends React.Component {
    async componentDidMount(){
        const response = await axios.get(GetListAPIURL());
        NowListCount = response.data.Nowlist;
        AllListCount = response.data.Alllist;
    }
    render(){
        return(
            <div className ="Button-container">
                <button id = 'Doubleleft' onClick={firstpage}><img src={LDArrow} alt=""></img></button>
                <button id = 'Singleleft' onClick={prevpage}><img src={LArrow} alt=""></img></button>
                <button id = 'Singleright' onClick={nextpage}><img src={RArrow} alt=""></img></button>
                <button id = 'Doubleright' onClick={lastpage}><img src={RDArrow} alt=""></img></button>
            </div>
        );
    }
}

export default FourButton;