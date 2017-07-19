import { UPDATE_SEARCH } from '../actions/beers/search-beers'

export default (state = { query: '' }, { type, payload } = {}) => {
  switch (type) {
    case UPDATE_SEARCH :
      return { ...payload }

    default :
      return state
  }
}
