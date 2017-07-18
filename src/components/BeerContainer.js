import React, { PureComponent } from "react"
import { connect } from 'react-redux'

export class BeerContainer extends PureComponent {
  render() {
    const { beers } = this.props
    console.log(beers)
    return (
      <div>
        {beers.map((b, i) => {
          return (
            <div key={i}>
              <h3>{b.name}</h3>
              if (b.labels === undefined) {
                <img src="https://s3.amazonaws.com/brewerydbapi/beer/StkEiv/upload_etArOb-icon.png" alt="beer" />
              } else {
                <img src={b.labels.icon} alt="beer"/>
              }  
            </div>
          )

        })}
      </div>
    )
  }
}


const mapStateToProps = ({ beers }) => ({ beers })

export default connect(mapStateToProps)(BeerContainer)
