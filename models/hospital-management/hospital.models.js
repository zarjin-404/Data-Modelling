import mongooes from 'mongoose';

const hospitalSchema = new mongooes.Schema(
    {
        name: {
            type: String,
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
        doctors: [
            {
                type: mongooes.Schema.Types.ObjectId,
                ref: 'Doctor',
            },
        ],
        patients: [
            {
                type: mongooes.Schema.Types.ObjectId,
                ref: 'Patient',
            },
        ],
    },
    { timepstamps: true },
);

export const Hospital = mongooes.model('Hospital', hospitalSchema);
