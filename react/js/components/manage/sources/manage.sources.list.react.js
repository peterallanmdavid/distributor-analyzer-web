var React = require('react')
	, _ = require('lodash')
	, SourcesItem = require('./manage.sources.list.item.react')
	; 

var SourcesList = React.createClass({
	propTypes:{
		sources:React.PropTypes.array
	},
	render:function(){
		var sources = this.props.sources;
		var sourceItem = [];
		_.forEach(sources, function(d){
			sourceItem.push(<SourcesItem sourceItem = {d}/>);
		});
		return(
			<div>
				{sourceItem}
			</div>
		);
	}
});

module.exports = SourcesList;