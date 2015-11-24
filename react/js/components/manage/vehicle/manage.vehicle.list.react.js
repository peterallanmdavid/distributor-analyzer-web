var React = require('react')
    , _ = require('lodash')
    , VehicleListItem = require('./manage.vehicle.list.item.react')
    , classnames = require('classnames')
    ;

var VehicleList = React.createClass({
    propTypes:{
        vehicles:React.PropTypes.array,
        removeVehicle: React.PropTypes.func,
        showForm: React.PropTypes.func,
        isForm: React.PropTypes.bool
    },
    getDefaultProps: function(){
        return({isForm: true})
    },
    render:function(){
        var that = this;
        var vehicles = this.props.vehicles;
        var vehicleItem = [];
        _.forEach(vehicles, function(d){
            vehicleItem.push(<VehicleListItem isForm = {that.props.isForm} vehicleItem = {d} removeVehicle = {that.props.removeVehicle}/>);
        });
        var addButtonClass = classnames("add-button card-white",{"hidden":this.props.isAdding})
        var addButton = (<div className = {addButtonClass} onClick = {this.props.showForm}><i className="fa fa-plus-circle"></i>Add Vehicle</div>);
        if(!this.props.isForm){
            addButton = (<span></span>)
        }
        return(
            <div>
                <div className = "source-item card vehicle-list">
                    <div className = "si-row header">
                        <div className = "si-field"><label>Model</label></div>
                        <div className = "si-field"><label>Plate Number</label></div>
                        <div className = "si-field"><label>Owner</label></div>
                    </div>
                </div>
				{vehicleItem}
                {addButton}
            </div>
        );
    }
});

module.exports = VehicleList;