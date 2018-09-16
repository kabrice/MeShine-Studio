import _ from 'lodash';
import React, {Component} from 'react';
import {connect } from 'react-redux';
import {fetchTypeFace} from '../actions/index'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color';

class TextEditor extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeTypeFace: 'Avenir Next',
            displayColorPicker: false,
            displayColorBgPicker: false,
            displayColorStrokePicker: false,
            color: '#000000',
            colorBg: '#000000',
            colorStroke: '#000000'
        }
    }
    componentDidMount(){
        this.props.fetchTypeFace();
    }

    handleClickTF = (id, name) => {
        this.setState({activeTypeFace: name})
    }

    renderTypeFaces(){

        return _.map(this.props.typefaces, (typeface) => {
            return  <a
                       key={typeface.id}
                       className="dropdown-item"
                       data-type="fontFamily"
                       href="#"
                       onClick={()=>{this.handleClickTF(typeface.id, typeface.name)}}
                       style={{'fontFamily': typeface.name}}>{typeface.name}</a>
        })
    }
    // Text color
    handleClick = () => {this.setState({ displayColorPicker: !this.state.displayColorPicker })};
    handleClose = () => { this.setState({ displayColorPicker: false })};
    handleChange = (color) => {
        console.log("color");
        this.setState({ color: color.hex })};

    // Bg color
    handleBGClick = () => {this.setState({ displayColorBgPicker: !this.state.displayColorBgPicker })};
    handleBGClose = () => { this.setState({ displayColorBgPicker: false })};
    handleBGChange = (color) => {this.setState({ colorBg: color.hex })};

    // Stroke color
    handleStrokeClick = () => {this.setState({ displayColorStrokePicker: !this.state.displayColorStrokePicker })};
    handleStrokeClose = () => { this.setState({ displayColorStrokePicker: false })};
    handleStrokeChange = (color) => {this.setState({ colorStroke: color.hex })};

    render(){
        //console.log("color", `${ this.state.color}`);
        const styles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `${ this.state.color}`,
                },
                colorBg: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `${ this.state.colorBg}`,
                },
                colorStroke: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `${ this.state.colorStroke}`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    zIndex: 1031,
                    position: 'fixed',
                    top: '30%',
                    left: '70%', 
                    width: '100%', 
                    height: '100%'
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

            return <React.Fragment>
                    <tr><td className="separator"/></tr>
                    <tr className="text-editor">
                        <td >
                            <div className="btn-group">
                                <button className="btn btn-secondary btn-sm btn-me"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                    {this.state.activeTypeFace}
                                </button>
                                <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    {this.renderTypeFaces()}
                                    <div className="dropdown-divider"/>
                                    <a className="dropdown-item" href="#" style={{'fontFamily':'Lucida Grande'}}>Lucida Grande</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-editor alignment-btn">
                        <td >
                            <div className="btn-group">
                                <button className="btn btn-secondary btn-sm btn-me"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                    Regular
                                </button>
                                <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split-me" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#" style={{'fontFamily':'Lucida Grande'}}>Lucida Grande</a>
                                    <div className="dropdown-divider"/>
                                    <a className="dropdown-item" href="#" style={{'fontFamily':'Lucida Grande'}}>Lucida Grande</a>
                                </div>
                                <input type="number"
                                       id="font-size"
                                       min="0"
                                       defaultValue={18}
                                       onChange={()=>{}}
                                       data-type="fontSize"/>
                            </div>
                        </td>
                    </tr>
                    <tr className="alignment-btn">
                        <td >
                            <div className="btn-group">
                            <button
                                className='alignment-btn-left btn-secondary'
                                data-value='left'
                                id="textBold"
                                data-type="textAlign">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#000000" d="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z" />
                                </svg>
                            </button>
                            <button className='alignment-btn-center btn-secondary'
                                    id="textItalic"
                                    data-value='center'
                                    data-type="textAlign">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#000000" d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" />
                                </svg>
                            </button>
                            <button className='alignment-btn-right btn-secondary'
                                    id="textUnderline"
                                    data-value='right'
                                    data-type="textAlign">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#000000" d="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z" />
                                </svg>
                            </button>
                            <button className='alignment-btn-justify btn-secondary'
                                    id="textStrike"
                                    data-value='justify'
                                    data-type="textAlign">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#000000" d="M23,12V14H18.61C19.61,16.14 19.56,22 12.38,22C4.05,22.05 4.37,15.5 4.37,15.5L8.34,15.55C8.37,18.92 11.5,18.92 12.12,18.88C12.76,18.83 15.15,18.84 15.34,16.5C15.42,15.41 14.32,14.58 13.12,14H1V12H23M19.41,7.89L15.43,7.86C15.43,7.86 15.6,5.09 12.15,5.08C8.7,5.06 9,7.28 9,7.56C9.04,7.84 9.34,9.22 12,9.88H5.71C5.71,9.88 2.22,3.15 10.74,2C19.45,0.8 19.43,7.91 19.41,7.89Z" />
                                </svg>
                            </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-editor alignment-btn">
                        <td>
                            <div className="btn-group">
                                <div className="line-title">Line <br/>height</div>
                                <input type="number" min="0" className="line-input" id="lineHeight"/>
                                <button className="btn btn-secondary btn-sm btn-me dropdown-toggle aa"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                    Aa
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" data-value='1stLetter' href="#">
                                        1st Letter of sentence<br/> in uppercase
                                    </a>
                                    <a className="dropdown-item" data-value='lowercase' href="#">
                                        lowercase
                                    </a>
                                    <a className="dropdown-item" data-value='uppercase' href="#">
                                        UPPERCASE
                                    </a>
                                    <a className="dropdown-item" data-value='1stLetters' href="#">
                                        1st Letters In Uppercase
                                    </a>
                                    <a className="dropdown-item" data-value='reverse' href="#">
                                        rEVERSE THE CASE
                                    </a>
                                </div>
                                <button
                                    className="btn btn-secondary btn-sm alignment-btn-left"
                                    data-value='left'
                                    id="superscript">
                                    X<sup>2</sup>
                                </button>
                                <button
                                    className="btn btn-secondary btn-sm alignment-btn-justify"
                                    data-value='left'
                                    id="subscript">
                                    X<sub>2</sub>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="alignment-btn">
                        <td >
                            <button
                                className='alignment-btn-left btn-secondary'
                                data-value='left'
                                data-type="textAlign">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#000000" d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z" />
                                </svg>
                            </button>
                            <button className='alignment-btn-center btn-secondary'
                                    data-value='center'
                                    data-type="textAlign">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#000000" d="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z" />
                                </svg>
                            </button>
                            <button className='alignment-btn-right btn-secondary'
                                    data-value='right'
                                    data-type="textAlign">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#000000" d="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z" />
                                </svg>
                            </button>
                            <button className='alignment-btn-justify btn-secondary'
                                    data-value='justify'
                                    data-type="textAlign">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#000000" d="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    <tr className="text-editor">
                        <td>
                            <div className="me-color">
                                <div className="form-group">
                                    <span className="line-title">Text color</span>
                                    <div className="sk-color colorFont">
                                        <div style={ styles.swatch } onClick={ this.handleClick }>
                                            <div style={ styles.color } />
                                        </div>
                                        { this.state.displayColorPicker ? <div style={ styles.popover }>
                                            <div  style={ styles.cover } onClick={ this.handleClose }/>
                                            <SketchPicker
                                                color={ this.state.color }
                                                onChange={ this.handleChange } />
                                        </div> : null }

                                    </div>
                                    <input type="color"
                                           className="btn-secondary"
                                           hidden="hidden"
                                           onChange={()=>{} }
                                           value={this.state.color}
                                           id="colorFont"
                                           data-type="color"/>
                                </div>
                               {/* <div className="form-group">
                                    <span className="line-title">Background color</span>
                                    <input type="color"
                                           className="btn-secondary"
                                           id="font-color"
                                           data-type="color"/>
                                </div>*/}
                                <div className="form-group">
                                    <span className="line-title">Background text color</span>
                                    <div className="sk-color colorBg">
                                        <div style={ styles.swatch } onClick={ this.handleBGClick }>
                                            <div style={ styles.colorBg } />
                                        </div>
                                        { this.state.displayColorBgPicker ? <div style={ styles.popover }>
                                            <div  style={ styles.cover } onClick={ this.handleBGClose }/>
                                            <SketchPicker color={ this.state.colorBg }
                                                          type="colorBg"
                                                          onChange={this.handleBGChange} />
                                        </div> : null }

                                    </div>
                                    <input type="color"
                                           className="btn-secondary"
                                           onChange={()=>{} }
                                           hidden="hidden"
                                           value={this.state.colorBg}
                                           id="colorBg"
                                           data-type="color"/>
                                </div>
                                <div className="form-group">
                                    <span className="line-title">Stroke color</span>
                                    <div className="sk-color colorStroke">
                                        <div style={ styles.swatch } onClick={ this.handleStrokeClick }>
                                            <div style={ styles.colorStroke } />
                                        </div>
                                        { this.state.displayColorStrokePicker ? <div style={ styles.popover }>
                                            <div  style={ styles.cover } onClick={ this.handleStrokeClose }/>
                                            <SketchPicker color={ this.state.colorStroke }
                                                          type="colorStroke"
                                                          onChange={this.handleStrokeChange} />
                                        </div> : null }

                                    </div>
                                    <input type="color"
                                           className="btn-secondary"
                                           onChange={()=>{} }
                                           hidden="hidden"
                                           id="colorStroke"
                                           value={this.state.colorStroke}
                                           data-type="color"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className=""><td className="separator"/><td/></tr>
            </React.Fragment>
        }
    };

function mapStateToProps(state) {

    return {
        typefaces: state.typefaces
    }
}

export default connect(mapStateToProps, {fetchTypeFace})(TextEditor);
