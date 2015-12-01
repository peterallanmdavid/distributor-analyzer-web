var React = require('react')
    , _ = require('lodash')
;

var ClientsList= React.createClass({
    render: function () {
        var cList = [];
        _.forEach(this.props.clients, function(d){
            cList.push(
                <li>
                    <div className = "clients">
                    {d.name}
                    {d.owner}
                    {d.location}
                    </div>
                </li>
            )
        })
        return (
            <ul>
                {cList}
            </ul>
        )
    }
});
module.exports  = ClientsList;