import React, {Component} from 'react'

class MyMenu extends Component {

    constructor(props) {
        super(props);
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
                    <button><i className="fa fa-square " aria-hidden="true"></i></button>
                    <button><i className="fa fa-circle" aria-hidden="true"></i></button>
                    <button>
                        <svg width="22" height="12" viewBox="0 0 22 24"
                             className="icon icon-svg icon-color icon-size-16" role="presentation">
                            <path
                                d="M19.8 0H2.2C1.3 0 .5.7.5 1.7v3.1c0 .9.7 1.7 1.7 1.7s1.7-.7 1.7-1.7V3.3h5.5v17.4H7c-.9 0-1.7.7-1.7 1.7 0 .9.8 1.6 1.7 1.6h7.7c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7h-2V3.3h5.5v1.4c0 .9.7 1.7 1.7 1.7.9 0 1.7-.7 1.7-1.7v-3c-.1-1-.9-1.7-1.8-1.7z"
                                fill="#8f8f8f" fillRule="nonzero"></path>
                        </svg>
                    </button>
                </div>
                <div className="editor-item">
                    <button>
                        <img src="../assets/anim_order_btn.svg"
                             height={"20px"}
                             width={"20px"}
                             title={"Animation list"}/>
                    </button>
                </div>
            </nav>
        );
    }
}

export default MyMenu;