import React, { useState } from "react";
import "../../styles/searchbar.css"

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")

    //update input
    const handleInputChange = (event) => {
        setSearchValue(event.target.value) //set value berdasarkan input yang dimasukan (event)
    }

    const handleClearButton = () => {
        setSearchValue("");
    }
    return (
        <div className="search-component">
          <input className="search-input" type="text" value={searchValue} onChange={handleInputChange}/>
          <p className="search-result">Result : {searchValue}</p>
          <button className="clear-button" onClick={handleClearButton}>Clear</button>
        </div>
    )
}

export default SearchBar;