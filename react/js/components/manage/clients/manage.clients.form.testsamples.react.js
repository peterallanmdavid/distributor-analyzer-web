var React = require('react')
    , _ = require('lodash')
    , TestSamplesList = require('./manage.clients.testsamples.react')
    ;

var TestSamplesForm = React.createClass({
    getInitialState:function(){
        return({
            name:"",
            capacity:"",
            testSamples:[]
        })
    },
    propTypes:{
        testSamples:React.PropTypes.array,
        addTestSamples: React.PropTypes.func
    },
    componentWillUnmount:function(){
        this.setState({
            name:"",
            capacity:"",
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
        this.props.addTestSamples({name:this.state.name, capacity:this.state.capacity});
        var ts =[];
        if(ts.length===0 && this.props.testSamples.length>0){
            ts = this.props.testSamples;
        }else{
            ts = _.clone(this.state.testSamples)
        }
        ts.push({name:this.state.name, capacity:this.state.capacity});
        this.setState({testSamples:ts, name:"" ,capacity:""});
        React.findDOMNode(this.refs.name).focus();
    },
    _handleKeyDown:function(event){
        if(event.keyCode===13 && this.state.name!=="" && this.state.capacity!==""){
            this._onAddTestSamples();
        }

    },
    render: function () {
        var ts = this.state.testSamples.length>0?this.state.testSamples:this.props.testSamples;
        return (
            <div className = "test-sample">
                <TestSamplesList
                    testSamples = {ts}
                />

                <div onKeyDown = {this._handleKeyDown}className = "client-form test-sample-row card-white">
                    <div className = "input-fields">
                        <input ref = "name" value= {this.state.name} onChange ={this._changeHandler.bind(null, "name")}/>
                    </div>
                    <div className = "input-fields">
                        <input value= {this.state.capacity} onChange ={this._changeHandler.bind(null, "capacity")}/>
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