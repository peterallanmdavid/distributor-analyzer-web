var React = require('react')
    , GenericButton = require('../common/generic.button.react')
    , Modal = require('../common/generic.modal.react')
    , SourcesList = require('../manage/sources/manage.sources.list.react')
    , ClientList = require('../manage/clients/manage.clients.list.react')
    , VehicleList = require('../manage/vehicle/manage.vehicle.list.react')
    , ActionButtons = require('./presentation.list.actions.react')
    , classnames = require('classnames')
    ;

var PresentationListItem = React.createClass({
    propTypes:{
        presentationDataItem: React.PropTypes.object,
        distActions:React.PropTypes.object
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
        console.log("opening")
        var body = <SourcesList
            sources = {this.props.presentationDataItem.sources}
            distActions = {this.props.distActions}
            isForm = {false}
        />
        this.setState({
            showModal: true,
            confirmMethod: function(){},
            confirmParams: {},
            bodyText:{body},
            title:''

        })
    },
    _viewClientDetails:function(){
        console.log("opening")
        var body = <ClientList
            clients = {this.props.presentationDataItem.clients}
            distActions = {this.props.distActions}
            isForm = {false}
        />
        this.setState({
            showModal: true,
            confirmMethod: function(){},
            confirmParams: {},
            bodyText:{body},
            title:''

        })
    },
    _viewVehiclesDetails:function(){
        console.log("opening")
        var body = <VehicleList
            vehicles = {this.props.presentationDataItem.vehicles}
            distActions = {this.props.distActions}
            isForm = {false}
        />
        this.setState({
            showModal: true,
            confirmMethod: function(){},
            confirmParams: {},
            bodyText:{body},
            title:''

        })
    },
    _closeModal:function(){
        this.setState({showModal:false})
    },

    _readMore:function(text,title){
        this.setState({
            showModal: true,
            confirmMethod: function(){},
            confirmParams: {},
            bodyText:text,
            title:title

        })
    },
    render: function () {
        var d = this.props.presentationDataItem;
        var ciClass = classnames("readmore-btn pointer", {"hidden": (typeof d.completedInvestigation==="undefined" || d.completedInvestigation==="")});
        var currIClass = classnames("readmore-btn pointer", {"hidden":  (typeof d.currentIntelligence==="undefined" || d.currentIntelligence==="")});
        var plClass = classnames("readmore-btn pointer", {"hidden": (typeof d.pendingLeads==="undefined" || d.pendingLeads==="")});
        var tlCLass = classnames("readmore-btn pointer", {"hidden": (typeof d.taskingLeads==="undefined" || d.taskingLeads==="")});


        var vehicles = d.vehicles.length>0?<GenericButton buttonText ="VIEW DETAILS" onClickHandler = {this._viewVehiclesDetails}/>:<span></span>;
        var clients = d.clients.length>0?<GenericButton buttonText ="VIEW DETAILS" onClickHandler = {this._viewClientDetails}/>:<span></span>
        var sources = d.sources.length>0?<GenericButton buttonText ="VIEW DETAILS" onClickHandler = {this._viewSourcesDetails}/>:<span></span>

        return (

                <div className = "table-row">
                    <div className = "table-col"><ActionButtons id = {d.id.toString()}/></div>
                    <div className = "table-col">{d.name}</div>
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
                    <div>
                        <Modal
                            showModal={this.state.showModal}
                            closeModal={this._closeModal}
                            confirmMethod={this.state.confirmMethod}
                            confirmParams={this.state.confirmParams}
                            title={this.state.title}
                            body={this.state.bodyText}
                            isSuccessPopUp = {this.state.isSuccessPopUp}
                            useLoader={this.state.useLoader}
                            loaderText={this.state.loaderText}
                            handleOnEnter = {false}
                        />
                    </div>
                </div>

        )
    }
});
module.exports = PresentationListItem;