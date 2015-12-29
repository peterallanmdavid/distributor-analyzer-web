var React = require('react')
    ;

var Links = React.createClass({
    getInitialState:function(){
        return({
            links: [],
            vehicleLinks:[]
        })
    },
    render: function () {
        return (
            <div>
                this is a react template
            </div>
        )
    }
});

module.exports = Links;