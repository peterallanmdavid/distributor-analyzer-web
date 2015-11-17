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
		distAction: React.PropTypes.object,
		presentation: React.PropTypes.array,
		sourceTypes:React.PropTypes.object
	},
	getInitialState: function(){
		return(
			 {
                name:"", 
                location:"", 
                completedInvestigation:"",
                currentIntelligence:"",
                pendingLeads:"",
                taskingLeads:"",
                modifiedData:"",
                sources:[],
                clients:[]
            })
	},
	_saveData:function(){
		d = this.state;
		this.props.distActions.saveData(d);
		window.location="#/home/presentation"
	},
	_onChangeValue:function(name, e){
		value = e.target.value;
	 	var newState = {};
        newState[name] = value;
		this.setState(newState);
	},
	_addSource:function(data) {
		var newSources = this.state.sources;
		data.id = CommonUtils.getCurrentId(newSources);
		newSources.push(data);
		this.setState({sources:newSources})
		console.log("saveing new source")
	},
	_addClient:function(data){
		var newClients = this.state.clients;
		newClients.push(data);
		this.setState({clients:newClients})
		console.log("adding new client")
	},
	_removeSource:function(id){
		var newSources = _.clone(this.state.sources);
		var removed = _.remove(newSources, function(d){
			return d.id.toString()===id.toString();
		})
		this.setState({sources:newSources})
		console.log("removing sources")
	},
	render:function(){
		var disData = this.state;
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
						<label>Sources</label>
						<ManageSources
							 distAction = {DistAction}
							 sourceTypes = {this.props.sourceTypes}
							 addSource = {this._addSource}
							 removeSource = {this._removeSource}
							 sources= {this.state.sources}
						/>
					</li>
					<li>
						<label>Clients</label>
						<ManageClients
							 distAction = {DistAction}
							 addClient = {this._addClient}
							 clients= {this.state.clients}
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
						<Link to = "/" ><div className= "generic-button right">Home</div></Link>
						<div className = "generic-button right" onClick = {this._saveData}>Save</div>
					</li>
				</ul>
			</div>
		);
	}

});
module.exports = Manage;