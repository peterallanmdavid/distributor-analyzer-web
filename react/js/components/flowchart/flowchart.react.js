var React = require('react')
    , ReactScriptLoaderMixin = require('../../vendor/scriptloader/ReactScriptLoader.js').ReactScriptLoaderMixin
    , jquery = require('../../../../public/js/jquery')
    , WareHouseList = require('./flowchart.warehouse.list.react')
    , RetailOutletList = require('./flowchart.retailoutlet.list.react')
    , Factory = require('./flowchart.factor.list.react')
    , ClientList = require('./flowchart.clients.list.react')
    , GenericButton = require('../common/generic.button.react')
    ;

var FlowChart = React.createClass({
    mixins: [ReactScriptLoaderMixin],
    propTypes:{
        currentDistributor: React.PropTypes.object
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
                console.log('Swiper Init failed');
            }
        }
    },
    onScriptError: function() {
    },
    render: function(){
        var cd = this.props.currentDistributor;
        var backBtnLink = "#home/distributor/d/"+ cd.id;
        var backBtnText =(<div className = "inline-flex"><i className="fa fa-home"></i>Back to Details</div>);
        return(
        <div className = "flowchart-container">
            <GenericButton
                buttonText ={backBtnText}
                enableLink = {true}
                link = {backBtnLink}

            />
            <div id="chart" className = "link-chart">
                <ul id="basic-chart-source" className="hidden">
                    <li>
                        <div className = "dist-name">{cd.name}</div>
                        <ul>
                            <li>SUPPLIER
                                <ul>
                                    <li>WAREHOUSE
                                        <WareHouseList distributor = {cd}/>
                                    </li>
                                    <li>RETAIL OUTLET
                                        <RetailOutletList distributor = {cd} />
                                    </li>
                                    <li>FACTORY
                                        <Factory distributor = {cd} />
                                    </li>
                                </ul>
                            </li>

                            <li>SUSPECT'S CUSTOMER
                                <ClientList clients = {cd.clients}/>
                            </li>
                        </ul>

                    </li>
                </ul>
            </div>
        </div>
        );
    }
});
module.exports = FlowChart;