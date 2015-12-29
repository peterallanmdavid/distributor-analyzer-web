var React = require('react')
    , Router = require('react-router')
    , Reflux = require('reflux')
    , Navigation = Router.Navigation
    , RouteHandler = Router.RouteHandler
    , DistributorAction = require('../../action/distributor.action')
    , Modal = require('../common/generic.modal.react')
    , SideMenu = require('../sidemenu/side.menu.react')
    , classnames = require('classnames')
    ;



var Distributor= React.createClass({
    propTypes: {
        distributorData: React.PropTypes.object,
        routeData: React.PropTypes.object,
        distActions: React.PropTypes.object
    },
    componentDidMount: function(){
        this.props.distActions.fetchLinks();
    },
    render: function () {
        var distActions = this.props.distActions;
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
                        vehicleLinks = {disData.vehicleLinks}
                    />
                </div>
            </div>
        )
    }
});
module.exports= Distributor;