var React = require('react')
    , Reflux= require('reflux')
    , RouteAction = require('../action/route.action')
    , CommonUtils = require('../utils/common.utils.js')
    ;

var RouteStore = Reflux.createStore({
    listenables: [RouteAction],
    routeData: {
        title: {},
        route: {}
    },
    onChangeRoute:function(data){
        this.routeData.route = data;
        this.trigger(this.routeData, 'changeRoute');
    },
    getRouteData: function(){
      return this.routeData;
    }
});


module.exports = RouteStore;
