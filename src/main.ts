import { json, urlencoded } from "body-parser";

const cors = require("cors");
//const indexRouter = require('./routes/index');
const express = require('express');
const app = express();
const port = 5000;


app.use(cors());
//app.use('/', indexRouter);
app.use(json());
app.use(urlencoded());
app.use(express.static('../aisaka_taiga'));
app.use('/static', express.static('../aisaka_taiga'));

const testFolder = '../kitamura_yuusaku/';

async function test(tt: string){
    let files = await DirImage.Img_list2(tt)
    return files;
}

/*
app.listen(port, () => {
    console.log(`Server is on port ${port}.`);
})*/