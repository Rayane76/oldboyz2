import mongoose from "mongoose";
import ArticleDB from "./article";

const CategorieSchema = mongoose.Schema(
  {
    title: String,
    articles: [ArticleDB],
  },
  { timestamps: true }
);

const CategorieDB =
  mongoose.models.CategoriesDB ||
  mongoose.model("CategoriesDB", CategorieSchema);

export default CategorieDB;
