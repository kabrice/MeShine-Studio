import React, {Component} from 'react';
import SearchInput from "./SearchInput";

class MyText extends Component {

    constructor(props) {
        super(props);
        this.state = {scaleVal: 0}
    }
    componentDidMount() {
        let animPanelWidth = $('#animation-panel').width();
        $('.mytext ._0fYpqw').css('transform', 'scale('+animPanelWidth/314+')')
        $(window).resize(function(){
            let animPanelWidth = $('#animation-panel').width();
            $('._0fYpqw').css('transform', 'scale('+animPanelWidth/314+')')
        });
    }

    render() {

        return (<div  >
            <SearchInput target={'elements'}/>
            <div className="mytext">
                <div>
                    <ul>
                        <div role="menuitem" draggable="true">
                            <li
                                className="resultContentItem___3KLb2"
                                data-categ="textTemplate"
                                data-value="STATIC_HEADING_TEXT_en"
                            >
                                <picture className="picture___35Q03">
                                    <source
                                        type="image/webp"
                                        srcSet="https://static.crello.com/images/static_text_preview/en_heading.webp"
                                    />
                                    <img
                                        alt="Add heading text"
                                        src="https://static.crello.com/images/static_text_preview/en_heading.png"
                                        className
                                    />
                                </picture>
                            </li>
                        </div>
                        <div role="menuitem" draggable="true">
                            <li
                                className="resultContentItem___3KLb2"
                                data-categ="textTemplate"
                                data-value="STATIC_SUBHEADING_TEXT_en"
                            >
                                <picture className="picture___35Q03">
                                    <source
                                        type="image/webp"
                                        srcSet="https://static.crello.com/images/static_text_preview/en_sub_heading.webp"
                                    />
                                    <img
                                        alt="Add subheading text"
                                        src="https://static.crello.com/images/static_text_preview/en_sub_heading.png"
                                        className
                                    />
                                </picture>
                            </li>
                        </div>
                        <div role="menuitem" draggable="true">
                            <li
                                className="resultContentItem___3KLb2"
                                data-categ="textTemplate"
                                data-value="STATIC_BODY_TEXT_en"
                            >
                                <picture className="picture___35Q03">
                                    <source
                                        type="image/webp"
                                        srcSet="https://static.crello.com/images/static_text_preview/en_small_heading.webp"
                                    />
                                    <img
                                        alt="Add body text"
                                        src="https://static.crello.com/images/static_text_preview/en_small_heading.png"
                                        className
                                    />
                                </picture>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="_0fYpqw"
                     style={
                         {transformOrigin: '0 0'}
                     }>
                    <div className="_-U6mfw Uj6COw">
                        <div>
                            <div className>
                                <div>
                                    <div className="D-ZUcw" style={{ margin: "-4px 0px" }}>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYftQhJkc/1/0/314w-aZmgdMFWBjM.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfnM70xc/1/0/1514w-MtHv7YEIjrc.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYflCDB0o/1/0/550w-X1pF0N9Qafc.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfnNdaG0/1/0/798w-J0foo1RlWTk.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfiGHhnw/1/0/1504w-4iQsAFTc1s4.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfpc9kPQ/1/0/360w-XNKxyObzoz8.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfqyzZfo/1/0/362w-N_-B1bKm9YU.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYft7qegA/1/0/784w-y3DIZChy_fo.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfoOEsj8/1/0/788w-gJgOSj309Wc.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfv3FgH8/1/0/350w-ghiqr6vaRd0.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfoGViL0/1/0/348w-wmGueNplHcE.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfoaNclo/1/0/282w-HBWJqg2vin0.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfr5UIZk/1/0/768w-AgF-k40NMSw.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfl0cWd4/1/0/210w-7OtHUmQArUE.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfp__524/1/0/198w-Gzm49Hh6LPM.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfrOgYQ4/1/0/640w-h360_ro6vSw.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfqmlMH0/1/0/776w-yKmZQobr0VU.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfg1-pfc/1/0/362w-RIcYYT_aV0E.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfpg_lpQ/1/0/780w-M03yZ4bBVrk.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfhnxTb4/1/0/780w-4d82aeupVyQ.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfgnABc4/1/0/388w-9p1tIRLhM6c.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfmwV-ro/1/0/324w-ue_5edS5QRU.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfvdwUP4/1/0/716w-J4YglqiuV1A.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfgqlfGg/1/0/286w-Spupnh3Gw6M.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfvgnS1k/1/0/332w-lokFy5xxIgo.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfku2uFo/1/0/374w-prpm_fiKHkI.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfjeZTzg/1/0/300w-5ReovjPW9mQ.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfgqfpUs/1/0/400w-yl4SiOdNeUY.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYftxf75w/1/0/400w-VaACySGOO5c.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfrHmzKU/1/0/700w-AJY4ODGUGlY.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfrWQn5A/1/0/314w-PyDvaZU4LJI.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfiuGo70/1/0/1548w-73o7zv_5ATQ.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfoZPFm0/1/0/372w-qkvOW6AeWvk.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfkGQf48/1/0/356w-uJ7cb1xI_6E.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfgUPWHw/1/0/400w-zb_kdhdpFwQ.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfgmaunc/1/0/352w-2qMQ2iTgbw4.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfqQ8VoE/1/0/388w-cjscpxv1Jc8.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfh9mH6A/1/0/340w-GZiWdoOkVgg.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfpyr6pE/1/0/790w-bHknvYw0niY.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfsT_BZo/1/0/314w-uoksUuJ2Eu4.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfq51dy4/1/0/366w-rmDQOEC4wUk.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfrLIPwQ/1/0/790w-19BJnB_DoTg.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfpY0pvE/1/0/790w-2ySyaFy_aNI.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfiLxMRw/1/0/374w-hCc_weucgZ8.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfqrF9RE/1/0/368w-56lmZhiRiTg.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfmGVwxU/1/0/356w-11lb4V0UDec.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfqxEmI4/1/0/756w-hH2KJoPdfFE.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfh9kF2g/1/0/800w-41Q4_hCaY5w.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfm_8Iwo/1/0/790w-2EQJ0P-6AWE.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfqTVmuE/1/0/368w--hXl3AN1Geo.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfgDEze0/1/0/386w-rDQxz2buXqw.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfqigZSo/1/0/366w-a9PzzUjtlO0.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYflxm0ig/1/0/400w-SQHHTFGU2A4.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYflPpW1E/1/0/400w-yPHAzZ0Vswg.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfrAFcps/1/0/790w-vbg9WfO_hT0.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfmuqWeA/1/0/356w-Qx-e-AZijLA.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="FA8sBg"
                                            style={{
                                                opacity: 1,
                                                height: 152,
                                                margin: "4px -4px",
                                                transition: "opacity 250ms linear 0s"
                                            }}
                                        >
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 0
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYflw1H0A/1/0/378w-U2jOD-vtdX0.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="qFtWQg">
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        width: 152,
                                                        height: 152,
                                                        left: 160
                                                    }}
                                                >
                                                    <div className="A0JANA ADVZ4g">
                                                        <div className="sMd5nQ yCCXfw">
                                                            <div className="yCCXfw">
                                                                <div className="ZElZRA" draggable="true">
                                                                    <section className="mh2TGQ A_o8XA jUBybQ">
                                                                        <div className="qBCsAw jUBybQ">
                                                                            <div className="Wcv3XA">
                                                                                <div className="mzJP_Q">
                                                                                    <section className="mh2TGQ wZ_zoQ CMRJFw cXo1RA">
                                                                                        <div className="_9NSihw cXo1RA">
                                                                                            <div
                                                                                                className="JVrZvA cXo1RA _5tri_g"
                                                                                                draggable="true"
                                                                                                role="button"
                                                                                            >
                                                                                                <img
                                                                                                    className="NcyfEA"
                                                                                                    crossOrigin="anonymous"
                                                                                                    src="https://template.canva.com/EADYfsnfpUw/1/0/732w-h9BELWWFHq4.png"
                                                                                                    draggable="false"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="zdSzCQ">
                                            <span className="T5OikA epg7uw _45rcUQ JA7pfA yAhYLw">
                                              <button className="QZomJQ ZQcUXA USE2Rg uQ-fxg ZTpOuQ PC_P7Q vxA4_g">
                                                <span
                                                    aria-hidden="true"
                                                    className="vpQagg ZQsKtg xR4dgg"
                                                >
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                                        fillRule="evenodd"
                                                    />
                                                  </svg>
                                                </span>
                                              </button>
                                            </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default MyText;