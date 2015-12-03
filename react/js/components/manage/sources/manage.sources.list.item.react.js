var React = require('react')
	; 

var SourcesListItem = React.createClass({
	propTypes:{
		sourceItem:React.PropTypes.object,
		removeSource: React.PropTypes.object,
        isForm: React.PropTypes.bool,
        editSource: React.PropTypes.func
	},
    getDefaultProps:function(){
        return({
            isForm: true
        })
    },
	_removeItem:function(){
        this.props.removeSource(this.props.sourceItem.tempId)
	},
    _editItem:function(){
        this.props.editSource(this.props.sourceItem.tempId, true)
    },
	render:function(){
		var sourceItem= this.props.sourceItem;
        var removeBtn = (<span></span>)
        var editBtn = (<span></span>)
        if(this.props.isForm){
            removeBtn = <div className = "remove-button" onClick = {this._removeItem}><i className="fa fa-trash"></i></div>
            editBtn = <div className = "edit-button" onClick = {this._editItem}><i className="fa fa-pencil"></i></div>
        }
		return(
			<div className = "source-item-container">
				<div className = "source-item card-white">
					<div className = "si-row">
                        <div className = "si-field">{sourceItem.location}</div>
						<div className = "si-field">{sourceItem.type}</div>
						<div className = "si-field">{sourceItem.quantity.daily}</div>
						<div className = "si-field">{sourceItem.quantity.weekly}</div>
						<div className = "si-field">{sourceItem.quantity.monthly}</div>
					</div>
                    {removeBtn}
                    {editBtn}
				</div>

			</div>
		);
	}
});

module.exports = SourcesListItem;