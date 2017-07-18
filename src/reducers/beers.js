import { FETCHED_BEERS } from '../actions/beers/get-beers'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_BEERS :
      return payload

    default :
      return state
  }
}
