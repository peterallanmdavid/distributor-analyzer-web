var React = require('react')
	, _ = require('lodash')
	, SourcesItem = require('./manage.sources.list.item.react')
	, classnames = require('classnames')
	; 

var SourcesList = React.createClass({
	propTypes:{
		sources:React.PropTypes.array,
		removeSource: React.PropTypes.func,
        isForm: React.PropTypes.bool
	},
    getDefaultProps: function(){
        return({isForm: true})
    },
	render:function(){
		var that = this;
		var sources = this.props.sources;
		var sourceItem = [];
		_.forEach(sources, function(d){
			sourceItem.push(<SourcesItem isForm = {that.props.isForm} sourceItem = {d} removeSource = {that.props.removeSource}/>);
		});
		var addButtonClass = classnames("add-button card-white",{"hidden":this.props.isAdding})
        var addButton = (<div className = {addButtonClass} onClick = {this.props.showForm}><i className="fa fa-plus-circle"></i>Add Source</div>);
        if(!this.props.isForm){
            addButton = (<span></span>)
        }
		return(
			<div>
				<div className = "source-item card">
					<div className = "si-row header">
                        <div className = "si-field"><label>Source Location</label></div>
						<div className = "si-field"><label>Source Type</label></div>
						<div className = "si-field"><label>Daily Quantity</label></div>
						<div className = "si-field"><label>Weekly Quantity</label></div>
						<div className = "si-field"><label>Monthly Quantity</label></div>
					</div>
				</div>
				{sourceItem}
                {addButton}
			</div>
		);
	}
});

module.exports = SourcesList;