import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    mainImage: String,
    color: [
      {
        colorName: String,
        allImages: [
          {
            type: String,
          },
        ],
        sizeInStock: {
          s: Number,
          m: Number,
          l: Number,
          xl: Number,
          xxl: Number,
        },
      },
    ],
    // allimages: [
    //   {
    //     type: String,
    //   },
    // ],
  },
  { timestamps: true }
);

const ArticleDB =
  mongoose.models.ArticlesDB || mongoose.model("ArticlesDB", ArticleSchema);

export default ArticleDB;
