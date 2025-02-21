export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error("Error saving to local storage: ", error)
  }
}

export const getFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error("Error retrieving from local storage: ", error)
    return []
  }
}

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key)
}