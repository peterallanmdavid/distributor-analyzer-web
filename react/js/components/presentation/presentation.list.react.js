var React = require('react')
    , _ = require('lodash')
    , PresentationListItem = require('./presentation.list.item.react')
;

var PresentationList  = React.createClass({
    propTypes:{
        presentationData: React.PropTypes.array,
        distActions:React.PropTypes.object
    },
    render: function () {
        var presData = this.props.presentationData;
        var presentationItem= [];
        var that = this
        _.forEach(presData, function(d){
            presentationItem.push(
                <PresentationListItem presentationDataItem = {d} distActions = {that.props.distActions} vehicleLinks = {that.props.vehicleLinks}/>
               )
        })
        return (
            <div>
                {presentationItem}
            </div>
        )
    }
});
module.exports = PresentationList;
