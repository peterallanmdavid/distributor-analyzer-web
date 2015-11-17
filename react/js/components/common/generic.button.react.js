var React = require('react')
    ,classnames = require('classnames')
    ;

var GenericButton= React.createClass({
    propTypes:{
        className: React.PropTypes.string,
        onClickHandler: React.PropTypes.func,
        link: React.PropTypes.string,
        enableLink: React.PropTypes.bool,
        buttonText: React.PropTypes.string
    },
    getDefaultProps: function () {
        return {
            onClickHandler: function () {},
            enableLink:false,
            link:""
        };
    },
    _clickHandler: function (e) {
        if(this.props.enableLink){

        }else{
            e.preventDefault();
        }
        this.props.onClickHandler();
    },
    render: function () {
        var _class = classnames('generic-btn',this.props.className);

        return (
            <a className={_class} href={this.props.link} onClick={this._clickHandler}>{this.props.buttonText}</a>
        );
    }
});
module.exports  = GenericButton;