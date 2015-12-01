var React = require('react')
    ;

var VehicleListItem = React.createClass({
    propTypes:{
        vehicleItem:React.PropTypes.object,
        removeVehicle: React.PropTypes.object,
        isForm: React.PropTypes.bool
    },
    getDefaultProps:function(){
        return({
            isForm: true
        })
    },
    _removeItem:function(){
        if(typeof this.props.vehicleItem.id!=="undefined"){
            this.props.removeVehicle(this.props.vehicleItem.id, false)
        }else{
            this.props.removeVehicle(this.props.vehicleItem.tempId, true)
        }
    },
    render:function(){
        var vehicleItem= this.props.vehicleItem;
        var removeBtn = (<span></span>)
        if(this.props.isForm){
            removeBtn = <div className = "remove-button" onClick = {this._removeItem}><i className="fa fa-times"></i></div>
        }
        return(
            <div className = "source-item-container">
                <div className = "source-item card-white">
                    <div className = "si-row">
                        <div className = "si-field">{vehicleItem.model}</div>
                        <div className = "si-field">{vehicleItem.plateNumber}</div>
                        <div className = "si-field">{vehicleItem.owner}</div>
                    </div>
                    {removeBtn}
                </div>

            </div>
        );
    }
});

module.exports = VehicleListItem;