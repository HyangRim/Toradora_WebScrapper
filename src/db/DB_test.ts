const Test_dbconnect = require("./DB_Connection");
const Test_DirImage = require("./Image_readdir");
const Test_mongoose = require("mongoose");
const Test_DBupload = require("./DB_Upload");

const Custom_Schemas = new Test_mongoose.Schema({
    ImageIndex: Number,
    ImageName: String,
});
const Image_section = Test_mongoose.model("Taiga_Image", Custom_Schemas);


for(let x = 1;x<=25;x++){
    Image_section.findOne({'ImageIndex':x}, function(err, docs){
        if(err){
            console.log(err);
        }
        else{
            console.log("result : ", docs);
        }
    });
}
//Image_section.findOnde({'ImageIndex':1})