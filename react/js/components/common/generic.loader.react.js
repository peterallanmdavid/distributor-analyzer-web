var   React = require('react');
var Spinner = require('react-loader');

var Loader = React.createClass({
    propTypes: {
        //show or hide loader
        loaded: React.PropTypes.bool,
        //array of loader properties
        options: React.PropTypes.object
    },
    getInitialState: function(){
        return {};
    },
    render: function () {
        return(
            <Spinner loaded={this.props.loaded} options={this.props.options} />
        )
    }
});

module.exports = Loader;
 