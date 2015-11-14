var React = require('react')
	,CommonDropDown = require('../../common/common.dropdown.react')
	; 

var SourcesForm = React.createClass({
	getInitialState:function(){
		return({
			typeId: 0,
			typeName:"",
			quantityDaily:0,
			quantityWeekly:0,
			quantityMonthly:0
			
		})
	},
	propTypes: {
		distAction: React.PropTypes.object,
		sourceTypes: React.PropTypes.array,
		addSource: React.PropTypes.func,
		closeForm:React.PropTypes.func
	},
	_sourceTypeSelected:function(name, e, value_name){
		var value = e.target.value;
		this.setState({typeId:value});
		this.setState({typeName:value_name});
	},
	_changeQuantity:function(name, e){
		value = e.target.value;
	 	var newState = {};
        newState[name] = value;
		this.setState(newState);
	},
	_saveSource:function(){
		var data = {
			typeId: this.state.typeId,
			typeName: this.state.typeName,
			quantity:{
				daily:this.state.quantityDaily,
				weekly:this.state.quantityWeekly,
				monthly:this.state.quantityMonthly
			}
		}
		this.props.addSource(data);
	},

	render:function(){
		var sourceTypes = this.props.sourceTypes;
		return(
			<div className = "source-form card-white">
				<div className = "form-row">
					<div className = "input-field">
						<div>Source Type:</div>
						<CommonDropDown
						 	optionsArray={sourceTypes}
					        optionSelected= {this._sourceTypeSelected}
					        isValid={true}
					 
					        className="source-type"
					        value = {this.state.type}
					        name="type"
						/>
					</div>
					<div className = "input-field">
						<div>Daily QTY:</div>
						<input value= {this.state.quantityDaily} onChange ={this._changeQuantity.bind(null, "quantityDaily")}/>
					</div>
					<div className = "input-field">
						<div>Weekly QTY:</div>
						<input value= {this.state.quantityWeekly} onChange ={this._changeQuantity.bind(null, "quantityWeekly")}/>
					</div>
					<div className = "input-field">
						<div>Monthly QTY:</div>
						<input value= {this.state.quantityMonthly} onChange ={this._changeQuantity.bind(null, "quantityMonthly")}/>
					</div>
				</div>
				<div className = "input-field action-buttons"> 
					<i onClick = {this._saveSource} className="fa fa-check-circle"></i>
					<i onClick = {this.props.closeForm} className="fa fa-times-circle"></i>
				</div>
				
			</div>
		);
	}
});

module.exports = SourcesForm;