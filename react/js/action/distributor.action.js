var Reflux = require('reflux')
    ;


var DistributorAction = Reflux.createActions({
    'saveDistributor':{asyncResult: true},
    'addSource':{},
    'addClient':{},
    'addVehicle':{},
    'setDistributorForm':{},
    'setVehicleToEdit':{},
    'setClientToEdit':{},
    'setSourceToEdit':{},
    'getCurrentDistributor':{asyncResult: true},
    'removeClient':{},
    'editSource':{},
    'editClient':{},
    'editVehicle':{},
    'removeSource':{},
    'removeVehicle':{},
    'removeTestSamples':{},
    'fetchAllDistributors':{asyncResult: true}

});
module.exports = DistributorAction;
