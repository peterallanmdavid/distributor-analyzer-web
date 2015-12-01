var React = require('react')
    , GenericButton = require('../common/generic.button.react')
;

var PresentationActionList= React.createClass({
    propTypes:{
        id: React.PropTypes.string
    },

    render: function () {
        var viewButtonText =(<div className = "inline-flex"><i className="fa fa-list"></i>View</div>);
        var removeButtonText =(<div className = "inline-flex"><i className="fa fa-times-circle"></i>Remove</div>);
        var viewUrl = "#/home/distributor/d/"+ this.props.id
        return (
            <div className = "presentation-buttons">
                <GenericButton
                    buttonText ={viewButtonText}
                    enableLink = {true}
                    link = {viewUrl}

                />
            </div>
        )
    }
});
module.exports = PresentationActionList;