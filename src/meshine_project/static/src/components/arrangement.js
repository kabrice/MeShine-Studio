import React, {Component} from 'react';

export default class Arrangement extends Component {
    render() {
        return <React.Fragment>
            <tr className="arrg-box">
                <td className="group-alignment">
                    <div className="row">
                        <div className="col" id="horizontal-align-center">
                            <svg viewBox="0 0 24 24">
                                <path d="M19,16V13H23V11H19V8L15,12L19,16M5,8V11H1V13H5V16L9,12L5,8M11,20H13V4H11V20Z"/>
                            </svg>
                        </div>
                        <div className="col" id="horizontal-align-left">
                            <svg viewBox="0 0 24 24">
                                <path d="M11,16V13H21V11H11V8L7,12L11,16M3,20H5V4H3V20Z"/>
                            </svg>
                        </div>
                        <div className="col" id="horizontal-align-right">
                            <svg viewBox="0 0 24 24">
                                <path d="M13,8V11H3V13H13V16L17,12L13,8M19,20H21V4H19V20Z"/>
                            </svg>
                        </div>
                        <div className="col" id="vertical-align-bottom">
                            <svg viewBox="0 0 24 24">
                                <path d="M16,13H13V3H11V13H8L12,17L16,13M4,19V21H20V19H4Z"/>
                            </svg>
                        </div>
                        <div className="col" id="vertical-align-center">
                            <svg viewBox="0 0 24 24" id="horizontal-align-center">
                                <path d="M8,19H11V23H13V19H16L12,15L8,19M16,5H13V1H11V5H8L12,9L16,5M4,11V13H20V11H4Z"/>
                            </svg>
                        </div>
                        <div className="col" id="vertical-align-top">
                            <svg viewBox="0 0 24 24">
                                <path d="M8,11H11V21H13V11H16L12,7L8,11M4,3V5H20V3H4Z"/>
                            </svg>
                        </div>
                    </div>
                </td>
            </tr>
            <tr className="arrg-box">
                <td className="row">
                    <div className="col">
                        <span className="line-title">X</span>
                        <input type="number" min="0" id="x-axis" className="line-input"/>
                    </div>
                    <div className="col">
                        <span className="line-title">Y</span>
                        <input type="number" min="0" id="y-axis" className="line-input"/>
                    </div>
                </td>
            </tr>
            <tr className="arrg-box">
                <td className="row">
                    <div className="col">
                        <span className="line-title">W</span>
                        <input type="number" min="0" id="obj-width" className="line-input"/>
                    </div>
                    <div className="col">
                        <span className="line-title">
                            <span className="padlock">
                                <svg viewBox="0 0 10 16">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <path
                                        d="M7.60142214,6.19700017 L7.60142214,2.56832843 C7.60142214,1.1522108 6.40733334,0 4.93990574,0 C3.47228949,0 2.27838933,1.1522108 2.27838933,2.56832843 L2.27838933,5.37377686 L3.42739326,5.37377686 L3.42739326,2.56832843 C3.42739326,1.76868508 4.10592998,1.11806703 4.93990574,1.11806703 C5.7738815,1.11806703 6.45241821,1.76868508 6.45241821,2.56832843 L6.45241821,6.08928694 L3.07369397,6.08928694 C1.37612603,6.08928694 0,7.46541297 0,9.16298092 L0,12.017287 C0,13.7150436 1.37612603,15.0911696 3.07369397,15.0911696 L6.8061175,15.0911696 C8.50387408,15.0911696 9.88000011,13.7150436 9.88000011,12.017287 L9.88000011,9.16298092 C9.88000011,7.74101546 8.91303342,6.5480585 7.60142214,6.19700017 Z M5.24323825,10.8624353 L5.24323825,11.6120891 C5.24323825,11.7799784 5.10722908,11.9154216 4.93952846,11.9154216 C4.77201648,11.9154216 4.63600731,11.7797897 4.63600731,11.6120891 L4.63600731,10.8624353 C4.32890201,10.74114 4.11158916,10.443278 4.11158916,10.0935402 C4.11158916,9.63590045 4.48207738,9.26503495 4.93952846,9.26503495 C5.39697954,9.26503495 5.76803367,9.63590045 5.76803367,10.0935402 C5.76822231,10.443278 5.55034355,10.74114 5.24323825,10.8624353 Z"
                                        id="Shape" fill="#000000" fillRule="nonzero"></path>
                                </g>
                                </svg>
                            </span>
                            <span>H</span>
                        </span>
                        <input id="obj-height" type="number" min="0" className="line-input"/>
                    </div>
                </td>
            </tr>
            <tr className="text-editor alignment-btn">
                <td className="">
                    <div className="btn-group">
                        <div className="line-title rot-input">Rotation</div>
                        <input className="line-input"
                               defaultValue='0°'
                                id="obj-degre"/>
                        <div>
                            <button className='alignment-btn-left btn-secondary'
                                    data-value='justify'
                                    data-type="textAlign"
                                    id="flipx">
                                <svg viewBox="0 0 26 26" version="1.1">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                                       strokeLinejoin="round">
                                        <g id="Group" transform="translate(1.000000, 1.000000)" strokeWidth="2"
                                           stroke="#000000">
                                            <polygon id="Shape" fill="#000000" points="0 24 10 24 10 0 8 0"></polygon>
                                            <polygon id="Shape" points="14 24 14 0 16 0 24 24"></polygon>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button className='alignment-btn-justify btn-secondary'
                                    data-value='justify'
                                    data-type="textAlign"
                                    id="flipy">
                                <svg viewBox="0 0 26 31" version="1.1">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                                       strokeLinejoin="round">
                                        <g id="Group" transform="translate(1.000000, 1.000000)" strokeWidth="2"
                                           stroke="#000000">
                                            <polygon id="Shape" fill="#000000" points="0 0 0 12 24 12 24 9.6"></polygon>
                                            <polygon id="Shape" points="0 16.8 24 16.8 24 19.2 0 28.8"></polygon>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        </React.Fragment>
    }
}