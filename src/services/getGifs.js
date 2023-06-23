
import { API_KEY, API_URL } from './settings'



export default function getGifs({ keyword = 'pajaros', limit = 10, page = 0, rating='g' }) {


  const url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}
  &offset=${page * limit}&rating=${rating}&lang=es&bundle=low_bandwidth`


  return fetch(url)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      if (Array.isArray(data)) {
        const gifs = data.map(image => {
          const { images, title, id } = image
          const { url } = images.downsized_medium

          return { title, id, url }
        })

        return gifs
      }

    })
}