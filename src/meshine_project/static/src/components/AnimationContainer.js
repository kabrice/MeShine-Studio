import _ from 'lodash';
import React, {Component} from 'react';
import AnimationPanelItem from '../components/AnimationPanelItem';
import {connect } from 'react-redux';
import {fetchAnimation} from "../actions/index";
import { Dropdown } from 'semantic-ui-react'
import FooterMenuBox from './FooterMenuBox';

class AnimationPanel extends Component{

    componentDidMount(){
        this.props.fetchAnimation();
    }

    renderAnimation(){
        return _.map(this.props.animations, (animation) => {
            return  <div className="fmb-menu" style={{"margin": "0px"}} key={animation.id}
                         onClick={() => this.props.selectAnimation(animation)}>
                <AnimationPanelItem animation={animation}/></div>
        })
    }

    render(){
        const countryOptions = [
            { key: 'af', value: 'af', image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg'} , text: 'Afghanistan' },
            { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
            { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
            { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
            { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
            { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
            { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
            { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
            { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
            { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
            { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
            { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
            { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
            { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
            { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
            { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
            { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
            { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
            { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
            { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
            { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
            { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
            { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
        ];
        return (
            <React.Fragment>
                <div className="big-anim-box" >
                    <div className="anim-container">
                        {this.renderAnimation()}
                    </div>
                </div>
                <br/>
                <div className="big-anim-box">
                    <div className="anim-container">
                        <div className={"anim-block"}>
                            <div className="line-title rot-input">Z-index : </div>
                            <input className="line-input" defaultValue='0'/>
                        </div>
                        <div className={"big-menu-box"}>
                            <div className="thumbs anim-btn-type">
                                <div className="fmb-menu">
                                    <div className="left-btn me-btn2">Entry</div>
                                    <div className="middle-btn me-btn2">Emphasis</div>
                                    <div className="right-btn me-btn2" >Exit</div>
                                </div>
                            </div>
                        </div>
                        <Dropdown
                            placeholder='Select Country'
                            fluid
                            search
                            selection
                            options={countryOptions}
                        />
                        <div role="combobox" aria-expanded="true"
                             className="ui active visible fluid search selection upward dropdown"><input
                            aria-autocomplete="list" autoComplete="off" className="search" tabIndex="0" type="text"
                            value=""/>
                            {/*<div className="default text" role="alert" aria-live="polite" aria-atomic="true">Select animation</div>*/}
                            <div className="text" role="alert" aria-live="polite" aria-atomic="true">Afghanistan</div>
                            <FooterMenuBox type={"bodymovin"}
                                           />
                            <i aria-hidden="true" className="dropdown icon"></i>
                        </div>
                        <div className={"anim-block"}>
                            <div className="line-title rot-input">Duration : </div>
                            <input className="line-input" defaultValue='0'/>
                        </div>
                        <div className={"anim-block"}>
                            <div className="line-title rot-input">Loop : </div>
                            <input className="line-input" defaultValue='0' type={"checkbox"}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        animations: state.animations
    }
}


export default connect(mapStateToProps, {fetchAnimation})(AnimationPanel);
