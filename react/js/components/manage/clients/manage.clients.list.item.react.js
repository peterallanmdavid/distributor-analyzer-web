var React = require('react')
	; 

var SourcesListItem = React.createClass({
	propTypes:{
		clientItem:React.PropTypes.object
	},
	render:function(){
		var clientItem= this.props.clientItem;
		return(
			<div>
				<div clasName = "card">
					<div className = "client-name">{clientItem.name}</div>
					<div className = "client-owner">{clientItem.owner}</div>
					<div className = "client-location">{clientItem.location}</div>
				</div>
			</div>
		);
	}
});

module.exports = SourcesListItem;