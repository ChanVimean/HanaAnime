import { Login } from "@/app/api/controller/auth/route"

export const POST = async (req) => {
  return await Login(req)
}
