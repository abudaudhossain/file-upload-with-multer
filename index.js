const express = require("express")
const app = express();

app.use((req, res, next) => {
  req.rootDir = __dirname;
  next();
})

// app.use("/api", require('./routes/api'))
app.use("/api/file", require('./routes/fileUpload'))

app.listen(3000, () => {
  console.log("app listening at port 3000");
});