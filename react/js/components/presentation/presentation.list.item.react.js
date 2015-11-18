var React = require('react')
    , GenericButton = require('../common/generic.button.react')
    , Modal = require('../common/generic.modal.react')
    , SourcesList = require('../manage/sources/manage.sources.list.react')
    ;

var PresentationListItem = React.createClass({
    propTypes:{
        presentationDataItem: React.PropTypes.object
    },
    getInitialState:function(){
        return({
            showModal: false,
            confirmMethod: function(){},
            confirmParams: {},
            bodyText:'',
            title:'',
            isSuccessPopUp: true,
            useLoader:false,
            loaderText:''
        })
    },
    _viewSourcesDetails:function(){
        console.log("opening")
        var body = <SourcesList
            sources = {this.props.presentationDataItem.sources}
            removeSource = {function(){}}
            isForm = {false}
        />
        this.setState({
            showModal: true,
            confirmMethod: function(){},
            confirmParams: {},
            bodyText:{body},
            title:''

        })
    },
    _closeModal:function(){
        this.setState({showModal:false})
    },
    render: function () {
        var d = this.props.presentationDataItem;
        return (

                <tr className = "table-row">
                    <td className = "table-col">{d.name}</td>
                    <td className = "table-col">{d.location}</td>
                    <td className = "table-col">{d.sources.length} <GenericButton
                        buttonText ="view details"
                        onClickHandler = {this._viewSourcesDetails}
                    /></td>
                    <td className = "table-col">{d.clients.length}</td>
                    <td className = "table-col">{d.completedInvestigation}</td>
                    <td className = "table-col">{d.currentIntelligence}</td>
                    <td className = "table-col">{d.pendingLeads}</td>
                    <td className = "table-col">{d.taskingLeads}</td>
                    <td>
                        <Modal
                            showModal={this.state.showModal}
                            closeModal={this._closeModal}
                            confirmMethod={this.state.confirmMethod}
                            confirmParams={this.state.confirmParams}
                            title={this.state.title}
                            body={this.state.bodyText}
                            isSuccessPopUp = {this.state.isSuccessPopUp}
                            useLoader={this.state.useLoader}
                            loaderText={this.state.loaderText}
                            handleOnEnter = {false}
                        />
                    </td>
                </tr>

        )
    }
});
module.exports = PresentationListItem;