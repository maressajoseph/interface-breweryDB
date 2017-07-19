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
            <div key={i}>
              <h3>{b.name}</h3>
              <img src={b.labels.medium} alt="beer"/>
            </div>
          )

        })}
      </div>
    )
  }
}


const mapStateToProps = ({ beers }) => ({ beers })

export default connect(mapStateToProps)(BeerContainer)
