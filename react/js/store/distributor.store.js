var React = require('react')
    , Reflux= require('reflux')
    , DistAction = require('../action/distributor.action')
    , _ = require('lodash')
    , CommonUtils = require('../utils/common.utils.js')
    , RouteStore = require('./route.store')
    , WebUtils = require('../utils/webutils')
    ;

var DistributorStore = Reflux.createStore({
    listenables: [DistAction],
    init: function() {
        this.listenTo(RouteStore, this.setRoute);
        DistAction.fetchAllDistributors();
    },
    distributor:{
        allDistributors:[],
        distributorForm: {
            name:"",
            location:"",
            completedInvestigation:"",
            currentIntelligence:"",
            pendingLeads:"",
            taskingLeads:"",
            modifiedData:"",
            sources:[],
            vehicles:[],
            clients:[]
        },
        currentDistributor:{},
        sourceTypes:[
            {id: 1, name:"Warehouse"},
            {id: 2, name:"Factory"},
            {id: 3, name:"Retail Outlet"}

        ],
        currentPage:""
    },
    setRoute: function(data){
        this.currentPage = data.route.name;
        if(data.route && data.route.params && data.route.params.distributorId){
            //temporary way to get current distribtor while API is out
/*            var allDist = this.distributor.allDistributors;
            var currentDistributor = _.find(allDist, function(d){
                return(d.id.toString()===data.route.params.distributorId.toString())
            })*/
            DistAction.getCurrentDistributor(data.route.params.distributorId);
        }
        switch (data.route.name){
            case "createdistributor":
                this.clearDistributorForm()
                break;
        }
    },
    getAllDistributors:function(){
        return this.distributor.allDistributors;
    },
    getSourceTypes: function(){
        return this.distributor.sourceTypes;
    },
    getCurrentDistributor:function(){
        return this.distributor.currentDistributor;
    },
    getDistributorData:function(){
        return this.distributor;
    },
    clearDistributorForm:function(){
        this.distributor.distributorForm= {
                name:"",
                location:"",
                completedInvestigation:"",
                currentIntelligence:"",
                pendingLeads:"",
                taskingLeads:"",
                modifiedData:"",
                sources:[],
                clients:[],
                vehicles:[]
        }
        this.trigger(this.distributor)
    },
    onSaveDistributor:function(){
        var data = {};
        var request = this.distributor.distributorForm;
        data = {
            operation:"I1",
            request:request
        }


       WebUtils.saveDistributor(data,DistAction.saveDistributor.completed, DistAction.saveDistributor.failed )
    },

    onSaveDistributorCompleted:function(data){
        var allDist = this.distributor.allDistributors;
       if(typeof data.request.request.id!=="undefined"){
           for(var i=0; i<allDist.length;i++){
               if(allDist[i].id.toString()===data.response.data.id.toString()){
                   allDist[i]=data.response.data;
                   break;
               }
           }
           this.trigger(this.distributor)
           window.location = "#/home/distributor/d/" + data.request.request.id;
       }else{

           allDist.push(data.response.data);
           this.trigger(this.distributor);
           window.location = "#/home/distributor";
       }

    },
    onSaveDistributorFailed:function(data){

    },
    onSetDistributorForm:function(name, value){
        this.distributor.distributorForm[name]=value;
        this.trigger(this.distributor);
    },
    //will be used when api is ready
    onAddSource: function(data){
        data.tempId = CommonUtils.getCurrentId(this.distributor.distributorForm.sources);
        this.distributor.distributorForm.sources.push(data);
        this.trigger(this.distributor);

    },
    onAddClient:function(data){
        data.tempId = CommonUtils.getCurrentId(this.distributor.distributorForm.clients);
        this.distributor.distributorForm.clients.push(data);
        this.trigger(this.distributor);
    },
    onAddVehicle:function(data){
        data.tempId = CommonUtils.getCurrentId(this.distributor.distributorForm.vehicles);
        this.distributor.distributorForm.vehicles.push(data);
        this.trigger(this.distributor);
    },
    onRemoveSource: function(id, isNew){
        _.remove(this.distributor.distributorForm.sources, function(d){
            if(isNew){
                return d.tempId.toString()===id.toString();
            }else{
                return d.id.toString()===id.toString();
            }
        })
        this.trigger(this.distributor);
    },
    onRemoveClient: function(id,isNew){
        _.remove(this.distributor.distributorForm.clients, function(d){
            if(isNew){
                return d.tempId.toString()===id.toString();
            }else{
                return d.id.toString()===id.toString();
            }

        })
        this.trigger(this.distributor);
    },
    onRemoveVehicle:function(id,isNew){
        _.remove(this.distributor.distributorForm.vehicles, function(d){
            if(isNew){
                return d.tempId.toString()===id.toString();
            }else{
                return d.id.toString()===id.toString();
            }
        })
        this.trigger(this.distributor);
    },
    onRemoveTestSamples: function(clientId, id,isNew){
        var client = _.find(this.distributor.distributorForm.clients, function(d){
            return  d.id.toString()===clientId.toString();
        });
        _.remove(client.testSamples, function(d){
            return d.id.toString()===id.toString();
        })
        this.trigger(this.distributor);
    },
    onFetchAllDistributors:function(){
       WebUtils.fetchAllDistributors(DistAction.fetchAllDistributors.completed, DistAction.fetchAllDistributors.failed);
    },
    onFetchAllDistributorsCompleted:function(data){
        var results = data.response.data;
        this.distributor.allDistributors = results;
        this.trigger(this.distributor);
    },
    onFetchAllDistributorsFailed:function(data){
        console.log("Failed Fetching From API for all distributors")
    },
    onGetCurrentDistributor:function(id){
        WebUtils.getCurrentDistributor(id,DistAction.getCurrentDistributor.completed, DistAction.getCurrentDistributor.failed);
    },
    onGetCurrentDistributorCompleted:function(data){
        var results = data.response.data;
        this.distributor.currentDistributor = results;
        this.distributor.distributorForm = _.clone(results);
        this.distributor.currentDistributor =_.clone(results);
        this.trigger(this.distributor)
    },
    onGetCurrentDistributorFailed:function(data){
        console.log("Failed Fetching From API for currend distributor")
    }

});


module.exports = DistributorStore;
