const express = require("express");
const app = express();
app.use("/about", (req, res) => {
    res.send("name: Coder Army, website: coderarmy.com");
});
app.use("/contact", (req, res) => {
    res.send("contact: info@coderarmy.com");
});
app.use("/review", (req, res) => {
    res.send("review: 5 stars");
});
app.listen(4000, () => {
    console.log("I am Listening at port number 4000");
})