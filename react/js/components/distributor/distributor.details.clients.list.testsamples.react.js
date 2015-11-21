var React = require('react')
    , _ = require('lodash')
    ;

var TestSamples= React.createClass({
    propTypes:{
        testSamples: React.PropTypes.object
    },
    render: function () {
        var testSamples = this.props.testSamples;
        var _testSamples =[];
        _.forEach(testSamples, function(d){
            _testSamples.push(
                <div className = "card info-card">
                    <div className = "text-field">{d.name} : {d.capacity}</div>
                </div>
            )
        })

        return (
            <div className="clients-list-item">
                {_testSamples}
            </div>
        )
    }
});
module.exports  = TestSamples;