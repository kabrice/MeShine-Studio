import React, {Component} from 'react'
import Slider from "react-slick";

class MyMediaItemList extends Component {

    constructor(props) {
        super(props);
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
                            <div className="media-element">
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <img
                                            className
                                            src="https://snappublisher.snapchat.com/api/v1/media/ad6ad237-eb4b-4829-ac86-a6a197d49d72/file/thumbnail?w=72&templateId=f965b6f6-ae33-4925-982c-0bcde34c9ab8"
                                            width={72}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <img
                                            className
                                            src="https://snappublisher.snapchat.com/api/v1/media/63721d39-84d6-43b0-a29b-b26d9209749f/file/thumbnail?w=72&templateId=f965b6f6-ae33-4925-982c-0bcde34c9ab8"
                                            width={72}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <img
                                            className
                                            src="https://snappublisher.snapchat.com/api/v1/media/4df15e35-dc52-426f-8ed5-03a3df33a24e/file/thumbnail?w=72&templateId=f965b6f6-ae33-4925-982c-0bcde34c9ab8"
                                            width={72}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
                                            >
                                                <rect
                                                    height={400}
                                                    width={400}
                                                    style={{
                                                        fill: "rgb(17, 152, 245)",
                                                        strokeWidth: 0,
                                                        stroke: "rgb(0, 0, 0)"
                                                    }}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
                                            >
                                                <rect
                                                    height={400}
                                                    width={400}
                                                    style={{
                                                        fill: "rgb(246, 4, 246)",
                                                        strokeWidth: 0,
                                                        stroke: "rgb(0, 0, 0)"
                                                    }}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
                                            >
                                                <rect
                                                    height={400}
                                                    width={400}
                                                    style={{
                                                        fill: "rgb(17, 152, 245)",
                                                        strokeWidth: 0,
                                                        stroke: "rgb(0, 0, 0)"
                                                    }}
                                                />
                                            </svg>
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
                                                fontFamily: "NeuzeitOfficeW05-Bold",
                                                fontSize: 36,
                                                width: "100%",
                                                height: "100%"
                                            }}
                                        >
                                            C
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
                                            >
                                                <rect
                                                    height={400}
                                                    width={400}
                                                    style={{
                                                        fill: "rgb(17, 152, 245)",
                                                        strokeWidth: 0,
                                                        stroke: "rgb(0, 0, 0)"
                                                    }}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
                                            >
                                                <rect
                                                    height={400}
                                                    width={400}
                                                    style={{
                                                        fill: "rgb(246, 4, 246)",
                                                        strokeWidth: 0,
                                                        stroke: "rgb(0, 0, 0)"
                                                    }}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
                                            >
                                                <rect
                                                    height={400}
                                                    width={400}
                                                    style={{
                                                        fill: "rgb(246, 4, 246)",
                                                        strokeWidth: 0,
                                                        stroke: "rgb(0, 0, 0)"
                                                    }}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-element selected">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
                                <div className="media-element-thumb">
                                    <div className="thumbnail-wrapper">
                                        <div className="image-clip">
                                            <svg
                                                height={400}
                                                viewBox="0 0 400 400"
                                                width={400}
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ width: 400, height: 400, transform: "scale(0.1)" }}
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
                            <div className="media-element">
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
                        {/*</Slider>*/}
                    </div>
                </nav>);
    }
}

export default MyMediaItemList;