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
				<div className = "presentation-table">
				  <div className = "table-row main">Distributor List</div>
				  <div className = "table-row table-header">
                    <div className = "table-col">Actions</div>
				    <div className = "table-col">Suspect / Target</div>
				    <div className = "table-col">Location</div>
                    <div className = "table-col">Vehicles</div>
				    <div className = "table-col">Supplier</div>
				    <div className = "table-col">Suspect's Customer</div>
				    <div className = "table-col">Completed Investigation</div>
				    <div className = "table-col">Current Intelligence</div>
				    <div className = "table-col">Pending Leads</div>
				    <div className = "table-col end">Tasking Leads</div>
				  </div>
				  {data}
				</div>
				<div className = "button-container"><Link to = "/home/distributor/create" ><div className= "generic-button">New Suspect</div></Link></div>
			</div>
		);
	}

});
module.exports = Presentation;