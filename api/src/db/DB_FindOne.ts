/*

const DBmongoose = require("mongoose");


const DBCollections : string[] = ['Taiga_Image', 'Ami_Image', 'Minori_Image', 'Ryuuji_Image', 'Yuusaku_Image'];
const DB_Schema = new DBmongoose.Schema({
    ImageIndex: Number,
    ImageName: String,
});

const Taiga_Collection = DBmongoose.model(DBCollections[0], DB_Schema);
const Ami_Collection = DBmongoose.model(DBCollections[1], DB_Schema);
const Minori_Collection = DBmongoose.model(DBCollections[2], DB_Schema);
const Ryuuji_Collection = DBmongoose.model(DBCollections[3], DB_Schema);
const Yuusaku_Collection = DBmongoose.model(DBCollections[4], DB_Schema);


export async function Taiga_ImageURL(Image_Num : Number){
    let ImageURL = await Taiga_Collection.findOne({Image_Num});
    return ImageURL;
}

*/