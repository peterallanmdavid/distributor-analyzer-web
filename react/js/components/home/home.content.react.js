var React = require('react')
	, Reflux = require('reflux')
	, Router = require('react-router')
 	, RouteHandler = Router.RouteHandler
    , Link = Router.Link;
	;



var HomeContent = React.createClass({
	render:function(){
		return(
			<div>
				<Link to = "presentation"><div className= "generic-button home-button">View Distribution Data</div></Link>
				<Link to = "manage"><div className= "generic-button home-button">Add New Data</div></Link>
			</div>
		);
	}

});
module.exports = HomeContent;