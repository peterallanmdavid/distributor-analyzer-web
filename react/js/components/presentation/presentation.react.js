var React = require('react')
	, Reflux = require('reflux')
	, DistStore = require('../../store/distributor.store')
	, _ = require('lodash')
	, Router = require('react-router')
    , Link = Router.Link;

var Presentation = React.createClass({
	propTypes: {
		presentationData : React.PropTypes.array,
        distActions: React.PropTypes.object
	},
	render:function(){
		var presData = this.props.presentationData;
		var data= [];
		_.forEach(presData, function(d){
			data.push(
			<tr className = "table-row">
				    <td className = "table-col">{d.name}</td>
				    <td className = "table-col">{d.location}</td> 
			        <td className = "table-col">{d.sources.length}</td> 
			        <td className = "table-col">{d.clients.length}</td> 
				    <td className = "table-col">{d.completedInvestigation}</td>
				    <td className = "table-col">{d.currentIntelligence}</td>
				    <td className = "table-col">{d.pendingLeads}</td>
				    <td className = "table-col">{d.taskingLeads}</td>
				  </tr>)
		})
		
		return(
			<div className = "presentation-container">
				<table>
				  <th className = "table-row" colSpan = {8}>Distributor List</th>
				  <tr className = "table-row table-header">
				    <td className = "table-col">Main Distributor</td>
				    <td className = "table-col">Location</td> 
				    <td className = "table-col">Sources</td> 
				    <td className = "table-col">Clients</td> 
				    <td className = "table-col">Completed Investigation</td> 
				    <td className = "table-col">Current Intelligence</td> 
				    <td className = "table-col">Pending Leads</td> 
				    <td className = "table-col">Tasking Leads</td>
				  </tr>
				  {data}
				</table>
				<Link to = "/" ><div className= "generic-button">Home</div></Link>
			</div>
		);
	}

});
module.exports = Presentation;