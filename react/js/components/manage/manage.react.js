var React = require('react')
	, Reflux = require('reflux')
	, ManageSources = require('./manage.sources.react')
	, ManageClients = require('./manage.clients.react')
    , ManageVehicles = require('./manage.vehicles.react')
    , Scroll = require('react-scroll')
    , Element = Scroll.Element
	, _ = require('lodash')
	, Router = require('react-router')
    , Link = Router.Link
    , classnames = require('classnames')
	;



var Manage = React.createClass({
    mixins:[Scroll ],
    getInitialState:function(){
        return({
            isValid:true
        })
    },
	propTypes:{
        distActions: React.PropTypes.object,
		sourceTypes:React.PropTypes.object,
        distributorForm:React.PropTypes.object
	},
	_saveData:function(){
        var name = this.props.distributorForm.name;
        if(name==="" || typeof name==="undefined" || name===null){
            this.setState({isValid:false})
            this.scroller.scrollTo("dist-name");
        }else{
            this.props.distActions.saveData();
        }

	},
	_onChangeValue:function(name, e){

		var value = e.target.value;
        if(name==="name" && value!=="" && typeof name!=="undefined" && name!==null){
           this.setState({isValid:true})
        }

	 	this.props.distActions.setDistributorForm(name, value);
	},
	render:function(){
		var disData = this.props.distributorForm;
        var nameCname = classnames({"error": !this.state.isValid})
		return(
			<div className = "manage-container">

				<ul>
                    <Element name = "dist-name">
					    <li><b>Add New Entry</b></li>
                    </Element>

					<li>
						<label>Suspect/Target </label>
                        <div className = {nameCname}><input value = {disData.name} onChange = {this._onChangeValue.bind(null, "name")}/></div>
					</li>
				    <li>
						<label>Address</label>
						<div><input value = {disData.location} onChange = {this._onChangeValue.bind(null, "location")}/></div>
					</li>
                    <li>
                        <label className = "label-multiple-value">Vehicles</label>
                        <ManageVehicles
                            distActions = {this.props.distActions}
                            vehicles= {disData.vehicles}
                        />
                    </li>
					<li>
						<label className = "label-multiple-value">Supplier</label>
						<ManageSources
                             distActions = {this.props.distActions}
							 sourceTypes = {this.props.sourceTypes}
							 sources= {disData.sources}
						/>
					</li>
					<li>
						<label className = "label-multiple-value"> Suspect's Customer</label>
						<ManageClients
                             distActions = {this.props.distActions}
							 clients= {disData.clients}
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
						<div className = "generic-button pointer" onClick = {this._saveData}>Save</div>
					</li>
				</ul>
			</div>
		);
	}

});
module.exports = Manage;