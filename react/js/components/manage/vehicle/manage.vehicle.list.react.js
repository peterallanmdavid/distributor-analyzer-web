var React = require('react')
    , _ = require('lodash')
    , VehicleListItem = require('./manage.vehicle.list.item.react')
    , VehicleForm = require('./manage.vehicles.form.react')
    , classnames = require('classnames')
    ;

var VehicleList = React.createClass({
    propTypes:{
        vehicles:React.PropTypes.array,
        distActions: React.PropTypes.func,
        showForm: React.PropTypes.func,
        isForm: React.PropTypes.bool,
        isEdit: React.PropTypes.bool,
        closeForm: React.PropTypes.func
    },
    getDefaultProps: function(){
        return({isForm: true,isEdit:false})
    },
    render:function(){
        var that = this;
        var vehicles = this.props.vehicles;
        var vehicleItem = [];
        _.forEach(vehicles, function(d, key){
            if(d.isEdit){
              vehicleItem.push(<VehicleForm
                  distActions = {that.props.distActions}
                  vehicle = {d}
                  isEdit = {true}
                  key = {key}
              />)
            }else{
                vehicleItem.push(
                    <VehicleListItem
                        isForm = {that.props.isForm}
                        vehicleItem = {d}
                        removeVehicle = {that.props.distActions.removeVehicle}
                        editVehicle = {that.props.distActions.editVehicle}
                    />);
            }
        });
        var addButtonClass = classnames("add-button card-white",{"hidden":this.props.isAdding})
        var addButton = (<div className = {addButtonClass} onClick = {this.props.showForm}><i className="fa fa-plus-circle"></i>Add Vehicle</div>);
        if(!this.props.isForm){
            addButton = (<span></span>)
        }
        return(
            <div>
                <div className = "source-item-header card vehicle-list">
                    <div className = "si-row ">
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