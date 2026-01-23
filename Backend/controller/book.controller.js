import Book from "../models/book.model.js"
import PaidBooks from "../models/paidBook.model.js"
export const getBook=async (req,res)=>{
    try{
        const book=await Book.find()
        res.status(200).json(book)
    }catch(error){
        console.log("Error in fetching data : ",error.message)
        res.status(500).json(error);
    }
}
export const getPaidBook=async (req,res)=>{
    try{
        const book =await PaidBooks.find()
        res.json(book).status(200)
    }catch(error){
        console.log("Error in fetching data : ",error.message)
        res.status(500).json(error);
    }
}