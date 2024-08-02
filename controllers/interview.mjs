import express from 'express';
const router = express.Router();
import Interview from '../models/interview.mjs';
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
        await Interview.create([
            {
                date: '04/10/2024',
                name: 'The Project',
                interviewComplete: true
            }, 
            {
                date: '04/01/2024',
                name: 'The Company',
                interviewComplete: false
            }, 
            {
                date: '04/21/2024',
                name: 'The Dream',
                interviewComplete: true
            }
        ])
        res.status(200).redirect('/interviews');
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
        const foundInterviews = await Interview.find({});
        res.status(200).render('interviews/Index', { interviews: foundInterviews})
            } catch (err) {
        res.status(400).send(err);
    }
})

// N - New - allows a user to input a new Interview
router.get('/new', (req, res) => {
    res.render('interviews/New');

})

// D - DELETE - Allows a user to permanetly remove an item from the database
router.delete('/:id', async(req, res) => {
    try{
        const deletedInterview = await Interview.findByIdAndDelete(req.params.id);
        console.log(deletedInterview);
        res.status(200).redirect('/interviews');
    } catch (err) {
        res.status(400).send(err);
    }
})

// U - UPDATE
router.put('/:id', async (req, res) => {
    if (req.body.interviewComplete === 'on') {
        req.body.interviewComplete = true;
    } else {
        req.body.interviewComplete = false;
    }

    try {
        const updatedInterview = await Interview.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedInterview);
        res.redirect(`/interviews/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})

// C - CREATE
// I am starting with my post route so that I can see the things in my database
router.post('/', async(req, res) => {
    // // this will be useful when have a user input form
    if (req.body.interviewComplete === 'on') { // if checked, req.body.interviewComplete is set to 'on' - or the checkbox is checked
        req.body.interviewComplete = true;
    } else {                            // if not checked, then it was undefined
        req.body.interviewComplete = false;
    }
    console.log(req.body)

    try {
        const createdInterview = await Interview.create(req.body);
        res.status(200).redirect('/interviews');
    } catch (err) {
        res.status(400).send(err);
    }
})

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
        const foundInterview = await Interview.findById(req.params.id);
        res.status(200).render('interviews/Edit', {job: foundInterview});
    } catch (err) {
        res.status(400).send(err);
    }
})


// S - SHOW - show route displays details of an individual job
router.get('/:id', async (req, res) => {
    try {
        const foundInterview = await Interview.findById(req.params.id);
        res.render('interviews/Show', {Interview: foundInterview});
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;
