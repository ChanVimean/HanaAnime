import clientPromise from "../../utils/mongo"
import { HashedPassword, ComparePassword } from "../../utils/hash"
import { generateToken } from "../../utils/jwt"
import { NextResponse } from "next/server"

// Register
export const Register = async (req) => {
  try {
    const { name, username, email, password, type } = await req.json()

    if (!name || !username || !email || !password || !type) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (type !== "user" && type !== "admin") {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("sample_mflix")

    const collection =
      type === "admin" ? db.collection("admins") : db.collection("users")

    // Check if email exists in both collections
    const existingUser =
      (await db.collection("users").findOne({ email })) ||
      (await db.collection("admins").findOne({ email }))

    if (existingUser)
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      )

    // Hash the password
    const hashedPassword = await HashedPassword(password)

    // Insert new user/admin
    const newUser = await collection.insertOne({
      name,
      username,
      email,
      password: hashedPassword,
    })

    return NextResponse.json(
      {
        success: true,
        message: `${type} registered successfully`,
        userId: newUser.insertedId,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// Login
export const Login = async (req) => {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and Password are required" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("sample_mflix")

    // Use email index to find user faster
    let user = await db.collection("users").findOne({ email })
    let role = "user"

    if (!user) {
      user = await db.collection("admins").findOne({ email })
      role = "admin"
    }

    if (!user)
      return NextResponse.json({ error: "User Not Found" }, { status: 404 })

    // Check Password
    const isPasswordValid = await ComparePassword(password, user.password)
    if (!isPasswordValid)
      return NextResponse.json(
        { error: "Incorrect Password" },
        { status: 401 }
      )

    // Generate JWT
    const token = generateToken({ id: user._id, role })

    return NextResponse.json(
      {
        success: true,
        message: "Login Successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          role,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
