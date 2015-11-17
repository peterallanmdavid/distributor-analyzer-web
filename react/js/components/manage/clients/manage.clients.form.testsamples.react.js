var React = require('react')
    , _ = require('lodash')
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
        var tsItems = [];
        _.forEach(ts, function(d){
            tsItems.push(
                <div className = "client-item-container">
                    <div className = "client-item test-sample-row card-white">
                        <div className = "item-field">{d.name}</div>
                        <div className = "item-field">{d.capacity}</div>
                    </div>
                </div>
            );
        });
        return (
            <div className = "test-sample">
                <div className = "client-item card">
                    <div className = "item-field"><label>Name</label></div>
                    <div className = "item-field"><label>Cases/Quantity</label></div>
                </div>
                {tsItems}

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