var React = require('react')
    , Reflux= require('reflux')
    , DistAction = require('../action/distributor.action')
    , _ = require('lodash')
    , CommonUtils = require('../utils/common.utils.js')
    , RouteStore = require('./route.store')
    ;

var DistributorStore = Reflux.createStore({
    listenables: [DistAction],
    init: function() {
        this.listenTo(RouteStore, this.setRoute);
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

        ]
    },
    setRoute: function(data){
        if(data.route && data.route.params && data.route.params.distributorId){
            //temporary way to get current distribtor while API is out
            var allDist = this.distributor.allDistributors;
            var currentDistributor = _.find(allDist, function(d){
                return(d.id.toString()===data.route.params.distributorId.toString())
            })
            this.distributor.distributorForm = _.clone(currentDistributor);
            this.distributor.currentDistributor =currentDistributor;
            this.trigger(this.distributor);
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
    },
/*    saveDistributorToFile:function(data){
        var txtFile = "/assets/distributor.text";
        var file = new File([],txtFile);
        file.open("r")
        while (!file.eof) {
            // read each line of text
            console.log(file.readln())
        }

    },*/




    //Action listeners
    onSaveData:function(){
        var data = this.distributor.distributorForm;
        var allDist = this.distributor.allDistributors;
        var isUpdate=false;
        if(typeof data.id!=="undefined"){
            isUpdate=true;
            for(var i=0; i<allDist.length;i++){
                if(allDist[i].id.toString()===data.id.toString()){
                    allDist[i]=data;
                    break;
                }
            }

        }else{
            data.id = CommonUtils.getCurrentId(allDist);
            this.distributor.allDistributors.push(data);
        }

        this.clearDistributorForm();
        this.trigger(this.distributor);
        if(isUpdate){
            window.location="#/home/distributor/d/"+data.id;
        }else{
            window.location="#/home/distributor";
        }
    },
    onSetDistributorForm:function(name, value){
        this.distributor.distributorForm[name]=value;
        this.trigger(this.distributor);
    },
    //will be used when api is ready
    onAddSource: function(data){
        data.id = CommonUtils.getCurrentId(this.distributor.distributorForm.sources);
        this.distributor.distributorForm.sources.push(data);
        this.trigger(this.distributor);

    },
    onAddClient:function(data){
        data.id = CommonUtils.getCurrentId(this.distributor.distributorForm.clients);
        this.distributor.distributorForm.clients.push(data);
        this.trigger(this.distributor);
    },
    onAddVehicle:function(data){
        data.id = CommonUtils.getCurrentId(this.distributor.distributorForm.vehicles);
        this.distributor.distributorForm.vehicles.push(data);
        this.trigger(this.distributor);
    },
    onRemoveSource: function(id){
        _.remove(this.distributor.distributorForm.sources, function(d){
            return d.id.toString()===id.toString();
        })
        this.trigger(this.distributor);
    },
    onRemoveClient: function(id){
        _.remove(this.distributor.distributorForm.clients, function(d){
            return d.id.toString()===id.toString();
        })
        this.trigger(this.distributor);
    },
    onRemoveVehicle:function(id){
        _.remove(this.distributor.distributorForm.vehicles, function(d){
            return d.id.toString()===id.toString();
        })
        this.trigger(this.distributor);
    },
    onRemoveTestSamples: function(clientId, id){
        var client = _.find(this.distributor.distributorForm.clients, function(d){
            return  d.id.toString()===clientId.toString();
        });
        _.remove(client.testSamples, function(d){
            return d.id.toString()===id.toString();
        })
        this.trigger(this.distributor);
    }

});


module.exports = DistributorStore;
