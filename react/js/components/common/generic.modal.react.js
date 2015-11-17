var React = require('react')
    , Modal = require('react-bootstrap/lib/Modal')
    , Button = require('react-bootstrap/lib/Button')
    , Loader = require('./generic.loader.react')
    ;

var GenericModal = React.createClass({
    propTypes: {
        confirmHandler: React.PropTypes.func,
        closeModal: React.PropTypes.func,
        showModal: React.PropTypes.bool,
        isSuccessPopUp: React.PropTypes.bool,
        useLoader:React.PropTypes.bool,
        showTitle:React.PropTypes.bool,
        loaderText:React.PropTypes.string,
        hideButton: React.PropTypes.bool,
        className: React.PropTypes.string,
        handleOnEnter: React.PropTypes.bool
    },


    _handleKeyDown:function(event){
        if(this.props.handleOnEnter && event.keyCode===13 ){
            if(!this.props.isSuccessPopUp){
                this._confirmHandler();
            }else{
                this.props.closeModal();
            }
        }
    },

    getDefaultProps:function(){
        return({
            isSuccessPopUp:false,
            useLoader:false,
            showTitle:true,
            hideButton:false,
            loaderText:'',
            handleOnEnter:false
        })
    },
    _confirmHandler: function () {
        this.props.confirmMethod.apply(null, this.props.confirmParams);
        this.props.closeModal();
    },


    render: function () {
        var buttons = [];
        var bodyText =  this.props.body;
        if(!this.props.isSuccessPopUp){
            buttons.push(<Button key={1} onClick={this.props.closeModal}>Cancel</Button>);
            buttons.push(<Button key={2} bsStyle='z-btn-primary' onClick={this._confirmHandler}>Confirm</Button>);
        }else{
            buttons.push(<Button key={1} bsStyle='z-btn-primary' onClick={this.props.closeModal}>Ok</Button>);
        }
        var modalFooter, modalHeader;
        //for loading
        if(this.props.useLoader){
            var loader_options = {
                lines: 12,
                length: 3,
                width: 2,
                radius: 4,
                color: '#000000',
                zIndex: 1,
                top: 0,
                lef: 0
            }
            bodyText= (<div className="loader-container"><Loader loaded={false} options={loader_options} />{this.props.loaderText}</div>);

        }else{
            if(!this.props.hideButton) {
                modalFooter = (<Modal.Footer>{buttons}</Modal.Footer>);
            }
        }
        if(this.props.showTitle === true){
            modalHeader= (<Modal.Header>
                <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>);
        }


        return (
            <div className='static-modal' >
                <Modal onKeyDown = {this._handleKeyDown} show={this.props.showModal} onHide={this.props.closeModal} dialogClassName={this.props.className}>
                    {modalHeader}
                    <Modal.Body>
                        {bodyText}
                    </Modal.Body>
                    {modalFooter}
                </Modal>
            </div>
        );
    }
});

module.exports = GenericModal;