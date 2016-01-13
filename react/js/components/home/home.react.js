var React = require('react')
	, Reflux = require('reflux') 
	, Router = require('react-router')
	, DistStore = require('../../store/distributor.store')
	, DistributorAction = require('../../action/distributor.action')
  	, Router = require('react-router')
  	, SideMenu  = require('../sidemenu/side.menu.react')
 	, RouteHandler = Router.RouteHandler
    , Link = Router.Link
    , RouteStore = require('../../store/route.store')
    , HomeContent = require('./home.content.react')
    , Modal = require('../common/generic.modal.react')
    , Links = require('../links/links.list.react.js')



var HomeComponent = React.createClass({

	mixins: [Reflux.ListenerMixin],
	getInitialState: function(){
		return({
            distributorData: DistStore.getDistributorData(),
            routeData:RouteStore.getRouteData(),
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
	componentDidMount:function(){
		  this.listenTo(DistStore, this._onChange);
          this.listenTo(RouteStore, this._onRouteChange);

    },
    _onRouteChange:function(data){
        this.setState({routeData:RouteStore.getRouteData()})
    },
	_onChange:function(data){
		this.setState({distributorData: DistStore.getDistributorData()})
        if(typeof data.popUpAction!=="undefined"){
            this.updatePopUp(data.popUpAction);
        }
	},
    updatePopUp: function(popUpAction){
        var that = this;
        switch (popUpAction.popUpAction.status){
            case "success":
                that.setState({useLoader:false});
                break;
            case "fail":
                that.setState({useLoader:false, bodyText:popUpAction.popUpAction.errorMessage});
                break;
            case "successFetchLinks":
                if(this.state.isViewPopUp){
                    var body = <Links links = {that.state.distributorData.vehicleLinks} closeModal ={that._closeModal} />
                    that.setState({useLoader:false, bodyText:body})
                }
                break;
        }

    },
    _distributorActions:function(){
        var that = this;
        var functions = {
            setDistributorForm:function(name, value){
                DistributorAction.setDistributorForm(name,value);
            },
            saveData:function(){
                that.setState({
                    isViewPopUp:false,
                    showModal: true,
                    useLoader: true,
                    loaderText:  "Saving New Suspect",
                    confirmMethod: function(){},
                    confirmParams: {},
                    bodyText:"New suspect successfully added",
                    title:'Save new suspect'

                })
                DistributorAction.saveDistributor();
            },
            addVehicle:function(data){
                DistributorAction.addVehicle(data);
            },
            addSource:function(data){
                DistributorAction.addSource(data);
            },
            addClient:function(data){
                DistributorAction.addClient(data);
            },
            removeVehicle:function(data){
                DistributorAction.removeVehicle(data);
            },
            removeSource:function(id){
                DistributorAction.removeSource(id);
            },
            removeClient:function(id){
                DistributorAction.removeClient(id);
            },
            removeTestSamples:function(id){
                DistributorAction.removeTestSamples(id);
            },
            editSource: function(id,value){
                DistributorAction.editSource(id,value)
            },
            editVehicle: function(id,value){
                DistributorAction.editVehicle(id,value)
            },
            editClient: function(id,value){
                DistributorAction.editClient(id,value)
            },
            getCurrentDistributor:function(){
                DistributorAction.getCurrentDistributor();
            },
            fetchLinks:function(id){
                DistributorAction.fetchLinks(id);
            },
            viewLinks: function(id){
                var body = <Links links = {that.state.distributorData.vehicleLinks} closeModal = {that._closeModal}/>
                that.setState({
                    showModal: true,
                    useLoader: true,
                    loaderText:  "fetching available Links",
                    confirmMethod: function(){},
                    confirmParams: {},
                    bodyText:{body},
                    title:'Links',
                    isViewPopUp: true

                })
                DistributorAction.fetchLinks(id);
            },
            viewPopUp: function(body, headerText){
                that.setState({
                    showModal: true,
                    confirmMethod: function(){},
                    confirmParams: {},
                    bodyText:{body},
                    title:headerText
                })
            }
        }
        return functions;
    },
    _closeModal:function(){
        this.setState({showModal:false})
    },
	render:function() {
        var distActions = this._distributorActions();
		return(
			<div className = "main-container">
                <div className = "main-content">
				<RouteHandler
                        distributorData = {this.state.distributorData}
                        routeData = {this.state.routeData}
                        distActions = {distActions}
                />
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
		);
	}

}) ;
module.exports = HomeComponent;