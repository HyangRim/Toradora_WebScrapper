const Safebooru = require('@ibaraki-douji/safebooru');
const axios = require('axios').default
const fs = require("fs");

const keywords : string[] = ['aisaka_taiga', 'kawashima_ami', 'kushieda_minori', 'takasu_ryuuji', 'kitamura_yuusaku']
//aisaka_taiga
//kawashima_ami
//kushieda_minori
//takasu_ryuuji 
//kitamura_yuusaku 
async function getImage(keyword : string){
   let urls = await Safebooru.getPicsFromAllPages(keyword);
   console.log(urls)
   let PicNumber = 0;
   //Setting

   let dirPath = "./../../" + keyword;
   const isExists = fs.existsSync(dirPath);
   if(!isExists){
      fs.mkdirSync(dirPath, {recursive : true});
   }
   for(let url of urls){
      PicNumber += 1;
      let imageURL = await Safebooru.getImageURLFromPic(url);
      let name = imageURL.split("/")[imageURL.split("/").length-1].split("?")[0];
      const ImgExists = fs.existsSync("./../../"+keyword+"/"+name);
      if(!ImgExists){
         fs.writeFileSync("./../../"+keyword+"/"+name, (await Safebooru.downloadFullSizeURL(imageURL)).buffer);
         console.log(PicNumber + " Picture : " + name + " Download Finish!");
      }
      else{
         console.log(PicNumber + " Picture : " + name + " is already donwlowded.")
      }
   }
}

for(let key of keywords){
   console.log(key)
   getImage(key);
}

//getImage("aisaka_taiga");