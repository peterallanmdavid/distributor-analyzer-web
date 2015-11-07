var React = require('react');

var HomeFooter = React.createClass({
	render:function(){
		return(
			<div className = "homeFooter">
				<div>CONTACT US:</div>
				<a href = "https://www.facebook.com/Peter.Allan.M.David"><img className ="footer-icon" src = "images/fb.icon.png" /></a>
				<a href = "https://github.com/"><img className ="footer-icon" src = "images/github.icon.png" /></a>
			</div>
		);
	}
});
module.exports = HomeFooter;