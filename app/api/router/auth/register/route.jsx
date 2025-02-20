import { Register } from "@/app/api/controller/auth/route"

export const POST = async (req) => {
  return await Register(req)
}
