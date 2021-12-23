const DB_mongoose = require("mongoose");


const Collections_keyword : string[] = ['Taiga_Image', 'Ami_Image', 'Minori_Image', 'Ryuuji_Image', 'Yuusaku_Image'];

class Connection{
    static async connect(){
        let client = await DB_mongoose.connect("mongodb://127.0.0.1:27017/Toradora", {
            useNewUrlParser: true,
            //useCreateIndex: true,
            //useUnifiedTopology: true,
        }).then(()=> console.log("Successfully connected to mongoDB!")).catch(e => console.error(e));
    }
}

module.exports = Connection;

//console.log("Connected to MongoDB");
/*
const Custom_Schema = new mongoose.Schema({
    ImageIndex: Number,
    ImageName: String,
});
const Image_section = mongoose.model("Taiga_Image", Custom_Schema);
*/