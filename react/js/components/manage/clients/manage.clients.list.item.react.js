var React = require('react')
	; 

var SourcesListItem = React.createClass({
	propTypes:{
		clientItem:React.PropTypes.object
	},
	render:function(){
		var clientItem= this.props.clientItem;
		return(
			<div className = "client-item-container">
				<div className = "client-item card-white">
					<div className = "item-field">{clientItem.name}</div>
					<div className = "item-field">{clientItem.owner}</div>
					<div className = "item-field">{clientItem.location}</div>
				</div>
			</div>
		);
	}
});

module.exports = SourcesListItem;