import React, {Component} from 'react'
const EventListenerMode = {capture: true};

class MyTimeline extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showTimeline:false,
            showPlayBtn:true,
            timePosition: 0,
            currentVideoTime: 0
        }
    }

    componentDidMount() {
        let vid = $('#mycanvas').find('video').get(0)
        vid.ontimeupdate = () =>{
            let val = vid.currentTime/vid.duration
            this.setState({timePosition: val*100+'%'})
        };
    }

    toggleTimeline(){
        //console.log('HEYEY')
        if(this.state.showTimeline){
            this.setState({showTimeline:false})
        }else{
            this.setState({showTimeline:true})
        }
    }
    togglePlayBtn(){
        let vid = $('#mycanvas').find('video').get(0)
        if(this.state.showPlayBtn){
            vid.play();
            this.setState({showPlayBtn:false})
        }else{
            vid.pause();
            this.setState({showPlayBtn:true})
        }
    }

    dragXTimePosition(e){
        //  e.preventDefault()
       //this.setState({timePosition: 0.5*100+'%'})
        document.onmouseup = () => {
            //console.log('closeDragElement')
            document.onmouseup = null
            document.onmousemove = null
        }
        document.onmousemove = (e) => {
            let width = $('.tick-wrapper').width()
            let val = (e.clientX-128)/width //Todo: 128 = $('.time-position').offset().left, to clone later on
            //console.log('Im down', width, msX, va)
            if(val>=0 && val<=1){
                let vid = $('#mycanvas').find('video').get(0)
                this.setState({timePosition: val*100+'%', currentVideoTime:val*vid.duration})
                vid.currentTime = val*vid.duration
                //console.log('vid.currentTime', vid.currentTime)
            }

        }
    }
    elementDrag (e)  {
        console.log('elementDrag')
    }
    closeDragElement = () => {
        console.log('closeDragElement')
    }

    render() {
        return (<footer className={"mytimeline"}>
            <nav className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse">
                <div className="timeline-shown" id="lower-third">
                    <div className="edit-advanced-button">
                        <div aria-describedby="tooltip-2">
                            <svg
                                role="presentation"
                                className="icon icon-color"
                                width="11px"
                                height="7px"
                                viewBox="0 0 11 7"
                                version="1.1"
                                style={{transform: this.state.showTimeline  ? 'rotate(0deg)' : 'rotate(180deg)'}}
                                onClick={() => this.toggleTimeline()}>
                                <title>Rectangle 3078</title>
                                <desc>Created with Sketch.</desc>
                                <defs/>
                                <g
                                    id="Snapstrap"
                                    stroke="none"
                                    strokeWidth={1}
                                    fill="none"
                                    fillRule="evenodd"
                                >
                                    <g
                                        id="SnapstrapStructure"
                                        transform="translate(-184.000000, -89.000000)"
                                        fill="#FFFFFF"
                                    >
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
                    </div>
                    <div className="lower-container" >
                        <div className="time-control">
                            <div className="play-toggle">
                                <div className="play-toggle-btn" aria-describedby="tooltip-41" onClick={() => this.togglePlayBtn()}>
                                    <svg
                                        width={19}
                                        height={24}
                                        viewBox="0 0 19 24"
                                        className="icon icon-svg icon-color icon-size-24 square"
                                        style={{display: this.state.showPlayBtn  ? 'inline-block' : 'none'}}
                                        role="presentation">
                                        <path
                                            d="M17.1 9.6L4.7.6c-.9-.6-2.1-.7-3-.2C.7.9.1 1.9.1 3v18.2c0 1.1.6 2.1 1.6 2.6.4.1.8.2 1.3.2.6 0 1.2-.2 1.7-.6l12.4-9.1c.7-.6 1.2-1.4 1.2-2.4 0-.8-.4-1.7-1.2-2.3z"
                                            fill="#231F20"
                                            fillRule="nonzero"
                                        />
                                    </svg>
                                    <svg
                                        width={28}
                                        height={35}
                                        viewBox="0 0 28 35"
                                        className="icon icon-svg icon-color icon-size-24 square"
                                        style={{display: !this.state.showPlayBtn  ? 'inline-block' : 'none'}}
                                        role="presentation">
                                        <g fill="#000" fillRule="evenodd">
                                            <path d="M.289 0h9.976v35H.289zM18.024 0H28v35h-9.976z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="lower-elements">
                            <div className="bottom-shadow" id="panels" style={{display: this.state.showTimeline  ? 'inline-block' : 'none'}}>
                                <div className="timeline-elements">
                                    <div className="timelines-with-grouping">
                                        <div className="exit-target top"/>
                                        <div className="timeline-group">
                                            <div className="timeline-group-items">
                                                <div className="draggable-item-wrapper">
                                                    <div className="draggable-item">
                                                        <div className="element element-red selected">
                                                            <div
                                                                className="element-detail"
                                                                style={{width: 50, flex: "0 0 70px"}}
                                                            >
                                                                <div
                                                                    className="element-thumb-indent"
                                                                    style={{width: 0}}
                                                                />
                                                                <div
                                                                    className="element-thumb-draggable"
                                                                    draggable="true"
                                                                >
                                                                    <div className="element-thumb-wrapper">
                                                                        <div
                                                                            className="element-thumb"
                                                                            aria-describedby="tooltip-40"
                                                                        >
                                                                            <div className="media-element-thumb">
                                                                                <div className="thumbnail-wrapper">
                                                                                    <img
                                                                                        className
                                                                                        src="https://snappublisher.snapchat.com/api/v1/media/5fa8f030-2e99-4cf6-b66d-248a45b50761/file/thumbnail?w=72&templateId=f965b6f6-ae33-4925-982c-0bcde34c9ab8"
                                                                                        width={72}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-time">
                                                                <div className="element-scrubber-container">
                                                                    <div className="element-timeline">
                                                                        <div className="frames selected">
                                                                            <div
                                                                                className="frame-range"
                                                                                style={{left: "0%", width: "100%"}}
                                                                            >
                                                                                <div className="frame-range-left"/>
                                                                                <div className="frame-range-right"/>
                                                                            </div>
                                                                            <div
                                                                                className="element-timeline-currenttime"
                                                                                style={{left: "0%"}}
                                                                            >
                                                                                <div className="filler"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-menu">
                                                                <div className="element-menu-buttons">
                                                                    <div
                                                                        className="edit-element-btn group"
                                                                        type="group"
                                                                        aria-describedby="tooltip-58"
                                                                    >
                                                                        <svg
                                                                            viewBox="0 0 16 16"
                                                                            className="icon icon-svg icon-color icon-size-24"
                                                                            role="presentation"
                                                                        >
                                                                            <path
                                                                                d="M0 4V3a1 1 0 011-1h5.382a1 1 0 01.894.553L8 4h7a1 1 0 011 1v9a1 1 0 01-1 1H1a1 1 0 01-1-1V4zm9.5 4.5V7a1 1 0 10-2 0v1.5H6a1 1 0 100 2h1.5V12a1 1 0 002 0v-1.5H11a1 1 0 000-2H9.5z"
                                                                                fill="#000"
                                                                                fillRule="evenodd"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                    <div
                                                                        className="edit-element-btn copy"
                                                                        type="copy"
                                                                        aria-describedby="tooltip-59"
                                                                    >
                                                                        <svg
                                                                            width={16}
                                                                            height={16}
                                                                            viewBox="0 0 16 16"
                                                                            fill="none"
                                                                            className="icon icon-svg icon-color icon-size-16"
                                                                            role="presentation"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M6.8 0h5.4c.994 0 1.8.832 1.8 1.857v9.286C14 12.168 13.194 13 12.2 13H12V2H5v-.143C5 .832 5.805 0 6.8 0zM4 3h5a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm5 11H4V5h5v9z"
                                                                                fill="#343A40"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                    <div
                                                                        className="edit-element-btn delete"
                                                                        type="delete"
                                                                        aria-describedby="tooltip-60"
                                                                    >
                                                                        <svg
                                                                            width={22}
                                                                            height={24}
                                                                            viewBox="0 0 22 24"
                                                                            className="icon icon-svg icon-color icon-size-16"
                                                                            role="presentation"
                                                                        >
                                                                            <g fillRule="nonzero" fill="#231F20">
                                                                                <path
                                                                                    d="M20 4H2C1.2 4 .6 4.7.6 5.5S1.2 7 2 7h1v15.5c0 .8.7 1.5 1.5 1.5h12.9c.8 0 1.5-.7 1.5-1.5V7h1c.8 0 1.5-.7 1.5-1.5S20.8 4 20 4zM6 21V7h1.3v14H6zm4.3 0V7h1.5v14h-1.5zm4.4 0V7H16v14h-1.3zM15 3H7c-.8 0-1.4-.7-1.4-1.5S6.2 0 7 0h8c.8 0 1.5.7 1.5 1.5-.1.8-.7 1.5-1.5 1.5"/>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="draggable-item-wrapper">
                                                    <div className="draggable-item">
                                                        <div className="element element-tan">
                                                            <div
                                                                className="element-detail"
                                                                style={{width: 50, flex: "0 0 70px"}}
                                                            >
                                                                <div
                                                                    className="element-thumb-indent"
                                                                    style={{width: 0}}
                                                                />
                                                                <div
                                                                    className="element-thumb-draggable"
                                                                    draggable="true"
                                                                >
                                                                    <div className="element-thumb-wrapper">
                                                                        <div
                                                                            className="element-thumb noborder"
                                                                            aria-describedby="tooltip-43"
                                                                        >
                                                                            <div
                                                                                className="media-element-thumb nobackground">
                                                                                <div className="thumbnail-wrapper">
                                                                                    <div
                                                                                        className="element-group-thumb">
                                                                                        <svg
                                                                                            viewBox="0 0 24 24"
                                                                                            className="icon icon-svg icon-color icon-size-36"
                                                                                            role="presentation"
                                                                                        >
                                                                                            <path
                                                                                                d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z"/>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-time">
                                                                <div className="element-scrubber-container">
                                                                    <div className="element-timeline">
                                                                        <div className="frames">
                                                                            <div
                                                                                className="frame-range"
                                                                                style={{left: "0%", width: "100%"}}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-menu"/>
                                                        </div>
                                                    </div>
                                                    <div className="timeline-group">
                                                        <div
                                                            className="group-toggle"
                                                            style={{
                                                                cursor: "pointer",
                                                                position: "absolute",
                                                                top: "-23px",
                                                                left: 0,
                                                                transform: "rotate(-90deg)",
                                                                transition: "transform 500ms ease 0s"
                                                            }}
                                                        >
                                                            <svg
                                                                role="presentation"
                                                                className="icon icon-color"
                                                                width="11px"
                                                                height="7px"
                                                                viewBox="0 0 11 7"
                                                                version="1.1"
                                                            >
                                                                <title>Rectangle 3078</title>
                                                                <desc>Created with Sketch.</desc>
                                                                <defs/>
                                                                <g
                                                                    id="Snapstrap"
                                                                    stroke="none"
                                                                    strokeWidth={1}
                                                                    fill="none"
                                                                    fillRule="evenodd"
                                                                >
                                                                    <g
                                                                        id="SnapstrapStructure"
                                                                        transform="translate(-184.000000, -89.000000)"
                                                                        fill="#FFFFFF"
                                                                    >
                                                                        <g
                                                                            id="Done"
                                                                            transform="translate(179.000000, 67.000000)"
                                                                        >
                                                                            <path
                                                                                d="M10.4405247,26.3145238 L6.35593723,22.2299363 C6.05187578,21.9258748 5.54376523,21.9205836 5.23363568,22.2307132 C4.92134397,22.5430049 4.92315831,23.0433142 5.23285879,23.3530147 L9.74488546,27.8650414 C9.93103644,28.0511924 10.1936665,28.1253621 10.4405247,28.0837299 C10.687383,28.1253621 10.9500131,28.0511924 11.136164,27.8650414 L15.6481907,23.3530147 C15.9578912,23.0433142 15.9597055,22.5430049 15.6474138,22.2307132 C15.3372843,21.9205836 14.8291737,21.9258748 14.5251123,22.2299363 L10.4405247,26.3145238 Z"
                                                                                id="Rectangle-3078"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="timeline-group-items"/>
                                                    </div>
                                                </div>
                                                <div className="draggable-item-wrapper">
                                                    <div className="draggable-item">
                                                        <div className="element element-tan">
                                                            <div
                                                                className="element-detail"
                                                                style={{width: 50, flex: "0 0 70px"}}
                                                            >
                                                                <div
                                                                    className="element-thumb-indent"
                                                                    style={{width: 0}}
                                                                />
                                                                <div
                                                                    className="element-thumb-draggable"
                                                                    draggable="true"
                                                                >
                                                                    <div className="element-thumb-wrapper">
                                                                        <div
                                                                            className="element-thumb noborder"
                                                                            aria-describedby="tooltip-43"
                                                                        >
                                                                            <div
                                                                                className="media-element-thumb nobackground">
                                                                                <div className="thumbnail-wrapper">
                                                                                    <div
                                                                                        className="element-group-thumb">
                                                                                        <svg
                                                                                            viewBox="0 0 24 24"
                                                                                            className="icon icon-svg icon-color icon-size-36"
                                                                                            role="presentation"
                                                                                        >
                                                                                            <path
                                                                                                d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z"/>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-time">
                                                                <div className="element-scrubber-container">
                                                                    <div className="element-timeline">
                                                                        <div className="frames">
                                                                            <div
                                                                                className="frame-range"
                                                                                style={{left: "0%", width: "100%"}}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-menu"/>
                                                        </div>
                                                    </div>
                                                    <div className="timeline-group">
                                                        <div
                                                            className="group-toggle"
                                                            style={{
                                                                cursor: "pointer",
                                                                position: "absolute",
                                                                top: "-23px",
                                                                left: 0,
                                                                transform: "rotate(-90deg)",
                                                                transition: "transform 500ms ease 0s"
                                                            }}
                                                        >
                                                            <svg
                                                                role="presentation"
                                                                className="icon icon-color"
                                                                width="11px"
                                                                height="7px"
                                                                viewBox="0 0 11 7"
                                                                version="1.1"
                                                            >
                                                                <title>Rectangle 3078</title>
                                                                <desc>Created with Sketch.</desc>
                                                                <defs/>
                                                                <g
                                                                    id="Snapstrap"
                                                                    stroke="none"
                                                                    strokeWidth={1}
                                                                    fill="none"
                                                                    fillRule="evenodd"
                                                                >
                                                                    <g
                                                                        id="SnapstrapStructure"
                                                                        transform="translate(-184.000000, -89.000000)"
                                                                        fill="#FFFFFF"
                                                                    >
                                                                        <g
                                                                            id="Done"
                                                                            transform="translate(179.000000, 67.000000)"
                                                                        >
                                                                            <path
                                                                                d="M10.4405247,26.3145238 L6.35593723,22.2299363 C6.05187578,21.9258748 5.54376523,21.9205836 5.23363568,22.2307132 C4.92134397,22.5430049 4.92315831,23.0433142 5.23285879,23.3530147 L9.74488546,27.8650414 C9.93103644,28.0511924 10.1936665,28.1253621 10.4405247,28.0837299 C10.687383,28.1253621 10.9500131,28.0511924 11.136164,27.8650414 L15.6481907,23.3530147 C15.9578912,23.0433142 15.9597055,22.5430049 15.6474138,22.2307132 C15.3372843,21.9205836 14.8291737,21.9258748 14.5251123,22.2299363 L10.4405247,26.3145238 Z"
                                                                                id="Rectangle-3078"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="timeline-group-items"/>
                                                    </div>
                                                </div>
                                                <div className="draggable-item-wrapper">
                                                    <div className="draggable-item">
                                                        <div className="element element-light-blue">
                                                            <div
                                                                className="element-detail"
                                                                style={{width: 50, flex: "0 0 70px"}}
                                                            >
                                                                <div
                                                                    className="element-thumb-indent"
                                                                    style={{width: 0}}
                                                                />
                                                                <div
                                                                    className="element-thumb-draggable"
                                                                    draggable="true"
                                                                >
                                                                    <div className="element-thumb-wrapper">
                                                                        <div
                                                                            className="element-thumb"
                                                                            aria-describedby="tooltip-16"
                                                                        >
                                                                            <div className="media-element-thumb">
                                                                                <div className="thumbnail-wrapper">
                                                                                    <div className="image-clip">
                                                                                        <svg
                                                                                            height={400}
                                                                                            viewBox="0 0 400 400"
                                                                                            width={400}
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            style={{
                                                                                                width: "100%",
                                                                                                height: "100%",
                                                                                                transform: "scale(1)",
                                                                                                transformOrigin: "left top"
                                                                                            }}
                                                                                        >
                                                                                            <rect
                                                                                                height={400}
                                                                                                width={400}
                                                                                                style={{
                                                                                                    fill: "rgb(27, 38, 49)",
                                                                                                    strokeWidth: 0,
                                                                                                    stroke: "rgb(0, 0, 0)"
                                                                                                }}
                                                                                            />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-time">
                                                                <div className="element-scrubber-container">
                                                                    <div className="element-timeline">
                                                                        <div className="frames">
                                                                            <div
                                                                                className="frame-range"
                                                                                style={{left: "0%", width: "100%"}}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-menu"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="draggable-item-wrapper">
                                                    <div className="draggable-item">
                                                        <div className="element element-tan">
                                                            <div
                                                                className="element-detail"
                                                                style={{width: 50, flex: "0 0 70px"}}
                                                            >
                                                                <div
                                                                    className="element-thumb-indent"
                                                                    style={{width: 0}}
                                                                />
                                                                <div
                                                                    className="element-thumb-draggable"
                                                                    draggable="true"
                                                                >
                                                                    <div className="element-thumb-wrapper">
                                                                        <div
                                                                            className="element-thumb noborder"
                                                                            aria-describedby="tooltip-43"
                                                                        >
                                                                            <div
                                                                                className="media-element-thumb nobackground">
                                                                                <div className="thumbnail-wrapper">
                                                                                    <div
                                                                                        className="element-group-thumb">
                                                                                        <svg
                                                                                            viewBox="0 0 24 24"
                                                                                            className="icon icon-svg icon-color icon-size-36"
                                                                                            role="presentation"
                                                                                        >
                                                                                            <path
                                                                                                d="M19 20H4a2 2 0 01-2-2V6c0-1.11.89-2 2-2h6l2 2h7a2 2 0 012 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z"/>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-time">
                                                                <div className="element-scrubber-container">
                                                                    <div className="element-timeline">
                                                                        <div className="frames">
                                                                            <div
                                                                                className="frame-range"
                                                                                style={{
                                                                                    left: "70.2341%",
                                                                                    width: "29.7659%"
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-menu"/>
                                                        </div>
                                                    </div>
                                                    <div className="timeline-group">
                                                        <div
                                                            className="group-toggle"
                                                            style={{
                                                                cursor: "pointer",
                                                                position: "absolute",
                                                                top: "-23px",
                                                                left: 0,
                                                                transform: "rotate(0deg)",
                                                                transition: "transform 500ms ease 0s"
                                                            }}
                                                        >
                                                            <svg
                                                                role="presentation"
                                                                className="icon icon-color"
                                                                width="11px"
                                                                height="7px"
                                                                viewBox="0 0 11 7"
                                                                version="1.1"
                                                            >
                                                                <title>Rectangle 3078</title>
                                                                <desc>Created with Sketch.</desc>
                                                                <defs/>
                                                                <g
                                                                    id="Snapstrap"
                                                                    stroke="none"
                                                                    strokeWidth={1}
                                                                    fill="none"
                                                                    fillRule="evenodd"
                                                                >
                                                                    <g
                                                                        id="SnapstrapStructure"
                                                                        transform="translate(-184.000000, -89.000000)"
                                                                        fill="#FFFFFF"
                                                                    >
                                                                        <g
                                                                            id="Done"
                                                                            transform="translate(179.000000, 67.000000)"
                                                                        >
                                                                            <path
                                                                                d="M10.4405247,26.3145238 L6.35593723,22.2299363 C6.05187578,21.9258748 5.54376523,21.9205836 5.23363568,22.2307132 C4.92134397,22.5430049 4.92315831,23.0433142 5.23285879,23.3530147 L9.74488546,27.8650414 C9.93103644,28.0511924 10.1936665,28.1253621 10.4405247,28.0837299 C10.687383,28.1253621 10.9500131,28.0511924 11.136164,27.8650414 L15.6481907,23.3530147 C15.9578912,23.0433142 15.9597055,22.5430049 15.6474138,22.2307132 C15.3372843,21.9205836 14.8291737,21.9258748 14.5251123,22.2299363 L10.4405247,26.3145238 Z"
                                                                                id="Rectangle-3078"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="timeline-group-items">
                                                            <div className="draggable-item-wrapper">
                                                                <div className="draggable-item">
                                                                    <div className="element element-light-blue">
                                                                        <div
                                                                            className="element-detail"
                                                                            style={{width: 50, flex: "0 0 70px"}}
                                                                        >
                                                                            <div
                                                                                className="element-thumb-indent"
                                                                                style={{width: 20}}
                                                                            />
                                                                            <div
                                                                                className="element-thumb-draggable"
                                                                                draggable="true"
                                                                            >
                                                                                <div className="element-thumb-wrapper">
                                                                                    <div
                                                                                        className="element-thumb"
                                                                                        aria-describedby="tooltip-16"
                                                                                    >
                                                                                        <div
                                                                                            className="media-element-thumb">
                                                                                            <div
                                                                                                className="thumbnail-wrapper">
                                                                                                <div
                                                                                                    className="image-clip">
                                                                                                    <svg
                                                                                                        height={400}
                                                                                                        viewBox="0 0 400 400"
                                                                                                        width={400}
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        style={{
                                                                                                            width: "100%",
                                                                                                            height: "100%",
                                                                                                            transform: "scale(1)",
                                                                                                            transformOrigin: "left top"
                                                                                                        }}
                                                                                                    >
                                                                                                        <rect
                                                                                                            height={400}
                                                                                                            width={400}
                                                                                                            style={{
                                                                                                                fill: "rgb(27, 38, 49)",
                                                                                                                strokeWidth: 0,
                                                                                                                stroke: "rgb(0, 0, 0)"
                                                                                                            }}
                                                                                                        />
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-time">
                                                                            <div className="element-scrubber-container">
                                                                                <div className="element-timeline">
                                                                                    <div className="frames">
                                                                                        <div
                                                                                            className="frame-range"
                                                                                            style={{
                                                                                                left: "70.2341%",
                                                                                                width: "5.01672%"
                                                                                            }}
                                                                                        />
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={210}
                                                                                            style={{
                                                                                                left: "70.2341%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={225}
                                                                                            style={{
                                                                                                left: "75.2508%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-menu"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="draggable-item-wrapper">
                                                                <div className="draggable-item">
                                                                    <div className="element element-red">
                                                                        <div
                                                                            className="element-detail"
                                                                            style={{width: 50, flex: "0 0 70px"}}
                                                                        >
                                                                            <div
                                                                                className="element-thumb-indent"
                                                                                style={{width: 20}}
                                                                            />
                                                                            <div
                                                                                className="element-thumb-draggable"
                                                                                draggable="true"
                                                                            >
                                                                                <div className="element-thumb-wrapper">
                                                                                    <div
                                                                                        className="element-thumb"
                                                                                        aria-describedby="tooltip-19"
                                                                                    >
                                                                                        <div
                                                                                            className="media-element-thumb">
                                                                                            <div
                                                                                                className="thumbnail-wrapper">
                                                                                                <img
                                                                                                    className
                                                                                                    src="https://snappublisher.snapchat.com/api/v1/media/4df15e35-dc52-426f-8ed5-03a3df33a24e/file/thumbnail?w=72&templateId=f965b6f6-ae33-4925-982c-0bcde34c9ab8"
                                                                                                    width={72}
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-time">
                                                                            <div className="element-scrubber-container">
                                                                                <div className="element-timeline">
                                                                                    <div className="frames">
                                                                                        <div
                                                                                            className="frame-range"
                                                                                            style={{
                                                                                                left: "70.2341%",
                                                                                                width: "29.7659%"
                                                                                            }}
                                                                                        />
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={210}
                                                                                            style={{
                                                                                                left: "70.2341%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={299}
                                                                                            style={{
                                                                                                left: "100%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-menu"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="draggable-item-wrapper">
                                                    <div className="draggable-item">
                                                        <div className="element element-tan">
                                                            <div
                                                                className="element-detail"
                                                                style={{width: 50, flex: "0 0 70px"}}
                                                            >
                                                                <div
                                                                    className="element-thumb-indent"
                                                                    style={{width: 0}}
                                                                />
                                                                <div
                                                                    className="element-thumb-draggable"
                                                                    draggable="true"
                                                                >
                                                                    <div className="element-thumb-wrapper">
                                                                        <div
                                                                            className="element-thumb noborder"
                                                                            aria-describedby="tooltip-43"
                                                                        >
                                                                            <div
                                                                                className="media-element-thumb nobackground">
                                                                                <div className="thumbnail-wrapper">
                                                                                    <div
                                                                                        className="element-group-thumb">
                                                                                        <svg
                                                                                            viewBox="0 0 24 24"
                                                                                            className="icon icon-svg icon-color icon-size-36"
                                                                                            role="presentation"
                                                                                        >
                                                                                            <path
                                                                                                d="M19 20H4a2 2 0 01-2-2V6c0-1.11.89-2 2-2h6l2 2h7a2 2 0 012 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z"/>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-time">
                                                                <div className="element-scrubber-container">
                                                                    <div className="element-timeline">
                                                                        <div className="frames">
                                                                            <div
                                                                                className="frame-range"
                                                                                style={{
                                                                                    left: "45.1505%",
                                                                                    width: "30.1003%"
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-menu"/>
                                                        </div>
                                                    </div>
                                                    <div className="timeline-group">
                                                        <div
                                                            className="group-toggle"
                                                            style={{
                                                                cursor: "pointer",
                                                                position: "absolute",
                                                                top: "-23px",
                                                                left: 0,
                                                                transform: "rotate(0deg)",
                                                                transition: "transform 500ms ease 0s"
                                                            }}
                                                        >
                                                            <svg
                                                                role="presentation"
                                                                className="icon icon-color"
                                                                width="11px"
                                                                height="7px"
                                                                viewBox="0 0 11 7"
                                                                version="1.1"
                                                            >
                                                                <title>Rectangle 3078</title>
                                                                <desc>Created with Sketch.</desc>
                                                                <defs/>
                                                                <g
                                                                    id="Snapstrap"
                                                                    stroke="none"
                                                                    strokeWidth={1}
                                                                    fill="none"
                                                                    fillRule="evenodd"
                                                                >
                                                                    <g
                                                                        id="SnapstrapStructure"
                                                                        transform="translate(-184.000000, -89.000000)"
                                                                        fill="#FFFFFF"
                                                                    >
                                                                        <g
                                                                            id="Done"
                                                                            transform="translate(179.000000, 67.000000)"
                                                                        >
                                                                            <path
                                                                                d="M10.4405247,26.3145238 L6.35593723,22.2299363 C6.05187578,21.9258748 5.54376523,21.9205836 5.23363568,22.2307132 C4.92134397,22.5430049 4.92315831,23.0433142 5.23285879,23.3530147 L9.74488546,27.8650414 C9.93103644,28.0511924 10.1936665,28.1253621 10.4405247,28.0837299 C10.687383,28.1253621 10.9500131,28.0511924 11.136164,27.8650414 L15.6481907,23.3530147 C15.9578912,23.0433142 15.9597055,22.5430049 15.6474138,22.2307132 C15.3372843,21.9205836 14.8291737,21.9258748 14.5251123,22.2299363 L10.4405247,26.3145238 Z"
                                                                                id="Rectangle-3078"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="timeline-group-items">
                                                            <div className="draggable-item-wrapper">
                                                                <div className="draggable-item">
                                                                    <div className="element element-light-blue">
                                                                        <div
                                                                            className="element-detail"
                                                                            style={{width: 50, flex: "0 0 70px"}}
                                                                        >
                                                                            <div
                                                                                className="element-thumb-indent"
                                                                                style={{width: 20}}
                                                                            />
                                                                            <div
                                                                                className="element-thumb-draggable"
                                                                                draggable="true"
                                                                            >
                                                                                <div className="element-thumb-wrapper">
                                                                                    <div
                                                                                        className="element-thumb"
                                                                                        aria-describedby="tooltip-16"
                                                                                    >
                                                                                        <div
                                                                                            className="media-element-thumb">
                                                                                            <div
                                                                                                className="thumbnail-wrapper">
                                                                                                <div
                                                                                                    className="image-clip">
                                                                                                    <svg
                                                                                                        height={400}
                                                                                                        viewBox="0 0 400 400"
                                                                                                        width={400}
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        style={{
                                                                                                            width: "100%",
                                                                                                            height: "100%",
                                                                                                            transform: "scale(1)",
                                                                                                            transformOrigin: "left top"
                                                                                                        }}
                                                                                                    >
                                                                                                        <rect
                                                                                                            height={400}
                                                                                                            width={400}
                                                                                                            style={{
                                                                                                                fill: "rgb(27, 38, 49)",
                                                                                                                strokeWidth: 0,
                                                                                                                stroke: "rgb(0, 0, 0)"
                                                                                                            }}
                                                                                                        />
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-time">
                                                                            <div className="element-scrubber-container">
                                                                                <div className="element-timeline">
                                                                                    <div className="frames">
                                                                                        <div
                                                                                            className="frame-range"
                                                                                            style={{
                                                                                                left: "45.1505%",
                                                                                                width: "5.01672%"
                                                                                            }}
                                                                                        />
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={135}
                                                                                            style={{
                                                                                                left: "45.1505%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={150}
                                                                                            style={{
                                                                                                left: "50.1672%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-menu"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="draggable-item-wrapper">
                                                                <div className="draggable-item">
                                                                    <div className="element element-red">
                                                                        <div
                                                                            className="element-detail"
                                                                            style={{width: 50, flex: "0 0 70px"}}
                                                                        >
                                                                            <div
                                                                                className="element-thumb-indent"
                                                                                style={{width: 20}}
                                                                            />
                                                                            <div
                                                                                className="element-thumb-draggable"
                                                                                draggable="true"
                                                                            >
                                                                                <div className="element-thumb-wrapper">
                                                                                    <div
                                                                                        className="element-thumb"
                                                                                        aria-describedby="tooltip-17"
                                                                                    >
                                                                                        <div
                                                                                            className="media-element-thumb">
                                                                                            <div
                                                                                                className="thumbnail-wrapper">
                                                                                                <img
                                                                                                    className
                                                                                                    src="https://snappublisher.snapchat.com/api/v1/media/63721d39-84d6-43b0-a29b-b26d9209749f/file/thumbnail?w=72&templateId=f965b6f6-ae33-4925-982c-0bcde34c9ab8"
                                                                                                    width={72}
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-time">
                                                                            <div className="element-scrubber-container">
                                                                                <div className="element-timeline">
                                                                                    <div className="frames">
                                                                                        <div
                                                                                            className="frame-range"
                                                                                            style={{
                                                                                                left: "45.1505%",
                                                                                                width: "30.1003%"
                                                                                            }}
                                                                                        />
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={135}
                                                                                            style={{
                                                                                                left: "45.1505%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={225}
                                                                                            style={{
                                                                                                left: "75.2508%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-menu"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="draggable-item-wrapper">
                                                    <div className="draggable-item">
                                                        <div className="element element-tan">
                                                            <div
                                                                className="element-detail"
                                                                style={{width: 50, flex: "0 0 70px"}}
                                                            >
                                                                <div
                                                                    className="element-thumb-indent"
                                                                    style={{width: 0}}
                                                                />
                                                                <div
                                                                    className="element-thumb-draggable"
                                                                    draggable="true"
                                                                >
                                                                    <div className="element-thumb-wrapper">
                                                                        <div
                                                                            className="element-thumb noborder"
                                                                            aria-describedby="tooltip-43"
                                                                        >
                                                                            <div
                                                                                className="media-element-thumb nobackground">
                                                                                <div className="thumbnail-wrapper">
                                                                                    <div
                                                                                        className="element-group-thumb">
                                                                                        <svg
                                                                                            viewBox="0 0 24 24"
                                                                                            className="icon icon-svg icon-color icon-size-36"
                                                                                            role="presentation"
                                                                                        >
                                                                                            <path
                                                                                                d="M19 20H4a2 2 0 01-2-2V6c0-1.11.89-2 2-2h6l2 2h7a2 2 0 012 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z"/>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-time">
                                                                <div className="element-scrubber-container">
                                                                    <div className="element-timeline">
                                                                        <div className="frames">
                                                                            <div
                                                                                className="frame-range"
                                                                                style={{
                                                                                    left: "20.0669%",
                                                                                    width: "30.1003%"
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-menu"/>
                                                        </div>
                                                    </div>
                                                    <div className="timeline-group">
                                                        <div
                                                            className="group-toggle"
                                                            style={{
                                                                cursor: "pointer",
                                                                position: "absolute",
                                                                top: "-23px",
                                                                left: 0,
                                                                transform: "rotate(0deg)",
                                                                transition: "transform 500ms ease 0s"
                                                            }}
                                                        >
                                                            <svg
                                                                role="presentation"
                                                                className="icon icon-color"
                                                                width="11px"
                                                                height="7px"
                                                                viewBox="0 0 11 7"
                                                                version="1.1"
                                                            >
                                                                <title>Rectangle 3078</title>
                                                                <desc>Created with Sketch.</desc>
                                                                <defs/>
                                                                <g
                                                                    id="Snapstrap"
                                                                    stroke="none"
                                                                    strokeWidth={1}
                                                                    fill="none"
                                                                    fillRule="evenodd"
                                                                >
                                                                    <g
                                                                        id="SnapstrapStructure"
                                                                        transform="translate(-184.000000, -89.000000)"
                                                                        fill="#FFFFFF"
                                                                    >
                                                                        <g
                                                                            id="Done"
                                                                            transform="translate(179.000000, 67.000000)"
                                                                        >
                                                                            <path
                                                                                d="M10.4405247,26.3145238 L6.35593723,22.2299363 C6.05187578,21.9258748 5.54376523,21.9205836 5.23363568,22.2307132 C4.92134397,22.5430049 4.92315831,23.0433142 5.23285879,23.3530147 L9.74488546,27.8650414 C9.93103644,28.0511924 10.1936665,28.1253621 10.4405247,28.0837299 C10.687383,28.1253621 10.9500131,28.0511924 11.136164,27.8650414 L15.6481907,23.3530147 C15.9578912,23.0433142 15.9597055,22.5430049 15.6474138,22.2307132 C15.3372843,21.9205836 14.8291737,21.9258748 14.5251123,22.2299363 L10.4405247,26.3145238 Z"
                                                                                id="Rectangle-3078"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="timeline-group-items">
                                                            <div className="draggable-item-wrapper">
                                                                <div className="draggable-item">
                                                                    <div className="element element-light-blue">
                                                                        <div
                                                                            className="element-detail"
                                                                            style={{width: 50, flex: "0 0 70px"}}
                                                                        >
                                                                            <div
                                                                                className="element-thumb-indent"
                                                                                style={{width: 20}}
                                                                            />
                                                                            <div
                                                                                className="element-thumb-draggable"
                                                                                draggable="true"
                                                                            >
                                                                                <div className="element-thumb-wrapper">
                                                                                    <div
                                                                                        className="element-thumb"
                                                                                        aria-describedby="tooltip-16"
                                                                                    >
                                                                                        <div
                                                                                            className="media-element-thumb">
                                                                                            <div
                                                                                                className="thumbnail-wrapper">
                                                                                                <div
                                                                                                    className="image-clip">
                                                                                                    <svg
                                                                                                        height={400}
                                                                                                        viewBox="0 0 400 400"
                                                                                                        width={400}
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        style={{
                                                                                                            width: "100%",
                                                                                                            height: "100%",
                                                                                                            transform: "scale(1)",
                                                                                                            transformOrigin: "left top"
                                                                                                        }}
                                                                                                    >
                                                                                                        <rect
                                                                                                            height={400}
                                                                                                            width={400}
                                                                                                            style={{
                                                                                                                fill: "rgb(27, 38, 49)",
                                                                                                                strokeWidth: 0,
                                                                                                                stroke: "rgb(0, 0, 0)"
                                                                                                            }}
                                                                                                        />
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-time">
                                                                            <div className="element-scrubber-container">
                                                                                <div className="element-timeline">
                                                                                    <div className="frames">
                                                                                        <div
                                                                                            className="frame-range"
                                                                                            style={{
                                                                                                left: "20.0669%",
                                                                                                width: "5.01672%"
                                                                                            }}
                                                                                        />
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={60}
                                                                                            style={{
                                                                                                left: "20.0669%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={75}
                                                                                            style={{
                                                                                                left: "25.0836%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-menu"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="draggable-item-wrapper">
                                                                <div className="draggable-item">
                                                                    <div className="element element-red">
                                                                        <div
                                                                            className="element-detail"
                                                                            style={{width: 50, flex: "0 0 70px"}}
                                                                        >
                                                                            <div
                                                                                className="element-thumb-indent"
                                                                                style={{width: 20}}
                                                                            />
                                                                            <div
                                                                                className="element-thumb-draggable"
                                                                                draggable="true"
                                                                            >
                                                                                <div className="element-thumb-wrapper">
                                                                                    <div
                                                                                        className="element-thumb"
                                                                                        aria-describedby="tooltip-15"
                                                                                    >
                                                                                        <div
                                                                                            className="media-element-thumb">
                                                                                            <div
                                                                                                className="thumbnail-wrapper">
                                                                                                <img
                                                                                                    className
                                                                                                    src="https://snappublisher.snapchat.com/api/v1/media/ad6ad237-eb4b-4829-ac86-a6a197d49d72/file/thumbnail?w=72&templateId=f965b6f6-ae33-4925-982c-0bcde34c9ab8"
                                                                                                    width={72}
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-time">
                                                                            <div className="element-scrubber-container">
                                                                                <div className="element-timeline">
                                                                                    <div className="frames">
                                                                                        <div
                                                                                            className="frame-range"
                                                                                            style={{
                                                                                                left: "20.0669%",
                                                                                                width: "30.1003%"
                                                                                            }}
                                                                                        />
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={60}
                                                                                            style={{
                                                                                                left: "20.0669%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                        <div
                                                                                            className="keyframe"
                                                                                            title={150}
                                                                                            style={{
                                                                                                left: "50.1672%",
                                                                                                visibility: "visible"
                                                                                            }}
                                                                                        >
                                                                                            <div className="filler"/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="element-menu"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="draggable-item-wrapper">
                                                    <div className="draggable-item">
                                                        <div className="element element-red">
                                                            <div
                                                                className="element-detail"
                                                                style={{width: 50, flex: "0 0 70px"}}
                                                            >
                                                                <div
                                                                    className="element-thumb-indent"
                                                                    style={{width: 0}}
                                                                />
                                                                <div
                                                                    className="element-thumb-draggable"
                                                                    draggable="true"
                                                                >
                                                                    <div className="element-thumb-wrapper">
                                                                        <div
                                                                            className="element-thumb"
                                                                            aria-describedby="tooltip-14"
                                                                        >
                                                                            <div className="media-element-thumb">
                                                                                <div className="thumbnail-wrapper">
                                                                                    <img
                                                                                        className
                                                                                        src="https://snappublisher.snapchat.com/api/v1/media/a1f00175-2128-4b6f-a409-2217c4f0bef8/file/thumbnail?w=72&templateId=f965b6f6-ae33-4925-982c-0bcde34c9ab8"
                                                                                        width={72}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-time">
                                                                <div className="element-scrubber-container">
                                                                    <div className="element-timeline">
                                                                        <div className="frames">
                                                                            <div
                                                                                className="frame-range"
                                                                                style={{left: "0%", width: "25.0836%"}}
                                                                            />
                                                                            <div
                                                                                className="keyframe"
                                                                                title={0}
                                                                                style={{
                                                                                    left: "0%",
                                                                                    visibility: "visible"
                                                                                }}
                                                                            >
                                                                                <div className="filler highlight"/>
                                                                            </div>
                                                                            <div
                                                                                className="keyframe"
                                                                                title={75}
                                                                                style={{
                                                                                    left: "25.0836%",
                                                                                    visibility: "visible"
                                                                                }}
                                                                            >
                                                                                <div className="filler"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="element-menu"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="exit-target bottom"/>
                                    </div>
                                </div>
                            </div>
                            <div className="grouping" id="bottom-bar" style={{paddingLeft: 72}}>
                                <div className="time">
                                    <div className="time-ticks">
                                        <div className="tick-wrapper">
                                            <div className="tick tick-0" style={{height: 20, left: "0%"}}/>
                                            <div
                                                className="tick tick-1"
                                                style={{height: 6, left: "0.334448%"}}
                                            />
                                            <div
                                                className="tick tick-2"
                                                style={{height: 6, left: "0.668896%"}}
                                            />
                                            <div
                                                className="tick tick-3"
                                                style={{height: 6, left: "1.00334%"}}
                                            />
                                            <div
                                                className="tick tick-4"
                                                style={{height: 6, left: "1.33779%"}}
                                            />
                                            <div
                                                className="tick tick-5"
                                                style={{height: 10, left: "1.67224%"}}
                                            />
                                            <div
                                                className="tick tick-6"
                                                style={{height: 6, left: "2.00669%"}}
                                            />
                                            <div
                                                className="tick tick-7"
                                                style={{height: 6, left: "2.34114%"}}
                                            />
                                            <div
                                                className="tick tick-8"
                                                style={{height: 6, left: "2.67559%"}}
                                            />
                                            <div
                                                className="tick tick-9"
                                                style={{height: 6, left: "3.01003%"}}
                                            />
                                            <div
                                                className="tick tick-10"
                                                style={{height: 10, left: "3.34448%"}}
                                            />
                                            <div
                                                className="tick tick-11"
                                                style={{height: 6, left: "3.67893%"}}
                                            />
                                            <div
                                                className="tick tick-12"
                                                style={{height: 6, left: "4.01338%"}}
                                            />
                                            <div
                                                className="tick tick-13"
                                                style={{height: 6, left: "4.34783%"}}
                                            />
                                            <div
                                                className="tick tick-14"
                                                style={{height: 6, left: "4.68227%"}}
                                            />
                                            <div
                                                className="tick tick-15"
                                                style={{height: 14, left: "5.01672%"}}
                                            />
                                            <div
                                                className="tick tick-16"
                                                style={{height: 6, left: "5.35117%"}}
                                            />
                                            <div
                                                className="tick tick-17"
                                                style={{height: 6, left: "5.68562%"}}
                                            />
                                            <div
                                                className="tick tick-18"
                                                style={{height: 6, left: "6.02007%"}}
                                            />
                                            <div
                                                className="tick tick-19"
                                                style={{height: 6, left: "6.35452%"}}
                                            />
                                            <div
                                                className="tick tick-20"
                                                style={{height: 10, left: "6.68896%"}}
                                            />
                                            <div
                                                className="tick tick-21"
                                                style={{height: 6, left: "7.02341%"}}
                                            />
                                            <div
                                                className="tick tick-22"
                                                style={{height: 6, left: "7.35786%"}}
                                            />
                                            <div
                                                className="tick tick-23"
                                                style={{height: 6, left: "7.69231%"}}
                                            />
                                            <div
                                                className="tick tick-24"
                                                style={{height: 6, left: "8.02676%"}}
                                            />
                                            <div
                                                className="tick tick-25"
                                                style={{height: 10, left: "8.3612%"}}
                                            />
                                            <div
                                                className="tick tick-26"
                                                style={{height: 6, left: "8.69565%"}}
                                            />
                                            <div
                                                className="tick tick-27"
                                                style={{height: 6, left: "9.0301%"}}
                                            />
                                            <div
                                                className="tick tick-28"
                                                style={{height: 6, left: "9.36455%"}}
                                            />
                                            <div
                                                className="tick tick-29"
                                                style={{height: 6, left: "9.699%"}}
                                            />
                                            <div
                                                className="tick tick-30"
                                                style={{height: 20, left: "10.0334%"}}
                                            >
                                                <span>1s</span>
                                            </div>
                                            <div
                                                className="tick tick-31"
                                                style={{height: 6, left: "10.3679%"}}
                                            />
                                            <div
                                                className="tick tick-32"
                                                style={{height: 6, left: "10.7023%"}}
                                            />
                                            <div
                                                className="tick tick-33"
                                                style={{height: 6, left: "11.0368%"}}
                                            />
                                            <div
                                                className="tick tick-34"
                                                style={{height: 6, left: "11.3712%"}}
                                            />
                                            <div
                                                className="tick tick-35"
                                                style={{height: 10, left: "11.7057%"}}
                                            />
                                            <div
                                                className="tick tick-36"
                                                style={{height: 6, left: "12.0401%"}}
                                            />
                                            <div
                                                className="tick tick-37"
                                                style={{height: 6, left: "12.3746%"}}
                                            />
                                            <div
                                                className="tick tick-38"
                                                style={{height: 6, left: "12.709%"}}
                                            />
                                            <div
                                                className="tick tick-39"
                                                style={{height: 6, left: "13.0435%"}}
                                            />
                                            <div
                                                className="tick tick-40"
                                                style={{height: 10, left: "13.3779%"}}
                                            />
                                            <div
                                                className="tick tick-41"
                                                style={{height: 6, left: "13.7124%"}}
                                            />
                                            <div
                                                className="tick tick-42"
                                                style={{height: 6, left: "14.0468%"}}
                                            />
                                            <div
                                                className="tick tick-43"
                                                style={{height: 6, left: "14.3813%"}}
                                            />
                                            <div
                                                className="tick tick-44"
                                                style={{height: 6, left: "14.7157%"}}
                                            />
                                            <div
                                                className="tick tick-45"
                                                style={{height: 14, left: "15.0502%"}}
                                            />
                                            <div
                                                className="tick tick-46"
                                                style={{height: 6, left: "15.3846%"}}
                                            />
                                            <div
                                                className="tick tick-47"
                                                style={{height: 6, left: "15.7191%"}}
                                            />
                                            <div
                                                className="tick tick-48"
                                                style={{height: 6, left: "16.0535%"}}
                                            />
                                            <div
                                                className="tick tick-49"
                                                style={{height: 6, left: "16.388%"}}
                                            />
                                            <div
                                                className="tick tick-50"
                                                style={{height: 10, left: "16.7224%"}}
                                            />
                                            <div
                                                className="tick tick-51"
                                                style={{height: 6, left: "17.0569%"}}
                                            />
                                            <div
                                                className="tick tick-52"
                                                style={{height: 6, left: "17.3913%"}}
                                            />
                                            <div
                                                className="tick tick-53"
                                                style={{height: 6, left: "17.7258%"}}
                                            />
                                            <div
                                                className="tick tick-54"
                                                style={{height: 6, left: "18.0602%"}}
                                            />
                                            <div
                                                className="tick tick-55"
                                                style={{height: 10, left: "18.3946%"}}
                                            />
                                            <div
                                                className="tick tick-56"
                                                style={{height: 6, left: "18.7291%"}}
                                            />
                                            <div
                                                className="tick tick-57"
                                                style={{height: 6, left: "19.0635%"}}
                                            />
                                            <div
                                                className="tick tick-58"
                                                style={{height: 6, left: "19.398%"}}
                                            />
                                            <div
                                                className="tick tick-59"
                                                style={{height: 6, left: "19.7324%"}}
                                            />
                                            <div
                                                className="tick tick-60"
                                                style={{height: 20, left: "20.0669%"}}
                                            >
                                                <span>2s</span>
                                            </div>
                                            <div
                                                className="tick tick-61"
                                                style={{height: 6, left: "20.4013%"}}
                                            />
                                            <div
                                                className="tick tick-62"
                                                style={{height: 6, left: "20.7358%"}}
                                            />
                                            <div
                                                className="tick tick-63"
                                                style={{height: 6, left: "21.0702%"}}
                                            />
                                            <div
                                                className="tick tick-64"
                                                style={{height: 6, left: "21.4047%"}}
                                            />
                                            <div
                                                className="tick tick-65"
                                                style={{height: 10, left: "21.7391%"}}
                                            />
                                            <div
                                                className="tick tick-66"
                                                style={{height: 6, left: "22.0736%"}}
                                            />
                                            <div
                                                className="tick tick-67"
                                                style={{height: 6, left: "22.408%"}}
                                            />
                                            <div
                                                className="tick tick-68"
                                                style={{height: 6, left: "22.7425%"}}
                                            />
                                            <div
                                                className="tick tick-69"
                                                style={{height: 6, left: "23.0769%"}}
                                            />
                                            <div
                                                className="tick tick-70"
                                                style={{height: 10, left: "23.4114%"}}
                                            />
                                            <div
                                                className="tick tick-71"
                                                style={{height: 6, left: "23.7458%"}}
                                            />
                                            <div
                                                className="tick tick-72"
                                                style={{height: 6, left: "24.0803%"}}
                                            />
                                            <div
                                                className="tick tick-73"
                                                style={{height: 6, left: "24.4147%"}}
                                            />
                                            <div
                                                className="tick tick-74"
                                                style={{height: 6, left: "24.7492%"}}
                                            />
                                            <div
                                                className="tick tick-75"
                                                style={{height: 14, left: "25.0836%"}}
                                            />
                                            <div
                                                className="tick tick-76"
                                                style={{height: 6, left: "25.4181%"}}
                                            />
                                            <div
                                                className="tick tick-77"
                                                style={{height: 6, left: "25.7525%"}}
                                            />
                                            <div
                                                className="tick tick-78"
                                                style={{height: 6, left: "26.087%"}}
                                            />
                                            <div
                                                className="tick tick-79"
                                                style={{height: 6, left: "26.4214%"}}
                                            />
                                            <div
                                                className="tick tick-80"
                                                style={{height: 10, left: "26.7559%"}}
                                            />
                                            <div
                                                className="tick tick-81"
                                                style={{height: 6, left: "27.0903%"}}
                                            />
                                            <div
                                                className="tick tick-82"
                                                style={{height: 6, left: "27.4247%"}}
                                            />
                                            <div
                                                className="tick tick-83"
                                                style={{height: 6, left: "27.7592%"}}
                                            />
                                            <div
                                                className="tick tick-84"
                                                style={{height: 6, left: "28.0936%"}}
                                            />
                                            <div
                                                className="tick tick-85"
                                                style={{height: 10, left: "28.4281%"}}
                                            />
                                            <div
                                                className="tick tick-86"
                                                style={{height: 6, left: "28.7625%"}}
                                            />
                                            <div
                                                className="tick tick-87"
                                                style={{height: 6, left: "29.097%"}}
                                            />
                                            <div
                                                className="tick tick-88"
                                                style={{height: 6, left: "29.4314%"}}
                                            />
                                            <div
                                                className="tick tick-89"
                                                style={{height: 6, left: "29.7659%"}}
                                            />
                                            <div
                                                className="tick tick-90"
                                                style={{height: 20, left: "30.1003%"}}
                                            >
                                                <span>3s</span>
                                            </div>
                                            <div
                                                className="tick tick-91"
                                                style={{height: 6, left: "30.4348%"}}
                                            />
                                            <div
                                                className="tick tick-92"
                                                style={{height: 6, left: "30.7692%"}}
                                            />
                                            <div
                                                className="tick tick-93"
                                                style={{height: 6, left: "31.1037%"}}
                                            />
                                            <div
                                                className="tick tick-94"
                                                style={{height: 6, left: "31.4381%"}}
                                            />
                                            <div
                                                className="tick tick-95"
                                                style={{height: 10, left: "31.7726%"}}
                                            />
                                            <div
                                                className="tick tick-96"
                                                style={{height: 6, left: "32.107%"}}
                                            />
                                            <div
                                                className="tick tick-97"
                                                style={{height: 6, left: "32.4415%"}}
                                            />
                                            <div
                                                className="tick tick-98"
                                                style={{height: 6, left: "32.7759%"}}
                                            />
                                            <div
                                                className="tick tick-99"
                                                style={{height: 6, left: "33.1104%"}}
                                            />
                                            <div
                                                className="tick tick-100"
                                                style={{height: 10, left: "33.4448%"}}
                                            />
                                            <div
                                                className="tick tick-101"
                                                style={{height: 6, left: "33.7793%"}}
                                            />
                                            <div
                                                className="tick tick-102"
                                                style={{height: 6, left: "34.1137%"}}
                                            />
                                            <div
                                                className="tick tick-103"
                                                style={{height: 6, left: "34.4482%"}}
                                            />
                                            <div
                                                className="tick tick-104"
                                                style={{height: 6, left: "34.7826%"}}
                                            />
                                            <div
                                                className="tick tick-105"
                                                style={{height: 14, left: "35.1171%"}}
                                            />
                                            <div
                                                className="tick tick-106"
                                                style={{height: 6, left: "35.4515%"}}
                                            />
                                            <div
                                                className="tick tick-107"
                                                style={{height: 6, left: "35.786%"}}
                                            />
                                            <div
                                                className="tick tick-108"
                                                style={{height: 6, left: "36.1204%"}}
                                            />
                                            <div
                                                className="tick tick-109"
                                                style={{height: 6, left: "36.4548%"}}
                                            />
                                            <div
                                                className="tick tick-110"
                                                style={{height: 10, left: "36.7893%"}}
                                            />
                                            <div
                                                className="tick tick-111"
                                                style={{height: 6, left: "37.1237%"}}
                                            />
                                            <div
                                                className="tick tick-112"
                                                style={{height: 6, left: "37.4582%"}}
                                            />
                                            <div
                                                className="tick tick-113"
                                                style={{height: 6, left: "37.7926%"}}
                                            />
                                            <div
                                                className="tick tick-114"
                                                style={{height: 6, left: "38.1271%"}}
                                            />
                                            <div
                                                className="tick tick-115"
                                                style={{height: 10, left: "38.4615%"}}
                                            />
                                            <div
                                                className="tick tick-116"
                                                style={{height: 6, left: "38.796%"}}
                                            />
                                            <div
                                                className="tick tick-117"
                                                style={{height: 6, left: "39.1304%"}}
                                            />
                                            <div
                                                className="tick tick-118"
                                                style={{height: 6, left: "39.4649%"}}
                                            />
                                            <div
                                                className="tick tick-119"
                                                style={{height: 6, left: "39.7993%"}}
                                            />
                                            <div
                                                className="tick tick-120"
                                                style={{height: 20, left: "40.1338%"}}
                                            >
                                                <span>4s</span>
                                            </div>
                                            <div
                                                className="tick tick-121"
                                                style={{height: 6, left: "40.4682%"}}
                                            />
                                            <div
                                                className="tick tick-122"
                                                style={{height: 6, left: "40.8027%"}}
                                            />
                                            <div
                                                className="tick tick-123"
                                                style={{height: 6, left: "41.1371%"}}
                                            />
                                            <div
                                                className="tick tick-124"
                                                style={{height: 6, left: "41.4716%"}}
                                            />
                                            <div
                                                className="tick tick-125"
                                                style={{height: 10, left: "41.806%"}}
                                            />
                                            <div
                                                className="tick tick-126"
                                                style={{height: 6, left: "42.1405%"}}
                                            />
                                            <div
                                                className="tick tick-127"
                                                style={{height: 6, left: "42.4749%"}}
                                            />
                                            <div
                                                className="tick tick-128"
                                                style={{height: 6, left: "42.8094%"}}
                                            />
                                            <div
                                                className="tick tick-129"
                                                style={{height: 6, left: "43.1438%"}}
                                            />
                                            <div
                                                className="tick tick-130"
                                                style={{height: 10, left: "43.4783%"}}
                                            />
                                            <div
                                                className="tick tick-131"
                                                style={{height: 6, left: "43.8127%"}}
                                            />
                                            <div
                                                className="tick tick-132"
                                                style={{height: 6, left: "44.1472%"}}
                                            />
                                            <div
                                                className="tick tick-133"
                                                style={{height: 6, left: "44.4816%"}}
                                            />
                                            <div
                                                className="tick tick-134"
                                                style={{height: 6, left: "44.8161%"}}
                                            />
                                            <div
                                                className="tick tick-135"
                                                style={{height: 14, left: "45.1505%"}}
                                            />
                                            <div
                                                className="tick tick-136"
                                                style={{height: 6, left: "45.4849%"}}
                                            />
                                            <div
                                                className="tick tick-137"
                                                style={{height: 6, left: "45.8194%"}}
                                            />
                                            <div
                                                className="tick tick-138"
                                                style={{height: 6, left: "46.1538%"}}
                                            />
                                            <div
                                                className="tick tick-139"
                                                style={{height: 6, left: "46.4883%"}}
                                            />
                                            <div
                                                className="tick tick-140"
                                                style={{height: 10, left: "46.8227%"}}
                                            />
                                            <div
                                                className="tick tick-141"
                                                style={{height: 6, left: "47.1572%"}}
                                            />
                                            <div
                                                className="tick tick-142"
                                                style={{height: 6, left: "47.4916%"}}
                                            />
                                            <div
                                                className="tick tick-143"
                                                style={{height: 6, left: "47.8261%"}}
                                            />
                                            <div
                                                className="tick tick-144"
                                                style={{height: 6, left: "48.1605%"}}
                                            />
                                            <div
                                                className="tick tick-145"
                                                style={{height: 10, left: "48.495%"}}
                                            />
                                            <div
                                                className="tick tick-146"
                                                style={{height: 6, left: "48.8294%"}}
                                            />
                                            <div
                                                className="tick tick-147"
                                                style={{height: 6, left: "49.1639%"}}
                                            />
                                            <div
                                                className="tick tick-148"
                                                style={{height: 6, left: "49.4983%"}}
                                            />
                                            <div
                                                className="tick tick-149"
                                                style={{height: 6, left: "49.8328%"}}
                                            />
                                            <div
                                                className="tick tick-150"
                                                style={{height: 20, left: "50.1672%"}}
                                            >
                                                <span>5s</span>
                                            </div>
                                            <div
                                                className="tick tick-151"
                                                style={{height: 6, left: "50.5017%"}}
                                            />
                                            <div
                                                className="tick tick-152"
                                                style={{height: 6, left: "50.8361%"}}
                                            />
                                            <div
                                                className="tick tick-153"
                                                style={{height: 6, left: "51.1706%"}}
                                            />
                                            <div
                                                className="tick tick-154"
                                                style={{height: 6, left: "51.505%"}}
                                            />
                                            <div
                                                className="tick tick-155"
                                                style={{height: 10, left: "51.8395%"}}
                                            />
                                            <div
                                                className="tick tick-156"
                                                style={{height: 6, left: "52.1739%"}}
                                            />
                                            <div
                                                className="tick tick-157"
                                                style={{height: 6, left: "52.5084%"}}
                                            />
                                            <div
                                                className="tick tick-158"
                                                style={{height: 6, left: "52.8428%"}}
                                            />
                                            <div
                                                className="tick tick-159"
                                                style={{height: 6, left: "53.1773%"}}
                                            />
                                            <div
                                                className="tick tick-160"
                                                style={{height: 10, left: "53.5117%"}}
                                            />
                                            <div
                                                className="tick tick-161"
                                                style={{height: 6, left: "53.8462%"}}
                                            />
                                            <div
                                                className="tick tick-162"
                                                style={{height: 6, left: "54.1806%"}}
                                            />
                                            <div
                                                className="tick tick-163"
                                                style={{height: 6, left: "54.5151%"}}
                                            />
                                            <div
                                                className="tick tick-164"
                                                style={{height: 6, left: "54.8495%"}}
                                            />
                                            <div
                                                className="tick tick-165"
                                                style={{height: 14, left: "55.1839%"}}
                                            />
                                            <div
                                                className="tick tick-166"
                                                style={{height: 6, left: "55.5184%"}}
                                            />
                                            <div
                                                className="tick tick-167"
                                                style={{height: 6, left: "55.8528%"}}
                                            />
                                            <div
                                                className="tick tick-168"
                                                style={{height: 6, left: "56.1873%"}}
                                            />
                                            <div
                                                className="tick tick-169"
                                                style={{height: 6, left: "56.5217%"}}
                                            />
                                            <div
                                                className="tick tick-170"
                                                style={{height: 10, left: "56.8562%"}}
                                            />
                                            <div
                                                className="tick tick-171"
                                                style={{height: 6, left: "57.1906%"}}
                                            />
                                            <div
                                                className="tick tick-172"
                                                style={{height: 6, left: "57.5251%"}}
                                            />
                                            <div
                                                className="tick tick-173"
                                                style={{height: 6, left: "57.8595%"}}
                                            />
                                            <div
                                                className="tick tick-174"
                                                style={{height: 6, left: "58.194%"}}
                                            />
                                            <div
                                                className="tick tick-175"
                                                style={{height: 10, left: "58.5284%"}}
                                            />
                                            <div
                                                className="tick tick-176"
                                                style={{height: 6, left: "58.8629%"}}
                                            />
                                            <div
                                                className="tick tick-177"
                                                style={{height: 6, left: "59.1973%"}}
                                            />
                                            <div
                                                className="tick tick-178"
                                                style={{height: 6, left: "59.5318%"}}
                                            />
                                            <div
                                                className="tick tick-179"
                                                style={{height: 6, left: "59.8662%"}}
                                            />
                                            <div
                                                className="tick tick-180"
                                                style={{height: 20, left: "60.2007%"}}
                                            >
                                                <span>6s</span>
                                            </div>
                                            <div
                                                className="tick tick-181"
                                                style={{height: 6, left: "60.5351%"}}
                                            />
                                            <div
                                                className="tick tick-182"
                                                style={{height: 6, left: "60.8696%"}}
                                            />
                                            <div
                                                className="tick tick-183"
                                                style={{height: 6, left: "61.204%"}}
                                            />
                                            <div
                                                className="tick tick-184"
                                                style={{height: 6, left: "61.5385%"}}
                                            />
                                            <div
                                                className="tick tick-185"
                                                style={{height: 10, left: "61.8729%"}}
                                            />
                                            <div
                                                className="tick tick-186"
                                                style={{height: 6, left: "62.2074%"}}
                                            />
                                            <div
                                                className="tick tick-187"
                                                style={{height: 6, left: "62.5418%"}}
                                            />
                                            <div
                                                className="tick tick-188"
                                                style={{height: 6, left: "62.8763%"}}
                                            />
                                            <div
                                                className="tick tick-189"
                                                style={{height: 6, left: "63.2107%"}}
                                            />
                                            <div
                                                className="tick tick-190"
                                                style={{height: 10, left: "63.5452%"}}
                                            />
                                            <div
                                                className="tick tick-191"
                                                style={{height: 6, left: "63.8796%"}}
                                            />
                                            <div
                                                className="tick tick-192"
                                                style={{height: 6, left: "64.214%"}}
                                            />
                                            <div
                                                className="tick tick-193"
                                                style={{height: 6, left: "64.5485%"}}
                                            />
                                            <div
                                                className="tick tick-194"
                                                style={{height: 6, left: "64.8829%"}}
                                            />
                                            <div
                                                className="tick tick-195"
                                                style={{height: 14, left: "65.2174%"}}
                                            />
                                            <div
                                                className="tick tick-196"
                                                style={{height: 6, left: "65.5518%"}}
                                            />
                                            <div
                                                className="tick tick-197"
                                                style={{height: 6, left: "65.8863%"}}
                                            />
                                            <div
                                                className="tick tick-198"
                                                style={{height: 6, left: "66.2207%"}}
                                            />
                                            <div
                                                className="tick tick-199"
                                                style={{height: 6, left: "66.5552%"}}
                                            />
                                            <div
                                                className="tick tick-200"
                                                style={{height: 10, left: "66.8896%"}}
                                            />
                                            <div
                                                className="tick tick-201"
                                                style={{height: 6, left: "67.2241%"}}
                                            />
                                            <div
                                                className="tick tick-202"
                                                style={{height: 6, left: "67.5585%"}}
                                            />
                                            <div
                                                className="tick tick-203"
                                                style={{height: 6, left: "67.893%"}}
                                            />
                                            <div
                                                className="tick tick-204"
                                                style={{height: 6, left: "68.2274%"}}
                                            />
                                            <div
                                                className="tick tick-205"
                                                style={{height: 10, left: "68.5619%"}}
                                            />
                                            <div
                                                className="tick tick-206"
                                                style={{height: 6, left: "68.8963%"}}
                                            />
                                            <div
                                                className="tick tick-207"
                                                style={{height: 6, left: "69.2308%"}}
                                            />
                                            <div
                                                className="tick tick-208"
                                                style={{height: 6, left: "69.5652%"}}
                                            />
                                            <div
                                                className="tick tick-209"
                                                style={{height: 6, left: "69.8997%"}}
                                            />
                                            <div
                                                className="tick tick-210"
                                                style={{height: 20, left: "70.2341%"}}
                                            >
                                                <span>7s</span>
                                            </div>
                                            <div
                                                className="tick tick-211"
                                                style={{height: 6, left: "70.5686%"}}
                                            />
                                            <div
                                                className="tick tick-212"
                                                style={{height: 6, left: "70.903%"}}
                                            />
                                            <div
                                                className="tick tick-213"
                                                style={{height: 6, left: "71.2375%"}}
                                            />
                                            <div
                                                className="tick tick-214"
                                                style={{height: 6, left: "71.5719%"}}
                                            />
                                            <div
                                                className="tick tick-215"
                                                style={{height: 10, left: "71.9064%"}}
                                            />
                                            <div
                                                className="tick tick-216"
                                                style={{height: 6, left: "72.2408%"}}
                                            />
                                            <div
                                                className="tick tick-217"
                                                style={{height: 6, left: "72.5753%"}}
                                            />
                                            <div
                                                className="tick tick-218"
                                                style={{height: 6, left: "72.9097%"}}
                                            />
                                            <div
                                                className="tick tick-219"
                                                style={{height: 6, left: "73.2441%"}}
                                            />
                                            <div
                                                className="tick tick-220"
                                                style={{height: 10, left: "73.5786%"}}
                                            />
                                            <div
                                                className="tick tick-221"
                                                style={{height: 6, left: "73.913%"}}
                                            />
                                            <div
                                                className="tick tick-222"
                                                style={{height: 6, left: "74.2475%"}}
                                            />
                                            <div
                                                className="tick tick-223"
                                                style={{height: 6, left: "74.5819%"}}
                                            />
                                            <div
                                                className="tick tick-224"
                                                style={{height: 6, left: "74.9164%"}}
                                            />
                                            <div
                                                className="tick tick-225"
                                                style={{height: 14, left: "75.2508%"}}
                                            />
                                            <div
                                                className="tick tick-226"
                                                style={{height: 6, left: "75.5853%"}}
                                            />
                                            <div
                                                className="tick tick-227"
                                                style={{height: 6, left: "75.9197%"}}
                                            />
                                            <div
                                                className="tick tick-228"
                                                style={{height: 6, left: "76.2542%"}}
                                            />
                                            <div
                                                className="tick tick-229"
                                                style={{height: 6, left: "76.5886%"}}
                                            />
                                            <div
                                                className="tick tick-230"
                                                style={{height: 10, left: "76.9231%"}}
                                            />
                                            <div
                                                className="tick tick-231"
                                                style={{height: 6, left: "77.2575%"}}
                                            />
                                            <div
                                                className="tick tick-232"
                                                style={{height: 6, left: "77.592%"}}
                                            />
                                            <div
                                                className="tick tick-233"
                                                style={{height: 6, left: "77.9264%"}}
                                            />
                                            <div
                                                className="tick tick-234"
                                                style={{height: 6, left: "78.2609%"}}
                                            />
                                            <div
                                                className="tick tick-235"
                                                style={{height: 10, left: "78.5953%"}}
                                            />
                                            <div
                                                className="tick tick-236"
                                                style={{height: 6, left: "78.9298%"}}
                                            />
                                            <div
                                                className="tick tick-237"
                                                style={{height: 6, left: "79.2642%"}}
                                            />
                                            <div
                                                className="tick tick-238"
                                                style={{height: 6, left: "79.5987%"}}
                                            />
                                            <div
                                                className="tick tick-239"
                                                style={{height: 6, left: "79.9331%"}}
                                            />
                                            <div
                                                className="tick tick-240"
                                                style={{height: 20, left: "80.2676%"}}
                                            >
                                                <span>8s</span>
                                            </div>
                                            <div
                                                className="tick tick-241"
                                                style={{height: 6, left: "80.602%"}}
                                            />
                                            <div
                                                className="tick tick-242"
                                                style={{height: 6, left: "80.9365%"}}
                                            />
                                            <div
                                                className="tick tick-243"
                                                style={{height: 6, left: "81.2709%"}}
                                            />
                                            <div
                                                className="tick tick-244"
                                                style={{height: 6, left: "81.6054%"}}
                                            />
                                            <div
                                                className="tick tick-245"
                                                style={{height: 10, left: "81.9398%"}}
                                            />
                                            <div
                                                className="tick tick-246"
                                                style={{height: 6, left: "82.2742%"}}
                                            />
                                            <div
                                                className="tick tick-247"
                                                style={{height: 6, left: "82.6087%"}}
                                            />
                                            <div
                                                className="tick tick-248"
                                                style={{height: 6, left: "82.9431%"}}
                                            />
                                            <div
                                                className="tick tick-249"
                                                style={{height: 6, left: "83.2776%"}}
                                            />
                                            <div
                                                className="tick tick-250"
                                                style={{height: 10, left: "83.612%"}}
                                            />
                                            <div
                                                className="tick tick-251"
                                                style={{height: 6, left: "83.9465%"}}
                                            />
                                            <div
                                                className="tick tick-252"
                                                style={{height: 6, left: "84.2809%"}}
                                            />
                                            <div
                                                className="tick tick-253"
                                                style={{height: 6, left: "84.6154%"}}
                                            />
                                            <div
                                                className="tick tick-254"
                                                style={{height: 6, left: "84.9498%"}}
                                            />
                                            <div
                                                className="tick tick-255"
                                                style={{height: 14, left: "85.2843%"}}
                                            />
                                            <div
                                                className="tick tick-256"
                                                style={{height: 6, left: "85.6187%"}}
                                            />
                                            <div
                                                className="tick tick-257"
                                                style={{height: 6, left: "85.9532%"}}
                                            />
                                            <div
                                                className="tick tick-258"
                                                style={{height: 6, left: "86.2876%"}}
                                            />
                                            <div
                                                className="tick tick-259"
                                                style={{height: 6, left: "86.6221%"}}
                                            />
                                            <div
                                                className="tick tick-260"
                                                style={{height: 10, left: "86.9565%"}}
                                            />
                                            <div
                                                className="tick tick-261"
                                                style={{height: 6, left: "87.291%"}}
                                            />
                                            <div
                                                className="tick tick-262"
                                                style={{height: 6, left: "87.6254%"}}
                                            />
                                            <div
                                                className="tick tick-263"
                                                style={{height: 6, left: "87.9599%"}}
                                            />
                                            <div
                                                className="tick tick-264"
                                                style={{height: 6, left: "88.2943%"}}
                                            />
                                            <div
                                                className="tick tick-265"
                                                style={{height: 10, left: "88.6288%"}}
                                            />
                                            <div
                                                className="tick tick-266"
                                                style={{height: 6, left: "88.9632%"}}
                                            />
                                            <div
                                                className="tick tick-267"
                                                style={{height: 6, left: "89.2977%"}}
                                            />
                                            <div
                                                className="tick tick-268"
                                                style={{height: 6, left: "89.6321%"}}
                                            />
                                            <div
                                                className="tick tick-269"
                                                style={{height: 6, left: "89.9666%"}}
                                            />
                                            <div
                                                className="tick tick-270"
                                                style={{height: 20, left: "90.301%"}}
                                            >
                                                <span>9s</span>
                                            </div>
                                            <div
                                                className="tick tick-271"
                                                style={{height: 6, left: "90.6355%"}}
                                            />
                                            <div
                                                className="tick tick-272"
                                                style={{height: 6, left: "90.9699%"}}
                                            />
                                            <div
                                                className="tick tick-273"
                                                style={{height: 6, left: "91.3043%"}}
                                            />
                                            <div
                                                className="tick tick-274"
                                                style={{height: 6, left: "91.6388%"}}
                                            />
                                            <div
                                                className="tick tick-275"
                                                style={{height: 10, left: "91.9732%"}}
                                            />
                                            <div
                                                className="tick tick-276"
                                                style={{height: 6, left: "92.3077%"}}
                                            />
                                            <div
                                                className="tick tick-277"
                                                style={{height: 6, left: "92.6421%"}}
                                            />
                                            <div
                                                className="tick tick-278"
                                                style={{height: 6, left: "92.9766%"}}
                                            />
                                            <div
                                                className="tick tick-279"
                                                style={{height: 6, left: "93.311%"}}
                                            />
                                            <div
                                                className="tick tick-280"
                                                style={{height: 10, left: "93.6455%"}}
                                            />
                                            <div
                                                className="tick tick-281"
                                                style={{height: 6, left: "93.9799%"}}
                                            />
                                            <div
                                                className="tick tick-282"
                                                style={{height: 6, left: "94.3144%"}}
                                            />
                                            <div
                                                className="tick tick-283"
                                                style={{height: 6, left: "94.6488%"}}
                                            />
                                            <div
                                                className="tick tick-284"
                                                style={{height: 6, left: "94.9833%"}}
                                            />
                                            <div
                                                className="tick tick-285"
                                                style={{height: 14, left: "95.3177%"}}
                                            />
                                            <div
                                                className="tick tick-286"
                                                style={{height: 6, left: "95.6522%"}}
                                            />
                                            <div
                                                className="tick tick-287"
                                                style={{height: 6, left: "95.9866%"}}
                                            />
                                            <div
                                                className="tick tick-288"
                                                style={{height: 6, left: "96.3211%"}}
                                            />
                                            <div
                                                className="tick tick-289"
                                                style={{height: 6, left: "96.6555%"}}
                                            />
                                            <div
                                                className="tick tick-290"
                                                style={{height: 10, left: "96.99%"}}
                                            />
                                            <div
                                                className="tick tick-291"
                                                style={{height: 6, left: "97.3244%"}}
                                            />
                                            <div
                                                className="tick tick-292"
                                                style={{height: 6, left: "97.6589%"}}
                                            />
                                            <div
                                                className="tick tick-293"
                                                style={{height: 6, left: "97.9933%"}}
                                            />
                                            <div
                                                className="tick tick-294"
                                                style={{height: 6, left: "98.3278%"}}
                                            />
                                            <div
                                                className="tick tick-295"
                                                style={{height: 10, left: "98.6622%"}}
                                            />
                                            <div
                                                className="tick tick-296"
                                                style={{height: 6, left: "98.9967%"}}
                                            />
                                            <div
                                                className="tick tick-297"
                                                style={{height: 6, left: "99.3311%"}}
                                            />
                                            <div
                                                className="tick tick-298"
                                                style={{height: 6, left: "99.6656%"}}
                                            />
                                            <div
                                                className="tick tick-299"
                                                style={{height: 6, left: "100%"}}
                                            />
                                        </div>
                                        <div className="time-position-full" style={{left: this.state.timePosition}} />
                                        <div className="time-position" style={{left: this.state.timePosition}}

                                             onMouseDown={() => this.dragXTimePosition()}>
                                            <div className="time-position-filler"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-menu">
                                    <div className="tool-menu-item-button">
                    <span>
                      10s
                      <span className="time-picker-caret">
                        <svg
                            role="presentation"
                            className="icon icon-color"
                            width="11px"
                            height="7px"
                            viewBox="0 0 11 7"
                            version="1.1"
                        >
                          <title>Rectangle 3078</title>
                          <desc>Created with Sketch.</desc>
                          <defs/>
                          <g
                              id="Snapstrap"
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                          >
                            <g
                                id="SnapstrapStructure"
                                transform="translate(-184.000000, -89.000000)"
                                fill="#FFFFFF"
                            >
                              <g id="Done" transform="translate(179.000000, 67.000000)">
                                <path
                                    d="M10.4405247,26.3145238 L6.35593723,22.2299363 C6.05187578,21.9258748 5.54376523,21.9205836 5.23363568,22.2307132 C4.92134397,22.5430049 4.92315831,23.0433142 5.23285879,23.3530147 L9.74488546,27.8650414 C9.93103644,28.0511924 10.1936665,28.1253621 10.4405247,28.0837299 C10.687383,28.1253621 10.9500131,28.0511924 11.136164,27.8650414 L15.6481907,23.3530147 C15.9578912,23.0433142 15.9597055,22.5430049 15.6474138,22.2307132 C15.3372843,21.9205836 14.8291737,21.9258748 14.5251123,22.2299363 L10.4405247,26.3145238 Z"
                                    id="Rectangle-3078"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </footer>);
    }
}

export default MyTimeline;