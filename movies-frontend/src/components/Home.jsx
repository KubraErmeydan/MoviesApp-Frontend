import React, { useEffect ,useState} from 'react'

const Home = () => {

  const [movieList, setMovieList] = useState([])

  const getMovies =  () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=b3e902d15745492057421626f7fefe8b").then(res => res.json()).then(json => setMovieList(json.results))
  }

  useEffect(() => {
    getMovies()
  }, [])

  console.log(movieList)

  return (
    <div>
      {movieList.map((movie) => (<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>))}
    </div>
  )
}

export default Home