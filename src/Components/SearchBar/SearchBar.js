import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
  }
  search(term) {
    this.props.onSearch(term)
  }

  render() {
    return (
      <div className="SearchBar">
          <input placeholder="Enter A Song, Album, or Artist" />
          <button className="SearchButton">SEARCH</button>
      </div>
    )
  }
}
export default SearchBar;
