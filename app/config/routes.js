var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashistory = ReactRouter.hasHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  <Router history={hasHistory} >
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

module.exports = routes;