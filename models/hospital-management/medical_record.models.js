import mongooes from 'mongoose';

const medicalRecordSchema = new mongooes.Schema(
    {
        patient: {
            type: mongooes.Schema.Types.ObjectId,
            ref: 'Patient',
        },
        doctor: {
            type: mongooes.Schema.Types.ObjectId,
            ref: 'Doctor',
        },
        diagnosis: {
            type: String,
            required: true,
        },
        treatment: {
            type: String,
            required: true,
        },
        prescription: {
            type: String,
            required: true,
        },
    },
    { timepstamps: true },
);

export const Medical = mongooes.model('Medical', medicalRecordSchema);
