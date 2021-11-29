const Safebooru = require('@ibaraki-douji/safebooru');
const axios = require('axios').default
const fs = require("fs");


async function getImage(keyword : string){
   let urls = await Safebooru.getPicsFromAllPages(keyword);
   console.log(urls)
   let PicNumber = 0;
   //Setting

   let dirPath = "./" + keyword;
   const isExists = fs.existsSync(dirPath);
   if(!isExists){
      fs.mkdirSync(dirPath, {recursive : true});
   }
   for(let url of urls){
      //해야할 것. name으로 검색한 다음 없을 경우에 가져오기. 
      PicNumber += 1;
      let imageURL = await Safebooru.getImageURLFromPic(url);
      let name = imageURL.split("/")[imageURL.split("/").length-1].split("?")[0];
      fs.writeFileSync("./"+keyword+"/"+name, (await Safebooru.downloadFullSizeURL(imageURL)).buffer);
      console.log(PicNumber + " Picture : " + name + " Download Finish!");
   }
}

getImage("aisaka_taiga");