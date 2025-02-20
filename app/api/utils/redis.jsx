import Redis from "ioredis"

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  tls: process.env.REDIS_TLS === "true" ? {} : undefined
})

export const storeOTP = async (email, otp) => {
  try {
    await redis.set(`OTP:${email}`, otp, "EX", 120)
    return true
  } catch (error) {
    console.error("Redis Error (storeOTP): ", error)
    return false
  }
}

export const getOTP = async (email) => {
  try {
    const otp = await redis.get(`OPT:${email}`)
    return otp
  } catch (error) {
    console.error("Redis Error (deleteOTP): ", error)
    return null
  }
}

export const deleteOTP = async (email) => {
  try {
    await redis.del(`OTP:${email}`)
    return true
  } catch (error) {
    console.error("Redis Error (deleteOTP): ", error)
    return false
  }
}

export default redis