
module.exports = {
    fileUpload: async (req, res, next) => {
        try {
            console.log(req.files)
            let fileUrl = req.file.path.split("\\").join("/");
            console.log("fileurl", fileUrl)
            // res.sendFile(__dirname +"/"+ req.file.path);

            res.status(200).send({ url: fileUrl });
        } catch (error) {
            console.log(error)
        }
    },
    showFile: (req, res) => {
        try {
            // var appRoot = ;
            console.log("rort dir", req.rootDir)
            console.log(req.rootDir + "/storage/" + req.params.fileName)
            res.sendFile(req.rootDir + "/storage/" + req.params.fileName);
        } catch (error) {
            console.log(error)
        }
    }
}