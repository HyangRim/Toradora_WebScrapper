const Test_dbconnect = require("./DB_Connection");
const Test_DirImage = require("./Image_readdir");
const Test_mongoose = require("mongoose");
const Test_DBupload = require("./DB_Upload");

const Custom_Schemas = new Test_mongoose.Schema({
    ImageIndex: Number,
    ImageName: String,
});
const Image_section = Test_mongoose.model("Taiga_Image", Custom_Schemas);


async function test(){
    const Collection_count = await Image_section.count();
    console.log(Collection_count);
}

test();