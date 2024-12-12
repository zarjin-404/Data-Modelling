import mongooes from 'mongoose';

const patientSchema = new mongooes.Schema(
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
        medicalRecord: {
            type: mongooes.Schema.Types.ObjectId,
            ref: 'Medical',
        },
        addmissionDate: {
            type: Date,
            required: true,
        },
        admittedIn: {
            type: mongooes.Schema.Types.ObjectId,
            ref: 'Hospital',
        },
    },
    { timepstamps: true },
);

export const Patient = mongooes.model('Patient', patientSchema);
