import { getAllMovies } from "../../controller/getMovies/route"


export const GET = async () => {
  return await getAllMovies()
}