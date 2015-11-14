var React = require('react')
    , Reflux= require('reflux')
    , DistAction = require('../action/distributor.action')
    , CommonUtils = require('../utils/common.utils.js')
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
    //will be used when api is ready
    onAddSource: function(data){
        data.id = CommonUtils.getCurrentId;
        this.disData.presentationData.sources.push(data)
        this.trigger(this.disData);
    },
    onAddClient:function(data){
        data.id = CommonUtils.getCurrentId;
        this.disData.presentationData.clients.push(data)
        this.trigger(this.disData);
    },
    onRemoveSource: function(id){
        _.remove(this.disData.presentationData.sourceTypes, function(d){
            return d.id.toString()===id.toString();
        })
        this.trigger(this.disData);
    }

});


module.exports = DistributorStore;
