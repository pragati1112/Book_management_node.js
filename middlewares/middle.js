

const multer=require("multer");

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads");
        console.log(file);
        console.log("destination");

    },
    filename:function(req,file,cb){
        console.log("file");
        const unique =Date.now()+"-"+(Math.random()*1e9);
        cb(null, unique.filename+"-"+unique+"-"+file.mimetype.split("/")[1]);
    }
});

const upload=multer({storage});

module.exports=upload;