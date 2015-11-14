var React = require('react')
	, Reflux = require('reflux') 
	, Router = require('react-router')
	, DistStore = require('../../store/distributor.store')
	, DistAction = require('../../action/distributor.action')
  	, Router = require('react-router')
  	, Navigation = Router.Navigation
 	, RouteHandler = Router.RouteHandler
    , Link = Router.Link;



var HomeComponent = React.createClass({
	mixins: [Reflux.ListenerMixin],
	getInitialState: function(){
		return({
			presentationData: DistStore.getPresentationData(),
			sourceTypes: DistStore.getSourceTypes()
		})
	},
	componentDidMount:function(){
		  this.listenTo(DistStore, this._onChange);  

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
		var distActions = this._disActions()
		return(
			<div className = "home-content">
				<RouteHandler
                       presentationData = {this.state.presentationData}
                       sourceTypes= {this.state.sourceTypes}
                       distActions = {distActions}
                />
			</div>
		);
	}

}) ;
module.exports = HomeComponent;