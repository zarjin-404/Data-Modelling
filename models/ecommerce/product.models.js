import mongooes from 'mongoose';

const productSchema = new mongooes.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    default: 0,
    required: true,
  },

  stock: {
    type: Number,
    default: 0,
    required: true,
  },

  category: {
    type: mongooes.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

createdBy:{
  type:mongooes.Types.ObjectId,
  ref:"User"
}

}, { timestamps: true });

export Product = mongooes.model("Product", productSchema);
