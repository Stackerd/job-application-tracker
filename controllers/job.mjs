import express from 'express';
const router = express.Router();
import Job from '../models/Job.mjs';
import db from '../db/conn.mjs';

// These are my routes
// We are going to create the 7 RESTful routes
// There is an order for them to listed in the code
// I - N - D - U - C - E - S
//  Action      HTTP Verb   CRUD 
// I - Index    GET         READ - display a list of elements
// N - New      GET         CREATE * - but this allows user input
// D - Delete   DELETE      DELETE
// U - Update   PUT         UPDATE * - this updates our database
// C - Create   POST        CREATE * - this adds to our database
// E - Edit     GET         UPDATE * - but this allows user input
// S - Show     GET         READ - display a specific element

// seed route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Job.create([
            {
                date: '04/10/2024',
                name: 'The Project',
                submittedApplication: true
            }, 
            {
                date: '04/01/2024',
                name: 'The Company',
                submittedApplication: false
            }, 
            {
                date: '04/21/2024',
                name: 'The Dream',
                submittedApplication: true
            }
        ])
        res.status(200).redirect('/jobs');
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/home', (req, res) => {
    res.redirect('/');
})

// I - Index    GET         READ - display a list of elements
router.get('/', async (req, res) => {
    try {
        const foundJobs = await Job.find({});
        res.status(200).render('jobs/Index', { Jobs: foundJobs})
            } catch (err) {
        res.status(400).send(err);
    }
})

// N - New - allows a user to input a new Job
router.get('/new', (req, res) => {
    res.render('jobs/New');

})

// D - DELETE - Allows a user to permanetly remove an item from the database
router.delete('/:id', async(req, res) => {
    try{
        const deletedJob = await Job.findByIdAndDelete(req.params.id);
        console.log(deletedJob);
        res.status(200).redirect('/jobs');
    } catch (err) {
        res.status(400).send(err);
    }
})

// U - UPDATE
router.put('/:id', async (req, res) => {
    if (req.body.submittedApplication === 'on') {
        req.body.submittedApplication = true;
    } else {
        req.body.submittedApplication = false;
    }

    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedJob);
        res.redirect(`/jobs/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})

// C - CREATE
// I am starting with my post route so that I can see the things in my database
router.post('/', async(req, res) => {
    // // this will be useful when have a user input form
    if (req.body.submittedApplication === 'on') { // if checked, req.body.submittedApplication is set to 'on' - or the checkbox is checked
        req.body.submittedApplication = true;
    } else {                            // if not checked, then it was undefined
        req.body.submittedApplication = false;
    }
    console.log(req.body)

    try {
        const createdJob = await Job.create(req.body);
        res.status(200).redirect('/jobs');
    } catch (err) {
        res.status(400).send(err);
    }
})

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
        const foundJob = await Job.findById(req.params.id);
        res.status(200).render('jobs/Edit', {job: foundJob});
    } catch (err) {
        res.status(400).send(err);
    }
})


// S - SHOW - show route displays details of an individual job
router.get('/:id', async (req, res) => {
    try {
        const foundJob = await Job.findById(req.params.id);
        res.render('Jobs/Show', {Job: foundJob});
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;



