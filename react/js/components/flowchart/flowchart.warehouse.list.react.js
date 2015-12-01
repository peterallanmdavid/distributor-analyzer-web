var React = require('react')
    , _ = require('lodash')
    , classnames = require('classnames')
    ;

var WarehoustList= React.createClass({
    propTypes:{
        distributor: React.PropTypes.object
    },
    render: function () {
        var dist = this.props.distributor;
        var whList = [];
        _.forEach(dist.sources, function(d){
            if(d.type==="Warehouse"){
                whList.push(<li>
                    <div>{d.id}</div>
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
module.exports  = WarehoustList;