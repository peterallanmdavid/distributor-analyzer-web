var Reflux = require('reflux')
    ;


var DistributorAction = Reflux.createActions({
    'saveDistributor':{asyncResult: true},
    'addSource':{},
    'addClient':{},
    'addVehicle':{},
    'setDistributorForm':{},
    'removeClient':{},
    'removeSource':{},
    'removeVehicle':{},
    'removeTestSamples':{},
    'fetchAllDistributors':{asyncResult: true}

});
module.exports = DistributorAction;
