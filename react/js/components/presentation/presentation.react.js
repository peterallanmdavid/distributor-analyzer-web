var React = require('react')
	, Reflux = require('reflux')
    , PresentationItem = require('./presentation.list.item.react')
	, _ = require('lodash')
	, Router = require('react-router')
    , Modal = require('../common/generic.modal.react')
    , Link = Router.Link
    ;

var Presentation = React.createClass({
	propTypes: {
        allDistributors : React.PropTypes.array,
        distActions: React.PropTypes.object
	},
    getInitialState:function(){
        return({
            showModal: false,
            confirmMethod: function(){},
            confirmParams: {},
            bodyText:'',
            title:'',
            isSuccessPopUp: true,
            useLoader:false,
            loaderText:''
        })
    },
	render:function(){
        var that = this;
		var presData = this.props.allDistributors;
		var data= [];
        if(presData.length>0){
            _.forEach(presData, function(d){
                data.push(
                    <PresentationItem presentationDataItem ={d} />
                )
            })
        }

		
		return(
			<div className = "presentation-container">
				<table>
				  <th className = "table-row" colSpan = {9}>Distributor List</th>
				  <tr className = "table-row table-header">
                    <td className = "table-col">Actions</td>
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
				<Link to = "/home/distributor/create" ><div className= "generic-button">Create New Distributor</div></Link>
			</div>
		);
	}

});
module.exports = Presentation;