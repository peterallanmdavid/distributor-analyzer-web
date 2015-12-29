var React = require('react')
    , GenericButton = require('../common/generic.button.react')
    , Modal = require('../common/generic.modal.react')
    , SourcesList = require('../manage/sources/manage.sources.list.react')
    , ClientList = require('../manage/clients/manage.clients.list.react')
    , VehicleList = require('../manage/vehicle/manage.vehicle.list.react')
    , LinkList = require('../links/links.list.react.js')
    , ActionButtons = require('./presentation.list.actions.react')
    , classnames = require('classnames')
    ;

var PresentationListItem = React.createClass({
    propTypes:{
        presentationDataItem: React.PropTypes.object,
        distActions:React.PropTypes.object,
        vehicleLinks: React.PropTypes.array
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
    _viewSourcesDetails:function(){
        var body = <SourcesList
            sources = {this.props.presentationDataItem.sources}
            distActions = {this.props.distActions}
            isForm = {false}
        />
        var headerText = "Supplier Details"
        this.props.distActions.viewPopUp(body, headerText);
    },
    _viewClientDetails:function(){
        var body = <ClientList
            clients = {this.props.presentationDataItem.clients}
            distActions = {this.props.distActions}
            isForm = {false}
        />
        var headerText = "Suspect's Customer Details"
        this.props.distActions.viewPopUp(body, headerText);
    },
    _viewVehiclesDetails:function(){
        var body = <VehicleList
            vehicles = {this.props.presentationDataItem.vehicles}
            distActions = {this.props.distActions}
            isForm = {false}
        />
        var headerText = "Vehicle Details"
        this.props.distActions.viewPopUp(body, headerText);
    },

    _readMore:function(body,headerText){
        this.props.distActions.viewPopUp(body, headerText);
    },
    _viewLinks:function(){
       this.props.distActions.viewLinks(this.props.presentationDataItem.id);
    },
    render: function () {
        var d = this.props.presentationDataItem;
        var ciClass = classnames("readmore-btn pointer", {"hidden": (typeof d.completedInvestigation==="undefined" || d.completedInvestigation==="" || d.completedInvestigation===null)});
        var currIClass = classnames("readmore-btn pointer", {"hidden":  (typeof d.currentIntelligence==="undefined" || d.currentIntelligence===""|| d.currentIntelligence===null)});
        var plClass = classnames("readmore-btn pointer", {"hidden": (typeof d.pendingLeads==="undefined" || d.pendingLeads==="" || d.pendingLeads===null)});
        var tlCLass = classnames("readmore-btn pointer", {"hidden": (typeof d.taskingLeads==="undefined" || d.taskingLeads==="" || d.taskingLeads===null)});


        var vehicles = d.vehicles.length>0?<GenericButton buttonText ="VIEW DETAILS" onClickHandler = {this._viewVehiclesDetails}/>:<span></span>;
        var clients = d.clients.length>0?<GenericButton buttonText ="VIEW DETAILS" onClickHandler = {this._viewClientDetails}/>:<span></span>
        var sources = d.sources.length>0?<GenericButton buttonText ="VIEW DETAILS" onClickHandler = {this._viewSourcesDetails}/>:<span></span>

        return (

                <div className = "table-row">
                    <div className = "table-col"><ActionButtons id = {d.id.toString()} viewLinks = {this._viewLinks}/></div>
                    <div className = "table-col">{d.name}</div>
                    <div className = "table-col">{d.personInCharge}</div>
                    <div className = "table-col">{d.location}</div>
                    <div className = "table-col with-details" >{d.vehicles.length} {vehicles} </div>
                    <div className = "table-col with-details">{d.sources.length} {sources} </div>
                    <div className = "table-col with-details">{d.clients.length} {clients} </div>
                    <div className = "table-col long-text">
                        <span className = "ellipsis">{d.completedInvestigation}</span>
                        <span className = {ciClass} onClick = {this._readMore.bind(null, d.completedInvestigation, "Completed Investigation")}>READ MORE</span>
                    </div>
                    <div className = "table-col long-text">
                        <span className = "ellipsis">{d.currentIntelligence}</span>
                        <span className = {currIClass} onClick = {this._readMore.bind(null, d.currentIntelligence, "Current Intelligence")}>READ MORE</span>
                    </div>
                    <div className = "table-col long-text">
                        <span className = "ellipsis">{d.pendingLeads}</span>
                        <span className = {plClass} onClick = {this._readMore.bind(null, d.pendingLeads, "Pending Leads")}>READ MORE</span>
                    </div>
                    <div className = "table-col long-text end">
                        <span className = "ellipsis">{d.taskingLeads}</span>
                        <span className = {tlCLass} onClick = {this._readMore.bind(null, d.taskingLeads, "Tasking Leads")}>READ MORE</span>
                    </div>
                </div>

        )
    }
});
module.exports = PresentationListItem;