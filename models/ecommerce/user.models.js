import mongooese from 'mongoose';

const userSchema = new mongooese.Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: {
      type: String,
      required: true,
      min: [8, 'Password must be at least 8 characters long'],
    },
  },
  { timestamps: true }
);

export const User = mongooes.moedel('User', userSchema);
