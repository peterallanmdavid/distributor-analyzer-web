var React = require('react')
    ;

var VehiclesForm = React.createClass({
    getInitialState:function(){
        return({
            "id": 0,
            "model": "",
            "plateNumber": "",
            "owner": ""

        })
    },
    propTypes: {
        distActions: React.PropTypes.object,
        closeForm:React.PropTypes.func
    },
    _onChangeHander:function(name, e){
        value = e.target.value;
        var newState = {};
        newState[name] = value;
        this.setState(newState);
    },
    _saveVehicle:function(){
        var data = {
            model: this.state.model,
            plateNumber:  this.state.plateNumber,
            owner: this.state.owner
        }
        this.setState({ "id": 0,
            "model": "",
            "plateNumber": "",
            "owner": ""});
        this.props.distActions.addVehicle(data);
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
                    <i onClick = {this.props.closeForm} className="fa fa-times-circle"></i>
                </div>

            </div>
        );
    }
});

module.exports = VehiclesForm;