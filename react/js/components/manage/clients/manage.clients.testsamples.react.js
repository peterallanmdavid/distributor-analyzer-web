var React = require('react')
    , _ = require('lodash')
    , TestSampleItems = require('./manage.clients.testsamples.item.react')
    ;

var TestSamples = React.createClass({
    propTypes:{
        testSamples: React.PropTypes.array,
        isForm: React.PropTypes.bool
    },
    getDefaultProps:function(){
        return({
            isForm: false,
            removeTestSample:function(){}

        })
    },
    render: function () {
        var ts = this.props.testSamples
        var tsItems = [];
        var that = this;
        _.forEach(ts, function(d){
            tsItems.push(
                <TestSampleItems item = {d} removeTestSample = {that.props.removeTestSample} />
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