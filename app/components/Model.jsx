
import { useState, useEffect, useRef, useMemo } from "react"
import styles from "../styles/globals.css"

const Model = ({ id }) => {




  return (
    <div className="fixed flex z-50 justify-center items-center inset-0">
      {/* PC Screen only */}
      <div className="hidden lg:flex flex-wrap rounded-xl overflow-hidden w-4/5 h-4/5 bg-slate-600">

        <section className="w-4/6 h-1/2 bg-blue-300">Video</section>

        <section className="w-2/6 h-1/2 bg-yellow-300">Season & Episode</section>

        <section className="w-4/6 h-1/2 bg-blue-800">Description</section>

        <section className="w-2/6 h-1/2 bg-red-600">Reviews</section>

      </div>

      {/* Tablet x Mobile */}
    </div>
  )
}

export default Model
