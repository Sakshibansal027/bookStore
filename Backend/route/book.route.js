import express from "express"
import { getBook,getPaidBook } from "../controller/book.controller.js"

const router=express.Router()

router.get("/free",getBook);
router.get("/course",getPaidBook);
export default router;