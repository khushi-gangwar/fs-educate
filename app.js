//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require('ejs-mate');
const Course = require('./models/educate')
const PORT = process.env.PORT || 3030;


const _ = require("lodash");
const ejs = require("ejs");
const { collection } = require("./models/educate");

const app = express();
app.use(express.static("public"));
app.engine('ejs', ejsMate)
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/feducateDB",
    { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Database connected");
});


app.get('/', function (req, res) {
    res.render('home')
});
app.get('/courses/about', function (req, res) {
    res.render('courses/about')
});

app.get('/courses', async (req, res) => {
    const courses = await Course.find({});
    res.render('courses/index', { courses })  //here index is the ejs file and courses is the folder in views and paran couses is taken from for loop
});

app.get('/courses/enroll', (req, res) => {
    res.render('courses/enroll')
});

app.get('/courses/:id', async function (req, res) {
    const course = await Course.findById(req.params.id)
    res.render('courses/show', { course });   //here show is the ejs file
});

app.post('/enroll', (req, res) => {
    var ename = req.body.ename;
    var ecourse = req.body.ecourse;
    var eemail = req.body.eemail;
    var emobile = req.body.emobile;
    var eclass = req.body.eclass;
    var egender = req.body.egender;
    var message = req.body.message;
    
    var data = {
        "ename": ename,
        "ecourse": ecourse,
        "eemail": eemail,
        "emobile": emobile,
        "eclass": eclass,
        "egender": egender,
        "message": message
    }
    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        else {
            console.log("Record INSERTED");
        } res.render('courses/submit')
    });
});
// const course =new Course(req.body);
// await course.save()
// res.send('you made it');
// }); 



// app.listen(3000, function () {
//     console.log("Server started on port 3000.");
// });


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });