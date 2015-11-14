var React = require('react')
	, classnames = require('classnames')
	, ClientsForm = require('./clients/manage.clients.form.react')
	, ClientsList = require('./clients/manage.clients.list.react')
	; 

var Clients = React.createClass({
	getInitialState:function(){
		return({
			isAdding:false,
		})
	},
	propTypes:{
		addClient:React.PropTypes.func,
		clients: React.PropTypes.array,
		distAction: React.PropTypes.object
	},
	_toggleForm:function(){
		var currState = this.state.isAdding;
		this.setState({isAdding:!currState});
	},
	render:function(){
		var clients = this.props.clients;
		var addClientsClass = classnames({"hidden":!this.state.isAdding})
		return(
			<div>
				<ClientsList clients = {clients}/>
				<div onClick = {this._toggleForm}><i className="fa fa-plus-circle"></i>Add Clients</div>
				<div className = {addClientsClass}>
				<ClientsForm
					distAction = {this.props.distAction}
					addClient = {this.props.addClient}
				/>
				</div>
			</div>
		);
	}
});

module.exports = Clients;