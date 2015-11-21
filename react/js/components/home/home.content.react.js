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
                Welcome to Distribution Analyzer
				<Link to = "presentation"><div className= "generic-button home-button">View Distribution Data</div></Link>
			</div>
		);
	}

});
module.exports = HomeContent;