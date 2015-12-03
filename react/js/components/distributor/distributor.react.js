var React = require('react')
    , Router = require('react-router')
    , Reflux = require('reflux')
    , Navigation = Router.Navigation
    , RouteHandler = Router.RouteHandler
    , DistributorAction = require('../../action/distributor.action')
    , SideMenu = require('../sidemenu/side.menu.react')
    , classnames = require('classnames')
    ;



var Distributor= React.createClass({
    propTypes: {
        distributorData: React.PropTypes.object,
        routeData: React.PropTypes.object
    },
    _distributorActions:function(){
        var that = this
        var functions = {
            setDistributorForm:function(name, value){
                DistributorAction.setDistributorForm(name,value);
            },
            saveData:function(){
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
            }
        }
        return functions;
    },
    render: function () {
        var distActions = this._distributorActions();
        var disData = this.props.distributorData;
        var sideMenu = <SideMenu allDist = {disData.allDistributors} />
        var  withSideMenu = (this.props.routeData.route.name!=="flowchart")
        if(!withSideMenu){
            sideMenu = <span></span>
        }
        var distContentClass = classnames("distributor-content",{"no-side-menu":!withSideMenu})
        return (
            <div className = "distributor-container">
                {sideMenu}
                <div className = {distContentClass}>
                    <RouteHandler
                        allDistributors = {disData.allDistributors}
                        currentDistributor = {disData.currentDistributor}
                        sourceTypes = {disData.sourceTypes}
                        distributorForm = {disData.distributorForm}
                        distActions = {distActions}
                    />
                </div>
            </div>
        )
    }
});
module.exports= Distributor;