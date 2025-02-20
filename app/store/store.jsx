import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./Theme"

const store = configureStore({

  reducer: {
    theme: themeReducer
  }  


})

export default store
