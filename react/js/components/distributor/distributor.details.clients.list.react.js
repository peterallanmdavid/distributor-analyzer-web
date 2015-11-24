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
        var heightValue=0;
        _.forEach(clients, function(d){
            var tempHV;
            switch(d.testSamples.length) {
                case 0:
                    tempHV = 85;
                    break;
                case 1:
                    tempHV = 130;
                    break;
                case 2:
                    tempHV = 175;
                    break;
                default:
                    tempHV = 230;
                    break;
            }
            heightValue= tempHV>heightValue?tempHV:heightValue;
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
        heightValue=heightValue.toString()+"px";
        var styles = {
            height:heightValue
        }
        return (
            <div className = "clients-list" style={styles}>
                {_clients}
            </div>
        )
    }
});
module.exports = ClientsList