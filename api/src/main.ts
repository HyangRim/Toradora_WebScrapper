import { json, urlencoded } from "body-parser";
const fs = require("fs");
const cors = require("cors");
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MongoConnection = require("./db/DB_Connection");
const DB_FindOne = require('./db/DB_FindOne');


const app = express();
const main_db = MongoConnection.connect();
const port = 5000;

app.listen(port, () => {
    console.log(`Server is on port ${port}.`);
})


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('./aisaka_taiga', express.static('../aisaka_taiga'));



//const tora_keywords : string[] = ['../../aisaka_taiga', '../../kawashima_ami', '../../kushieda_minori', '../../takasu_ryuuji', '../../kitamura_yuusaku']
const ImageFolderURL : string[] = ['../aisaka_taiga', '../kawashima_ami', '../kushieda_minori', '../takasu_ryuuji', '../kitamura_yuusaku'];


const Collections_keywords : string[] = ['Taiga_Image', 'Ami_Image', 'Minori_Image', 'Ryuuji_Image', 'Yuusaku_Image'];

const Custom_Schema = new mongoose.Schema({
    ImageIndex: Number,
    ImageName: String,
});

const Taiga_Collection = mongoose.model(Collections_keywords[0], Custom_Schema);
const Ami_Collection = mongoose.model(Collections_keywords[1], Custom_Schema);
const Minori_Collection = mongoose.model(Collections_keywords[2], Custom_Schema);
const Ryuuji_Collection =mongoose.model(Collections_keywords[3], Custom_Schema);
const Yuusaku_Collection = mongoose.model(Collections_keywords[4], Custom_Schema);

//Collection 접속하기. 


app.get('/aisaka_taiga/:Number', async (req, res)=>{
    const URL_Inversion = await Taiga_Collection.findOne({"ImageIndex" : req.params.Number}).exec();
    const Image_Name : String = URL_Inversion.ImageName;
    const Image_URL : String = __dirname + "/../aisaka_taiga/"+Image_Name;

    console.log(Image_URL);
    
    fs.readFile(Image_URL, function(err, data){
        res.writeHead(200, {'Content-Type' : "image"});
        res.write(data);
        res.end();
    });

})

app.get('/kawashima_ami/:Number', async (req, res)=>{
    const URL_Inversion = await Ami_Collection.findOne({"ImageIndex" : req.params.Number}).exec();
    const Image_Name : String = URL_Inversion.ImageName;
    const Image_URL : String = __dirname + "/../kawashima_ami/"+Image_Name;

    console.log(Image_URL);
    
    fs.readFile(Image_URL, function(err, data){
        res.writeHead(200, {'Content-Type' : "image"});
        res.write(data);
        res.end();
    });
    
})

app.get('/kushieda_minori/:Number', async (req, res)=>{
    const URL_Inversion = await Minori_Collection.findOne({"ImageIndex" : req.params.Number}).exec();
    const Image_Name : String = URL_Inversion.ImageName;
    const Image_URL : String = __dirname + "/../kushieda_minori/"+Image_Name;

    console.log(Image_URL);
    
    fs.readFile(Image_URL, function(err, data){
        res.writeHead(200, {'Content-Type' : "image"});
        res.write(data);
        res.end();
    });
})

app.get('/takasu_ryuuji/:Number', async (req, res)=>{
    const URL_Inversion = await Ryuuji_Collection.findOne({"ImageIndex" : req.params.Number}).exec();
    const Image_Name : String = URL_Inversion.ImageName;
    const Image_URL : String = __dirname + "/../takasu_ryuuji/"+Image_Name;

    console.log(Image_URL);
    
    fs.readFile(Image_URL, function(err, data){
        res.writeHead(200, {'Content-Type' : "image"});
        res.write(data);
        res.end();
    });
})

app.get('/kitamura_yuusaku/:Number', async (req, res)=>{
    const URL_Inversion = await Yuusaku_Collection.findOne({"ImageIndex" : req.params.Number}).exec();
    const Image_Name : String = URL_Inversion.ImageName;
    const Image_URL : String = __dirname + "/../kitamura_yuusaku/"+Image_Name;

    console.log(Image_URL);
    
    fs.readFile(Image_URL, function(err, data){
        res.writeHead(200, {'Content-Type' : "image"});
        res.write(data);
        res.end();
    });
})



//api

app.get('/aisaka_taiga/:Number/list', async (req, res)=>{
    const Count_all = await Taiga_Collection.count();
    const Count_now = req.params.Number * 1;
    const result = {
        Now_page: Count_now,
        All_page: Count_all
    };
    console.log(result);
    res.json({Nowlist: Count_now, Alllist: Count_all});
})

app.get('/kawashima_ami/:Number/list', async (req, res)=>{
    const Count_all = await Ami_Collection.count();
    const Count_now = req.params.Number * 1;
    const result = {
        Now_page: Count_now,
        All_page: Count_all
    };
    console.log(result);
    res.json({Nowlist: Count_now, Alllist: Count_all});
})

app.get('/kushieda_minori/:Number/list', async (req, res)=>{
    const Count_all = await Minori_Collection.count();
    const Count_now = req.params.Number * 1;
    const result = {
        Now_page: Count_now,
        All_page: Count_all
    };
    console.log(result);
    res.json({Nowlist: Count_now, Alllist: Count_all});
})

app.get('/takasu_ryuuji/:Number/list', async (req, res)=>{
    const Count_all = await Ryuuji_Collection.count();
    const Count_now = req.params.Number * 1;
    const result = {
        Now_page: Count_now,
        All_page: Count_all
    };
    console.log(result);
    res.json({Nowlist: Count_now, Alllist: Count_all});
})

app.get('/kitamura_yuusaku/:Number/list', async (req, res)=>{
    const Count_all = await Yuusaku_Collection.count();
    const Count_now = req.params.Number * 1;
    const result = {
        Now_page: Count_now,
        All_page: Count_all
    };
    console.log(result);
    res.json({Nowlist: Count_now, Alllist: Count_all});
})