import React from "react"
import TrendingSearches from "../../components/TrendingSearches"
import { useGifs } from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'
import SearchForm from "../../components/SearchForm"
import { Helmet } from "react-helmet"




export default function Home() {


  const { loading, gifs } = useGifs()





  return (
    <>
      <Helmet>
        <title>Home || GIFFY</title>
      </Helmet>
      <SearchForm />
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}