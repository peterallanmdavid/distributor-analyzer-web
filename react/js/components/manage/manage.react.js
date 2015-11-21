var React = require('react')
	, Reflux = require('reflux')
	, DistStore = require('../../store/distributor.store')
	, DistAction = require('../../action/distributor.action')
	, ManageSources = require('./manage.sources.react')
	, ManageClients = require('./manage.clients.react')
	, _ = require('lodash')
	, Router = require('react-router')
    , Link = Router.Link
	, CommonUtils = require('../../utils/common.utils.js') 
	;



var Manage = React.createClass({
	propTypes:{
        distActions: React.PropTypes.object,
		sourceTypes:React.PropTypes.object,
        distributorForm:React.PropTypes.object
	},
	_saveData:function(){
		this.props.distActions.saveData();
		window.location="#/home/distributor"
	},
	_onChangeValue:function(name, e){
		var value = e.target.value;
	 	this.props.distActions.setDistributorForm(name, value);
	},
	_addSource:function(data) {
		this.props.distActions.addSource(data);
	},
	_addClient:function(data){
		this.props.distActions.addClient(data);
	},
	_removeSource:function(id){
        this.props.distActions.removeSource(id);
	},
    _removeClient:function(id){
        this.props.distActions.removeClient(id);
    },
    _removeTestSamples:function(id){
        this.props.distActions.removeTestSamples(id);
    },
	render:function(){
		var disData = this.props.distributorForm;

		return(
			<div className = "manage-container">
				<ul>
					<li><b>Add New Entry</b></li>
					<li>
						<label>Main Distributor</label>
						<div><input value = {disData.name} onChange = {this._onChangeValue.bind(null, "name")}/></div>
					</li>
				    <li>
						<label>Address</label>
						<div><input value = {disData.location} onChange = {this._onChangeValue.bind(null, "location")}/></div>
					</li>
					<li>
						<label className = "label-multiple-value">Sources</label>
						<ManageSources
							 distAction = {this.props.distActions}
							 sourceTypes = {this.props.sourceTypes}
							 addSource = {this._addSource}
							 removeSource = {this._removeSource}
							 sources= {disData.sources}
						/>
					</li>
					<li>
						<label className = "label-multiple-value">Clients</label>
						<ManageClients
							 distAction = {DistAction}
							 addClient = {this._addClient}
							 clients= {disData.clients}
                             removeClient = {this._removeClient}
                             removeTestSamples = {this._removeTestSamples}
						/>
					</li>
				    <li>
						<label>Completed Investigation</label>
						<div className = "manage-text-area"><textarea value = {disData.completedInvestigation} onChange = {this._onChangeValue.bind(null, "completedInvestigation")}/></div>
					</li>
				    <li>
						<label>Current Intelligence</label>
						<div className = "manage-text-area"><textarea value = {disData.currentIntelligence} onChange = {this._onChangeValue.bind(null, "currentIntelligence")}/></div>
					</li>
				   <li>
						<label>Pending Leads</label>
						<div className = "manage-text-area"><textarea value = {disData.pendingLeads} onChange = {this._onChangeValue.bind(null, "pendingLeads")}/></div>
					</li>
				    <li>
						<label>Tasking Leads</label>
						<div className = "manage-text-area"><textarea value = {disData.taskingLeads} onChange = {this._onChangeValue.bind(null, "taskingLeads")}/></div>
					</li>
					 <li>
						<Link to = "/home/distributor" ><div className= "generic-button right">Home</div></Link>
						<div className = "generic-button right" onClick = {this._saveData}>Save</div>
					</li>
				</ul>
			</div>
		);
	}

});
module.exports = Manage;