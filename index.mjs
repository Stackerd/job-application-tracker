import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import db from './db/conn.mjs';
import jobRoutes from './controllers/job.mjs';
import interviewRoutes from './controllers/interview.mjs';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

// creating express application and other variables
const app = express();
const PORT = process.env.PORT || 5001;

const MONGOURL = process.env.MONGO_URL;

// ================ Set up view engine ================
//
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// ================ Middleware ================
//
app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.use((req,res,next) =>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname, req.path, req.time);
    next();
});

app.use((err, req, res, next) => {
    res.status(400).send(err.message)
});

app.use(express.static(__dirname + "/public"))

// ================ Routes ================
//

app.use("/jobs", jobRoutes);
app.use("/interviews", interviewRoutes);

app.get('/', (req, res) => {
    res.send(
        `<html>
        <head>
            <link rel="stylesheet" href="/styles/main.css">
        </head>
        <body>
            <div class="container">
                <h1>Welcome to the Home Page</h1>
                <a href='/jobs'>Jobs</a> <br>
                <a href='/interviews'>Interviews</a>
            </div>
        </body>
    </html>`
    );
});

// ===veggies routes===

app.listen(PORT, () => {
    console.log(`listening`);
});
