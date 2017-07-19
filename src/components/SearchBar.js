import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import searchBeers from '../actions/beers/get-beers'
import updateQuery from '../actions/beers/search-beers'
import SearchIcon from 'material-ui/svg-icons/action/search'

class SearchBar extends PureComponent {
  static propTypes = {
    updateQuery: PropTypes.func.isRequired,
    searchBeers: PropTypes.func.isRequired,
  }

  componentWillUpdate(nextProps) {
    const { query } = nextProps.searchQuery
    const oldQuery = this.props.query

    if (query !== oldQuery) {
      this.props.searchBeers({ query })
    }
  }

  textSearch = (event) => {
    const query = event.target.value
    if (query.length > 0 && query.length < 3) return
    this.props.updateQuery({ query })
  }

  render() {
    return (
      <div className="searchBar">
        <TextField
          type="search"
          onChange={this.textSearch}
          onKeyDown={this.textSearch}
          fullWidth={false}
          hintText={< SearchIcon />}
          />
      </div>
    )
  }
}

const mapStateToProps = ({ searchQuery }) => ({ searchQuery })

export default connect(mapStateToProps, { searchBeers, updateQuery })(SearchBar)
