var React = require('react')
    , VehiclesList = require('./vehicle/manage.vehicle.list.react')
    , VehiclesForm = require('./vehicle/manage.vehicles.form.react')
    , classnames = require('classnames')
    ;

var Sources = React.createClass({
    getInitialState:function(){
        return({
            isAdding:false
        })
    },
    propTypes:{
        distActions: React.PropTypes.object,
        vehicles: React.PropTypes.array
    },
    _closeForm:function(){
        this.setState({isAdding:false});
    },
    _showForm:function(){
        this.setState({isAdding:true});
    },
    render:function(){
        var vehicles = this.props.vehicles;
        var addClass = classnames({"hidden":!this.state.isAdding})
        return(
            <div>
                <VehiclesList
                    vehicles = {vehicles}
                    removeVehicle = {this.props.distActions.removeVehicle}
                    showForm = {this._showForm}
                    isAdding = {this.state.isAdding}
                />
                <div className = {addClass}>
                    <VehiclesForm
                        distActions = {this.props.distActions}
                        closeForm = {this._closeForm}
                    />
                </div>
            </div>
        );
    }
});

module.exports = Sources;