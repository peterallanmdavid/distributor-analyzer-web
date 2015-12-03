var React = require('react')
    ;

var VehiclesForm = React.createClass({
    getInitialState:function(){
        return this._getInitialStateFromProps();
    },
    propTypes: {
        distActions: React.PropTypes.object,
        closeForm:React.PropTypes.func,
        vehicle: React.PropTypes.object,
        isEdit: React.PropTypes.bool
    },
    getDefaultProps:function(){
        return({
            isEdit:false,
            vehicle:{
                "tempId": "",
                "model": "",
                "plateNumber": "",
                "owner": ""
            }
        })
    },
    _getInitialStateFromProps:function(){
        var vehicle  = this.props.vehicle
        var state={
            "tempId": vehicle.tempId,
            "model": vehicle.model,
            "plateNumber": vehicle.plateNumber,
            "owner": vehicle.owner
        }
        return state
    },
    _onChangeHander:function(name, e){
        value = e.target.value;
        var newState = {};
        newState[name] = value;
        this.setState(newState);
    },
    _saveVehicle:function(){
        var data = {
            tempId: this.state.tempId,
            model: this.state.model,
            plateNumber:  this.state.plateNumber,
            owner: this.state.owner
        }
        this.props.distActions.addVehicle(data);
        this._clearForm();
        if(this.props.isEdit){
            this._closeForm();
        }
    },
    _clearForm:function(){
        this.setState({ "tempId": "",
            "model": "",
            "plateNumber": "",
            "owner": ""});
    },
    _closeForm:function(){
        if(this.props.isEdit){
            this.props.distActions.editVehicle(this.props.vehicle.tempId, false)
        }else{
            this.props.closeForm();
        }

    },

    render:function(){
        return(
            <div className = "source-form card-white">
                <div className = "form-row">
                    <div className = "input-field">
                        <input className = "ta-left" value= {this.state.model} onChange ={this._onChangeHander.bind(null, "model")}/>
                    </div>
                    <div className = "input-field">
                        <input className = "ta-left" value= {this.state.plateNumber} onChange ={this._onChangeHander.bind(null, "plateNumber")}/>
                    </div>
                    <div className = "input-field">
                        <input className = "ta-left" value= {this.state.owner} onChange ={this._onChangeHander.bind(null, "owner")}/>
                    </div>
                </div>
                <div className = "input-field action-buttons">
                    <i onClick = {this._saveVehicle} className="fa fa-check-circle"></i>
                    <i onClick = {this._closeForm} className="fa fa-times-circle"></i>
                </div>

            </div>
        );
    }
});

module.exports = VehiclesForm;