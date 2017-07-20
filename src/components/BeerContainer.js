import React, { PureComponent } from "react"
import { connect } from 'react-redux'
import './BeerContainer.css'

export class BeerContainer extends PureComponent {
  render() {
    const { beers } = this.props
    return (
      <div className="allbeers">
        {beers.map((b, i) => {
          return (
            <div key={i} className="onebeer">
              <h3>{b.name.toUpperCase()}</h3>
              <img src={b.labels.medium} alt="beer" className="beerimage"/>
            </div>
          )

        })}
      </div>
    )
  }
}


const mapStateToProps = ({ beers }) => ({ beers })

export default connect(mapStateToProps)(BeerContainer)
