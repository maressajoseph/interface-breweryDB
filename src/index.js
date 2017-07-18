import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import Home from './containers/Home'
import App from './App'
import './index.css'


ReactDOM.render(
  <Provider store={store}>
   <Router history={history}>
     <Route path="/" component={App}>
      <IndexRoute component={Home} />
     </Route>
   </Router>
  </Provider>,
  document.getElementById('root')
)

injectTapEventPlugin()
registerServiceWorker()
