import React, {Component} from 'react'
import Slider from "react-slick";

class MyMediaItemList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        $('.media-element').click(function(){
            $('.media-element').removeClass('selected')
            $(this).addClass('selected')
            let vid = $('#mycanvas').find('video').get(0)
            vid.currentTime = 2.7
            $('.demo-hover-text').show()
            $('.demo-edit-text').hide()
            $('.demo-edit-image').show()
        })
    }

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 20,
            slidesToScroll: 1
        };

        return (<nav className={"editor-menu navbar navbar-toggleable-md navbar-inverse bg-inverse mymediaitemlist"} style={{'display': 'none'}}>
                    <div className="element-list">
                        {/*<Slider {...settings}>*/}
                            <div className="media-element demo-escargota">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <img
                                            id={'demo-escargot'}
                                            src="../../assets/demo/snap1/anim-escargotremovebg.png"
                                            width={72}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <img
                                            className
                                            src="../../assets/demo/snap1/anim-bgwave.jpg"
                                            width={72}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <img
                                            style={{transform : 'scale(0.4)'}}
                                            className
                                            src="../../assets/demo/snap1/anim-redcircle.jpg"
                                            width={72} />
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <img
                                            id={'demo-escargot1'}
                                            src="../../assets/demo/snap1/anim-escargotremovebg.png"
                                            width={72}/>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <img
                                                style={{transform : 'scale(0.32)'}}
                                                className
                                                src="../../assets/demo/snap1/anim-redsquare.jpg"
                                                width={72} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div
                                            className="text-thumb"
                                            style={{
                                                color: "rgb(255, 255, 255)",
                                                backgroundColor: "rgb(44, 49, 55)",
                                                fontFamily: "Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                                                fontSize: 36,
                                                width: "100%",
                                                height: "100%"
                                            }}>
                                            C
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div
                                            className="text-thumb"
                                            style={{
                                                color: "rgb(255, 255, 255)",
                                                backgroundColor: "rgb(44, 49, 55)",
                                                fontFamily: "Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                                                fontSize: 36,
                                                width: "100%",
                                                height: "100%"
                                            }}>
                                            O
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div
                                            className="text-thumb"
                                            style={{
                                                color: "rgb(255, 255, 255)",
                                                backgroundColor: "rgb(44, 49, 55)",
                                                fontFamily: "Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                                                fontSize: 36,
                                                width: "100%",
                                                height: "100%"
                                            }}>
                                            E
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div
                                            className="text-thumb"
                                            style={{
                                                color: "rgb(255, 255, 255)",
                                                backgroundColor: "rgb(44, 49, 55)",
                                                fontFamily: "Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                                                fontSize: 36,
                                                width: "100%",
                                                height: "100%"
                                            }}>
                                            <b>M</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <img
                                            /*style={{transform : 'scale(0.32)'}}
                                            */
                                            src="../../assets/demo/snap1/anim-footerlire.jpg"
                                            width={72} />
                                    </div>
                                </div>
                            </div>
                            {/*<div className="media-element selected">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                    <div className="image-clip">
                                        <svg height={400} viewBox="0 0 400 400" width={400}
                                             xmlns="http://www.w3.org/2000/svg" style={{width: 400, height: 400, transform: 'scale(0.1)'}}>
                                            <rect height={400} width={400} style={{fill: 'rgb(27, 38, 49)', strokeWidth: 0, stroke: 'rgb(0, 0, 0)'}} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element-indicator" /></div>*/}

                        {/*</Slider>*/}
                    </div>
                </nav>);
    }
}

export default MyMediaItemList;