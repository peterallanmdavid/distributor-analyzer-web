var React = require('react')
    , GenericButton = require('../../common/generic.button.react')
    , Modal = require('../../common/generic.modal.react')
    , TestSampleForm = require('./manage.clients.form.testsamples.react')
    , _ = require('lodash')
	; 

var SourcesForm = React.createClass({
	getInitialState:function(){
		return this._getInitialStateFromProps();
	},
    _getInitialStateFromProps:function(){
        var props  = this.props.client
        return({
            tempId:props.tempId,
            name:props.name,
            owner:props.owner,
            location:props.location,
            testSamples:props.testSamples ,
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
    getDefaultProps:function(){
        return({
            isEdit:false,
            client:{
                tempId:"",
                name:"",
                owner:"",
                location:"",
                testSamples:[]
            }
        })
    },
	propTypes: {
        distActions: React.PropTypes.object,
        closeForm:React.PropTypes.func,
        client: React.PropTypes.object,
        isEdit: React.PropTypes.bool
	},
	_changeQuantity:function(name, e){
		value = e.target.value;
	 	var newState = {};
        newState[name] = value;
		this.setState(newState);
	},
	_saveClient:function(){
		var data = {
            tempId:this.state.tempId,
            name:this.state.name,
            owner:this.state.owner,
            location:this.state.location,
            testSamples:this.state.testSamples
        }
        this.props.distActions.addClient(data);
        this._clearForm();
        if(this.props.isEdit){
            this._closeForm();
        }
	},
    _closeForm:function(){
        if(this.props.isEdit){
            this.props.distActions.editClient(this.props.client.tempId, false)
        }else{
            this.props.closeForm();
        }
    },
    _clearForm:function(){
        this.setState({
            tempId:"",
            name:"",
            owner:"",
            location:"",
            testSamples:[]
        })
    },
    _closeModal:function(){
        this.setState({showModal:false})
    },
    _launchTestSamplesForm:function(){
        var addTestSampleForm = (<TestSampleForm
            addTestSamples = {this._addTestSample}
            removeTestSample = {this._removeTestSample}
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
        var ts = _.clone(this.state.testSamples);
        ts.push(data)

        this.setState({testSamples:ts})
    },
    _removeTestSample:function(id){
        _.remove(this.state.testSamples, function(d){
            return d.tempId.toString()===id.toString()
        })
    },

	render:function(){
		var addTestSampleButton = (<div><i className="fa fa-plus-circle"></i>Add Test Sample</div>);
        var testSampleCount = (this.state.testSamples.length>0? (
            <div onClick = {this._launchTestSamplesForm} className = "test-sample-count">{this.state.testSamples.length}</div>):
            (<GenericButton
            onClickHandler = {this._launchTestSamplesForm}
            buttonText ={addTestSampleButton}
        />));
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
                    {testSampleCount}
                </div>
				<div className = "input-field action-buttons">
                    <i onClick = {this._saveClient} className="fa fa-check-circle"></i>
					<i onClick = {this._closeForm} className="fa fa-times-circle"></i>
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