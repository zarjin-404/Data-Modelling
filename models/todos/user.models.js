import mongoose from "mongoose";

const UserSchema = new mongoose.schema({
  username:{
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min:[6, "Password must be at least 6 characters"]
  }
},

{
  timestamps: true
}

)

export User = mongoose.model("User", UserSchema)

