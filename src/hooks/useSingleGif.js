import { useState,useEffect } from "react";
import { useGifs } from "./useGifs";
import getSingleGif from "../services/getSingleGif";


export default function useSingleGif({ id }) {
        const {gifs}=useGifs()      

        const gitFromCache=gifs.find(singleGif => singleGif.id === id)

        const[gif,setGif]=useState(gitFromCache)        
        const[isLoading,setIsLoading]=useState(false)
        const[isError,setIsError]=useState(false)


        useEffect(function () {
            if(!gif){
                //llamamos al servicio si no tenemos gif
                setIsLoading(true)
                
                getSingleGif({ id })
                .then(gif=>{
                    setGif(gif)
                    setIsLoading(false)
                    setIsError(false)
                }).catch(error=>{
                    setIsLoading(false)
                    setIsError(true)
                })
                
            }
        },[gif,id])



     return { gif, isError, isLoading}

}