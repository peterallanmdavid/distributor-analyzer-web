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
            personInCharge:"",
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
        sourceForm:{},
        clientForm:{},
        vehicleForm:{},
        currentDistributor:{},
        sourceTypes:[
            {id: 1, name:"Warehouse"},
            {id: 2, name:"Factory"},
            {id: 3, name:"Retail Outlet"}

        ],
        links:{
            mainLink:[],
            branchLink:[]
        },
        vehicleLinks:[],
        currentPage:""
    },
    setRoute: function(data){
        this.currentPage = data.route.name;
        if(data.route && data.route.params && data.route.params.distributorId){
            DistAction.getCurrentDistributor(data.route.params.distributorId);
        }
        switch (data.route.name){
            case "createdistributor":
                this.clearDistributorForm()
                break;
            case "linkchart":
                DistAction.fetchLinks(data.route.params.distributorId);
                break;
            default:
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
                personInCharge:"",
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
    createTempIdForDistributorForm: function(object){
        var dForm = this.distributor.distributorForm[object];
        for(var i=0; i<dForm.length;i++){
            dForm[i].tempId=_.clone(i)+1;
        }
    },
    createTempIdForTestSamples:function(){
        var clients = this.distributor.distributorForm.clients;
        _.forEach(clients, function(d){
            for(var i=0; i<d.testSamples.length;i++){
                d.testSamples[i].tempId=i;
            }
        })
    },
    getVehicleLinks: function(){
        return this.distributor.vehicleLinks;
    },




    onSaveDistributor:function() {
        var data = {};
        var request = this.distributor.distributorForm;
        data = {
            operation:"I1",
            data:request
        }


       WebUtils.saveDistributor(data,DistAction.saveDistributor.completed, DistAction.saveDistributor.failed )
    },

    onSaveDistributorCompleted:function(data){
        var allDist = this.distributor.allDistributors;
        var popUpAction = {
            status:"success",
            errorMessage:""
        }
       if(typeof data.request.data.id!=="undefined"){
           for(var i=0; i<allDist.length;i++){
               if(allDist[i].id.toString()===data.response.data.id.toString()){
                   allDist[i]=data.response.data;
                   break;
               }
           }
           this.trigger({data: this.distributor, popUpAction:{popUpAction}})
           window.location = "#/home/distributor/d/" + data.request.data.id;
       }else{

           allDist.push(data.response.data);
           this.trigger({data: this.distributor, popUpAction:{popUpAction}})
           window.location = "#/home/distributor";
       }

    },
    onSaveDistributorFailed:function(data){
        var popUpAction = {
            status:"fail",
            errorMessage:"Something went wrong while saving, please try again"
        }
        this.trigger({data: this.distributor, popUpAction:{popUpAction}})
    },
    onSetDistributorForm:function(name, value){
        this.distributor.distributorForm[name]=value;
        this.trigger({data: this.distributor});
    },
    onAddSource: function(data){
        var that = this;
        if(data.tempId!==""){
            var sources = this.distributor.distributorForm.sources;
            for(var i=0; i<sources.length;i++){
                if(sources[i].tempId.toString()===data.tempId.toString()){
                    sources[i]=data;
                    break;
                }
            }
        }else{
            data.tempId = CommonUtils.getCurrentId(this.distributor.distributorForm.sources);
            this.distributor.distributorForm.sources.push(data);
        }
        this.trigger({data: this.distributor})
    },
    onAddClient:function(data){
        var that = this;
        if(data.tempId!==""){
            var clients = this.distributor.distributorForm.clients;
            for(var i=0; i<clients.length;i++){
                if(clients[i].tempId.toString()===data.tempId.toString()){
                    clients[i]=data;
                    break;
                }
            }
        }else{
            data.tempId = CommonUtils.getCurrentId(this.distributor.distributorForm.clients);
            this.distributor.distributorForm.clients.push(data);
        }

        this.trigger({data: this.distributor});
    },
    onAddVehicle:function(data){
        var that = this;
        if(data.tempId!==""){
            var vehicles = this.distributor.distributorForm.vehicles;
            for(var i=0; i<vehicles.length;i++){
                if(vehicles[i].tempId.toString()===data.tempId.toString()){
                    vehicles[i]=data;
                    break;
                }
            }
        }else{
            data.tempId = CommonUtils.getCurrentId(this.distributor.distributorForm.vehicles);
            this.distributor.distributorForm.vehicles.push(data);
        }
        this.trigger({data: this.distributor});
    },
    onRemoveSource: function(id){
        _.remove(this.distributor.distributorForm.sources, function(d){
                return d.tempId.toString()===id.toString();
        })
        this.trigger({data: this.distributor});
    },
    onRemoveClient: function(id){
        _.remove(this.distributor.distributorForm.clients, function(d){
            return d.tempId.toString()===id.toString();
        })
        this.trigger({data: this.distributor});
    },
    onRemoveVehicle:function(id){
        _.remove(this.distributor.distributorForm.vehicles, function(d){
            return d.tempId.toString()===id.toString();
        })
        this.trigger({data: this.distributor});
    },
    onRemoveTestSamples: function(clientId, id){
        var client = _.find(this.distributor.distributorForm.clients, function(d){
            return  d.id.toString()===clientId.toString();
        });
        _.remove(client.testSamples, function(d){
            return d.id.toString()===id.toString();
        })
        this.trigger(this.distributor);
    },

    onEditSource:function(id, value){
        var existingObject = _.find(this.distributor.distributorForm.sources, function(d){
            return d.tempId.toString()===id.toString()
        })
        existingObject.isEdit = value;
        this.trigger({data: this.distributor})
    },

    onEditVehicle:function(id, value){
        var existingObject = _.find(this.distributor.distributorForm.vehicles, function(d){
            return d.tempId.toString()===id.toString()
        })
        existingObject.isEdit = value;
        this.trigger(this.distributor)
    },

    onEditClient:function(id, value){
        var existingObject = _.find(this.distributor.distributorForm.clients, function(d){
            return d.tempId.toString()===id.toString()
        })
        existingObject.isEdit = value;
        this.trigger({data: this.distributor})
    },


    onFetchAllDistributors:function(){
       WebUtils.fetchAllDistributors(DistAction.fetchAllDistributors.completed, DistAction.fetchAllDistributors.failed);
    },
    onFetchAllDistributorsCompleted:function(data){
        var results = data.response.data;
        this.distributor.allDistributors = results;
        this.trigger({data: this.distributor});
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
        this.createTempIdForDistributorForm("sources");
        this.createTempIdForDistributorForm("clients");
        this.createTempIdForDistributorForm("vehicles");
        if(this.distributor.distributorForm.clients.length>0){
            this.createTempIdForTestSamples();
        }

        this.distributor.currentDistributor =_.clone(results);
        this.trigger({data: this.distributor})
    },
    onGetCurrentDistributorFailed:function(data){
        console.log("Failed Fetching From API for currend distributor")
    },
    onFetchLinks: function(id){
        WebUtils.fetchVehicleLinks(id, DistAction.fetchLinks.completed, DistAction.fetchLinks.failed);
    },
    onFetchLinksCompleted: function(data){
        this.distributor.links.mainLink = data.response.data;
        var popUpAction = {
            status:"successFetchLinks",
            errorMessage:""
        }
        this.trigger({data: this.distributor, popUpAction:{popUpAction}})
    },
    onFetchLinksFailed: function(data){
        var popUpAction = {
            status:"fail",
            errorMessage:"Failed to fetch links, please try again"
        }
        this.trigger({data: this.distributor, popUpAction:{popUpAction}})
    },

    onFetchBranchLinks:function(id){
        WebUtils.fetchVehicleLinks(id, DistAction.fetchBranchLinks.completed, DistAction.fetchBranchLinks.failed);
    },
    onFetchBranchLinksCompleted:function(data){
        this.distributor.links.branchLink = data.response.data;
        this.trigger({data: this.distributor})
    },
    onFetchBranchLinksFailed:function(){}

});


module.exports = DistributorStore;
