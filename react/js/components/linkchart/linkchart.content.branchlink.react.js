var React = require('react')
    , T = React.PropTypes
    ;

var LinkChartBranches = React.createClass({
    propTypes:{
        branch : T.object
    },
    render: function () {
        return (
            <li>
                {this.props.branch.distributorName}
            </li>
        )
    }
});

module.exports = LinkChartBranches;