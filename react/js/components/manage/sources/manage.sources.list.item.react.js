var React = require('react')
	; 

var SourcesListItem = React.createClass({
	propTypes:{
		sourceItem:React.PropTypes.object,
		removeSource: React.PropTypes.object
	},
	_removeItem:function(){
		this.props.removeSource(this.props.sourceItem.id)
	},
	render:function(){
		var sourceItem= this.props.sourceItem;
		return(
			<div className = "source-item-container">
				<div className = "source-item card-white">
					<div className = "si-row">
						<div className = "si-field">{sourceItem.typeName}</div>
						<div className = "si-field">{sourceItem.quantity.daily}</div>
						<div className = "si-field">{sourceItem.quantity.weekly}</div>
						<div className = "si-field">{sourceItem.quantity.monthly}</div>
					</div>
					<div className = "remove-button" onClick = {this._removeItem}><i className="fa fa-times"></i></div>
				</div>
			</div>
		);
	}
});

module.exports = SourcesListItem;