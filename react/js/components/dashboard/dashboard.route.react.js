var React = require('react')
	, Reflux = require('reflux')
	, HomeHeader = require('../home/home.header.react')
	, HomeFooter = require('../home/home.footer.react')
  	, Router = require('react-router')
  	, RouteHandler = Router.RouteHandler
	;



var DashboardRoute = React.createClass({
	render:function(){
		return(
			<div className = "general-container">
				<HomeHeader />
				<RouteHandler />
			</div>
		);
	}

});
module.exports = DashboardRoute;