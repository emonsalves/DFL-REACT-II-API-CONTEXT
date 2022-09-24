import React from 'react'

function Search() {
  return (
    <div class="searchBox">
    <div class="search">
        <ion-icon name="search-outline"></ion-icon>
    </div>
    <div class="searchInput">
        <input type="text" placeholder="Search Here"/>
    </div>
    <div class="close"><ion-icon name="close-outline"></ion-icon></div>
</div>
  )
}

export default Search