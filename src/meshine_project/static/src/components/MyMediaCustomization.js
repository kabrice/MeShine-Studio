import React, {Component} from 'react'

class MyMediaCustomization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEdit: true
        }
    }

    handleClickSubTab = (isShowEdit) => {
        this.setState({showEdit: isShowEdit})
    }

    playVideo(i, doPlay){
        let vid = $('.textvid'+i).get(0)
        //console.log('playVideo', doPlay)
        if(doPlay){
            vid.play()
            this.setState({doPlay:true, currentVid: i})
        }else{
            vid.pause()
            vid.currentTime=0
            this.setState({doPlay:false, currentVid: i})
        }
    }
    componentDidMount() {
        {/*Just for demo*/}
        $('.colorSwatch-color').click(function () {
            $('.mycolorpicker').show()
        })
        $('#card-container').click(function () {
            $('.mycolorpicker').hide()
        })

        $('.edit-element-btn, .visible').click(function () {
            $('.demo-hover-text2').hide()
            $('.demo-hover-text3').hide()
            $('.demo-hover-text4').hide()
            $('.demo-hover-text5').hide()
            $('.icon-hide-demo').hide()
            $('.icon-hide-demo1').show()
            $('.redbox-demo').show()
        })
    }

    render() {
        let titlesText = ["BeautifulDance", "CoffeeMorning", "DominoDream", "Faith&Love", "FindYourElement", "WithLove", "HelloGoodbye", "NewProduction", "OutNow", "RealityBroken",
                      "RisingStrong", "SunnyDay", "Thursday", "GreatThinker"];
        let titles = ["ThreeSquareSwinging", "TextSwinging", "SmoothMove", "TransitionSquare", "SnakeEffect", "HavingLove", "ColorfulConfetti", "ThreeSquareSwinging1"]
        let titlesFolder = 'SquareAnimations'
        //let titles = titlesSquare
        let tiles = []
        for (let i = 0; i < titles.length; i+=2) {

            tiles.push(
                <div className="FA8sBg"
                     style={{
                         opacity: 1,
                         height: 152,
                         margin: "4px -4px",
                         transition: "opacity 250ms linear 0s"
                     }}
                     key={i}

                >
                    <div className="qFtWQg">
                        <div
                            style={{
                                position: "absolute",
                                width: 152,
                                height: 152,
                                left: 0
                            }}
                            onMouseEnter={() => {
                                this.playVideo(i, true)
                            }}
                            onMouseLeave={() => {
                                this.playVideo(i, false)
                            }}
                        >
                            <div className="A0JANA ADVZ4g">
                                <div className="sMd5nQ yCCXfw">
                                    <div className="yCCXfw">
                                        <div className="ZElZRA" draggable="true">
                                            <section className="mh2TGQ A_o8XA jUBybQ">
                                                <div className="qBCsAw jUBybQ">
                                                    <div className="Wcv3XA">
                                                        <video loop=""
                                                               poster={`../../assets/demo/${titlesFolder}/${titles[i]}.png`}
                                                               className={`video-thumbnail textvid${i}`}
                                                               src={`../../assets/demo/${titlesFolder}/${titles[i]}.mp4`}/>
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
                            onMouseEnter={() => {
                                this.playVideo(i+1, true)
                            }}
                            onMouseLeave={() => {
                                this.playVideo(i+1, false)
                            }}
                        >
                            <div className="A0JANA ADVZ4g">
                                <div className="sMd5nQ yCCXfw">
                                    <div className="yCCXfw">
                                        <div className="ZElZRA" draggable="true">
                                            <section className="mh2TGQ A_o8XA jUBybQ">
                                                <div className="qBCsAw jUBybQ">
                                                    <div className="Wcv3XA">
                                                        <video
                                                            poster={`../../assets/demo/${titlesFolder}/${titles[i+1]}.png`}
                                                            className={`video-thumbnail textvid${i+1}`}
                                                            src={`../../assets/demo/${titlesFolder}/${titles[i+1]}.mp4`}/>
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

            );

        }
        return (
            <div className={'mymediacustomization'}>
                <div className={"myupload"}>
                    <div className="media-gallery-open">
                        <div className="media-gallery-input-container">
                            <div className="edit-element-btn visible" aria-describedby="tooltip-34" >
                                <svg viewBox="0 0 16 16" className="icon icon-svg icon-color icon-size-18 icon-hide-demo" role="presentation" >
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M8 5.667c-1.43 0-2.589 1.194-2.589 2.667C5.411 9.806 6.57 11 8 11s2.589-1.194 2.589-2.666C10.589 6.86 9.43 5.667 8 5.667m0 1.5c.6 0 1.089.523 1.089 1.167C9.089 8.977 8.6 9.5 8 9.5s-1.089-.523-1.089-1.166c0-.644.489-1.167 1.089-1.167" fill="#000" fillRule="nonzero" />
                                        <path d="M8 3C4.453 3 1.426 6.207.245 7.647a1.083 1.083 0 000 1.373C1.426 10.46 4.453 13.667 8 13.667c3.548 0 6.574-3.207 7.755-4.647a1.083 1.083 0 000-1.373C14.574 6.207 11.548 3 8 3m0 1.5c2.767 0 5.364 2.663 6.372 3.833-1.008 1.17-3.605 3.834-6.372 3.834S2.636 9.504 1.627 8.333C2.635 7.163 5.233 4.5 8 4.5" fill="#000" fillRule="nonzero" />
                                    </g>
                                </svg>
                                <svg viewBox="0 0 16 16" className="icon icon-svg icon-color icon-size-18 icon-hide-demo1" role="presentation" style={{'display': 'none'}}>
                                    <defs>
                                        <path id="a" d="M0 .574h9.947v7.921H0z" />
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M1.725 5.752C2.775 4.583 5.307 2.127 8 2.127c.211 0 .42.038.628.067L9.948.877A6.68 6.68 0 008 .574c-3.547 0-6.574 3.114-7.755 4.51a1.03 1.03 0 000 1.335c.45.532 1.17 1.314 2.082 2.077l1.108-1.108a15.924 15.924 0 01-1.71-1.636" fill="#000" mask="url(#mask-2)" transform="translate(0 2.497)" />
                                        <g>
                                            <path d="M7.673.007L6.566 1.114a16.02 16.02 0 011.71 1.637C7.225 3.92 4.694 6.375 2 6.375c-.211 0-.42-.039-.628-.067l-1.32 1.32c.625.19 1.277.301 1.948.301 3.548 0 6.574-3.113 7.755-4.51a1.028 1.028 0 000-1.334A17.314 17.314 0 007.673.007" fill="#000" mask="url(#mask-4)" transform="translate(6 5.497)" />
                                        </g>
                                        <path d="M13.834 1.291a.834.834 0 01.637.238c.341.342.313.924-.063 1.3L11.41 5.825 10.178 7.06 7.06 10.178l-.806.806L5.137 12.1 2.83 14.408c-.188.188-.429.289-.663.3a.836.836 0 01-.638-.237c-.341-.342-.313-.924.063-1.3l1.954-1.954 1.043-1.043L5.822 8.94l5.041-5.04 2.307-2.309c.19-.188.429-.289.664-.3z" fill="#000" />
                                    </g>
                                </svg>
                            </div>
                            <div className="edit-element-btn locked"  aria-describedby="tooltip-35" >
                                <i className="icon-unlock" />
                            </div>
                            <div className=" alignment-selection">
                                <button type="button" className="element-menu-canvas-alignment-selection mask-options ant-dropdown-trigger sds-dropdown btn btn-outline btn-outline-secondary">
                                    <div className="align-menu-title">
                                        <svg viewBox="0 0 6.69 10.42" className="icon icon-svg icon-color icon-size-13 mask-selected" role="presentation">
                                            <path d="M5.61 2.09a2.21 2.21 0 00-.8-.67 2.44 2.44 0 00-1.13-.26 2.64 2.64 0 00-.68.09 1.89 1.89 0 00-.62.29 1.64 1.64 0 00-.46.5 1.41 1.41 0 00-.17.72 1.32 1.32 0 00.16.68 1.46 1.46 0 00.43.46 2.74 2.74 0 00.66.33l.79.27q.5.16 1 .35a3.69 3.69 0 01.94.52 2.55 2.55 0 01.69.81 2.52 2.52 0 01.27 1.22 2.92 2.92 0 01-.29 1.34 2.74 2.74 0 01-.76.94 3.24 3.24 0 01-1.1.55 4.55 4.55 0 01-1.28.18 4.67 4.67 0 01-1.81-.36A3.6 3.6 0 010 9l1.08-.91a2.69 2.69 0 002.21 1.14 2.58 2.58 0 00.7-.1 2 2 0 00.64-.31 1.69 1.69 0 00.47-.53 1.5 1.5 0 00.18-.76 1.38 1.38 0 00-.19-.75 1.67 1.67 0 00-.51-.51 3.43 3.43 0 00-.75-.36l-.9-.3A7.81 7.81 0 012 5.27a3.26 3.26 0 01-.83-.52A2.39 2.39 0 01.57 4a2.63 2.63 0 01-.22-1.17 2.54 2.54 0 01.3-1.27 2.73 2.73 0 01.79-.89A3.27 3.27 0 012.53.16 4.77 4.77 0 013.75 0a4.27 4.27 0 011.63.31 3.23 3.23 0 011.22.83z" fill="#d2d2d2" className="svg-no-adaptive-fill" />
                                            <circle cx="3.53" cy="5.21" r="3.14" />
                                        </svg>
                                        <i className="icon-down" />
                                    </div>
                                </button>
                            </div>
                            <div className="alignment-selection">
                                <button type="button" className="element-menu-canvas-alignment-selection ant-dropdown-trigger sds-dropdown btn btn-outline btn-outline-secondary" >
                                    <div className="align-menu-title">
                                        <svg viewBox="0 0 24 24" className="icon icon-svg icon-color icon-size-16 option-icon" role="presentation" >
                                            <path d="M19 10.86h3v3h-3zM10.5 11h3v3h-3zM2 10.86h3v3H2z" />
                                            <path d="M20 4.36v16H4v-16h16m1-1H3v18h18v-18z" />
                                            <path d="M2 2.86h3v3H2zM10.5 2.86h3v3h-3zM19 2.86h3v3h-3zM19 18.86h3v3h-3zM10.5 18.86h3v3h-3zM2 18.86h3v3H2z" />
                                        </svg>
                                        <span className="option-label">Align</span>
                                    </div>
                                    <i className="icon-down" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="media-gallery-open demo-edit-image" style={{marginTop: 5}}>
                        <div className="media-gallery-input-container">
                            <div className="alignment-selection">
                                <button type="button" className="element-menu-canvas-alignment-selection ant-dropdown-trigger sds-dropdown btn btn-outline btn-outline-secondary">
                                    <div className="align-menu-title">
                                        <svg className="icon icon-svg icon-color icon-size-16 option-icon"
                                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                              viewBox="0 0 22 27.5" version="1.1" x="0px" y="0px" style={{marginTop: 2}}>
                                            {/*<title>effect-effect-filter-color</title>
                                            <desc>Created with Sketch.</desc>*/}
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <g  transform="translate(-110.000000, -153.000000)" fill="#000000">
                                                    <path d="M127.723875,157.861912 C127.915624,157.670162 128.222413,157.666064 128.427934,157.871584 L129.128416,158.572066 C129.325507,158.769158 129.324146,159.090068 129.138088,159.276125 L125.242641,163.171573 L123.828427,161.757359 L127.723875,157.861912 Z M124.535534,163.87868 L114.281833,174.132381 C114.086931,174.327282 113.777587,174.333936 113.572066,174.128416 L112.871584,173.427934 C112.674493,173.230842 112.672886,172.9129 112.867619,172.718167 L123.12132,162.464466 L124.535534,163.87868 Z M124.452548,155.452548 L124,157 L123.547452,155.452548 L122,155 L123.547452,154.547452 L124,153 L124.452548,154.547452 L126,155 L124.452548,155.452548 Z M115.065685,157.065685 L114.5,159 L113.934315,157.065685 L112,156.5 L113.934315,155.934315 L114.5,154 L115.065685,155.934315 L117,156.5 L115.065685,157.065685 Z M120.905097,160.905097 L120,164 L119.094903,160.905097 L116,160 L119.094903,159.094903 L120,156 L120.905097,159.094903 L124,160 L120.905097,160.905097 Z M129.065685,166.065685 L128.5,168 L127.934315,166.065685 L126,165.5 L127.934315,164.934315 L128.5,163 L129.065685,164.934315 L131,165.5 L129.065685,166.065685 Z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="option-label">Effect</span>
                                    </div>
                                    <i className="icon-down" />
                                </button>
                            </div>
                            <div className="alignment-selection">
                                <button type="button" className="element-menu-canvas-alignment-selection ant-dropdown-trigger sds-dropdown btn btn-outline btn-outline-secondary">
                                    <div className="align-menu-title">
                                        <svg className="icon icon-svg icon-color icon-size-16 option-icon"
                                             xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 640" x="0px" y="0px" style={{marginTop: 2}}>
                                            <title>1 copy 32</title>
                                            <path d="M80.83,24.08,431.16,24h0a34,34,0,0,1,31.46,20A35.34,35.34,0,0,1,466,58.33H46a35.4,35.4,0,0,1,3.38-14.18A34,34,0,0,1,80.83,24.08ZM294.49,260.75l-.19.22a37.46,37.46,0,0,0-8.83,24.76l4.21,176.61a6.13,6.13,0,0,1-4,5.82L233,487.61a6,6,0,0,1-5.52-.69,6.08,6.08,0,0,1-2.64-5l-4-193.28A37.45,37.45,0,0,0,212,264.43L54.19,81.22a37.15,37.15,0,0,1-4.55-6.89H462.32A36.69,36.69,0,0,1,457.94,81Z" />
                                        </svg>
                                        <span className="option-label">Filter</span>
                                    </div>
                                    <i className="icon-down" />
                                </button>
                            </div>
                            <div className=" alignment-selection">
                                <button type="button" className="element-menu-canvas-alignment-selection mask-options ant-dropdown-trigger sds-dropdown btn btn-outline btn-outline-secondary">
                                    <div className="align-menu-title">
                                        <svg className="icon icon-svg icon-color icon-size-16 option-icon"

                                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 80" enableBackground="new 0 0 64 64" xmlSpace="preserve" style={{marginTop: 2}}>
                                            <metadata>
                                                <sfw
                                                    xmlns="http://ns.adobe.com/SaveForWeb/1.0/">
                                                    <slices />
                                                    <slicesourcebounds y={-8160} x={-8165} width={16389} height={16384} bottomleftorigin="true" />
                                                    <optimizationsettings>
                                                        <targetsettings targetsettingsid={0} fileformat="PNG24Format">
                                                            <png24format transparency="true" filtered="false" interlaced="false" nomattecolor="false" mattecolor="#FFFFFF" />
                                                        </targetsettings>
                                                    </optimizationsettings>
                                                </sfw>
                                            </metadata>
                                            <g>
                                                <g>
                                                    <path d="M8,14h28v2c0,1.104,0.896,2,2,2h8c1.104,0,2-0.896,2-2v-2h8c1.104,0,2-0.896,2-2s-0.896-2-2-2h-8V8c0-1.104-0.896-2-2-2    h-8c-1.104,0-2,0.896-2,2v2H8c-1.104,0-2,0.896-2,2S6.896,14,8,14z" />
                                                    <path d="M56,30H28v-2c0-1.104-0.896-2-2-2h-8c-1.104,0-2,0.896-2,2v2H8c-1.104,0-2,0.896-2,2s0.896,2,2,2h8v2c0,1.104,0.896,2,2,2    h8c1.104,0,2-0.896,2-2v-2h28c1.104,0,2-0.896,2-2S57.104,30,56,30z" />
                                                    <path d="M56,50h-8v-2c0-1.104-0.896-2-2-2h-8c-1.104,0-2,0.896-2,2v2H8c-1.104,0-2,0.896-2,2s0.896,2,2,2h28v2    c0,1.104,0.896,2,2,2h8c1.104,0,2-0.896,2-2v-2h8c1.104,0,2-0.896,2-2S57.104,50,56,50z" />
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="option-label">Adjust</span>
                                        <i className="icon-down" />
                                    </div>
                                </button>
                            </div>
                            <div className="alignment-selection">
                                <button type="button" className="element-menu-canvas-alignment-selection ant-dropdown-trigger sds-dropdown btn btn-outline btn-outline-secondary">
                                    <div className="align-menu-title">
                                        <svg className="icon icon-svg icon-color icon-size-16 option-icon"
                                             xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                                            <title>crop 3</title>
                                            <path d="M93.22,81.22H18.78V6.78a4,4,0,0,1,4-4h0a4,4,0,0,1,4,4V73.22H93.22a4,4,0,0,1,4,4h0A4,4,0,0,1,93.22,81.22Z" />
                                            <path d="M6.78,18.78h8v8h-8a4,4,0,1,1,0-8Z" />
                                            <polygon points="81.22 18.78 81.22 69.22 73.22 69.22 73.22 26.78 30.78 26.78 30.78 18.78 81.22 18.78" />
                                            <path d="M73.22,85.22h8v8a4,4,0,0,1-8,0Z" />
                                        </svg>
                                        <span className="option-label">Crop</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="anim-menu">
                        <div className={`sub-menu ${this.state.showEdit ? 'sub-menu-is-clicked' : ''}`} onClick={()=>{this.handleClickSubTab(true)}}>Edit</div>
                        <div className={`sub-menu ${ !this.state.showEdit ? 'sub-menu-is-clicked' : ''}`} onClick={()=>{this.handleClickSubTab(false)}}>Animation</div>
                    </div>
                </div>
                <div className="media-gallery open advanced-open" style={{display: (this.state.showEdit) ? '' : 'none'}}>
                    <div className="media-gallery-open">
                        <div className="media-gallery-properties">
                            <div className="media-gallery-warning element-header" />
                            <div className="element-context">
                                <div className="element-context-buttons">
                                    <span className={'demo-edit-text'}>
                                        <div className="element-font-select form-group ">
                                            <label className="control-label">
                                                <span>Typeface</span>
                                            </label>
                                            <div className="value-wrapper">
                                                <div className="ant-select ant-select-enabled">
                                                    <div
                                                        className="ant-select-selection ant-select-selection--single"
                                                        role="combobox"
                                                        aria-autocomplete="list"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        tabIndex={0}
                                                    >
                                                        <div className="ant-select-selection__rendered">
                                                            <div
                                                                className="ant-select-selection-selected-value"
                                                                title="Avenir Next LT Pro Demi"
                                                                style={{ display: "block", opacity: 1 }}
                                                            >
                                                                <div className="font-label">
                                                                    <span>Blink Mac System Font</span>
                                                                </div>
                                                                <div
                                                                    className="font-preview"
                                                                    style={{
                                                                        backgroundImage:
                                                                            'url("/api/v1/fonts2/fec055d5-69d0-48b2-8f64-db79147f4ffa/preview")'
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <span
                                                            className="ant-select-arrow"
                                                            unselectable="unselectable"
                                                            style={{ userSelect: "none" }}
                                                        >
                        <b />
                      </span>
                                                    </div>
                                                </div>
                                                <i className="icon-down" />
                                            </div>
                                        </div>
                                        <div className="element-font-container">
                                            <div className="form-group">
                                                <label className="control-label">
                                                    <span>Size</span>
                                                </label>
                                                <div className="font-size-fill-mode value-wrapper">
                                                    <div className="ant-select ant-select-enabled">
                                                        <div
                                                            className="ant-select-selection
          ant-select-selection--single"
                                                            role="combobox"
                                                            aria-autocomplete="list"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            tabIndex={0}
                                                        >
                                                            <div className="ant-select-selection__rendered">
                                                                <div
                                                                    className="ant-select-selection-selected-value"
                                                                    title="Body (Shrink only)"
                                                                    style={{ display: "block", opacity: 1 }}
                                                                >
                                                                    Body (Shrink only)
                                                                </div>
                                                            </div>
                                                            <span
                                                                className="ant-select-arrow"
                                                                unselectable="unselectable"
                                                                style={{ userSelect: "none" }}
                                                            >
                          <b />
                        </span>
                                                        </div>
                                                    </div>
                                                    <i className="icon-down" />
                                                </div>
                                                <span className="scrubbable-input">
                    <div className="form-group">
                      <input
                          maxLength={4}
                          width={4}
                          type="text"
                          className="form-control"
                          defaultValue={15}
                      />
                    </div>
                  </span>
                                                <span style={{color: 'white'}}>px</span>
                                            </div>
                                        </div>
                                        <div className="element-color-picker form-group">
                                            <label className="control-label">
                                                <span>Fill Color</span>
                                            </label>
                                            <div aria-describedby="tooltip-3">
                                                <div className="form-colorPicker-wrapper">
                                                    <div className="colorSwatch-btn">
                                                        <div
                                                            className="colorSwatch-color"
                                                            style={{ background: "rgb(236, 236, 244)" }}
                                                        />
                                                    </div>
                                                    <span hidden>
                      <input
                          format="hex"
                          type="color"
                          className="form-control"
                          defaultValue="#ececf4"
                      />
                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="element-alignment-block horizontal form-group">
                                            <label className="control-label">
                                                <span>Horizontal Alignment</span>
                                            </label>
                                            <div className="alignment-buttons">
                                                <div className="text-alignment-input">
                                                    <div className="text-alignment-option">
                                                        <div className="text-alignment-button selected">
                                                            <svg
                                                                viewBox="0 0 22.9 22.9"
                                                                className="icon icon-svg icon-color icon-size-24"
                                                                role="presentation"
                                                                aria-describedby="tooltip-28"
                                                            >
                                                                <path d="M0 .1h22.9v3H0zM0 5h18.1v3H0zM0 10h20.3v3H0zM0 14.9h14.7v3H0zM0 19.8h21.1v3H0z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="text-alignment-option">
                                                        <div className="text-alignment-button ">
                                                            <svg
                                                                viewBox="0 0 22.9 22.9"
                                                                className="icon icon-svg icon-color icon-size-24"
                                                                role="presentation"
                                                                aria-describedby="tooltip-29"
                                                            >
                                                                <path d="M0 .1h22.9v3H0zM2.4 5h18.1v3H2.4zM1.3 10h20.3v3H1.3zM4.1 14.9h14.7v3H4.1zM.9 19.8H22v3H.9z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="text-alignment-option">
                                                        <div className="text-alignment-button">
                                                            <svg
                                                                viewBox="0 0 22.9 22.9"
                                                                className="icon icon-svg icon-color icon-size-24"
                                                                role="presentation"
                                                                aria-describedby="tooltip-30"
                                                            >
                                                                <path d="M0 .2h22.9v3H0zM4.8 5.2h18.1v3H4.8zM2.6 10.1h20.3v3H2.6zM8.2 15h14.7v3H8.2zM1.8 20h21.1v3H1.8z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="element-alignment-block vertical form-group">
                                            <label className="control-label">
                                                <span>Vertical Alignment</span>
                                            </label>
                                            <div className="alignment-buttons">
                                                <div className="text-alignment-input">
                                                    <div className="text-alignment-option">
                                                        <div className="text-alignment-button">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                className="icon icon-svg icon-color icon-size-24"
                                                                role="presentation"
                                                                aria-describedby="tooltip-31"
                                                            >
                                                                <path
                                                                    d="M13 10.618v9.503h-2V10.61L8.979 12.63l-1.415-1.414L10.582 8.2l-.002-.002 1.414-1.415.002.002.002-.002 1.414 1.415-.002.002 3.018 3.017-1.415 1.414L13 10.618zm8-4.74H3v-2h18v2z"
                                                                    fill="#16191C"
                                                                    fillRule="nonzero"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="text-alignment-option">
                                                        <div className="text-alignment-button selected">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                className="icon icon-svg icon-color icon-size-24"
                                                                role="presentation"
                                                                aria-describedby="tooltip-32"
                                                            >
                                                                <g fill="#16191C" fillRule="nonzero">
                                                                    <path d="M3 11h18v2H3zM13.004 17.68v4.257h-2v-4.265l-2.021 2.022-1.415-1.415 3.018-3.017-.002-.002 1.414-1.414.002.002.002-.002 1.414 1.414-.002.002 3.018 3.017-1.415 1.415-2.013-2.014zM10.996 6.32V2.062h2v4.266l2.021-2.022 1.415 1.415-3.018 3.017.002.002-1.414 1.414-.002-.002-.002.002-1.414-1.414.002-.002-3.018-3.017 1.415-1.415 2.013 2.014z" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="text-alignment-option">
                                                        <div className="text-alignment-button">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                className="icon icon-svg icon-color icon-size-24"
                                                                role="presentation"
                                                                aria-describedby="tooltip-33"
                                                            >
                                                                <path
                                                                    d="M11 13.382V3.88h2v9.511l2.021-2.021 1.415 1.414-3.018 3.017.002.002-1.414 1.415-.002-.002-.002.002-1.414-1.415.002-.002-3.018-3.017 1.415-1.414L11 13.382zm-8 4.74h18v2H3v-2z"
                                                                    fill="#16191C"
                                                                    fillRule="nonzero"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="element-text-overflow-block form-group">
                                            <label className="control-label">
                                                <span>Overflow</span>
                                            </label>
                                            <div className="value-wrapper">
                                                <div className="ant-select ant-select-enabled">
                                                    <div
                                                        className="ant-select-selection
          ant-select-selection--single"
                                                        role="combobox"
                                                        aria-autocomplete="list"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        tabIndex={0}
                                                    >
                                                        <div className="ant-select-selection__rendered">
                                                            <div
                                                                className="ant-select-selection-selected-value"
                                                                title="Visible"
                                                                style={{ display: "block", opacity: 1 }}
                                                            >
                                                                Visible
                                                            </div>
                                                        </div>
                                                        <span
                                                            className="ant-select-arrow"
                                                            unselectable="unselectable"
                                                            style={{ userSelect: "none" }}
                                                        >
                        <b />
                      </span>
                                                    </div>
                                                </div>
                                                <i className="icon-down" />
                                            </div>
                                        </div>
                                        <div className="spacing-input-block form-group">
                                            <label className="control-label">
                                                <span>Spacing</span>
                                            </label>
                                            <div className="spacing-input">
                  <span className="scrubbable-input">
                    <div className="form-group">
                      <input
                          type="text"
                          className="form-control"
                          defaultValue={0}
                      />
                    </div>
                  </span>
                                                <span className="help-block">
                    <span>Character</span>
                  </span>
                                            </div>
                                            <div className="spacing-input">
                  <span className="scrubbable-input">
                    <div className="form-group">
                      <input
                          type="text"
                          className="form-control"
                          defaultValue="1.2"
                      />
                    </div>
                  </span>
                                                <span className="help-block">
                    <span>Line</span>
                  </span>
                                            </div>
                                            <div className="spacing-input">
                  <span className="scrubbable-input">
                    <div className="form-group">
                      <input
                          type="text"
                          className="form-control"
                          defaultValue={0}
                      />
                    </div>
                  </span>
                                                <span className="help-block">
                    <span>Padding</span>
                  </span>
                                            </div>
                                        </div>
                                        <div className="text-effect-wrapper">
                                            <div className="text-effect-picker form-group">
                                                <label className="control-label">
                                                    <span>Text Effect</span>
                                                </label>
                                                <div className="value-wrapper">
                                                    <div className="ant-select ant-select-enabled">
                                                        <div
                                                            className="ant-select-selection
          ant-select-selection--single"
                                                            role="combobox"
                                                            aria-autocomplete="list"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            tabIndex={0}
                                                        >
                                                            <div className="ant-select-selection__rendered">
                                                                <div
                                                                    className="ant-select-selection-selected-value"
                                                                    title="None"
                                                                    style={{ display: "block", opacity: 1 }}
                                                                >
                                                                    None
                                                                </div>
                                                            </div>
                                                            <span
                                                                className="ant-select-arrow"
                                                                unselectable="unselectable"
                                                                style={{ userSelect: "none" }}
                                                            >
                          <b />
                        </span>
                                                        </div>
                                                    </div>
                                                    <i className="icon-down" />
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                    <div className="element-alignment-block horizontal form-group demo-edit-image">
                                        <label className="control-label">
                                            <span>Flip</span>
                                        </label>
                                        <div className="alignment-buttons">
                                            <div className="text-alignment-input">
                                                <div className="text-alignment-option">
                                                    <div className="text-alignment-button selected">
                                                        <svg className="icon icon-svg icon-color icon-size-24"
                                                             xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M15.97 15.25h-2.72c-5.3 0-9.5-2.15-9.5-4.5s4.2-4.5 9.5-4.5c3.03 0 5.82.7 7.62 1.86a.75.75 0 1 0 .81-1.26c-2.06-1.33-5.13-2.1-8.43-2.1-6.02 0-11 2.55-11 6s4.98 6 11 6h2.8l-2.3 2.3a.75.75 0 1 0 1.07 1.05l2.83-2.82c.68-.69.68-1.8 0-2.48l-2.83-2.83a.75.75 0 0 0-1.06 1.06l2.21 2.22z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="text-alignment-option">
                                                    <div className="text-alignment-button ">
                                                        <svg className="icon icon-svg icon-color icon-size-24"
                                                             xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M15.25 8.35v2.4c0 5.3-2.15 9.5-4.5 9.5s-4.5-4.2-4.5-9.5c0-3.03.7-5.82 1.86-7.62a.75.75 0 1 0-1.26-.81c-1.33 2.06-2.1 5.13-2.1 8.43 0 6.02 2.55 11 6 11s6-4.98 6-11V8.27l2.3 2.3A.75.75 0 1 0 20.1 9.5l-2.82-2.83a1.75 1.75 0 0 0-2.48 0L11.97 9.5a.75.75 0 1 0 1.06 1.06l2.22-2.22z" />
                                                        </svg>
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
                <div className="mytext" style={{display: !this.state.showEdit ? '' : 'none', marginTop: '16px'}}>

                    <div className="_0fYpqw"
                         style={
                             {transformOrigin: '0 0'}
                         }>
                        <div className="_-U6mfw Uj6COw">
                            <div>
                                <div className>
                                    <div>
                                        <div className="D-ZUcw" style={{ margin: "-4px 0px" }}>
                                            {tiles}
                                        </div>
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

export default MyMediaCustomization;