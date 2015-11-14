var React = require('react')
	CommonDropDown = require('../../common/common.dropdown.react')
	; 

var SourcesForm = React.createClass({
	getInitialState:function(){
		return({
			typeId: 0,
			typeName:"",
			quantityDaily:0,
			quantityMonthly:0,
			quantityWeekly:0
		})
	},
	propTypes: {
		distAction: React.PropTypes.object,
		sourceTypes: React.PropTypes.array,
		addSource: React.PropTypes.func
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
				weeky:this.state.quantityWeekly,
				monthly:this.state.quantityMonthly
			}
		}
		this.props.addSource(data);
	},

	render:function(){
		var sourceTypes = this.props.sourceTypes;
		return(
			<div className = "source-form">
				<CommonDropDown
				 	optionsArray={sourceTypes}
			        optionSelected= {this._sourceTypeSelected}
			        isValid={true}
			        placeHolder="Source Type"
			        className="source-type"
			        value = {this.state.type}
			        name="type"
				/>
				<ul className = "source-quantity">
					<li>
						<label>Quantity</label>
					</li>
					<li className = "daily">
						<label> Daily </label>
						<input value= {this.state.quantityDaily} onChange ={this._changeQuantity.bind(null, "quantityDaily")}/>
					</li>
					<li className = "weekly">
						<label> Weekly </label>
						<input value= {this.state.quantityWeekly} onChange ={this._changeQuantity.bind(null, "quantityWeekly")}/>
					</li>
					<li className = "monthly">
						<label> Monthly </label>
						<input value= {this.state.quantityMonthly} onChange ={this._changeQuantity.bind(null, "quantityMonthly")}/>
					</li>
					<li>
						<div className = "generic-button right" onClick = {this._saveSource}>SAVE</div>
					</li>
				</ul>
			</div>
		);
	}
});

module.exports = SourcesForm;