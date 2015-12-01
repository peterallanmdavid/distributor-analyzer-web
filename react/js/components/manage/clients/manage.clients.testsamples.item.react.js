var React = require('react')
;

var ManageTestSampleItems= React.createClass({
    propTypes:{
        removeTestSample: React.PropTypes.func,
        item: React.PropTypes.object
    },
    _removeTestSample:function() {
      this.props.removeTestSample(this.props.item.tempId);
    },
    render: function () {
        var d = this.props.item;
        return (
            <div className = "client-item-container">
                <div className = "client-item test-sample-row card-white">
                    <div className = "item-field">{d.name}</div>
                    <div className = "item-field">{d.capacity}</div>
                    <div className = "remove-button" onClick = {this._removeTestSample}><i className="fa fa-times"></i></div>
                </div>
            </div>
        )
    }
});

module.exports = ManageTestSampleItems