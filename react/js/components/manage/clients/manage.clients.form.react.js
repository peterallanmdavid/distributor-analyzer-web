var React = require('react')
    , GenericButton = require('../../common/generic.button.react')
    , Modal = require('../../common/generic.modal.react')
    , TestSampleForm = require('./manage.clients.form.testsamples.react')
    , _ = require('lodash')
    , CommonUtils = require('../../../utils/common.utils')

	; 

var SourcesForm = React.createClass({
	getInitialState:function(){
		return({
            name:"",
            owner:"",
            location:"",
            testSamples:[] ,
            showModal: false,
            confirmMethod: function(){},
            confirmParams: {},
            bodyText:'',
            title:'',
            isSuccessPopUp: false,
            useLoader:false,
            loaderText:''

		});
	},
	propTypes: {
		distAction: React.PropTypes.object,
		addClient: React.PropTypes.func
	},
	_changeQuantity:function(name, e){
		value = e.target.value;
	 	var newState = {};
        newState[name] = value;
		this.setState(newState);
	},
	_saveSource:function(){
		this.props.addClient(this.state);
	},
    _closeModal:function(){
        this.setState({showModal:false})
    },
    _launchTestSamplesForm:function(){
        var addTestSampleForm = (<TestSampleForm
            addTestSamples = {this._addTestSample}
            testSamples = {this.state.testSamples}
        />)
        this.setState({
            showModal:true,
            bodyText: addTestSampleForm,
            isSuccessPopUp: true,
            title: "Add Test Sample"
        })
    },
    _addTestSample:function(data){
        var currentTestSample = _.clone(this.state.testSamples);
        data.id = CommonUtils.getCurrentId(currentTestSample);
        currentTestSample.push(data)
        this.setState({testSamples:currentTestSample});
    },

	render:function(){
		var addTestSampleButton = (<div><i className="fa fa-plus-circle"></i>Add Test Sample</div>);
        return(
			<div className = "client-form card-white">
				<div className = "input-fields">
					<input value= {this.state.name} onChange ={this._changeQuantity.bind(null, "name")}/>
				</div>
				<div className = "input-fields">
					<input value= {this.state.owner} onChange ={this._changeQuantity.bind(null, "owner")}/>
				</div>
				<div className = "input-fields">
					<input value= {this.state.location} onChange ={this._changeQuantity.bind(null, "location")}/>
				</div>
                <div className = "input-fields">
                    <GenericButton
                        onClickHandler = {this._launchTestSamplesForm}
                        buttonText ={addTestSampleButton}
                    />
                </div>
				<div className = "input-field action-buttons"> 
					<i onClick = {this._saveSource} className="fa fa-check-circle"></i>
					<i onClick = {this.props.closeForm} className="fa fa-times-circle"></i>
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

module.exports = SourcesForm;