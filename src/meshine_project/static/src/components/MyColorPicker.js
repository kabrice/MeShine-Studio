import React, {Component} from 'react'
import MyHeader from "./MyHeader";

class MyColorPicker extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $('#colorPickerDemo').click(function () {{/*Just for demo*/}
            $('#spanDemo').css({'color': 'black', "font-weight": "900","font-size": "47px"})
        })
    }

    render() {
        return (
            <div className="mycolorpicker">
                <div style={{ left: "110px", position: "absolute", top: 245, zIndex: 1000000 }} >
                    <div className="colorPicker">
                        <div className="colorPicker-hexInputWrapper">
                            <svg role="presentation" className="icon" width="27px" height="33px" viewBox="0 0 27 33" version="1.1" >
                                <title>color-icon-09</title>
                                <desc>Created with Sketch.</desc>
                                <defs>
                                    <linearGradient x1="-23.3656669%" y1="83.63156%" x2="116.156385%" y2="23.3347012%" id="linearGradient-1" >
                                        <stop stopColor="#F6871F" offset="0%" />
                                        <stop stopColor="#F8EC1E" offset="27%" />
                                        <stop stopColor="#5FBB46" offset="54%" />
                                        <stop stopColor="#4ABBEB" offset="75%" />
                                        <stop stopColor="#ED186A" offset="100%" />
                                    </linearGradient>
                                </defs>
                                <g id="Gradient-Picker" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" >
                                    <g id="Color-Picker" transform="translate(-82.000000, -113.000000)" fillRule="nonzero" >
                                        <g id="color-picker-v2" transform="translate(40.000000, 20.000000)">
                                            <g id="color-icon-09" transform="translate(42.000000, 93.000000)">
                                                <path d="M4.44370304,31.6696747 C3.69311132,31.7513295 3.00312115,31.2565888 2.85289223,30.5290225 L1.48829763,23.807066 C1.41306046,23.4404995 1.48637351,23.0595398 1.69262196,22.7453269 L14.3461355,3.66271816 C15.5989772,1.72063158 17.8231068,0.597510542 20.1586288,0.727577439 C22.4941508,0.857644336 24.5750306,2.22051444 25.596756,4.2892733 C26.6184814,6.35803215 26.4209225,8.80845366 25.0804598,10.6931529 L12.5145138,29.6538051 C12.3009771,29.9766482 11.9643931,30.201552 11.5804598,30.2779356 L4.56045979,31.6553269 L4.44370304,31.6696747 Z M4.45829763,23.8501095 L5.42154087,28.5992399 L10.4055949,27.6235877 L22.6504598,9.12206599 C23.3543696,8.0891801 23.4442937,6.76557234 22.8863585,5.64983295 C22.3284234,4.53409356 21.2073926,3.7957299 19.9455477,3.71287641 C18.6837028,3.63002293 17.4727479,4.21526704 16.7688382,5.24815294 L4.45829763,23.8501095 Z" id="Shape" fill="#FFFFFF" />
                                                <path d="M4.0400033,32.5239142 C3.65535646,32.5242951 3.27933271,32.4118967 2.9600033,32.2010881 C2.53383713,31.9191098 2.23763702,31.4836104 2.1354087,30.9886968 L0.770814106,24.2667403 C0.66524245,23.7712593 0.765048419,23.2548466 1.0481114,22.8319577 L13.6943276,3.76369681 C15.8162206,0.625758936 20.1239068,-0.226992621 23.3158141,1.8590229 C26.5077214,3.94503842 27.3751395,8.17988937 25.2532465,11.3178272 L12.6873006,30.2784794 C12.4012252,30.7086959 11.9518359,31.0083904 11.4394628,31.1106533 L4.41946275,32.4880446 L4.25892221,32.4880446 L4.0400033,32.5239142 Z M5.56513843,28.3630446 L9.87784113,27.5165229 L22.0059492,9.21587072 C22.6294663,8.3266202 22.7183837,7.17643758 22.2387296,6.20476355 C21.7590754,5.23308951 20.7849635,4.59006224 19.6885645,4.5213578 C18.5921656,4.45265336 17.5428897,4.96888761 16.9416249,5.87282725 L4.73324654,24.2810881 L5.56513843,28.3630446 Z" id="Shape" fill="#231F20" />
                                                <path d="M19.260519,0.961311719 C21.6375683,0.963690576 23.8202194,2.25245879 24.9390691,4.31426843 C26.0579188,6.37607808 25.9312192,8.87600543 24.6094379,10.8182682 L12.0434919,29.7789204 C11.8299552,30.1017635 11.4933712,30.3266673 11.1094379,30.4030508 L4.08943789,31.7804422 L3.97268114,31.7804422 L3.8048433,31.7804422 C3.10027353,31.7944108 2.48618318,31.311445 2.34538384,30.6326161 L0.980789244,23.9106595 C0.905552073,23.544093 0.978865127,23.1631333 1.18511357,22.8489204 L13.8386271,3.76631172 C15.0381127,1.99508835 17.0595835,0.931429714 19.2240325,0.932616067 L19.260519,0.961311719 Z M4.94322168,28.6956595 L9.93457303,27.748703 L22.1794379,9.24718128 C22.8833477,8.2142954 22.9732718,6.89068764 22.4153366,5.77494825 C21.8574015,4.65920886 20.7363707,3.92084519 19.4745258,3.83799171 C18.2126809,3.75513822 17.001726,4.34038233 16.2978163,5.37326824 L3.97997843,23.9465291 L4.94322168,28.6956595 L4.94322168,28.6956595 Z M19.260519,7.37107858e-06 L19.260519,7.37107858e-06 C16.7687489,-0.00346356088 14.4405032,1.21906723 13.0578163,3.25696389 L0.39700546,22.3467465 C0.0482768422,22.8693382 -0.0775251215,23.5057486 0.0467351899,24.118703 L1.41862708,30.8478335 C1.64770691,31.9650468 2.64555691,32.7690289 3.8048433,32.7704422 L4.0821406,32.7704422 L4.27916762,32.7704422 L11.2991676,31.3356595 C11.9403042,31.208273 12.5027705,30.8336065 12.8607892,30.2954422 L25.4267352,11.3491378 C26.9421915,9.11048779 27.0836403,6.23421725 25.7949223,3.86228795 C24.5062043,1.49035866 21.9958412,0.0065618619 19.260519,7.37107858e-06 L19.260519,7.37107858e-06 Z M5.01619465,24.1617465 L17.1151136,5.89696389 C17.9070451,4.74400945 19.4997619,4.44048771 20.672546,5.21902911 C21.8453301,5.99757051 22.1540721,7.56335727 21.3621406,8.71631172 L9.34349195,26.8519639 L5.6948433,27.5693552 L4.96511357,24.1545726 L5.01619465,24.1617465 Z" id="Shape" fill="#FFFFFF" />
                                                <path d="M19.3597297,7.89130435 L10.9459459,20.3236957" id="Shape" fill="#000000" />
                                                <path d="M10.9432494,21.7594063 C10.4053978,21.7584285 9.91168466,21.4667089 9.65841921,21.0002404 C9.40515376,20.5337719 9.433389,19.9681666 9.73189809,19.5283193 L18.1456819,7.09592803 C18.5930325,6.43624791 19.4996559,6.25798911 20.1706819,6.69777586 C20.8417078,7.13756261 21.0230325,8.02885661 20.5756819,8.68853673 L12.1254116,21.120928 C11.8610296,21.5107373 11.419706,21.7490934 10.9432494,21.7594063 Z" id="Shape" fill="url(#linearGradient-1)" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <div style={{ position: "relative" }}>
                                <input spellCheck="false" defaultValue="#13130B" />
                            </div>
                        </div>
                        <div className="colorPicker-saturationWrapper">
                            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, background: "rgb(255, 255, 0)" }} >
                                <div className="saturation-white" style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }} >
                                    <div className="saturation-black" style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }} />
                                    <div style={{ position: "absolute", top: "92.549%", left: "42.1053%", cursor: "default" }} >
                                        <div className="colorPicker-pointerCircle" style={{ background: "rgb(19, 19, 11)" }} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="colorPicker-hueWrapper">
                            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }} >
                                <div className="hue-horizontal" style={{ padding: "0px 2px", position: "relative", height: "100%" }} >
                                    <div style={{ position: "absolute", left: "16.6667%" }}>
                                        <div className="colorPicker-pointerCircle" style={{ background: "rgb(19, 19, 11)" }} /></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="color-picker-swatch-group">
                                <p className="color-picker-swatch-group-title">Custom</p>
                                <div className="color-picker-swatch-group-swatches-wrap">
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#ffffff" tabIndex={0} style={{ background: "rgb(255, 255, 255)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#2e1a1a" tabIndex={0} style={{ background: "red", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#f8e71c" tabIndex={0} style={{ background: "rgb(248, 231, 28)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#b66756" tabIndex={0} style={{ background: "rgb(182, 103, 86)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#141313" tabIndex={0} style={{ background: "rgb(20, 19, 19)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                </div>
                            </div>
                            <div className="color-picker-swatch-group">
                                <p className="color-picker-swatch-group-title">Recommended</p>
                                <div className="color-picker-swatch-group-swatches-wrap">
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div id={'colorPickerDemo'} title="#000000" tabIndex={0} style={{ background: "rgb(0, 0, 0)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#e6ebf2" tabIndex={0} style={{ background: "rgb(230, 235, 242)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#0f2137" tabIndex={0} style={{ background: "rgb(15, 33, 55)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#eabe9b" tabIndex={0} style={{ background: "rgb(234, 190, 155)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#2b3d4d" tabIndex={0} style={{ background: "rgb(43, 61, 77)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#dce0e6" tabIndex={0} style={{ background: "rgb(220, 224, 230)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#19140d" tabIndex={0} style={{ background: "rgb(25, 20, 13)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#f0dec8" tabIndex={0} style={{ background: "rgb(240, 222, 200)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#154164" tabIndex={0} style={{ background: "rgb(21, 65, 100)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                    <div className="color-picker-swatch-group-swatch-wrap">
						<span>
							<div title="#d4c2b2" tabIndex={0} style={{ background: "rgb(212, 194, 178)", height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none", borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" }} />
						</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyColorPicker;