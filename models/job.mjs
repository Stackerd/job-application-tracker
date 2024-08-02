import mongoose, { mongo } from 'mongoose';

const jobSchema = new mongoose.Schema({
    jobDate: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    submittedApplication: Boolean
});

const Job = mongoose.model('Job', jobSchema);

export default Job;