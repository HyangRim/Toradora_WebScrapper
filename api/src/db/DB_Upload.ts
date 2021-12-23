const dbconnect = require("./DB_Connection");
const DirImage = require("./Image_readdir");
const mongooses = require("mongoose");


const tora_keywords : string[] = ['../../aisaka_taiga', '../../kawashima_ami', '../../kushieda_minori', '../../takasu_ryuuji', '../../kitamura_yuusaku']
const Collections_keywords : string[] = ['Taiga_Image', 'Ami_Image', 'Minori_Image', 'Ryuuji_Image', 'Yuusaku_Image'];


//console.log("Connected to MongoDB");
const Custom_Schema = new mongooses.Schema({
    ImageIndex: Number,
    ImageName: String,
});
//const Image_section = mongooses.model("Taiga_Image", Custom_Schema);
let index = 1;
let Collections_index = 0;
async function db_upload(){
    const mdb = await dbconnect.connect();
    for(let key of tora_keywords){
        console.log(key);
        let dirfiles = await DirImage.Img_list2(key);
        const Image_section = mongooses.model(Collections_keywords[Collections_index], Custom_Schema);
        index = 1;
        for(let file_name of dirfiles){
            const Image = new Image_section({
                ImageIndex: index,
                ImageName: file_name,
            });

            //FindOne으로 있는지 없는지 판별한 이후 있으면 안하고, 없으면 넣기.
            const transactions = await Image_section.findOne({"ImageIndex" : index}).exec();
            if(transactions == null){//NULL은 반환이 없는 것. 
                console.log(index + " index number could not be found in DB");
                await Image.save().then(() =>{
                    console.log(Image);
                })
                .catch((err) =>{
                    console.log("Error : " + err);
                })
            }
            else{
                console.log(index + " index number 가 이미 있습니다.");
            }
            index++;
        }
        Collections_index++;
    }
}

function sleep(ms){
    return new Promise((r) => setTimeout(r,ms));
}
 
sleep(1000).then(() => console.log("------------------------------------"));
db_upload().then(() => console.log("upload_finished"));