import React, {Component} from 'react';
import SearchInput from "./SearchInput";
import Slider from "react-slick";

class MyTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {doPlay:true, currentVid: 0}
    }

    playVideo(i, doPlay){
        const vid = $('#vid'+i).get(0)
        if(doPlay){
            vid.play()
            this.setState({doPlay:true, currentVid: i})
        }else{
            vid.pause()
            vid.currentTime=0
            this.setState({doPlay:false, currentVid: i})
        }
    }
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        let titles = ["Health & Wellbeing", "Travel", "News", "Business", "Sport"]
        let tiles = []
        let tags = []
        for (let i = 1; i <= 29; i++) {
            tiles.push(
                <div key={i}
                     onMouseEnter={() => {
                         this.playVideo(i, true)
                     }}
                     onMouseLeave={() => {
                         this.playVideo(i, false)
                     }}
                >
                    <div className="tile template-library-tile library-tile hover-play"
                         data-title="Fun with Friends 2">
                        <div className="image-thumbnail loaded"
                             style={{backgroundImage: `url("../../assets/snapvideos/${i}.jpg")`}}/>
                        <video muted
                               style={{display: (this.state.doPlay !== false && i===this.state.currentVid)
                                                ? 'inline-block' : 'none'}}
                               loop
                               className="video-thumbnail" id={`vid${i}`}
                               src={`../../assets/snapvideos/${i}.mp4`}/>
                        <div className="click-catcher"/>
                        <div className="action-buttons"/>
                    </div>
                </div>
            );
            if(i<6)
            tags.push(
                <div className="l51cYg xdhwaQ IoL7nw b-wpRw Al_2_w">
                    <div
                        className="JaCMAA X6WWlQ"
                        style={{
                            backgroundImage:
                                'url("../../assets/myimage/'+i+'.jpg")'
                        }}
                    />
                    <div className="OwD6kQ BHb8Zg">
                        <div className="_9abLAQ plvvbA ZTpOuQ">{titles[i-1]}</div>
                    </div>
                </div>
            )
        }
        return (<div  id={"mytemplate"}>
                    <SearchInput target={'templates'}/>
                    <div className={"item"}>
                        <Slider {...settings}>
                            {tags}
                        </Slider>
                    </div>
                    <div className="tile-grid">
                        {tiles}
                    </div>
                </div>);
    }
}

export default MyTemplate;