import React, { PureComponent } from "react"
import { connect } from 'react-redux'
import fetchBeers from '../actions/beers/get-beers'

export class Home extends PureComponent {

  componentWillMount() {
    this.props.fetchBeers()
  }

  render() {
    return (
      <div>
        <h2>Hi</h2>
      </div>
    )
  }
}

const mapStateToProps = ({ beers }) => ({ beers })

export default connect(mapStateToProps, { fetchBeers })(Home)
