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
        _.forEach(presData, function(d){
            presentationItem.push(
                <PresentationListItem presentationDataItem = {d} distActions = {this.props.distActions}/>
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
