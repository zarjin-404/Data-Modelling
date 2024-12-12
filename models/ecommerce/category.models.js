import mongooes from 'mongoose';

const categorySchema = new mongooes.Schema(
  {
    category: {
      type: string,
      required: true,
    },
  },
  { timestamps: true }
);

export Ctategory = monggoes.model("Category", categorySchema);