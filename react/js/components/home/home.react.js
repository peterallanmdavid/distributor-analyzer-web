var React = require('react')
	, Reflux = require('reflux') 
	, Router = require('react-router')
    , Link = Router.Link;



var HomeComponent = React.createClass({
	render:function(){
		return(
			<div className = "home-content">
				<Link to = "presentation"><div className= "generic-button home-button">View Distribution Data</div></Link>
				<Link to = "manage"><div className= "generic-button home-button">Add New Data</div></Link>
			</div>
		);
	}

});
module.exports = HomeComponent;