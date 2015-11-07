var React = require('react')
	, Reflux = require('reflux')
	;



var HomeContent = React.createClass({
	render:function(){
		return(
			<div>
				<div className = "home-button"><a href = "#/presnetation">View Peter Distribution Data</a></div>
				<div className = "home-button"><a href = "#/manage">Add New Data</a></div>
			</div>
		);
	}

});
module.exports = HomeContent;