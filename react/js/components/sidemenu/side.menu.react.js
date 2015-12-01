var React = require('react')
    , DistList  = require('./sidemenu.distributor.list.react')
;

var SideMenu= React.createClass({
    propTypes:{
        allDist: React.PropTypes.array
    },
    render: function () {
        return (
            <div className = "side-menu">
                <div className = "header">Suspects/Targets List</div>
                <DistList distList = {this.props.allDist} />
            </div>
        )
    }
});

module.exports = SideMenu;