var React = require('react')
	, SourceList = require('./sources/manage.sources.list.react')
	, SourceForm = require('./sources/manage.sources.form.react')
	, classnames = require('classnames')
	; 

var Sources = React.createClass({
	getInitialState:function(){
		return({
			isAdding:false
		})
	},
	propTypes:{
		sourceTypes: React.PropTypes.object,
        distActions: React.PropTypes.object,
		sources: React.PropTypes.array
	},
	_closeForm:function(){
		this.setState({isAdding:false});
	},
	_showForm:function(){
		this.setState({isAdding:true});
	},
	render:function(){
		var sources = this.props.sources;
		var addSourceClass = classnames({"hidden":!this.state.isAdding})
		return(
			<div>
				<SourceList 
					sources = {sources} 
					removeSource = {this.props.distActions.removeSource}
					showForm = {this._showForm}
					isAdding = {this.state.isAdding}
				/>
				<div className = {addSourceClass}>
					<SourceForm
						sourceTypes = {this.props.sourceTypes}
                        distActions = {this.props.distActions}
						closeForm = {this._closeForm}
					/>
				</div>
			</div>
		);
	}
});

module.exports = Sources;