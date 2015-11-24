var Reflux = require('reflux')
    ;


var DistributorAction = Reflux.createActions({
    'saveData':{},
    'addSource':{},
    'addClient':{},
    'addVehicle':{},
    'setDistributorForm':{},
    'removeClient':{},
    'removeSource':{},
    'removeVehicle':{},
    'removeTestSamples':{}

});
module.exports = DistributorAction;
