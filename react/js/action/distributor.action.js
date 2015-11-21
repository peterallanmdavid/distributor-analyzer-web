var Reflux = require('reflux')
    ;


var DistributorAction = Reflux.createActions({
    'saveData':{},
    'addSource':{},
    'addClient':{},
    'removeSource':{},
    'setDistributorForm':{},
    'removeClient':{},
    'removeTestSamples':{}

});
module.exports = DistributorAction;
