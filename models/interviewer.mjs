import mongoose, { mongo } from 'mongoose';

const interviewerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    readyToEat: Boolean
});

const Interviewer = mongoose.model('Interviewer', interviewerSchema);

export default Interviewer;