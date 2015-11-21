var React = require('react')
    , ClientList = require('./distributor.details.clients.list.react')
    , SourceList = require('../manage/sources/manage.sources.list.react')
    , GenericButtons = require('../common/generic.button.react')
    ;

var DistributorDetails = React.createClass({
    propTypes:{
        currentDistributor: React.PropTypes.React
    },
    render: function () {
        var d = this.props.currentDistributor;
        var editUrl = "#/home/distributor/d/"+d.id+"/edit";
        var editBUttonText = <div><i className="fa fa-pencil"></i>EDIT</div>
        return (
            <div className = "view-distributor card">
                <div className = "row-field info-card">
                    <div className = "avatar">
                        <img src = "/images/placeholder.avatar.png"/>
                    </div>
                    <div className = "deets">
                        <div className = "text-fields name">{d.name}</div>
                        <div className = "text-fields">{d.location}</div>
                    </div>
                    <div className = "menu-buttons">
                        <GenericButtons
                            className  = "edit-button"
                            link = {editUrl}
                            enableLink = {true}
                            buttonText = {editBUttonText}
                        />
                    </div>

                </div>
                <div className = "row-field list-fields">
                    <div className = "text-label-header">Sources</div>
                    <SourceList
                        sources = {d.sources}
                        removeSource = {function(){}}
                        isForm = {false}
                    />
                </div>
                <div className = "row-field">
                    <div className = "text-label-header">Clients</div>
                    <ClientList
                        clients = {d.clients}
                    />

                </div>

                <div className = "row-field long-fields">
                    <div className = "text-label-header">Completed Investigations</div>
                    <div className = "text-fields">{d.completedInvestigation}</div>
                    <div className = "text-label-header">Current Intelligence</div>
                    <div className = "text-fields">{d.currentIntelligence}</div>
                    <div className = "text-label-header">Pending Leads</div>
                    <div className = "text-fields">{d.pendingLeads}</div>
                    <div className = "text-label-header">Tasking Leads</div>
                    <div className = "text-fields">{d.taskingLeads}</div>
                </div>
            </div>
        )
    }
});

module.exports = DistributorDetails;