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
			presentationData: DistStore.getPresentationData(),
			sourceTypes: DistStore.getSourceTypes(),
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
		this.setState({presentationData: DistStore.getPresentationData()})
	},
	_disActions:function(){
		var that = this
		var functions = {
			setPresentationData:function(name, value){
				DistAction.setPresentationData(name,value);
			},
			saveData:function(data){
				DistAction.saveData(data);
			},
			addSource:function(data){
				DistAction.addSource(data);
			},
			addClient:function(data){
				DistAction.addClient(data);
			}
			
		}
		return functions;
	},
	render:function() {
		var distActions = this._disActions();
        var sideMenu = (this.state.routeData.route.path==="/"?<HomeContent />:<SideMenu />)
		return(
			<div className = "main-container">
                {sideMenu}
                <div className = "main-content">
				<RouteHandler
                       presentationData = {this.state.presentationData}
                       sourceTypes= {this.state.sourceTypes}
                       distActions = {distActions}
                />
                </div>
			</div>
		);
	}

}) ;
module.exports = HomeComponent;