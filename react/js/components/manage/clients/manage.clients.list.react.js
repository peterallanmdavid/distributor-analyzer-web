var React = require('react')
	, _ = require('lodash')
	, ClientItem = require('./manage.clients.list.item.react')
	, classnames = require('classnames')
	; 

var ClientList = React.createClass({
	propTypes:{
		clients:React.PropTypes.array,
		showForm:React.PropTypes.func,
		isAdding: React.PropTypes.bool
	},
	render:function(){
		var clients = this.props.clients;
		var clientItem = [];
		_.forEach(clients, function(d){
			clientItem.push(<ClientItem clientItem = {d}/>);
		});
		var addButtonClass = classnames("add-button card-white",{"hidden":this.props.isAdding})
		return(
			<div>
				<div className = "client-item card">
					<div className = "item-field"><label>Name</label></div>
					<div className = "item-field"><label>Owner</label></div>
					<div className = "item-field"><label>Location</label></div>
					<div className = "item-field"><label>Test Sample</label></div>
				</div>
				{clientItem}
				<div className = {addButtonClass} onClick = {this.props.showForm}><i className="fa fa-plus-circle"></i>Add Client</div>
			</div>
		);
	}
});

module.exports = ClientList;