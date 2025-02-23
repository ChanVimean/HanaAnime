
import { useState, useEffect, useRef, useMemo } from "react"
import styles from "../styles/globals.css"
import { FetchSelectedId } from "../utils/FetchAPI"

const Model = ({ id }) => {

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await FetchSelectedId()

      if (data.error) return null

      setMovie(data)
      setLoading(false)
    }

    fetchMovie()
  }, [id])


  return (
    <div onClick={onClose} className="fixed hidden z-50 justify-center items-center inset-0 bg-black/50 backdrop-blur-md">
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
