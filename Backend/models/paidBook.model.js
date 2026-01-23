import { mongoose, Schema } from "mongoose";

const PaidbookSchema = new Schema(
  {
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
    kind: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    collection: "paidBooks",
    timestamps: true,
  },
);
const PaidBooks = mongoose.model("PaidBooks", PaidbookSchema);
export default PaidBooks;