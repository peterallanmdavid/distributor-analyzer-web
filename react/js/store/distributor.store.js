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
        return ([
            {
                "name": "Test Distributor",
                "location": "Tondo, manila",
                "completedInvestigation": "asdadadd",
                "currentIntelligence": "asdasdasd",
                "pendingLeads": "asdasdasd",
                "taskingLeads": "asdasdadasd",
                "modifiedData": "",
                "sources": [
                    {
                        "name": "San Jose Builders",
                        "typeId": "3",
                        "typeName": "Retail Outlet",
                        "quantity": {
                            "daily": "12",
                            "weekly": "2323",
                            "monthly": "232"
                        },
                        "id": 1
                    },
                    {
                        "name": "San Maria Strato",
                        "typeId": "3",
                        "typeName": "Retail Outlet",
                        "quantity": {
                            "daily": "23",
                            "weekly": "56",
                            "monthly": "15"
                        },
                        "id": 2
                    }
                ],
                "clients": [
                    {
                        "id": 1,
                        "name": "Jommel's Yosihan",
                        "owner": "Jommel Papa",
                        "location": "Cavite, Dasmarinas",
                        "testSamples": [
                            {
                                "name": "Marlboro",
                                "capacity": "2345",
                                "id": 1
                            },
                            {
                                "name": "Hope",
                                "capacity": "25",
                                "id": 2
                            },
                            {
                                "name": "Fortune",
                                "capacity": "1456",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "Jommel's Yosihan",
                        "owner": "Jommel Papa",
                        "location": "Cavite, Dasmarinas",
                        "testSamples": [
                            {
                                "name": "Marlboro",
                                "capacity": "2345",
                                "id": 1
                            },
                            {
                                "name": "Hope",
                                "capacity": "25",
                                "id": 2
                            },
                            {
                                "name": "Fortune",
                                "capacity": "1456",
                                "id": 3
                            }
                        ]
                    },
                ]
            },
            {
                "name": "Test Distributor 2",
                "location": "Tondo, manila",
                "completedInvestigation": "asdadadd",
                "currentIntelligence": "asdasdasd",
                "pendingLeads": "asdasdasd",
                "taskingLeads": "asdasdadasd",
                "modifiedData": "",
                "sources": [
                    {
                        "name": "San Jose Builders",
                        "typeId": "3",
                        "typeName": "Retail Outlet",
                        "quantity": {
                            "daily": "12",
                            "weekly": "2323",
                            "monthly": "232"
                        },
                        "id": 1
                    },
                    {
                        "name": "San Maria Strato",
                        "typeId": "3",
                        "typeName": "Retail Outlet",
                        "quantity": {
                            "daily": "23",
                            "weekly": "56",
                            "monthly": "15"
                        },
                        "id": 2
                    }
                ],
                "clients": [
                    {
                        "id": 1,
                        "name": "Jommel's Yosihan",
                        "owner": "Jommel Papa",
                        "location": "Cavite, Dasmarinas",
                        "testSamples": [
                            {
                                "name": "Marlboro",
                                "capacity": "2345",
                                "id": 1
                            },
                            {
                                "name": "Hope",
                                "capacity": "25",
                                "id": 2
                            },
                            {
                                "name": "Fortune",
                                "capacity": "1456",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "Jommel's Yosihan",
                        "owner": "Jommel Papa",
                        "location": "Cavite, Dasmarinas",
                        "testSamples": [
                            {
                                "name": "Marlboro",
                                "capacity": "2345",
                                "id": 1
                            },
                            {
                                "name": "Hope",
                                "capacity": "25",
                                "id": 2
                            },
                            {
                                "name": "Fortune",
                                "capacity": "1456",
                                "id": 3
                            }
                        ]
                    },
                ]
            }
        ])
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
