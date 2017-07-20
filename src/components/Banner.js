import React, { PureComponent } from "react"
import BeerBanner from '../assets/imgs/banner2.jpeg'
import JMLogo from '../assets/imgs/JM-logo.png'
import "./Banner.css"

export class Banner extends PureComponent {

  render() {
    return (
      <div className="photo-header">
        <img src={BeerBanner} alt="bannerbeer" className="bannerimage" />
        <img src={JMLogo} alt="jmlogo" className="jmlogo" />
      </div>
    )
  }

}

export default Banner
