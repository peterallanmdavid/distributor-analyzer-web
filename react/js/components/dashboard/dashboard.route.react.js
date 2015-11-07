var React = require('react')
	, Reflux = require('reflux')
	, HomeHeader = require('../home/home.header.react')
	, HomeFooter = require('../home/home.footer.react')
	, HomeContent = require('../home/home.content.react')
  	, Router = require('react-router')
  	, Navigation = Router.Navigation
  	, RouteHandler = Router.RouteHandler
	;



var DashboardRoute = React.createClass({
	render:function(){
		return(
			<div>
				<HomeHeader />
				<RouteHandler />
				<HomeFooter />
			</div>
		);
	}

});
module.exports = DashboardRoute;