import React, { PureComponent } from "react"
import { connect } from 'react-redux'
import fetchBeers from '../actions/beers/get-beers'
import Banner from '../components/Banner'
import BeerContainer from '../components/BeerContainer'

export class Home extends PureComponent {

  componentWillMount() {
    this.props.fetchBeers()
  }

  render() {
    return (
      <div>
        <Banner />
        <BeerContainer />
      </div>
    )
  }
}

const mapStateToProps = ({ beers }) => ({ beers })

export default connect(mapStateToProps, { fetchBeers })(Home)
