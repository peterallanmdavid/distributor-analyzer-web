var React = require('react')
	, Reflux = require('reflux')
	, DistStore = require('../../store/distributor.store')
	, DistAction = require('../../action/distributor.action')
	, _ = require('lodash')
	, Router = require('react-router')
    , Link = Router.Link;

	;



var Manage = React.createClass({
	getInitialState: function(){
		return({distName:"", address:"", wLocation:"",wCapacity:0, dailySales:0, monthlySales:0})
	},
	_saveData:function(){
		d = this.state;
		var payLoad = {
			distName:d.distName, 
			address: d.address,
			wLocation: d.wLocation,
			wCapacity: d.wCapacity, 
			dailySales:d.dailySales, 
			monthlySales:d.monthlySales
		}
		DistAction.saveData(payLoad);
		window.location="#/presentation"
	},
	_onChangeValue:function(name, e){
		value = e.target.value;
	 	var newState = {};
        newState[name] = value;
		this.setState(newState);
	},
	render:function(){
		var disData = this.state;
		return(
			<div className = "manage-container">
				<ul>
					<li><b>Add New Entry</b></li>
					<li>
						<label>Main Distributor</label>
						<div><input value = {disData.distName} onChange = {this._onChangeValue.bind(null, "distName")}/></div>
					</li>
				    <li>
						<label>Address</label>
						<div><input value = {disData.address} onChange = {this._onChangeValue.bind(null, "address")}/></div>
					</li>
				    <li>
						<label>Warehouse Location</label>
						<div><input value = {disData.wLocation} onChange = {this._onChangeValue.bind(null, "wLocation")}/></div>
					</li>
				    <li>
						<label>Warehouse Capacity</label>
						<div><input value = {disData.wCapacity} onChange = {this._onChangeValue.bind(null, "wCapacity")}/></div>
					</li>
				   <li>
						<label>Daily Sales Volume Capacity</label>
						<div><input value = {disData.dailySales} onChange = {this._onChangeValue.bind(null, "dailySales")}/></div>
					</li>
				    <li>
						<label>Monthly Sales Volume Capacity</label>
						<div><input value = {disData.monthlySales} onChange = {this._onChangeValue.bind(null, "monthlySales")}/></div>
					</li>
					 <li>
						<Link to = "/" ><div className= "generic-button right">Home</div></Link>
						<div className = "generic-button right" onClick = {this._saveData}>Save</div>
					</li>
				</ul>
			</div>
		);
	}

});
module.exports = Manage;