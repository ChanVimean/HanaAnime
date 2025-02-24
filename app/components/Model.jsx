import { BsBadge4kFill } from "react-icons/bs"
import { IoTimeOutline, IoShareOutline, IoCloudDownloadOutline   } from "react-icons/io5"
import { FiHeart } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"
import { AiOutlineDislike, AiFillDislike  } from "react-icons/ai"

import { useState, useEffect, useRef, useMemo } from "react"
import styles from "../styles/globals.css"
import ReactPlayer from "react-player"
import Link from "next/link"
import { FetchSelectedId } from "../utils/FetchAPI"

const Model = ({ id, onClose }) => {

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  const modelRef = useRef(null)

  // Recieved [id]
  useEffect(() => {
    if (!id) return

    const fetchMovie = async () => {
      const data = await FetchSelectedId(id)

      if (!data || data.error) {
        setLoading(false)
        return
      }
      
      setMovie(data)
      setLoading(false)
    }

    fetchMovie()
  }, [id])

  const handleCloseModel = (event) => {
    if (modelRef.current && !modelRef.current.contains(event.target)) {
      onClose()
    }
  }

  // Handle Close on Click Model
  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModel)
    return () => document.removeEventListener("mousedown", handleCloseModel)
  }, [])

  // Handle Focus on Model
  useEffect(() => {
    if (id) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"

    return () => document.body.style.overflow = "auto"
  }, [id])


  if (!id) return null

  return (
    <div
      // onClick={onClose}
      className="fixed flex z-50 justify-center items-center inset-0 bg-black/50 backdrop-blur-md text-[var(--theme-50)]"
    >
      {/* PC Screen only */}
      <div ref={modelRef} className="hidden lg:flex flex-wrap rounded-xl overflow-hidden w-3/5 h-4/5 bg-[var(--theme-900)]">

        {/* Video */}
        <section className="w-4/6 h-1/2 bg-[var(--950)]">
          {
            movie?.video && (
              <ReactPlayer
                url={movie?.video}
                playing
                controls
                width="100%"
                height="100%"

              />
            )
          }
        </section>

        {/* Seasons & Episodes */}
        <section className="w-2/6 h-1/2">
          {/* Seasons */}
          <ul className="flex space-x-4 p-3 bg-red-500 overflow-x-auto scrollbar-hide">
            <li className="bg-sky-700 rounded-full">Season 1</li>
            <li className="bg-sky-700 rounded-full">Season 2</li>
            <li className="bg-sky-700 rounded-full">Season 3</li>
            <li className="bg-sky-700 rounded-full">Season 4</li>
            <li className="bg-sky-700 rounded-full">Season 5</li>
            <li className="bg-sky-700 rounded-full">Season 6</li>
          </ul>
          {/* Episodes for each Seasons */}
          <ul className="space-y-3 p-3 bg-sky-500 overflow-y-scroll scrollbar-hide">
            <li className="bg-red-700 rounded-full py-2 px-4 text-xl font-medium">Episode 1</li>
            <li className="bg-red-700 rounded-full py-2 px-4 text-xl font-medium">Episode 2</li>
            <li className="bg-red-700 rounded-full py-2 px-4 text-xl font-medium">Episode 3</li>
            <li className="bg-red-700 rounded-full py-2 px-4 text-xl font-medium">Episode 4</li>
            <li className="bg-red-700 rounded-full py-2 px-4 text-xl font-medium">Episode 5</li>
            <li className="bg-red-700 rounded-full py-2 px-4 text-xl font-medium">Episode 6</li>
            <li className="bg-red-700 rounded-full py-2 px-4 text-xl font-medium">Episode 7</li>
          </ul>
        </section>

        {/* Full Details */}
        <section className="w-4/6 h-1/2 space-y-2 bg-[var(--theme-900)] p-3">
          {/* Common Details & Actions */}
          <h1 className="text-3xl font-semibold">{movie?.title}</h1>
          <div className="flex justify-between py-2 border-b-2 border-[var(--theme-950)] border-opacity-15">
            {/* Left - Info */}
            <div className="w-2/6 overflow-hidden">
              <p className="flex space-x-2 items-center text-center text-lg font-medium">
                <BsBadge4kFill/>
                <span>{movie?.type[0]}</span>
                <span>|</span>
                <span>{movie?.type[1]}</span>
              </p>
              <p className="flex space-x-2 items-center text-center text-md">
                <IoTimeOutline />
                <span>{movie?.duration} mn</span>
              </p>
            </div>

            {/* Right - Action */}
            <div className="flex w-4/6 text-lg justify-evenly font-medium overflow-hidden">
              <div className="flex w-40 justify-evenly items-center rounded-full p-2 bg-[var(--theme-700)]">
                <button className="text-2xl wrap-btn">
                  <FiHeart />
                </button>
                <p>21.56K</p>
                <span>|</span>
                <button className="text-2xl wrap-btn">
                  <AiOutlineDislike />
                </button>
              </div>
              <button className="flex w-28 justify-evenly wrap-btn items-center rounded-full p-2 bg-[var(--theme-700)]">
                <IoShareOutline className="text-2xl" />
                <span>Share</span>
              </button>
              <button className="flex w-40 justify-evenly wrap-btn items-center rounded-full p-2 bg-[var(--theme-700)]">
                <IoCloudDownloadOutline className="text-2xl" />
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* Genres x Horizontal Scroll */}
          <div className="flex space-x-2 overflow-hidden">
            <span className="font-semibold">Genres:</span>
            <ul className="flex space-x-2 font-medium">
              {
                movie?.genre?.map((data, index) => 
                  <li key={index}>{data}</li>
                )
              }
            </ul>
          </div>

          {/* Description */}
          <div className="overflow-hidden h-52 pe-2 opacity-75 overflow-y-auto vertical-scrollbar">
            <div className="flex justify-between">
              <p className="font-normal">
                100K
                <span className="font-semibold mx-2">views</span>
                <span className="opacity-75">4 weeks ago</span>
              </p>
              <p>Release: {movie?.release}</p>
            </div>
            <h1 className="font-semibold">
              Director/Studio:
              <span className="font-normal ms-2 wrap-btn">
                <Link href={""}>{movie?.studio}</Link>
              </span>
            </h1>
            <p>Rate: {movie?.rating}</p>
            <p className="space-x-2">
              Countries & Languages:
              <span className="ms-2">
                { 
                  movie?.country?.map((data, index) =>
                    <span key={index}>{data}{index < movie.country.length - 1 ? ", " : ""}</span>
                  )
                }
                /
                {
                  movie?.language?.map((data, index) =>
                    <span key={index}>{data}{index  < movie.language.length - 1 ? ", " : ""}</span>
                  )
                }
              </span>
            </p>
            <p className="mt-2">{movie?.description}</p>
          </div>
        </section>

        {/* Reviews - Static for now */}
        <section className="w-2/6 h-1/2 bg-[var(--theme-800)]">
          <header className="py-2 px-4 text-2xl font-semibold bg-[var(--theme-700)]">Reviews</header>
          <main className="shadow-inner p-2">
            <div>Testing</div>
          </main>
        </section>

      </div>

      {/* Tablet x Mobile */}
      <div></div>
    </div>
  )
}

export default Model