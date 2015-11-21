var React = require('react')
    , _ = require('lodash')
    , TestSamples = require('./distributor.details.clients.list.testsamples.react')
    ;

var ClientsList = React.createClass({
    propTypes:{
        clients: React.PropTypes.array
    },
    render: function () {
        var clients = this.props.clients;
        var _clients = [];
        _.forEach(clients, function(d){
            _clients.push(
                <div className = "card-white clients-item ">
                    <div className = "info-card">
                        <div className = "text-field">{d.name}</div>
                        <div className = "text-field">{d.owner}</div>
                        <div className = "text-field">{d.location}</div>
                    </div>
                    <TestSamples testSamples = {d.testSamples}/>
                </div>);
        })
        return (
            <div className = "clients-list">
                {_clients}
            </div>
        )
    }
});
module.exports = ClientsList