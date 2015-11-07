var React = require('react')
	, Reflux = require('reflux')
	, DistStore = require('../../store/distributor.store')
	, _ = require('lodash')
	, Router = require('react-router')
    , Link = Router.Link;

	;



var Presentation = React.createClass({
	mixins: [Reflux.ListenerMixin],
	getInitialState: function(){
		return({
			presentationData: DistStore.getPresentationData()
		})
	},
	componentDidMount:function(){
		  this.listenTo(DistStore, this._onChange);  

	},
	_onChange:function(){
		this.setState({presentationData: DistStore.getPresentationData()})
	},
	render:function(){
		var presData = this.state.presentationData;
		var data= [];
		_.forEach(presData, function(d){
			data.push(
			<tr className = "table-row">
				    <td className = "table-col">{d.distName}</td>
				    <td className = "table-col">{d.address}</td> 
				    <td className = "table-col">{d.wLocation}</td>
				    <td className = "table-col">{d.wCapacity}</td>
				    <td className = "table-col">{d.dailySales}</td>
				    <td className = "table-col">{d.monthlySales}</td>
				  </tr>)
		})
		
		return(
			<div className = "presentation-container">
				<table>
				  <th className = "table-row" colSpan = {6}>Distributor List</th>
				  <tr className = "table-row table-header">
				    <td className = "table-col">Main Distributor</td>
				    <td className = "table-col">Address/Location</td> 
				    <td className = "table-col">Warehouse Location</td> 
				    <td className = "table-col">Warehouse Capacity</td> 
				    <td className = "table-col">Daily Sales Volume Capacity</td> 
				    <td className = "table-col">Monthly Sales Volume Capacity</td> 
				  </tr>
				  {data}
				</table>
				<Link to = "/" ><div className= "generic-button">Home</div></Link>
			</div>
		);
	}

});
module.exports = Presentation;