var   React = require('react')
    , classNames = require('classnames');

var PositionSelect = React.createClass({
    propTypes: {
        optionsArray: React.PropTypes.array,
        optionSelected: React.PropTypes.func,
        isValid: React.PropTypes.number,
        placeHolder: React.PropTypes.string,
        className: React.PropTypes.string,
        value: React.PropTypes.number,
        name:React.PropTypes.string

    },

    getDefaultProps:function(){
        return({isValid:1});
    },

    render: function(){
        var classname = classNames('form-div',this.props.className, { 'form-error': !this.props.isValid });

        var optionsArray = this.props.optionsArray;
        var _options = [];
        _options.push(<option key="" value="Default" >{this.props.placeHolder}</option>)
        for (var i = 0; i < optionsArray.length; i++) {
            var option = optionsArray[i];
            var id = this.props.name + '_' + option.id;
            if(this.props.value === option.id){
                _options.push(<option key={i} id={id} value={option.id} data-test="123" selected="selected">{option.name}</option>);
            }else{
                _options.push(<option key={i} id={id} value={option.id} data-test="123">{option.name}</option>);
            }
        }

        return (
            <div className={classname}>
                <select onChange = {this._onChangeHandler} name = {this.props.name} value = {this.props.value}>
                            {_options}
                </select>
                <div className="dblarrow"><b></b><i></i></div>
            </div>
        );
    },
    _onChangeHandler: function(e){
        var value_name = document.getElementById(this.props.name + '_' + e.target.value).text;
        this.props.optionSelected(this.props.name,e, value_name);
        e.preventDefault();
    }

});


module.exports = PositionSelect;