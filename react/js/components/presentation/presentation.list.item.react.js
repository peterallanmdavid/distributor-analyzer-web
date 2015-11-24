var React = require('react')
    , GenericButton = require('../common/generic.button.react')
    , Modal = require('../common/generic.modal.react')
    , SourcesList = require('../manage/sources/manage.sources.list.react')
    , ClientList = require('../manage/clients/manage.clients.list.react')
    , VehicleList = require('../manage/vehicle/manage.vehicle.list.react')
    , ActionButtons = require('./presentation.list.actions.react')
    ;

var PresentationListItem = React.createClass({
    propTypes:{
        presentationDataItem: React.PropTypes.object
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
            removeSource = {function(){}}
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
            removeClients = {function(){}}
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
            removeVehicles = {function(){}}
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
    render: function () {
        var d = this.props.presentationDataItem;
        return (

                <div className = "table-row">
                    <div className = "table-col"><ActionButtons id = {d.id.toString()}/></div>
                    <div className = "table-col">{d.name}</div>
                    <div className = "table-col">{d.location}</div>
                    <div className = "table-col">{d.vehicles.length} <GenericButton
                        buttonText ="view details"
                        onClickHandler = {this._viewVehiclesDetails}
                    /></div>
                    <div className = "table-col">{d.sources.length} <GenericButton
                        buttonText ="view details"
                        onClickHandler = {this._viewSourcesDetails}
                    /></div>
                    <div className = "table-col">{d.clients.length} <GenericButton
                        buttonText ="view details"
                        onClickHandler = {this._viewClientDetails}
                    /></div>
                    <div className = "table-col">{d.completedInvestigation}</div>
                    <div className = "table-col">{d.currentIntelligence}</div>
                    <div className = "table-col">{d.pendingLeads}</div>
                    <div className = "table-col end">{d.taskingLeads}</div>
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