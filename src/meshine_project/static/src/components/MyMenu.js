import React, {Component} from 'react'

class MyMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectOrderBtn:false,
            i:2
        }
    }
    handleClickSquare = () => {
        this.props.addSquare()
    }
    handleClickCircle = () => {
        this.props.addCircle()
    }

    componentDidMount() {
        $('#anim-order-btn').click( () => {
            //console.log('this.state.i%2===2', this.state.i%2===0)
            if(this.state.i%2===0){
                this.setState({selectOrderBtn:true, i:3})
                $('.mymediaitemlist').show()
            }else{
                this.setState({selectOrderBtn:false, i:2})
                $('.mymediaitemlist').hide()
            }
        })

        $('.fa-square').click(function () { /*Just for demo*/
            $('.element-font-select').hide()
            $('.element-font-container').hide()
            $('.element-alignment-block').hide()
            $('.element-text-overflow-block').hide()
            $('.spacing-input-block').hide()
            $('.text-effect-wrapper').hide()
            $('#o13_box-demo').show()
            $('#o14_box-demo').show()
        })
    }

    render() {
        return (
            <nav className={"editor-menu navbar navbar-toggleable-md navbar-inverse bg-inverse "}>
                <div className="editor-item">
                    <button className={"myheader"}>
                        <div className="global-nav-control-label">
                            <span className={"percent"}>100%</span>
                            <svg
                                role="presentation"
                                className="icon icon-color dropdown-arrow"
                                width="11px"
                                height="7px"
                                viewBox="0 0 11 7"
                                version="1.1">
                                <title>Rectangle 3078</title>
                                <desc>Created with Sketch.</desc>
                                <defs/>
                                <g
                                    id="Snapstrap"
                                    stroke="none"
                                    strokeWidth={1}
                                    fill="none"
                                    fillRule="evenodd">
                                    <g
                                        id="SnapstrapStructure"
                                        transform="translate(-184.000000, -89.000000)"
                                        fill="#8f8f8f">
                                        <g id="Done" transform="translate(179.000000, 67.000000)">
                                            <path
                                                d="M10.4405247,26.3145238 L6.35593723,22.2299363 C6.05187578,21.9258748 5.54376523,21.9205836 5.23363568,22.2307132 C4.92134397,22.5430049 4.92315831,23.0433142 5.23285879,23.3530147 L9.74488546,27.8650414 C9.93103644,28.0511924 10.1936665,28.1253621 10.4405247,28.0837299 C10.687383,28.1253621 10.9500131,28.0511924 11.136164,27.8650414 L15.6481907,23.3530147 C15.9578912,23.0433142 15.9597055,22.5430049 15.6474138,22.2307132 C15.3372843,21.9205836 14.8291737,21.9258748 14.5251123,22.2299363 L10.4405247,26.3145238 Z"
                                                id="Rectangle-3078"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="editor-item">
                    <button><i className="fa fa-undo " aria-hidden="true"></i></button>
                    <button><i className="fa fa-repeat" aria-hidden="true"></i></button>
                </div>
                <div className="editor-item">
                    <button onClick={this.handleClickSquare}><i className="fa fa-square " aria-hidden="true"></i></button>
                    <button onClick={this.handleClickCircle}><i className="fa fa-circle" aria-hidden="true"></i></button>
                    <button>
                        <svg width="22" height="12" viewBox="0 0 22 24"
                             className="icon icon-svg icon-color icon-size-16" role="presentation">
                            <path
                                d="M19.8 0H2.2C1.3 0 .5.7.5 1.7v3.1c0 .9.7 1.7 1.7 1.7s1.7-.7 1.7-1.7V3.3h5.5v17.4H7c-.9 0-1.7.7-1.7 1.7 0 .9.8 1.6 1.7 1.6h7.7c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7h-2V3.3h5.5v1.4c0 .9.7 1.7 1.7 1.7.9 0 1.7-.7 1.7-1.7v-3c-.1-1-.9-1.7-1.8-1.7z"
                                fill="#8f8f8f" fillRule="nonzero"></path>
                        </svg>
                    </button>
                </div>
                <div className="editor-item ">
                    <button id={'anim-order-btn'}> {/*Todo : this is ID is just for demo*/}
                        <img src="../assets/media/anim_order_btn.svg"
                             height={"20px"}
                             width={"20px"}
                             className={this.state.selectOrderBtn ? 'selected-item' : ''}
                             title={"Animation list"}/>
                    </button>
                </div>
                <div className={'mymediacustomization'} style={{position: 'absolute', marginRight: '-95.5%'}}>
                    <div className={"myupload"}>
                        <div className="media-gallery-open">
                            <div className="media-gallery-input-container">
                                <div className=" alignment-selection">
                                    <button type="button" className="element-menu-canvas-alignment-selection mask-options ant-dropdown-trigger sds-dropdown btn btn-outline btn-outline-secondary">
                                        <div className="align-menu-title">
                                            <svg className="icon icon-svg icon-color icon-size-13 mask-selected"
                                                 style={{transform: 'scale(1.5)'}}
                                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style={{transform: 'scale(1.5)', enableBackground: 'new 0 0 100 100'}} xmlSpace="preserve">
                                                <g>
                                                    <path d="M68.5,34h-8.2v8.5h8.2c3.6,0,6.3,2.7,6.3,6.3v33.8c0,3.6-2.7,6.3-6.3,6.3H30.5c-3.6,0-6.3-2.7-6.3-6.3V48.8   c0-3.6,2.7-6.3,6.3-6.3h8.2V34h-8.2c-8.2,0-14.8,6.6-14.8,14.8v33.8c0,8.2,6.6,14.8,14.8,14.8h38.1c8.2,0,14.8-6.6,14.8-14.8V48.8   C83.3,40.6,76.8,34,68.5,34z" />
                                                    <polygon points="45.3,20.3 45.3,65.7 53.7,65.7 53.7,20.3 60.9,27.4 66.8,21.5 49.5,4 32.2,21.5 38.1,27.4  " />
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MyMenu;