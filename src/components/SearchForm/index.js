import React, { useReducer, useState } from "react";
import { useLocation } from "wouter";
import css from './SearchForm.module.css'


const RATING = ['g', 'pg', 'pg-13', 'r']

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            
            return {
            ...state,
            keyword: action.payload,

            times: state.times + 1
        }
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload,
    
            }
    
        default:
            return state
    }
}

export default function SearchForm({ initialRating, initialKeyword = '' }) {
    //const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    //const [rating, setRating] = useState(initialRating)    
    //const [times,setTimes]=useState(0)

    const [, pushLocation] = useLocation()

    const [state, dispatch,] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        times: 0
    })

    const { keyword, rating, times } = state



    const handleChange = evt => {
        dispatch({ type: 'update_keyword', payload: evt.target.value })
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = (evt) => {
        dispatch({ type: 'update_rating', payload: evt.target.value })
    }


    return (

        <form onSubmit={handleSubmit} value={rating}  className={css["c-search"]}>
            <button className={css["c-search-btn"]}>Buscar</button>
            <input className={css["c-search-input"]} placeholder="Search a gif here..."
                onChange={handleChange} type='text' value={keyword} />
            <select className={css["c-search-list"]} value={rating} onChange={handleChangeRating}>
                {RATING.map(rating => <option key={rating} > {rating}</option>)}
            </select>
            <small>{times}</small>
        </form>

    )

}
