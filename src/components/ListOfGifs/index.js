import './ListOfGifs.css'
import Gif from "../Gif";



export default function ListOfGifs ({gifs}) {
    return <div className='ListOfGifs'>
      {
        gifs.map(({id, title, url,...restOfGif}) =>
          <Gif
            id={id}
            key={id}
            title={title}
            url={url}
            extraInfo={restOfGif}
          />
        )
      }
    </div>
  }
  