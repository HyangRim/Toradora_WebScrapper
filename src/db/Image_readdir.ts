const fs = require('fs');
const testFolder = '../../kushieda_minori/';

export async function Img_list(filePath : string){
    const data = await fs.readdir(filePath, function(err, flist){
        console.log("flist");
        console.log(flist);
        return flist;
    });
    console.log(" data " + data);
    return data;
}


export async function Img_list2(filePath : string){
    const data = fs.readdirSync(filePath);
    //console.log(data);
    return data;
}