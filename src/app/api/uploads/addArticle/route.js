import connectToDB from "@/database";
import { NextResponse } from "next/server";
import ArticleDB from "@/models/article";

export async function POST(req) {
    try {
      await connectToDB();  
      const {article} = await req.json();    
      return NextResponse.json({
        success: true,
        message: "article received"
    });  
      }
     catch (e) {
      console.log(e);
  
      return NextResponse.json({
        success: false,
        message: "Something went wrong!",
      });
    }
  }
  