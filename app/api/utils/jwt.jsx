import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET
const EXPIRES_IN = process.env.JWT_EXPIRES_IN

export const generateToken = (user) => {
  return jwt.sign(
    {id: user.id, role: user.role },
    SECRET,
    { expiresIn: EXPIRES_IN }
  )
}

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET)
  } catch (error) {
    return null
  }
}