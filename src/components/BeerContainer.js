import React, { PureComponent } from "react"
import { connect } from 'react-redux'
import './BeerContainer.css'

export class BeerContainer extends PureComponent {

  render() {
    const { beers } = this.props
    const { query } = this.props.searchQuery

    if (query) {
      const beerswithquery = beers.filter((beer) => beer.name.toLowerCase().includes(query.toLowerCase()) )

      return (
        <div className="allbeers">
          {beerswithquery.map((beer, index) => {
            return (
              <div key={index} className="onebeer">
                <img src={beer.labels.medium} alt="beer" className="beerimage"/>
                <h3 className="beername">{beer.name.toUpperCase()}</h3>
                <div className="line"></div>
                <p>{beer.abv}%</p>
                <div id="popup">{beer.description}</div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className="allbeers">
          {beers.map((beer, index) => {
            return (
              <div key={index} className="onebeer">
                <img src={beer.labels.medium} alt="beer" className="beerimage"/>
                <h3>{beer.name.toUpperCase()}</h3>
                <div className="line"></div>
                <p>{beer.abv}%</p>
                <div id="popup">{beer.description}</div>
              </div>
            )
          })}
        </div>
      )
    }
  }
}


const mapStateToProps = ({ beers, searchQuery }) => ({ beers, searchQuery })

export default connect(mapStateToProps)(BeerContainer)
