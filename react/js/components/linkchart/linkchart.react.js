var React = require('react')
    , GenericButton = require('../common/generic.button.react')
    , EmptyLinkChart = require('./linkchart.empty.react')
    , LinkChartContent = require('./linkchart.content.react')
    ;

var LinkChart = React.createClass({

    propTypes:{
        currentDistributor: React.PropTypes.object,
        links: React.PropTypes.object,
        distActions: React.PropTypes.object
    },
    render: function () {
        var links = this.props.links;
        var cd = this.props.currentDistributor
        var backBtnLink = "#home/distributor/d/"+ cd.id;
        var backBtnText =(<div className = "inline-flex"><i className="fa fa-home"></i>Back to Details</div>);
        var content = links.mainLink.length>0?<LinkChartContent
            links = {links}
            currentDistributor = {cd}
            distActions = {this.props.distActions}/>:<EmptyLinkChart/>

        return (
            <div className = "flowchart-container">
                <GenericButton
                    buttonText ={backBtnText}
                    enableLink = {true}
                    link = {backBtnLink}

                />
                {content}
            </div>
        )
    }
});

module.exports = LinkChart;