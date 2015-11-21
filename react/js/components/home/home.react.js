var React = require('react')
	, Reflux = require('reflux') 
	, Router = require('react-router')
	, DistStore = require('../../store/distributor.store')
	, DistAction = require('../../action/distributor.action')
  	, Router = require('react-router')
  	, SideMenu  = require('../sidemenu/side.menu.react')
 	, RouteHandler = Router.RouteHandler
    , Link = Router.Link
    , RouteStore = require('../../store/route.store')
    , HomeContent = require('./home.content.react')



var HomeComponent = React.createClass({

	mixins: [Reflux.ListenerMixin],
	getInitialState: function(){
		return({
            distributorData: DistStore.getDistributorData(),
            routeData:RouteStore.getRouteData()
		})
	},
	componentDidMount:function(){
		  this.listenTo(DistStore, this._onChange);
          this.listenTo(RouteStore, this._onRouteChange);

    },
    _onRouteChange:function(data){
        this.setState({routeData:RouteStore.getRouteData()})
    },
	_onChange:function(){
		this.setState({distributorData: DistStore.getDistributorData()})
	},
	render:function() {
		return(
			<div className = "main-container">
                <div className = "main-content">
				<RouteHandler
                        distributorData = {this.state.distributorData}
                />
                </div>
			</div>
		);
	}

}) ;
module.exports = HomeComponent;