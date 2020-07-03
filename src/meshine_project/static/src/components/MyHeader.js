import React, {Component} from 'react'

class MyHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className={"myheader"}>
                <nav className="navbar navbar-default navbar-opaque">
                <div className="containerh">
                    <ul className="nav navbar-nav navbar-left">
                        <li role="presentation" className>
                            <div className="global-nav-control">
                                <div className="global-nav-control-label">
                                    <img height={20} src="../assets/summarylogo.png" alt="Aller à Mes Summaries"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="page-title">
                        test project
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li role="presentation" className>
                            <div className="global-nav-control-label">
                                    Edgar
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
                        </li>
                    </ul>
                </div>
            </nav>
            </span>
        );
    }
}

export default MyHeader;