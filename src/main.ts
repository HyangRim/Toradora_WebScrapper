const DirImage = require("./db/Image_readdir");
const express = require("express");
const cors = require("cors");
const router = express.Router();

const app = express();
app.use(cors());

const testFolder = '../kitamura_yuusaku/';

async function test(tt: string){
    let files = await DirImage.Img_list(tt);
    console.log(files);
}

test(testFolder);