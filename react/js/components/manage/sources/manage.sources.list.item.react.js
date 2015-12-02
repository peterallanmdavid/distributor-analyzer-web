var React = require('react')
	; 

var SourcesListItem = React.createClass({
	propTypes:{
		sourceItem:React.PropTypes.object,
		removeSource: React.PropTypes.object,
        isForm: React.PropTypes.bool
	},
    getDefaultProps:function(){
        return({
            isForm: true
        })
    },
	_removeItem:function(){
        if(typeof this.props.sourceItem.id!=="undefined"){
            this.props.removeSource(this.props.sourceItem.id, false)
        }else{
            this.props.removeSource(this.props.sourceItem.tempId, true)
        }
	},
	render:function(){
		var sourceItem= this.props.sourceItem;
        var removeBtn = (<span></span>)
        if(this.props.isForm){
            removeBtn = <div className = "remove-button" onClick = {this._removeItem}><i className="fa fa-times"></i></div>
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
				</div>

			</div>
		);
	}
});

module.exports = SourcesListItem;