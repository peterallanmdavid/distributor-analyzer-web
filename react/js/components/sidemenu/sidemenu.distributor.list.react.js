var React = require('react')
    , _ = require('lodash')
    , GenericButton = require('../common/generic.button.react')
;

var DistributorList= React.createClass({
    _onClickHandler:function(id){
        window.location="#home/distributor/d/" + id;
    },
    render: function () {
        var dist = this.props.distList;
        var distList = [];
        var that = this;
        var addButtonText =(<div className = "inline-flex"><i className="fa fa-plus"></i>NEW SUSPECT</div>);
        var addButtonUrl  = "#home/distributor/create"
        distList.push(
            <div className = "dist-list-item">
                <GenericButton
                    buttonText ={addButtonText}
                    enableLink = {true}
                    link = {addButtonUrl}

                />
            </div>
        )
        if(dist.length>0){
            _.forEach(dist, function(d){
                distList.push( <div className = "dist-list-item" onClick = {that._onClickHandler.bind(null, d.id)}>
                {d.name}
                </div>);
            })
        }
        return (
            <div className = "dist-list">
                {distList}
            </div>
        )
    }
});

module.exports  = DistributorList;