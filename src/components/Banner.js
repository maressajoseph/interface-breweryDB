import React, { PureComponent } from "react"
import beerbanner from '../assets/imgs/banner2.jpeg'
import "./Banner.css"

export class Banner extends PureComponent {

  render() {
    return (
      <div className="photo-header">
        <img src={beerbanner} alt="bannerbeer" className="bannerbeer" />
      </div>
    )
  }

}

export default Banner
