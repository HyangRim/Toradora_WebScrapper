const fs = require('fs');
const testFolder = '../../kushieda_minori/';

export async function Img_list(filePath : string){
    const data = await fs.readdir(filePath, function(err, flist){
        if(err){
            console.log(err);
            return;
        }
        console.log(flist);
    });
    return data;
}
