var React = require('react')
    , _ = require('lodash')
    , classnames= require('classnames')
;

var RetailOutlet = React.createClass({
    render: function () {
        var dist = this.props.distributor;
        var whList = [];
        _.forEach(dist.sources, function(d){
            if(d.type==="Retail Outlet"){
                whList.push(<li>
                    <div>{d.location}</div>
                    <div>{d.quantity.daily}</div>
                    <div>{d.quantity.monthly}</div>
                    <div>{d.quantity.weekly}</div>
                </li>)
            }
        });
        var cName = classnames({"hidden":whList.length===0})
        return (
            <ul className = {cName}>
                {whList}
            </ul>
        )
    }
});
module.exports = RetailOutlet;