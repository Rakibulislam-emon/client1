import { getDb } from "@/app/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const url = new URL(request.url)
    const username = url.searchParams.get('username')
    const db = await getDb();
    if (!db) {
      throw new Error('Failed to connect to database');
    }

    const userCollection = db.collection('blog');
    const filter = username ? { username } : {};
    const users = await userCollection.find(filter).toArray();

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


// create post request
 export const POST = async (request) => {
  try {
    const body = await request.json()
    
    // const { name, email, content } = await request.json();
    const db = await getDb();
    if (!db) {
      throw new Error('Failed to connect to database');
    }

    const userCollection = db.collection('blog');
    const result = await userCollection.insertOne(body);

    return new NextResponse(JSON.stringify(result.ops[0]), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('error:', error);
    return new NextResponse('Error creating user', { status: 500 });
  }
};

export const DELETE = async(request, {params}) =>{
  console.log('params:', params)
  const db = await getDb()
  const deleteBlog = db.collection('blog')
  
  try {
    const dlt =  await deleteBlog.deleteOne({_id : params.id})
      return Response.json('Blog deleted successfully')
  } catch (error) {
      console.log('error:', error)
      return Response.json('error :', error)
      
  }
}