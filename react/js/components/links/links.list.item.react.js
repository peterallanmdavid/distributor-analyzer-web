var React = require('react')
    ;

var LinksItem = React.createClass({
    propTypes: {
        linkItem: React.PropTypes.object,
        closeModal: React.PropTypes.func
    },
    getDefaultProps:function(){
        return({
            linkItem:{}
        })
    },
    _viewDistributor: function(){
        this.props.closeModal();
        var distributorLink  = "#/home/distributor/d/"+ this.props.linkItem.distributorId.toString();
        window.location = distributorLink;

    },
    render: function () {
        var vl = this.props.linkItem;

        return (
            <div className = "link-item">
                <div className ="link-field">{vl.type}</div>
                <div className ="link-field pointer hover-underline" onClick = {this._viewDistributor}>{vl.distributorName}</div>
                <div className ="link-field">{vl.plateNumber}</div>
            </div>
        )
    }
});

module.exports = LinksItem;