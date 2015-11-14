var React = require('react')
	, _ = require('lodash')
	, ClientItem = require('./manage.clients.list.item.react')
	; 

var ClientList = React.createClass({
	propTypes:{
		clients:React.PropTypes.array
	},
	render:function(){
		var clients = this.props.clients;
		var clientItem = [];
		_.forEach(clients, function(d){
			clientItem.push(<ClientItem clientItem = {d}/>);
		});
		return(
			<div>
				{clientItem}
			</div>
		);
	}
});

module.exports = ClientList;