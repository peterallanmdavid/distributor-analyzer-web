var React = require('react')
	; 

var SourcesListItem = React.createClass({
	propTypes:{
		sourceItem:React.PropTypes.object
	},
	render:function(){
		var sourceItem= this.props.sourceItem;
		return(
			<div>
				<div clasName = "card">
					<div className = "source-type">Source Type:{sourceItem.typeName}</div>
					<div className = "source-quantity">
						<div>Quantity</div>
						<div>Daily: {sourceItem.quantity.daily}</div>
						<div>Weekly: {sourceItem.quantity.item}</div>
						<div>Weekly: {sourceItem.quantity.monthly}</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = SourcesListItem;