var React = require('react')
    ,_ = require('lodash')
    , Reflux = require('reflux')
    , VehicleListItem = require("./links.list.item.react.js")
    , DistStore = require("../../store/distributor.store")
    , DistAction = require("../../action/distributor.action")
    ;

var VehicleLinks = React.createClass({
    mixins: [Reflux.ListenerMixin],
    propTypes:{
        links: React.PropTypes.string,
        closeModal: React.PropTypes.func
    },
    getDefaultProps:function(){
        return({closeModal: function(){}})
    },
    render: function () {
        var linkList = [];
        var links = this.props.links.mainLink;
        var that = this;
        if(links.length>0){
            _.forEach(links, function(d, key){
                linkList.push(<VehicleListItem key = {key} linkItem = {d} closeModal = {that.props.closeModal}/>);
            })
        }


        return (
            <div className = "links-list">
                <div className = "link-item header">
                    <div className = "link-field">Type</div>
                    <div className = "link-field">Suspect</div>
                    <div className = "link-field">Linked Item</div>
                </div>
                {linkList}
            </div>
        )
    }
});

module.exports = VehicleLinks;