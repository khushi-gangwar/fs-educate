const express = require("express");
const mongoose = require('mongoose');
const Course =require('../models/educate');

mongoose.connect('mongodb://localhost:27017/feducateDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
const app = express();

app.use(express.static("public"));

    Course.insertMany([
        {
       name: "Maths",
       price: 1200,
       description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis unde, totam, recusandae fuga eligendi alias non ullam provident, debitis doloremque fugiat aliquam sequi magnam. Labore, neque. Quas fugit temporibus, doloribus, dicta quisquam nostrum recusandae quaerat, ullam sapiente quod molestiae facilis vero blanditiis deserunt est minima facere accusantium at! Asperiores quas rerum eveniet molestias iste, debitis iusto aut quisquam et voluptatem architecto quod consequuntur unde sunt. Reprehenderit voluptas cumque reiciendis sit impedit animi minima dolore.",
       image:"https://source.unsplash.com/random/200×200/?maths",
       rating:4.5
        },
        {
            name: "Science",
            price: 1200,
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis unde, totam, recusandae fuga eligendi alias non ullam provident, debitis doloremque fugiat aliquam sequi magnam. Labore, neque. Quas fugit temporibus, doloribus, dicta quisquam nostrum recusandae quaerat, ullam sapiente quod molestiae facilis vero blanditiis deserunt est minima facere accusantium at! Asperiores quas rerum eveniet molestias iste, debitis iusto aut quisquam et voluptatem architecto quod consequuntur unde sunt. Reprehenderit voluptas cumque reiciendis sit impedit animi minima dolore ",
            image:"https://source.unsplash.com/random/200×200/?science",
            rating:4.2
        },
        {
            name: "Computer-Science",
            price: 1300,
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis unde, totam, recusandae fuga eligendi alias non ullam provident, debitis doloremque fugiat aliquam sequi magnam. Labore, neque. Quas fugit temporibus, doloribus, dicta quisquam nostrum recusandae quaerat, ullam sapiente quod molestiae facilis vero blanditiis deserunt est minima facere accusantium at! Asperiores quas rerum eveniet molestias iste, debitis iusto aut quisquam et voluptatem architecto quod consequuntur unde sunt. Reprehenderit voluptas cumque reiciendis sit impedit animi minima dolore.",
            image:"https://source.unsplash.com/random/200×200/?computer",
            rating:4.9
        },{
            name: "English",
            price: 1000,
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis unde, totam, recusandae fuga eligendi alias non ullam provident, debitis doloremque fugiat aliquam sequi magnam. Labore, neque. Quas fugit temporibus, doloribus, dicta quisquam nostrum recusandae quaerat, ullam sapiente quod molestiae facilis vero blanditiis deserunt est minima facere accusantium at! Asperiores quas rerum eveniet molestias iste, debitis iusto aut quisquam et voluptatem architecto quod consequuntur unde sunt. Reprehenderit voluptas cumque reiciendis sit impedit animi minima dolore.",
            image:"https://source.unsplash.com/random/200×200/?english",
            rating:4.7
        },{
            name: "Social-Studies",
            price: 1100,
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis unde, totam, recusandae fuga eligendi alias non ullam provident, debitis doloremque fugiat aliquam sequi magnam. Labore, neque. Quas fugit temporibus, doloribus, dicta quisquam nostrum recusandae quaerat, ullam sapiente quod molestiae facilis vero blanditiis deserunt est minima facere accusantium at! Asperiores quas rerum eveniet molestias iste, debitis iusto aut quisquam et voluptatem architecto quod consequuntur unde sunt. Reprehenderit voluptas cumque reiciendis sit impedit animi minima dolore.",
            image:"https://source.unsplash.com/random/200×200/?educate",
            rating:3.9
        }
    ]);

        
