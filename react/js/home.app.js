var React = require('react')
  , Router = require('react-router')
  , DefaultRoute = Router.DefaultRoute
  , NotFoundRoute = Router.NotFoundRoute
  , Redirect = Router.Redirect
  , Route = Router.Route
  , RouteHandler = Router.RouteHandler
  , Home=  require('./components/home/home.react')
  , DashboardRoute = require('./components/dashboard/dashboard.route.react')
  , Presentation= require('./components/presentation/presentation.react')
  , Manage= require('./components/manage/manage.react')
  , HomeContent = require('./components/home/home.content.react')
  ;

var routes = (
    <Route name="dashboard" path="/" handler={DashboardRoute}>
    	<DefaultRoute handler={Home}/>
    	<Route name="home" handler={Home} >
        <DefaultRoute handler={HomeContent}/>
        <Route name="presentation" handler={Presentation} />
        <Route name="manage" handler={Manage} />
      </Route>
    </Route>
    )

Router.run(routes, function (Handler) {
    var previouspath = this.getCurrentPath();
    React.render(<Handler/>,  document.getElementById('home'));

    var curRoutes = this.getCurrentRoutes();
    var route = curRoutes ? curRoutes[curRoutes.length - 1]: {};
    var data = {
        name: route.name,
        names: curRoutes ? curRoutes.map(function(route) { return route.name; }): [],
        params: this.getCurrentParams(),
        query: this.getCurrentQuery(),
        path: this.getCurrentPath(),
        pathname: this.getCurrentPathname(),
        previouspath: previouspath
    };
});
