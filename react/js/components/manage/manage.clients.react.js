var React = require('react')
	, classnames = require('classnames')
	, ClientsForm = require('./clients/manage.clients.form.react')
	, ClientsList = require('./clients/manage.clients.list.react')
	; 

var Clients = React.createClass({
	getInitialState:function(){
		return({
			isAdding:false
		})
	},
	propTypes:{
		addClient:React.PropTypes.func,
		clients: React.PropTypes.array,
        removeClient: React.PropTypes.func,
        removeTestSamples: React.PropTypes.func
	},
	_closeForm:function(){
		this.setState({isAdding:false});
	},
	_showForm:function(){
		this.setState({isAdding:true});
	},
	render:function(){
		var clients = this.props.clients;
		var addClientsClass = classnames({"hidden":!this.state.isAdding})
		return(
			<div>
				<ClientsList 
					clients = {clients}
					showForm = {this._showForm}
					isAdding = {this.state.isAdding}
                    removeClient = {this.props.removeClient}
				/>
				<div className = {addClientsClass}>
				<ClientsForm
					distAction = {this.props.distAction}
					addClient = {this.props.addClient}
					closeForm = {this._closeForm}
                    removeTestSamples = {this.props.removeTestSamples}
				/>
				</div>
			</div>
		);
	}
});

module.exports = Clients;