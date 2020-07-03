import React, {Component} from 'react';
import SearchInput from "./SearchInput";
import Slider from "react-slick";

class MyElement extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        let features = []
        let shapes = []
        let masks = []
        let stickers = []
        let charts = []
        let gradients = []
        let animals = []
        let pastels = []
        for (let i = 1; i <= 10; i++) {
            features.push(
                <div key={i} >
                    <img height={80} width={'auto'} src={`../../assets/myelement/f${i}.png`}/>
                </div>
            );
            shapes.push(
                <div key={i} >
                    <img height={80} width={'auto'} src={`../../assets/myelement/s${i}.png`}/>
                </div>
            );
            masks.push(
                <div key={i} >
                    <img height={80} width={'auto'} src={`../../assets/myelement/m${i}.png`}/>
                </div>
            );
            stickers.push(
                <div key={i} >
                    <img height={80} width={'auto'} src={`../../assets/myelement/st${i}.gif`}/>
                </div>
            );
            charts.push(
                <div key={i} >
                    <img height={80} width={'auto'} src={`../../assets/myelement/c${i}.svg`}/>
                </div>
            );
            gradients.push(
                <div key={i} >
                    <img height={80} width={'auto'} src={`../../assets/myelement/gr${i}.png`}/>
                </div>
            );
            animals.push(
                <div key={i} >
                    <img height={80} width={'auto'} src={`../../assets/myelement/a${i}.png`}/>
                </div>
            );
            pastels.push(
                <div key={i} >
                    <img height={80} width={'auto'} src={`../../assets/myelement/p${i}.png`}/>
                </div>
            );
        }

        return (<div  >
                    <SearchInput target={'elements'}/>
                    <div className={"myelement"}>
                        <div className={"item"}>
                            <p>Features <span className={"more"}>More</span></p>
                            <Slider {...settings}>{features}</Slider>
                        </div>
                        <div className={"item"}>
                            <p>Frames <span className={"more"}>More</span></p>
                            <Slider {...settings}>
                                <div>
                                    <div className="Vr6Hiw" style={{ height: 80, width: 80 }}>
                                        <div className="sMd5nQ yCCXfw">
                                        <div className="yCCXfw">
                                            <div className="ZElZRA" draggable="true">
                                                <div
                                                    className="jR_Z8w"
                                                    role="button"
                                                    style={{ gridTemplateAreas: '"a"' }}
                                                >
                                                    <div
                                                        className="O95M2Q"
                                                        style={{
                                                            gridArea: "a / a / a / a",
                                                            backgroundImage:
                                                                'url("../../assets/myelement/g1.png")'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="LQhJ_g ElK36A eGNjaw RTlscw">
                                        <div className="Vr6Hiw" style={{ height: 80, width: 80 }}>
                                            <div className="sMd5nQ yCCXfw">
                                                <div className="yCCXfw">
                                                    <div className="ZElZRA" draggable="true">
                                                        <div
                                                            className="jR_Z8w"
                                                            role="button"
                                                            style={{ gridTemplateAreas: '"a b"' }}
                                                        >
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "a / a / a / a",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "b / b / b / b",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="LQhJ_g ElK36A eGNjaw RTlscw">
                                        <div className="Vr6Hiw" style={{ height: 80, width: 80 }}>
                                            <div className="sMd5nQ yCCXfw">
                                                <div className="yCCXfw">
                                                    <div className="ZElZRA" draggable="true">
                                                        <div
                                                            className="jR_Z8w"
                                                            role="button"
                                                            style={{ gridTemplateAreas: '"a" "b"' }}
                                                        >
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "a / a / a / a",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "b / b / b / b",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="LQhJ_g ElK36A eGNjaw RTlscw">
                                        <div className="Vr6Hiw" style={{ height: 80, width: 80 }}>
                                            <div className="sMd5nQ yCCXfw">
                                                <div className="yCCXfw">
                                                    <div className="ZElZRA" draggable="true">
                                                        <div
                                                            className="jR_Z8w"
                                                            role="button"
                                                            style={{
                                                                gridTemplateAreas: '"a" "b"',
                                                                gridTemplateRows: "2fr 1fr"
                                                            }}
                                                        >
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "a / a / a / a",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "b / b / b / b",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="LQhJ_g ElK36A eGNjaw RTlscw">
                                        <div className="Vr6Hiw" style={{ height: 80, width: 80 }}>
                                            <div className="sMd5nQ yCCXfw">
                                                <div className="yCCXfw">
                                                    <div className="ZElZRA" draggable="true">
                                                        <div
                                                            className="jR_Z8w"
                                                            role="button"
                                                            style={{
                                                                gridTemplateAreas: '"b" "a"',
                                                                gridTemplateRows: "1fr 2fr"
                                                            }}
                                                        >
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "b / b / b / b",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "a / a / a / a",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="LQhJ_g ElK36A eGNjaw RTlscw">
                                        <div className="Vr6Hiw" style={{ height: 80, width: 80 }}>
                                            <div className="sMd5nQ yCCXfw">
                                                <div className="yCCXfw">
                                                    <div className="ZElZRA" draggable="true">
                                                        <div
                                                            className="jR_Z8w"
                                                            role="button"
                                                            style={{
                                                                gridTemplateAreas: '"a b"',
                                                                gridTemplateColumns: "2fr 1fr"
                                                            }}
                                                        >
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "a / a / a / a",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "b / b / b / b",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="LQhJ_g ElK36A eGNjaw RTlscw">
                                        <div className="Vr6Hiw" style={{ height: 80, width: 80 }}>
                                            <div className="sMd5nQ yCCXfw">
                                                <div className="yCCXfw">
                                                    <div className="ZElZRA" draggable="true">
                                                        <div
                                                            className="jR_Z8w"
                                                            role="button"
                                                            style={{ gridTemplateAreas: '"a b c"' }}
                                                        >
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "a / a / a / a",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "b / b / b / b",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "c / c / c / c",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="LQhJ_g ElK36A eGNjaw RTlscw">
                                        <div className="Vr6Hiw" style={{ height: 80, width: 80 }}>
                                            <div className="sMd5nQ yCCXfw">
                                                <div className="yCCXfw">
                                                    <div className="ZElZRA" draggable="true">
                                                        <div
                                                            className="jR_Z8w"
                                                            role="button"
                                                            style={{ gridTemplateAreas: '"a" "b" "c"' }}
                                                        >
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "a / a / a / a",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "b / b / b / b",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "c / c / c / c",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="LQhJ_g ElK36A eGNjaw RTlscw">
                                        <div className="Vr6Hiw" style={{ height: 80, width: 80 }}>
                                            <div className="sMd5nQ yCCXfw">
                                                <div className="yCCXfw">
                                                    <div className="ZElZRA" draggable="true">
                                                        <div
                                                            className="jR_Z8w"
                                                            role="button"
                                                            style={{ gridTemplateAreas: '"a b" "c c"' }}
                                                        >
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "a / a / a / a",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "b / b / b / b",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                            <div
                                                                className="O95M2Q"
                                                                style={{
                                                                    gridArea: "c / c / c / c",
                                                                    backgroundImage:
                                                                        'url("../../assets/myelement/g1.png")'
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className={"item"}>
                            <p>Shapes <span className={"more"}>More</span></p>
                            <Slider {...settings}>{shapes}</Slider>
                        </div>
                        <div className={"item"}>
                            <p>Masks <span className={"more"}>More</span></p>
                            <Slider {...settings}>{masks}</Slider>
                        </div>
                        <div className={"item"}>
                            <p>Stickers <span className={"more"}>More</span></p>
                            <Slider {...settings}>{stickers}</Slider>
                        </div>
                        <div className={"item"}>
                            <p>Charts <span className={"more"}>More</span></p>
                            <Slider {...settings}>{charts}</Slider>
                        </div>
                        <div className={"item"}>
                            <p>Gradients <span className={"more"}>More</span></p>
                            <Slider {...settings}>{gradients}</Slider>
                        </div>
                        <div className={"item"}>
                            <p>Animals <span className={"more"}>More</span></p>
                            <Slider {...settings}>{animals}</Slider>
                        </div>
                        <div className={"item"}>
                            <p>Pastel ladies <span className={"more"}>More</span></p>
                            <Slider {...settings}>{pastels}</Slider>
                        </div>
                    </div>
                </div>);
    }
}

export default MyElement;