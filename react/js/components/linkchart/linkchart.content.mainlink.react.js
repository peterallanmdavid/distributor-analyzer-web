var React = require('react')
    , T = React.PropTypes
    , _ = require('lodash')
    , Branches = require('./linkchart.content.branchlink.react')
    ;

var LinkChartContentMain= React.createClass({
    propTypes:{
        branchLink:T.array,
        linkItem: T.object,
        fetchBranchLink: T.func

    },
    _fetchBranchLink:function(){
      //  this.props.fetchBranchLink(this.props.linkItem.distributorId)
    },
    render: function () {
        var pr = this.props;
        var branchContainer = <span></span>;
        var blComponent = [];
        if(pr.branchLink.length>0){

           /*_.forEach(pr.branchLink, function(d, key){
               blComponent.push(
                  <li>1</li>
               )
           })
*/
        }

        return (
            <li>
                <div onClick = {this._fetchBranchLink}>{pr.linkItem.distributorName}</div>
                {branchContainer}
            </li>
        )
    }
});

module.exports = LinkChartContentMain;