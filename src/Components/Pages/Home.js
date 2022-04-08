import React, { useState } from 'react'
import Result from '../Result/Result'
import SearchBar from '../SearchBar/SearchBar'

const Home = () => {
    
    const [movieList, setMovieList] = useState([])
    
    return (
      <>
        <SearchBar setMovieList={setMovieList} />
        <Result movieList={movieList} />
      </>
    )
  }
  
  export default Home