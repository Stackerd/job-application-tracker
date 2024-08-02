import mongoose, { mongo } from 'mongoose';

const interviewSchema = new mongoose.Schema({
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

const Interview = mongoose.model('Interview', interviewSchema);

export default Interview;