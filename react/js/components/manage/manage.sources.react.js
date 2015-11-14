var React = require('react')
	, SourceList = require('./sources/manage.sources.list.react')
	, SourceForm = require('./sources/manage.sources.form.react')
	, classnames = require('classnames')
	; 

var Sources = React.createClass({
	getInitialState:function(){
		return({
			isAdding:false,
		})
	},
	propTypes:{
		sourceTypes: React.PropTypes.object,
		distAction: React.PropTypes.object,
		sources: React.PropTypes.array
	},
	_toggleSourceForm:function(){
		var currState = this.state.isAdding;
		this.setState({isAdding:!currState});
	},
	render:function(){
		var sources = this.props.sources;
		var addSourceClass = classnames({"hidden":!this.state.isAdding})
		return(
			<div>
				<SourceList sources = {sources}/>
				<div onClick = {this._toggleSourceForm}><i className="fa fa-plus-circle"></i>Add Source</div>
				<div className = {addSourceClass}>
				<SourceForm
					sourceTypes = {this.props.sourceTypes}
					distAction = {this.props.distAction}
					addSource = {this.props.addSource}
				/>
				</div>
			</div>
		);
	}
});

module.exports = Sources;