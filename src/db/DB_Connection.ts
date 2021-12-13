const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Toradora", {
    useNewUrlParser: true,
    //useCreateIndex: true,
    //useUnifiedTopology: true,
}).then(()=> console.log("Successfully connected to mongoDB!")).catch(e => console.error(e));

//console.log("Connected to MongoDB");
/*
const Custom_Schema = new mongoose.Schema({
    ImageIndex: Number,
    ImageName: String,
});
const Image_section = mongoose.model("Taiga_Image", Custom_Schema);
*/