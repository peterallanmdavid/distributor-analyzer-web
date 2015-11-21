var React = require('react')
    , Router = require('react-router')
    , Reflux = require('reflux')
    , Navigation = Router.Navigation
    , RouteHandler = Router.RouteHandler
    , DistributorAction = require('../../action/distributor.action')
    , SideMenu = require('../sidemenu/side.menu.react')
    ;



var Distributor= React.createClass({
    propTypes: {
        distributorData: React.PropTypes.object
    },
    _distributorActions:function(){
        var that = this
        var functions = {
            setDistributorForm:function(name, value){
                DistributorAction.setDistributorForm(name,value);
            },
            saveData:function(){
                DistributorAction.saveData();
            },
            addSource:function(data){
                DistributorAction.addSource(data);
            },
            addClient:function(data){
                DistributorAction.addClient(data);
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
            getCurrentDistributor:function(){
                DistributorAction.getCurrentDistributor();
            }
        }
        return functions;
    },
    render: function () {
        var distActions = this._distributorActions();
        var disData = this.props.distributorData

        return (
            <div className = "distributor-container">
                <SideMenu />
                <div className = "distributor-content">
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