
import Gif from '../../components/Gif'
import Spinner from '../../components/Spinner'
import { Redirect } from 'wouter'
import useSingleGif from '../../hooks/useSingleGif'
//import useSEO from '../../hooks/useSEO'
import { Helmet } from 'react-helmet'

export default function Detail ({ params }) {
  
  const {gif,isError,isLoading}= useSingleGif({id: params.id})
  const title = gif ? gif.title :''

  //useSEO({description:`Detail of ${title}`,title})

  if (isError) {     
    <Redirect to='/404'/>
    console.log('error')      
  }

  if (isLoading) {
     
    return(<>
      <Helmet>
      <title>Cargando...</title>
      </Helmet>
      <Spinner />

    </>  
    )
    
  }
  

  if (!gif) {      
    return null
  }


  return <>
      <Helmet>
        <title>{title} | GIFFY</title>
      </Helmet>
      <h3 className="App-title"> {gif.title} </h3>
      <Gif {...gif} />
    </>
      

}