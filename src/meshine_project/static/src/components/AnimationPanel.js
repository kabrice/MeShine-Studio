import _ from 'lodash';
import React, {Component} from 'react';
import AnimationPanelItem from '../components/AnimationPanelItem';
import {connect} from 'react-redux';
import {fetchAnimation} from "../actions/index";
import {render, findDOMNode} from "react-dom";
import {
    JustifiedLayout,
    GridLayout,
    OnAppend,
    OnLayoutComplete
} from "@egjs/react-infinitegrid";

import {Animations} from '../helpers';

const ENTRY = 1, EMPHASIS = 2, EXIT = 3;

class AnimationPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayAnims: false,
            subMenuList: [{'title': 'Images'},
                {'title': 'Videos'},
                {'title': 'Audios'}],
            subMenuNum: 0,

            isAnimationHasBeenClick: false,
            isEntry: true,
            isEmphasis: false,
            isExit: false
        };
    }

    componentDidMount() {
        let animPanelWidth = $('#animation-panel').width();
        $('.myimage aside').css('transform', 'scale(' + animPanelWidth / 314 + ')')
        $(window).resize(function () {
            let animPanelWidth = $('#animation-panel').width();
            $('.myimage aside').css('transform', 'scale(' + animPanelWidth / 314 + ')')
        });
    }


    rendersubMenu() {
        return _.map(this.state.subMenuList, (button, i) => {
            return (
                <div className={`sub-menu ${this.state.subMenuNum === i ? 'sub-menu-is-clicked' : ''}`}
                     key={button.title}
                     onClick={() => {
                         this.displayAnimationGroup(i)
                     }}>{button.title}</div>)

        });
    }

    displayAnimationGroup(subMenuNum) {
        this.setState({
            subMenuNum: subMenuNum
        })
        let group = subMenuNum + 1
        console.log('group', group)
        switch (group) {
            case ENTRY:
                this.setState({'isEntry': true, 'isEmphasis': false, 'isExit': false})
                break;
            case EMPHASIS:
                this.setState({'isEntry': false, 'isEmphasis': true, 'isExit': false})
                break;
            case EXIT:
                this.setState({'isEntry': false, 'isEmphasis': false, 'isExit': true})
                break;
            default:
                console.log('Something wrong')
        }
    }

    demoDragOver = () => {
        this.setState({hideDemo: true})
    }
    demoDragEnd = () => {
        this.setState({hideDemo: false})
    }
    demoDragOver2 = () => {
        this.setState({hideDemo2: true})
    }
    demoDragEnd2 = () => {
        this.setState({hideDemo2: false})
    }
    render() {

        return (
            <div className={"myupload"}>
                <div>
                    <div className="t9ss6Q">
                        <div className="mkaSyg">
                            <input type="file" className="rxrSEA" tabIndex={-1} multiple accept="image/heic,image/heif,image/jpeg,image/png,image/svg+xml,video/mp4,video/quicktime,image/gif" />
                            <button className="_1QoxDw Qkd66A n9zSJA ZTpOuQ o4TrkA zKTE_w Qkd66A n9zSJA ZTpOuQ GnpDIA zQlusQ uRvRjQ qBeSew" aria-label="Upload an image or video" type="button" >
                                <span className="_38oWvQ">Upload an image or video</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"anim-menu"}> {this.rendersubMenu()} </div> {/*
	<div className={"anim-box-container"}>
		<div className="lnI1Aw">
			<div />
			<div className="JGpwNQ">
				<p className="J5vKGg bSncsg n9zSJA ZTpOuQ u9XXAg HnhAQA _9sTtfw">
					<span className="_-DCkkw _5JgSIQ"> ...or just drag one here from your desktop </span>
				</p>
			</div>
		</div>
	</div> */} {/*Todo: Un comment later*/}
                <div className={"mytemplate"}>
                    <div className="myimage mydemo">
                        <aside className="r_V5mQ _4jDhvw" style={ {transformOrigin: '0 0'} }>
                            <div className="g7GSfg">
                                <div className="BFGxpA n9zSJA ZTpOuQ _-oPDSQ" style={{opacity: 1}}>
                                    <div className="byPCNA">
                                        <div className="sIa1XQ">
                                            <div className="F9CuhA qU-njQ">
                                                <div className="yMjoxQ">
                                                    <div className="YxA6_A phRfcQ">
                                                        <div className="bGZ2jw">
                                                            <div id="__id65" className="ZoFOcA _1hUVhg ltqGDg c_ZDiA v0NzYQ" >
                                                                <div>
                                                                    <div className="Mb3Gqg">
                                                                        <div className="YtKT1w">
                                                                            <div className="LzVstg">
                                                                                <div className="n1Fp1g">
                                                                                    <div className="">
                                                                                        <div className="_-U6mfw Uj6COw">
                                                                                            <div>
                                                                                                <div>
                                                                                                    <div className="D-ZUcw" style={{margin: "-4px 0px"}}>
                                                                                                        <div className="FA8sBg" style={{ opacity: 1, height: "101.425px", margin: "4px -4px", transition: "opacity 250ms linear 0s" }} >
                                                                                                            <div className="qFtWQg">
                                                                                                                <div style={{ position: "absolute", width: 152, height: "101.425px", left: 0 }} >
                                                                                                                    <div className="A0JANA ADVZ4g">
                                                                                                                        <div className="sMd5nQ yCCXfw">
                                                                                                                            <div className="yCCXfw">
                                                                                                                                <div className="ZElZRA" draggable="true" >
                                                                                                                                    <div className="ZElZRA" draggable="true" >
                                                                                                                                        <div className="A_yLpA kdWhgw">
                                                                                                                                            <section className="mh2TGQ wZ_zoQ efh_nQ vzKCLg">
                                                                                                                                                <div className="_0vcuuQ vzKCLg">
                                                                                                                                                    <div className="rXvg8w vzKCLg vTriJA" draggable="true" role="button" >
                                                                                                                                                        <img onClick={this.handleClickImage} className="vxiL9Q _1pMoDA JaNaZQ _1vGB4g" crossOrigin="anonymous" src="../assets/demo/snap1/grenouille3.jpg" draggable="false" />
                                                                                                                                                    </div>
                                                                                                                                                    <span className="_78_1qQ">
																																			<span className="T5OikA _9QQlWw _45rcUQ yAhYLw">
																																				<span className="MSQthA">
																																					<div role="button" tabIndex={ 0 } >
																																						<div className="_8VoL_g">
																																							<span className="USE2Rg uQ-fxg ZTpOuQ _3zBBXg tbcLug">
																																								<span aria-hidden="true" className="vpQagg ZQsKtg xR4dgg" >
																																									<svg
                                                                                                                                                                        xmlns="http://www.w3.org/2000/svg" width={ 16 } height={ 16 } viewBox="0 0 16 16" >
																																										<path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z" />
																																									</svg>
																																								</span>
																																							</span>
																																						</div>
																																					</div>
																																				</span>
																																				<span className="dz5Gsw">
																																					<div role="button" tabIndex={ 0 } >
																																						<div className="_8VoL_g">
																																							<span className="USE2Rg uQ-fxg ZTpOuQ _3zBBXg tbcLug">
																																								<span aria-hidden="true" className="vpQagg ZQsKtg xR4dgg" >
																																									<svg
                                                                                                                                                                        xmlns="http://www.w3.org/2000/svg" width={ 16 } height={ 16 } viewBox="0 0 16 16" >
																																										<path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z" />
																																									</svg>
																																								</span> PRO
																																							</span>
																																						</div>
																																					</div>
																																				</span>
																																			</span>
																																		</span>
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
                                                                                                            <div className="qFtWQg">
                                                                                                                <div style={{ position: "absolute", width: 152, height: "101.425px", left: 160 }} >
                                                                                                                    <div className="A0JANA ADVZ4g">
                                                                                                                        <div className="sMd5nQ yCCXfw">
                                                                                                                            <div className="yCCXfw">
                                                                                                                                <div className="ZElZRA" draggable="true" >
                                                                                                                                    <div className="ZElZRA" draggable="true" >
                                                                                                                                        <div className="A_yLpA kdWhgw">
                                                                                                                                            <section className="mh2TGQ wZ_zoQ efh_nQ vzKCLg">
                                                                                                                                                <div className="_0vcuuQ vzKCLg">
                                                                                                                                                    <div className="rXvg8w vzKCLg vTriJA" draggable="true" role="button" >
                                                                                                                                                        <img onClick={this.handleClickImage} className="vxiL9Q _1pMoDA JaNaZQ _1vGB4g" crossOrigin="anonymous" src="../assets/demo/snap1/conraua-goliath-la-rana-mas-grande-del-mundo_66b255ff_1280x720.jpg" draggable="false" />
                                                                                                                                                    </div>
                                                                                                                                                    <span className="_78_1qQ">
																																			<span className="T5OikA _9QQlWw _45rcUQ yAhYLw">
																																				<span className="MSQthA">
																																					<div role="button" tabIndex={ 0 } >
																																						<div className="_8VoL_g">
																																							<span className="USE2Rg uQ-fxg ZTpOuQ _3zBBXg tbcLug">
																																								<span aria-hidden="true" className="vpQagg ZQsKtg xR4dgg" >
																																									<svg
                                                                                                                                                                        xmlns="http://www.w3.org/2000/svg" width={ 16 } height={ 16 } viewBox="0 0 16 16" >
																																										<path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z" />
																																									</svg>
																																								</span>
																																							</span>
																																						</div>
																																					</div>
																																				</span>
																																				<span className="dz5Gsw">
																																					<div role="button" tabIndex={ 0 } >
																																						<div className="_8VoL_g">
																																							<span className="USE2Rg uQ-fxg ZTpOuQ _3zBBXg tbcLug">
																																								<span aria-hidden="true" className="vpQagg ZQsKtg xR4dgg" >
																																									<svg
                                                                                                                                                                        xmlns="http://www.w3.org/2000/svg" width={ 16 } height={ 16 } viewBox="0 0 16 16" >
																																										<path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z" />
																																									</svg>
																																								</span> PRO
																																							</span>
																																						</div>
																																					</div>
																																				</span>
																																			</span>
																																		</span>
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
                                                                                                        <div className="T4BXMQ">
                                                                                                            <div>
                                                                                                                <div className="bIo5gA">
                                                                                                                    <div/>
                                                                                                                    <div className="foo">
                                                                                                                        <div/>
                                                                                                                        <div className="PtaF8w" style={{margin: "-4px 0px"}}>
                                                                                                                            <div className="kwVK2w" style={{margin: "4px 0px"}}>
                                                                                                                                <div className="DJbQ1w" style={{ height: "110.62px", margin: "0px -4px" }} >
                                                                                                                                    <div className="cwlvcg" style={{ width: "194.38px", margin: "0px 4px", height: "110.62px" }} >
                                                                                                                                        <div className="m6RGcA sHeyHw">
                                                                                                                                            <div className="FZo-vA" draggable="true">
                                                                                                                                                <div className="FZo-vA" draggable="true">
                                                                                                                                                    <div className="FZo-vA" draggable="true">
                                                                                                                                                        <div className="FZo-vA" draggable="true">
                                                                                                                                                            <div className="rzbipQ _3bkcLw">
                                                                                                                                                                <div className="Mx2Zuw I0LR0g u9msww tO9d3g" style={{ touchAction: "auto", userSelect: "none", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }} >
                                                                                                                                                                    <div className="WX_55A tO9d3g">
                                                                                                                                                                        <div className="ZsiBGQ tO9d3g yUiTWw" draggable="true" role="button" >
                                                                                                                                                                            <img className="q_snDA a6N2fQ DRiKNA" src="../assets/demo/snap1/grenouille4.jpg" draggable="false" />
                                                                                                                                                                        </div>
                                                                                                                                                                        <span className="KJfcIA IRrPSg">
																																								<div className="HSlVqA jTbgTg">
																																									<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																										<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																											<div className="PJJiIQ rfDUrg" style={{transform: "scaleX(1)"}} /></div>
																																									</div>
																																								</div>
																																							</span>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div className="cwlvcg" style={{ width: "110.62px", margin: "0px 4px", height: "110.62px" }} >
                                                                                                                                        <div className="m6RGcA sHeyHw">
                                                                                                                                            <div className="FZo-vA" draggable="true">
                                                                                                                                                <div className="FZo-vA" draggable="true">
                                                                                                                                                    <div className="FZo-vA" draggable="true">
                                                                                                                                                        <div className="FZo-vA" draggable="true">
                                                                                                                                                            <div className="rzbipQ _3bkcLw">
                                                                                                                                                                <div className="Mx2Zuw I0LR0g u9msww tO9d3g" style={{ touchAction: "auto", userSelect: "none", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }} >
                                                                                                                                                                    <div className="WX_55A tO9d3g">
                                                                                                                                                                        <div className="ZsiBGQ tO9d3g yUiTWw" draggable="true" role="button" >
                                                                                                                                                                            <img className="q_snDA a6N2fQ DRiKNA" src="../assets/demo/snap1/japprend.png" draggable="false" />
                                                                                                                                                                        </div>
                                                                                                                                                                        <span className="KJfcIA IRrPSg">
																																								<div className="HSlVqA jTbgTg">
																																									<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																										<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																											<div className="PJJiIQ rfDUrg" style={{transform: "scaleX(1)"}} /></div>
																																									</div>
																																								</div>
																																							</span>
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
                                                                                                                            <div className="kwVK2w" style={{margin: "4px 0px"}}>
                                                                                                                                <div className="DJbQ1w" style={{ height: 120, margin: "0px -4px" }}>
                                                                                                                                    <div className="cwlvcg" style={{ width: 210, margin: "0px 4px", height: 120 }} >
                                                                                                                                        <div className="m6RGcA sHeyHw">
                                                                                                                                            <div className="FZo-vA" draggable="true">
                                                                                                                                                <div className="FZo-vA" draggable="true">
                                                                                                                                                    <div className="HPdo6A Tp_ZoQ">
                                                                                                                                                        <div className="Tp_ZoQ">
                                                                                                                                                            <div className="FZo-vA" draggable="true">
                                                                                                                                                                <div className="FZo-vA" draggable="true">
                                                                                                                                                                    <div className="rzbipQ _3bkcLw">
                                                                                                                                                                        <div className="Mx2Zuw I0LR0g u9msww tO9d3g" style={{ touchAction: "auto", userSelect: "none", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }} >
                                                                                                                                                                            <div className="WX_55A tO9d3g">
                                                                                                                                                                                <div className="ZsiBGQ tO9d3g yUiTWw" draggable="true" role="button" >
                                                                                                                                                                                    <img className="q_snDA a6N2fQ DRiKNA" src="../assets/demo/snap1/homosapien.jpg" draggable="false" />
                                                                                                                                                                                </div>
                                                                                                                                                                                <span className="KJfcIA IRrPSg">
																																										<div className="HSlVqA jTbgTg">
																																											<div className="rfDUrg" style={{ transform: "translateX(0%)" }} >
																																												<div className="rfDUrg" style={{ transform: "translateX(0%)" }} >
																																													<div className="PJJiIQ rfDUrg" style={{transform: "scaleX(1)"}} /></div>
																																											</div>
																																										</div>
																																									</span>
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
                                                                                                                                    <div className="cwlvcg" style={{ width: "87.5912px", margin: "0px 4px", height: 120 }} >
                                                                                                                                        <div className="m6RGcA sHeyHw">
                                                                                                                                            <div className="FZo-vA" draggable="true">
                                                                                                                                                <div className="FZo-vA" draggable="true">
                                                                                                                                                    <div className="FZo-vA" draggable="true">
                                                                                                                                                        <div className="FZo-vA" draggable="true">
                                                                                                                                                            <div className="rzbipQ _3bkcLw">
                                                                                                                                                                <div className="Mx2Zuw I0LR0g u9msww tO9d3g" style={{ touchAction: "auto", userSelect: "none", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }} >
                                                                                                                                                                    <div className="WX_55A tO9d3g">
                                                                                                                                                                        <div className="ZsiBGQ tO9d3g yUiTWw" draggable="true" role="button" >
                                                                                                                                                                            <img className="q_snDA a6N2fQ DRiKNA" src="../assets/demo/snap1/sciencebook.jpg" draggable="false" />
                                                                                                                                                                        </div>
                                                                                                                                                                        <span className="KJfcIA IRrPSg">
																																								<div className="HSlVqA jTbgTg">
																																									<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																										<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																											<div className="PJJiIQ rfDUrg" style={{transform: "scaleX(1)"}} /></div>
																																									</div>
																																								</div>
																																							</span>
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
                                                                                                                            <div className="kwVK2w" style={{margin: "4px 0px"}}>
                                                                                                                                <div className="DJbQ1w" style={{ height: "106.799px", margin: "0px -4px" }}>
                                                                                                                                    <div className="cwlvcg" style={{ width: "154.578px", margin: "0px 4px", height: "106.799px" }} >
                                                                                                                                        <div className="m6RGcA sHeyHw">
                                                                                                                                            <div className="FZo-vA" draggable="true">
                                                                                                                                                <div className="FZo-vA" draggable="true">
                                                                                                                                                    <div className="FZo-vA" draggable="true">
                                                                                                                                                        <div className="FZo-vA" draggable="true">
                                                                                                                                                            <div className="rzbipQ _3bkcLw">
                                                                                                                                                                <div className="Mx2Zuw I0LR0g u9msww tO9d3g" style={{ touchAction: "auto", userSelect: "none", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }} >
                                                                                                                                                                    <div className="WX_55A tO9d3g">
                                                                                                                                                                        <div className="ZsiBGQ tO9d3g yUiTWw" draggable="true" role="button" >
                                                                                                                                                                            <img className="q_snDA a6N2fQ DRiKNA" src="../assets/demo/snap1/GoliathFrog1.jpg" draggable="false" />
                                                                                                                                                                        </div>
                                                                                                                                                                        <span className="KJfcIA IRrPSg">
																																								<div className="HSlVqA jTbgTg">
																																									<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																										<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																											<div className="PJJiIQ rfDUrg" style={{transform: "scaleX(1)"}} /></div>
																																									</div>
																																								</div>
																																							</span>
                                                                                                                                                                        <span className="kuTG_A gEpUvw SY8Pcw F_6KCw _6dy2eg">
																																								<label className="CPiV9g Y5LciQ EoSiNg _7JQe7g gMLrMA Xn1JdA XvGYmg">
																																									<div className="r-Uqsw">
																																										<input type="checkbox" className="_0M_DTg qMju4g" defaultValue />
																																									</div>
																																								</label>
																																							</span>
                                                                                                                                                                    </div>
                                                                                                                                                                    <div className="bIH4Ew"/></div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div className="cwlvcg" style={{ width: "150.422px", margin: "0px 4px", height: "106.799px" }} >
                                                                                                                                        <div className="m6RGcA sHeyHw">
                                                                                                                                            <div className="FZo-vA" draggable="true">
                                                                                                                                                <div className="FZo-vA" draggable="true">
                                                                                                                                                    <div className="FZo-vA" draggable="true">
                                                                                                                                                        <div className="FZo-vA" draggable="true">
                                                                                                                                                            <div className="rzbipQ _3bkcLw">
                                                                                                                                                                <div className="Mx2Zuw I0LR0g u9msww tO9d3g" style={{ touchAction: "auto", userSelect: "none", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }} >
                                                                                                                                                                    <div className="WX_55A tO9d3g">
                                                                                                                                                                        <div className="ZsiBGQ tO9d3g yUiTWw" draggable="true" role="button" >
                                                                                                                                                                            <img className="q_snDA a6N2fQ DRiKNA" src="../assets/demo/snap1/giant-african-bullfrogs.png" draggable="false" />
                                                                                                                                                                        </div>
                                                                                                                                                                        <span className="KJfcIA IRrPSg">
																																								<div className="HSlVqA jTbgTg">
																																									<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																										<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																											<div className="PJJiIQ rfDUrg" style={{transform: "scaleX(1)"}} /></div>
																																									</div>
																																								</div>
																																							</span>
                                                                                                                                                                        <span className="kuTG_A gEpUvw SY8Pcw F_6KCw _6dy2eg">
																																								<label className="CPiV9g Y5LciQ EoSiNg _7JQe7g gMLrMA Xn1JdA XvGYmg"/>
																																							</span>
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
                                                                                                                            <div className="kwVK2w" style={{margin: "4px 0px"}}>
                                                                                                                                <div className="DJbQ1w" style={{ height: "101.482px", margin: "0px -4px" }}>
                                                                                                                                    <div className="cwlvcg" style={{ width: "152.5px", margin: "0px 4px", height: "101.482px", visibility: this.state.hideDemo ? 'hidden' : 'initial' }}
                                                                                                                                         onDragOver={()=>this.demoDragOver()}
                                                                                                                                         onDragEnd={()=>this.demoDragEnd()}>
                                                                                                                                        <div className="m6RGcA sHeyHw">
                                                                                                                                            <div className="FZo-vA" draggable="true">
                                                                                                                                                <div className="FZo-vA" draggable="true">
                                                                                                                                                    <div className="FZo-vA" draggable="true">
                                                                                                                                                        <div className="FZo-vA" draggable="true">
                                                                                                                                                            <div className="rzbipQ _3bkcLw">
                                                                                                                                                                <div className="Mx2Zuw I0LR0g u9msww tO9d3g" style={{ touchAction: "auto", userSelect: "none", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }} >
                                                                                                                                                                    <div className="WX_55A tO9d3g">
                                                                                                                                                                        <div className="ZsiBGQ tO9d3g yUiTWw" draggable="true" role="button" >
                                                                                                                                                                            <img className="q_snDA a6N2fQ DRiKNA" src="../assets/demo/snap1/african-frog.jpg" draggable="false" />
                                                                                                                                                                        </div>
                                                                                                                                                                        <span className="KJfcIA IRrPSg">
																																								<div className="HSlVqA jTbgTg">
																																									<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																										<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																											<div className="PJJiIQ rfDUrg" style={{transform: "scaleX(1)"}} /></div>
																																									</div>
																																								</div>
																																							</span>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    <div className="cwlvcg" style={{ width: "152.5px", margin: "0px 4px", height: "101.482px",visibility: this.state.hideDemo2 ? 'hidden' : 'initial' }}
                                                                                                                                         onDragOver={()=>this.demoDragOver2()}
                                                                                                                                         onDragEnd={()=>this.demoDragEnd2()}>
                                                                                                                                        <div className="m6RGcA sHeyHw">
                                                                                                                                            <div className="FZo-vA" draggable="true">
                                                                                                                                                <div className="FZo-vA" draggable="true">
                                                                                                                                                    <div className="FZo-vA" draggable="true">
                                                                                                                                                        <div className="FZo-vA" draggable="true">
                                                                                                                                                            <div className="rzbipQ _3bkcLw">
                                                                                                                                                                <div className="Mx2Zuw I0LR0g u9msww tO9d3g" style={{ touchAction: "auto", userSelect: "none", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }} >
                                                                                                                                                                    <div className="WX_55A tO9d3g">
                                                                                                                                                                        <div className="ZsiBGQ tO9d3g yUiTWw" draggable="true" role="button" >
                                                                                                                                                                            <img className="q_snDA a6N2fQ DRiKNA" src="../assets/demo/snap1/frog_bg.jpg" draggable="false" />
                                                                                                                                                                        </div>
                                                                                                                                                                        <span className="KJfcIA IRrPSg">
																																								<div className="HSlVqA jTbgTg">
																																									<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																										<div className="rfDUrg" style={{transform: "translateX(0%)"}} >
																																											<div className="PJJiIQ rfDUrg" style={{transform: "scaleX(1)"}} /></div>
																																									</div>
																																								</div>
																																							</span>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        animations: state.animations
    }
}


export default connect(mapStateToProps, {fetchAnimation})(AnimationPanel);
