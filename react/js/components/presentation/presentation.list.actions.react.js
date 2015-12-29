var React = require('react')
    , GenericButton = require('../common/generic.button.react')
;

var PresentationActionList= React.createClass({
    propTypes:{
        id: React.PropTypes.string,
        viewLinks: React.PropTypes.func
    },
    _viewLinks:function(){
        this.props.viewLinks();
    },

    render: function () {
        var viewButtonText =(<div className = "inline-flex"><i className="fa fa-list"></i>View</div>);
        var linkButtonText =(<div className = "inline-flex"><i className="fa fa-link"></i>Links</div>);
        var viewUrl = "#/home/distributor/d/"+ this.props.id
        return (
            <div className = "presentation-buttons">
                <div className = "">
                    <GenericButton buttonText ={viewButtonText} enableLink = {true} link = {viewUrl}/>
                </div>
                <div>
                    <GenericButton buttonText ={linkButtonText} onClickHandler = {this._viewLinks}/>
                </div>

            </div>
        )
    }
});
module.exports = PresentationActionList;