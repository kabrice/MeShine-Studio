import React, {Component} from 'react';
import SearchInput from "./SearchInput";
import Slider from "react-slick";

class MyVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {doPlay:true, currentVid: 0}
    }

    renderItem= (elm) => {
        return (
            <div className="qFtWQg" style={{}}>
                <div >
                    <div className="A0JANA ADVZ4g">
                        <div className="ZElZRA" draggable="true">
                            <section className="mh2TGQ wZ_zoQ cCMQBA">
                                <div className="ZwFx6w cCMQBA IcLdeA" draggable="true" role="button">
                                    <img
                                        className="kVXP9Q cCMQBA"
                                        crossOrigin="anonymous"
                                        src={`../../assets/myvideo/${elm}.jpg`}
                                        draggable="false"
                                    />
                                    <span className="T5OikA _9QQlWw VThHDA yAhYLw">
                                          <span className="USE2Rg uQ-fxg ZTpOuQ _3zBBXg">0:06</span>
                                        </span>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        let backgrounds = []
        let beaches = []
        let businesses = []
        let cities = []
        let fashions = []
        let foods = []
        let mountains = []

        for (let i = 1; i <= 2; i++) {

            backgrounds.push(
                <div key={i} >
                    {this.renderItem('b'+i)}
                </div>
            );
            beaches.push(
                <div key={i} >
                    {this.renderItem('be'+i)}
                </div>
            );
            businesses.push(
                <div key={i} >
                    {this.renderItem('bu'+i)}
                </div>
            );
            cities.push(
                <div key={i} >
                    {this.renderItem('c'+i)}
                </div>
            );
            fashions.push(
                <div key={i} >
                    {this.renderItem('f'+i)}
                </div>
            );
            foods.push(
                <div key={i} >
                    {this.renderItem('fo'+i)}
                </div>
            );
            mountains.push(
                <div key={i} >
                    {this.renderItem('m'+i)}
                </div>
            );
        }

        return (<div  >
            <SearchInput target={'elements'}/>
            <div className={"myelement"}>
                <div className={"item2"}>
                    <p>Backgrounds <span className={"more"}>More</span></p>
                    <Slider {...settings}>{backgrounds}</Slider>
                </div>
                <div className={"item2"}>
                    <p>Beach <span className={"more"}>More</span></p>
                    <Slider {...settings}>{beaches}</Slider>
                </div>
                <div className={"item2"}>
                    <p>Business <span className={"more"}>More</span></p>
                    <Slider {...settings}>{businesses}</Slider>
                </div>
                <div className={"item2"}>
                    <p>Cities <span className={"more"}>More</span></p>
                    <Slider {...settings}>{cities}</Slider>
                </div>
                <div className={"item2"}>
                    <p>Fashion <span className={"more"}>More</span></p>
                    <Slider {...settings}>{fashions}</Slider>
                </div>
                <div className={"item2"}>
                    <p>Foods <span className={"more"}>More</span></p>
                    <Slider {...settings}>{foods}</Slider>
                </div>
                <div className={"item2"}>
                    <p>Mountains <span className={"more"}>More</span></p>
                    <Slider {...settings}>{mountains}</Slider>
                </div>
            </div>
        </div>);
    }
}

export default MyVideo;