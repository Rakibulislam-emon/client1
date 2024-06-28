import { getDb } from "@/app/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await getDb();
    if (!db) {
      throw new Error('Failed to connect to database');
    }

    const userCollection = db.collection('blog');
    const users = await userCollection.find().toArray();

    return new NextResponse(JSON.stringify(users), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('error:', error);
    return new NextResponse('Error fetching users', { status: 500 });
  }
};
