var React = require('react')
    ;

var EmptyLinkChart = React.createClass({
    render: function () {
        return (
            <div>
               This Suspect has no connections
            </div>
        )
    }
});

module.exports = EmptyLinkChart;