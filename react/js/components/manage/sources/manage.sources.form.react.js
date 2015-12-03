var React = require('react')
	,CommonDropDown = require('../../common/common.dropdown.react')
	; 

var SourcesForm = React.createClass({
	getInitialState:function(){
		return this._getInitialStateFromProps();
	},
    _getInitialStateFromProps:function(){
        var props = this.props.source;
        var state = {
            tempId:props.tempId,
            location:props.location,
            typeId: props.typeId,
            type:props.type,
            quantityDaily:props.quantity.daily,
            quantityWeekly:props.quantity.weekly,
            quantityMonthly:props.quantity.monthly
        }
        return state;
    },
	propTypes: {
        distActions: React.PropTypes.object,
		sourceTypes: React.PropTypes.array,
		closeForm:React.PropTypes.func,
        isEdit: React.PropTypes.bool
	},
    getDefaultProps:function(){
        return({
            isEdit:false,
            source:{
                tempId:"",
                location:"",
                typeId: "",
                type:"",
                quantity:{
                    daily:"",
                    weekly:"",
                    monthly:""
                }}
        })
    },
	_sourceTypeSelected:function(name, e, value_name){
		var value = e.target.value;
		this.setState({typeId:value});
		this.setState({type:value_name});
	},
	_changeQuantity:function(name, e){
		value = e.target.value;
	 	var newState = {};
        newState[name] = value;
		this.setState(newState);
	},
	_saveSource:function(){
        var data = {
            tempId:this.state.tempId,
            location:this.state.location,
            typeId: this.state.typeId,
            type: this.state.type,
            quantity:{
                daily:this.state.quantityDaily,
                weekly:this.state.quantityWeekly,
                monthly:this.state.quantityMonthly
            }
        }

        this.props.distActions.addSource(data);
        this._clearForm();
        if(this.props.isEdit){
            this._closeForm();
        }

	},

    _clearForm: function(){
        this.setState({
            tempId:"",
            location:"",
            typeId: 0,
            type:"",
            quantityDaily:0,
            quantityWeekly:0,
            quantityMonthly:0})
    },

    _closeForm:function(){
        if(this.props.isEdit){
            this.props.distActions.editSource(this.props.source.tempId, false)
        }else{
            this.props.closeForm();
        }

    },

	render:function(){
		var sourceTypes = this.props.sourceTypes;
        var sources = this.state;
		return(
			<div className = "source-form card-white">
				<div className = "form-row">
                    <div className = "input-field">
                        <input value = {sources.location} className = "ta-left" onChange ={this._changeQuantity.bind(null, "location")}/>
                    </div>
					<div className = "input-field">
						<CommonDropDown
						 	optionsArray={sourceTypes}
					        optionSelected= {this._sourceTypeSelected}
					        isValid={true}
					 
					        className="source-type"
					        value = {this.state.typeId}
					        name="type"
						/>
					</div>
					<div className = "input-field">
						<input value = {sources.quantityDaily} placeHolder = "0" onChange ={this._changeQuantity.bind(null, "quantityDaily")}/>
					</div>
					<div className = "input-field">
						<input value = {sources.quantityWeekly} placeHolder = "0" onChange ={this._changeQuantity.bind(null, "quantityWeekly")}/>
					</div>
					<div className = "input-field">
						<input value = {sources.quantityMonthly} placeHolder = "0" onChange ={this._changeQuantity.bind(null, "quantityMonthly")}/>
					</div>
				</div>
				<div className = "input-field action-buttons"> 
					<i onClick = {this._saveSource} className="fa fa-check-circle"></i>
					<i onClick = {this._closeForm} className="fa fa-times-circle"></i>
				</div>
				
			</div>
		);
	}
});

module.exports = SourcesForm;