import React, {Component} from 'react';
import {connect} from 'react-redux';

class AnimationDetail extends Component{
    
    componentDidMount() {
        $('.demovid').click(function () {
            $('.demovid2').find('video').removeClass('preview-demo')
            $(this).find('video').addClass('preview-demo')
            $('#mycanvas').find('video').attr("src","../../assets/demo/snap1/SnapFrog1.mp4")
        })
        $('.demovid2').click(function () {
            $('.demovid').find('video').removeClass('preview-demo')
            $(this).find('video').addClass('preview-demo')
            $('#mycanvas').find('video').attr("src","../../assets/demo/snap1/SnapFrog2b.mp4")
        })
    }

    render(){
        if(!this.props.animation) {
            return <div style={{color: "white"}}>
                        <div  className="preview demovid"><video src="../../assets/demo/snap1/SnapFrog1a_a.mp4" height="80%" width="80%"/></div>
                        <div className="preview demovid2 "><video className={'preview-demo'} src="../../assets/demo/snap1/SnapFrog2b.mp4" height="80%" width="80%"/></div>
                    </div>
        }

        return (
            <div style={{color: "white"}}>
                <div>Animation Detail</div>
                <div>{this.props.animation.duration}</div>
            </div> );
    }
}

function mapStateToProps(state) {
    return {
        animation: state.activeAnimation
    };
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({selectAnimation: selectAnimation}, dispatch);
// }

export default connect(mapStateToProps)(AnimationDetail);
