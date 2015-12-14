var React = require('react')
    , _ = require('lodash')
    , TestSamplesList = require('./manage.clients.testsamples.react')
    , CommonUtils = require('../../../utils/common.utils')
    ;

var TestSamplesForm = React.createClass({
    getInitialState:function(){
        return({
            id:"",
            name:"",
            quantity:"",
            testSamples:[]
        })
    },
    propTypes:{
        testSamples:React.PropTypes.array,
        addTestSamples: React.PropTypes.func,
        isForm: React.PropTypes.bool
    },
    componentDidMount:function(){
        this.setState({testSamples: this.props.testSamples})
    },
    componentWillUnmount:function(){
        this.setState({
            tempId:"",
            name:"",
            quantity:"",
            testSamples:[]
        });
    },
    _changeHandler:function(name, e){
        var value = e.target.value;
        var newState = {};
        newState[name] = value;
        this.setState(newState);
    },
    _onAddTestSamples:function(){
        //var tsArray = this.state.testSamples.length>0?this.state.testSamples:this.props.testSamples;
        var tsArray = _.clone(this.state.testSamples);
        var tempId=CommonUtils.getCurrentId(this.props.testSamples)
        tsArray.push({tempId:tempId ,name:this.state.name, quantity:this.state.quantity});
        this.setState({testSamples:tsArray, name:"" ,quantity:"", id:""});
        this.props.addTestSamples({tempId:tempId ,name:this.state.name, quantity:this.state.quantity});
        React.findDOMNode(this.refs.name).focus();
    },
    _removeTestSample:function(id){
/*        var ts = _.clone(this.state.testSamples);
        _.remove(ts, function(d){
            return d.tempId.toString()===id.toString()
        })
        this.setState({testSamples:ts});*/
        this.props.removeTestSample(id)

    },

    _handleKeyDown:function(event){
        if(event.keyCode===13 && this.state.name!=="" && this.state.quantity!==""){
            this._onAddTestSamples();
        }

    },
    render: function () {
        var ts = this.state.testSamples.length>0?this.state.testSamples:this.props.testSamples;
        return (
            <div className = "test-sample">
                <TestSamplesList
                    testSamples = {this.state.testSamples}
                    removeTestSample = {this._removeTestSample}
                    isForm= {this.props.isForm}
                />

                <div onKeyDown = {this._handleKeyDown}className = "client-form test-sample-row card-white">
                    <div className = "input-fields">
                        <input ref = "name" value= {this.state.name} onChange ={this._changeHandler.bind(null, "name")}/>
                    </div>
                    <div className = "input-fields">
                        <input value= {this.state.quantity} onChange ={this._changeHandler.bind(null, "quantity")}/>
                    </div>
                    <div className = "input-field action-buttons">
                        <i onClick = {this._onAddTestSamples} className="fa fa-check-circle"></i>
                    </div>
                </div>
            </div>
        )
    }
});
module.exports = TestSamplesForm;