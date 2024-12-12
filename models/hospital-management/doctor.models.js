import mongooes from 'mongoose';

const hospitalWorkTimeSchema = new mangooses.Schema({
    day: {
        type: String,
        enum: [sunday, monday, tuesday, wednesday, thursday, saturday],
    },
});
const doctorSchema = new mongooes.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'other'],
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        specialization: {
            type: String,
            required: true,
        },
        experience: {
            type: Number,
            required: true,
        },
        hospital: {
            type: mongooes.Schema.Types.ObjectId,
            ref: 'Hospital',
        },
        workTime: [hospitalWorkTimeSchema],
    },
    { timepstamps: true },
);

export const Doctor = mongooes.model('Doctor', doctorSchema);
