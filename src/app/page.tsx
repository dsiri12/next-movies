import { getMovies } from '@/lib/movieApi'

import Pagination from '@/components/Pagination'

import './globals.css'
import Search from '@/components/Search'
import MovieList from '@/components/MovieList'

const ITEMS_PER_PAGE = 10

// http://localhost:3000
// http://localhost:3001/?page=1&title=dollar

type Props = {
  searchParams?: {
    title?: string
    page?: string
  }
}

const HomePage = async ({ searchParams }: Props) => {
  // const title = searchParams?.title || 'war'
  const title = searchParams?.title ?? 'war'

  // let title: string
  // if (searchParams?.title) {
  //   title = searchParams?.title
  // } else {
  //   title = 'war'
  // }
  ////

  const currentPage = Number(searchParams?.page || '1')

  const data = await getMovies(title, currentPage)
  const totalMovies = data.totalResults || 0
  const movies = data.Search || []

  const totalPages = Math.ceil(totalMovies / ITEMS_PER_PAGE)

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <Search />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
      />

      {movies.length > 0 && <MovieList movies={movies} />}

      {movies.length === 0 && <h1>No movies found!</h1>}
    </div>
  )
}

export default HomePage
