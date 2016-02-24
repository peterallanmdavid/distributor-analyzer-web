var React = require('react')
	, _ = require('lodash')
	, SourcesItem = require('./manage.sources.list.item.react')
	, classnames = require('classnames')
    , SourceForm = require('./manage.sources.form.react')
	; 

var SourcesList = React.createClass({
	propTypes:{
		sources:React.PropTypes.array,
        isForm: React.PropTypes.bool,
        sourceTypes: React.PropTypes.array,
        distActions: React.PropTypes.object,
        isEdit: React.PropTypes.bool
	},
    getDefaultProps: function(){
        return({isForm: true, isEdit:false})
    },
	render:function(){
		var that = this;
		var sources = this.props.sources;
		var sourceItem = [];
		_.forEach(sources, function(d, key){
            if(d.isEdit){
                sourceItem.push(<SourceForm
                    sourceTypes = {that.props.sourceTypes}
                    distActions = {that.props.distActions}
                    source = {d}
                    isEdit = {true}
                    key = {key}
                />);
            }else{
                sourceItem.push(<SourcesItem
                    key={key}
                    isForm = {that.props.isForm}
                    sourceItem = {d}
                    removeSource = {that.props.distActions.removeSource}
                    editSource = {that.props.distActions.editSource} />);
            }

		});
		var addButtonClass = classnames("add-button card-white",{"hidden":this.props.isAdding})
        var addButton = (<div className = {addButtonClass} onClick = {this.props.showForm}><i className="fa fa-plus-circle"></i>Add Supplier</div>);
        if(!this.props.isForm){
            addButton = (<span></span>)
        }
		return(
			<div>
				<div className = "source-item-header card">
					<div className = "si-row">
                        <div className = "si-field"><label>Supplier's Location</label></div>
						<div className = "si-field"><label>Type of Target</label></div>
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