var React = require('react')
    , ReactScriptLoaderMixin = require('../../vendor/scriptloader/ReactScriptLoader.js').ReactScriptLoaderMixin
    , jquery = require('../../../../public/js/jquery')
    , MainLink = require('./linkchart.content.mainlink.react.js')
    , _ = require('lodash')
    ;

var LinkChartContent = React.createClass({

    mixins: [ReactScriptLoaderMixin],
    propTypes:{
        currentDistributor: React.PropTypes.object,
        links: React.PropTypes.array
    },
    getScriptURL: function() {
        return '/js/orgchart.min.js';
    },
    onScriptLoaded: function(){
        try {
            $(function() {
                $("#basic-chart-source").orgChart({container: $("#chart")});
            });
        } catch (e) {
            if (process.env.NODE_ENV === "development") {
                console.log('orgchart Init failed');
            }
        }
    },
    onScriptError: function() {
    },
    componentWillReceiveProps:function(){
      this.onScriptLoaded();
    },
    render: function () {
        var cd  = this.props.currentDistributor;
        var links = this.props.links;
        var branches = [];
        var that = this

        _.forEach(links.mainLink, function(d, key){
            branches.push(
               <MainLink
                   linkItem = {d}
                   branchLink = {links.branchLink}
                   fetchBranchLink = {that.props.distActions.fetchBranchLinks}
               />
            )
        });
        return (
            <div id="chart" className = "link-chart">
                <ul id="basic-chart-source" className="hidden">
                    <li>
                        <div className = "dist-name">{cd.name}</div>
                        <ul>
                            {branches}
                        </ul>

                    </li>
                </ul>
            </div>
        )
    }
});

module.exports = LinkChartContent;