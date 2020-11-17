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
                            <div className="edit-element-btn visible" type="visible" aria-describedby="tooltip-34" >
                                <svg viewBox="0 0 16 16" className="icon icon-svg icon-color icon-size-18" role="presentation" >
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M8 5.667c-1.43 0-2.589 1.194-2.589 2.667C5.411 9.806 6.57 11 8 11s2.589-1.194 2.589-2.666C10.589 6.86 9.43 5.667 8 5.667m0 1.5c.6 0 1.089.523 1.089 1.167C9.089 8.977 8.6 9.5 8 9.5s-1.089-.523-1.089-1.166c0-.644.489-1.167 1.089-1.167" fill="#000" fillRule="nonzero" />
                                        <path d="M8 3C4.453 3 1.426 6.207.245 7.647a1.083 1.083 0 000 1.373C1.426 10.46 4.453 13.667 8 13.667c3.548 0 6.574-3.207 7.755-4.647a1.083 1.083 0 000-1.373C14.574 6.207 11.548 3 8 3m0 1.5c2.767 0 5.364 2.663 6.372 3.833-1.008 1.17-3.605 3.834-6.372 3.834S2.636 9.504 1.627 8.333C2.635 7.163 5.233 4.5 8 4.5" fill="#000" fillRule="nonzero" />
                                    </g>
                                </svg>
                            </div>
                            <div className="edit-element-btn locked" type="locked" aria-describedby="tooltip-35" >
                                <i className="icon-unlock" />
                            </div>
                            <div className=" alignment-selection">
                                <button id="element-menu-canvas-alignment-selection" type="button" className="mask-options ant-dropdown-trigger sds-dropdown btn btn-outline btn-outline-secondary">
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
                                <button id="element-menu-canvas-alignment-selection" type="button" className="ant-dropdown-trigger sds-dropdown btn btn-outline btn-outline-secondary" >
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
                                    <div className="element-font-select form-group">
                                        <label className="control-label">
                                            <span>Typeface</span>
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