import { mongoose, Schema } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  price: {
     type:String,
  },
  author:{
    type:String,
  },
  description: {
     type:String,
  },
  kind: {
    type: String,
  },
  image: {
    type: String,
  },
});
const Book = mongoose.model("Book", bookSchema);
export default Book;