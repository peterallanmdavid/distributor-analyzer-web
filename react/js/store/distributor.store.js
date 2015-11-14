var React = require('react')
    , Reflux= require('reflux')
    , DistAction = require('../action/distributor.action')
    ;

var DistributorStore = Reflux.createStore({
    listenables: [DistAction],
    disData:{
        presentationData:[
          /* {
                name:"", 
                location:"", 
                completedInvestigation:"",
                currentIntelligence:"",
                pendingLeads:"",
                taskingLeads:"",
                modifiedData:"",
                sources:[],
                client:[]
            }*/
        ],
        sourceTypes:[
            {id: 1, name:"Warehouse"},
            {id: 2, name:"Factory"},
            {id: 3, name:"Retail Outlet"}

        ]
       
    },
    getPresentationData:function(){
        return this.disData.presentationData;
    },
    getSourceTypes: function(){
        return this.disData.sourceTypes;
    },
    onSetPresentationData:function(name, value){
        this.disData.presentationData[name]=value;
        this.trigger(this.disData);
    },
    onSaveData:function(data){
        this.disData.presentationData.push(data);
        this.trigger(this.disData);
    },
    onAddSource: function(data){
        this.disData.presentationData.sources.push(data)
    },
    onAddClient:function(data){
        this.disData.presentationData.clients.push(data)
    }

});


module.exports = DistributorStore;
