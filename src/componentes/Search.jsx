import React from 'react'
import {useState} from "react"

function Search(props) {
    const [searchInput, setSearchInput] = useState("")

    const handleChangeSearch = (event) => {
        setSearchInput(event.target.value)
        props.filterFoodList(event.target.value)
    }
  return (
    <div>
        <h1>Search</h1>
        <input type="text" name="search" value={searchInput} onChange={handleChangeSearch}/>
        </div>
  )
}

export default Search