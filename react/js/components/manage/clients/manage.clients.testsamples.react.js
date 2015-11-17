var React = require('react')
    , _ = require('lodash')
    ;

var TestSamples = React.createClass({
    propTypes:{
      testSamples: React.PropTypes.array
    },
    render: function () {
        var ts = this.props.testSamples
        var tsItems = [];
        _.forEach(ts, function(d){
            tsItems.push(
                <div className = "client-item-container">
                    <div className = "client-item test-sample-row card-white">
                        <div className = "item-field">{d.name}</div>
                        <div className = "item-field">{d.capacity}</div>
                    </div>
                </div>
            );
        });
        return (
            <div className = "test-sample">
                <div className = "client-item card">
                    <div className = "item-field"><label>Name</label></div>
                    <div className = "item-field"><label>Cases/Quantity</label></div>
                </div>
                {tsItems}
            </div>
        )
    }
});
module.exports = TestSamples;