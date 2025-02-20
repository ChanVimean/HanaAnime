import bcrypt from 'bcryptjs'

// Hashed Password
export const HashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

// Compare Password
export const ComparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword)
}