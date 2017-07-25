import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const FETCHED_BEERS = 'FETCHED_BEERS'

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

      fetch(`http://api.brewerydb.com/v2/beers?styleId=2&withBreweries=Y&order=ibu&hasLabels=Y&key=e3710d383a093f086152b9af977123ce`, {
        method: 'GET'
      }).then(response => response.json())
      .then((json) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: FETCHED_BEERS,
          payload: json.data
        })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
    }

}
