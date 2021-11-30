const testFolder = '../kushieda_minori/';
const image_fs = require('fs');

export async function Img_list(filePath){
    await image_fs.readdir(filePath, function(err, flist){
        if(err){
            console.log(err);
            return;
        }
        //console.log(flist);
    })
    //console.log(test);
}

//console.log(await Img_list(testFolder).then());