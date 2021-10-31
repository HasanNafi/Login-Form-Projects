const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//home route
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('base', { title: "Login System" });
})

app.listen(port, () => { console.log("listening to the server on http://localhost:3000") });