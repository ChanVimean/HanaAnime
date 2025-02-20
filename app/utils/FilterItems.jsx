// 🔄 Supports multiple filters (not just one key)
// 🎯 Can filter by single values, arrays, or ranges
// 🚀 More flexible—works for any key, not just genre!

// How to use

// <MovieCarousel title="Action Movies" filterKey="genre" filterValue={["Action"]} />
// <MovieCarousel title="Trending Comedy" filterKey="trending" filterValue={true} />
// <MovieCarousel title="2000s Movies" filterKey="year" filterValue={{ min: 2000, max: 2020 }} />

/*
  const filteredMovies = FilterItems(movies, { 
    genre: ["Action", "Comedy"], 
    year: { min: 2000, max: 2020 } 
  })
*/

/*
  const trendingComedy = FilterItems(movies, { 
    trending: true, 
    genre: ["Comedy"] 
  })
*/

const FilterItems = (apiArray, filters = {}) => {
  return apiArray.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (!item.hasOwnProperty(key)) return false

      const isArray = Array.isArray(value)
      const isRange = typeof value === "object" && value.min !== undefined && value.max !== undefined

      if (isRange) return item[key] >= value.min && item[key] <= value.max

      if (isArray) {
        if (value.length === 0) return true // No filter applied, return all
  
        if (Array.isArray(item[key])) {
          return item[key].some(v => value.includes(v))
        }
        return value.includes(item[key])
      }

      return item[key] === value
    })
  })
}

export default FilterItems
