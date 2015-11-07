var React = require('react')
    , Reflux= require('reflux')
    , DistAction = require('../action/distributor.action')
    ;

var DistributorStore = Reflux.createStore({
    listenables: [DistAction],
    disData:{
        presentationData:[
            {distName:"Lizel Margallo", address:"Walis City", wLocation:"Walis Underground",wCapacity:"235", dailySales:5300.00, monthlySales:45678.00}
        ]
       
    },
    getPresentationData:function(){
        return this.disData.presentationData;
    },
    setPresentationData:function(name, value){
        this.disData.presentationData[name]=value;
        this.trigger(this.disData);
    },
    onSaveData:function(data){
        this.disData.presentationData.push(data);
        this.trigger(this.disData);
    }

});


module.exports = DistributorStore;
