var React = require('react')
	CommonDropDown = require('../../common/common.dropdown.react')
	; 

var SourcesForm = React.createClass({
	getInitialState:function(){
		return({ 
			      name:"", 
			      owner:"", 
			      location:"", 
			      testSamples:[] 
		});
	},
	propTypes: {
		distAction: React.PropTypes.object,
		addClient: React.PropTypes.func
	},
	_changeQuantity:function(name, e){
		value = e.target.value;
	 	var newState = {};
        newState[name] = value;
		this.setState(newState);
	},
	_saveSource:function(){
		this.props.addClient(this.state);
	},

	render:function(){
		return(
			<div className = "client-form">
				<div className = "input-fields">
					<label> Name </label>
					<input value= {this.state.name} onChange ={this._changeQuantity.bind(null, "name")}/>
				</div>
				<div className = "input-fields">
					<label> Owner </label>
					<input value= {this.state.owner} onChange ={this._changeQuantity.bind(null, "owner")}/>
				</div>
				<div className = "input-fields">
					<label> Location </label>
					<input value= {this.state.location} onChange ={this._changeQuantity.bind(null, "location")}/>
				</div>
				<div>
					<div className = "generic-button right" onClick = {this._saveSource}>SAVE</div>
				</div>
			</div>
		);
	}
});

module.exports = SourcesForm;