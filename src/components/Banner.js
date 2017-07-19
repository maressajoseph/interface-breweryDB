import React, { PureComponent } from "react"
import SearchBar from './SearchBar'
import "./Banner.css"

export class Banner extends PureComponent {

  render() {
    return (
      <div className="photo-header">
        <SearchBar />
      </div>
    )
  }

}

export default Banner
