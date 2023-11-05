const API_URL = `http://www.omdbapi.com?apikey=b6003d8a`

type ResponseType = {
    totalResults: number
    Search: MovieType[]
  }

export const getMovies = async (title: string, page: number): Promise<ResponseType> => {
  const url = `${API_URL}&s=${title}&page=${page}`
  
  console.log(`url=${url}`)
  // url=http://www.omdbapi.com?apikey=b6003d8a&s=war&page=1

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch movies.')
  }

  return response.json()
}
