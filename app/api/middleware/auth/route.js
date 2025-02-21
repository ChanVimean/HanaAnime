import { verifyToken } from "../../utils/jwt"
import { NextResponse } from "next/server"

export const authMiddleware = (handler, allowedRole = []) => async (req) => {
  try {
    const token = req.headers.get("Authorization")?.split(" ")[1]

    if (!token) {
      return NextResponse.json({ error: "Unthorization - No Token" }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: "Unauthorized - Invalid token" }, { status: 401 })
    }

    if (allowedRole.length > 0 && !(allowedRole.includes(decoded.role))) {
      return NextResponse.json({ error: "Forbidden - No Access" }, { status: 403 })
    }

    return handler(req, decoded)
  } catch (error) {
    return NextResponse.json({ error: "Authorization Error" }, { status: 500 })
  }
}