const express = require("express");
const { sum, multiply } = require("./math");
const app = express();


app.get("/sum", (req, res) => {
    const Sum=sum(1,2)
    res.status(200).json({msg:"Get route for sum.",Sum})
})


app.get("/multiply", (req, res) => {
    const mul=multiply(1,2)
    res.status(200).json({msg:"Get route for multiply.",mul})
})






app.listen(8080, () => {
    console.log("server started")
})
