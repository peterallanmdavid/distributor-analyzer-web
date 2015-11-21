var React = require('react')
    , Modal = require('../../common/generic.modal.react')
    , TestSampleList = require('./manage.clients.testsamples.react')
	; 

var SourcesListItem = React.createClass({
    getInitialState:function(){
        return({
            showModal: false,
            confirmMethod: function(){},
            confirmParams: {},
            bodyText:'',
            title:'',
            isSuccessPopUp: false,
            useLoader:false,
            loaderText:''
        })
    },
	propTypes:{
		clientItem:React.PropTypes.object,
        removeClient: React.PropTypes.func
	},
    _removeItem:function(){
        this.props.removeClient(this.props.clientItem.id)
    },
    //////TODO to be refactores since this are also used in form
        _closeModal:function(){
        this.setState({showModal:false})
    },
    _launchTestSamplesForm:function(){
        var addTestSampleForm = (<TestSampleList
            testSamples = {this.props.clientItem.testSamples}
        />)
        this.setState({
            showModal:true,
            bodyText: addTestSampleForm,
            isSuccessPopUp: true,
            title: "Add Test Sample"
        })
    },

	render:function(){
		var clientItem= this.props.clientItem;
        var buttons = [];
        if(this.props.isForm){
            buttons.push(<div onClick = {this._launchTestSamplesForm}className = "item-field">{clientItem.testSamples.length}</div>);
            buttons.push(<div className = "remove-button" onClick = {this._removeItem}><i className="fa fa-times"></i></div>);
        }
		return(
			<div className = "client-item-container">
				<div className = "client-item card-white">
					<div className = "item-field">{clientItem.name}</div>
					<div className = "item-field">{clientItem.owner}</div>
					<div className = "item-field">{clientItem.location}</div>
				</div>
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
			</div>
		);
	}
});

module.exports = SourcesListItem;