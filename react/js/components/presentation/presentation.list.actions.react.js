var React = require('react')
    , GenericButton = require('../common/generic.button.react')
;

var PresentationActionList= React.createClass({
    propTypes:{
        id: React.PropTypes.string
    },

    render: function () {
        var viewButtonText =(<div><i className="fa fa-list"></i>View</div>);
        var removeButtonText =(<div><i className="fa fa-times-circle"></i>Remove</div>);
        var viewUrl = "#/home/distributor/d/"+ this.props.id
        return (
            <div>
                <GenericButton
                    buttonText ={viewButtonText}
                    enableLink = {true}
                    link = {viewUrl}

                />
                <GenericButton
                    buttonText ={removeButtonText}
                    onClickHandler = {function(){console.log("removing")}}
                    enableLink = {false}
                    link= "/"

                />
            </div>
        )
    }
});
module.exports = PresentationActionList;