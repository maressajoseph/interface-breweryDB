import React, { PureComponent } from "react"
import { connect } from 'react-redux'
import './BeerContainer.css'

export class BeerContainer extends PureComponent {

  render() {
    const { beers } = this.props
    const { query } = this.props.searchQuery

    if (query) {
      const beerswithquery = beers.filter((beer) => beer.name.toLowerCase().includes(query) )
  
      return (
        <div className="allbeers">
          {beerswithquery.map((b, i) => {
            return (
              <div key={i} className="onebeer">
                <img src={b.labels.medium} alt="beer" className="beerimage"/>
                <h3 className="beername">{b.name.toUpperCase()}</h3>
                <div className="line"></div>
                <p>{b.abv}%</p>
                <div id="popup">{b.description}</div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className="allbeers">
          {beers.map((b, i) => {
            return (
              <div key={i} className="onebeer">
                <img src={b.labels.medium} alt="beer" className="beerimage"/>
                <h3>{b.name.toUpperCase()}</h3>
                <div className="line"></div>
                <p>{b.abv}%</p>
                <div id="popup">{b.description}</div>
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
