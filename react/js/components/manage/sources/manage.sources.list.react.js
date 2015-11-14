var React = require('react')
	, _ = require('lodash')
	, SourcesItem = require('./manage.sources.list.item.react')
	, classnames = require('classnames')
	; 

var SourcesList = React.createClass({
	propTypes:{
		sources:React.PropTypes.array,
		removeSource: React.PropTypes.func
	},
	render:function(){
		var that = this;
		var sources = this.props.sources;
		var sourceItem = [];
		_.forEach(sources, function(d){
			sourceItem.push(<SourcesItem sourceItem = {d} removeSource = {that.props.removeSource}/>);
		});
		var addButtonClass = classnames("add-button card-white",{"hidden":this.props.isAdding})
		return(
			<div>
				<div className = "source-item card">
					<div className = "si-row header">
						<div className = "si-field"><label>Source Type</label></div>
						<div className = "si-field"><label>Daily Quantity</label></div>
						<div className = "si-field"><label>Weekly Quantity</label></div>
						<div className = "si-field"><label>Monthly Quantity</label></div>
					</div>
				</div>
				{sourceItem}
				<div className = {addButtonClass} onClick = {this.props.showForm}><i className="fa fa-plus-circle"></i>Add Source</div>
			</div>
		);
	}
});

module.exports = SourcesList;