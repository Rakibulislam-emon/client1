import { getDb } from "@/app/utils/connectDB";
import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";

export const POST = async (request) => {
  try {
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 5);
    const userInfo = {
      name,
      email,
      password: hashedPassword,
    };

    const connectDB = await getDb(); // Establish MongoDB connection
    const newUser = connectDB.collection('users'); // Get the 'users' collection

    const existingUser = await newUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const user = await newUser.insertOne(userInfo); // Insert user info into the 'users' collection

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Error inserting user:', error);

    if (error instanceof SyntaxError) {
      console.error('Syntax Error:', error.message);
    } else if (error.name === 'MongoNetworkError') {
      console.error('Network Error:', error.message);
    } else {
      console.error('Unexpected Error:', error.message);
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
