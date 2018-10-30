import React, {Component} from 'react';
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color';

class AdvancedStyle extends Component{

    constructor(props){
        super(props);
        this.state = {
            displayColorPicker: false,
            color: '#000000',
            hiddenVal: 'hidden',
            offSetX: 5,
            offSetY: 5,
            blur: 5
        }
    }

    handleClick = () => {this.setState({ displayColorPicker: !this.state.displayColorPicker })};
    handleClose = () => { this.setState({ displayColorPicker: false })};
    handleChange = (color) => {this.setState({ color: color.hex })};
    isCheck = (e) => {
        if(e.target.checked){
            this.setState({hiddenVal: ''});
        }else{
            this.setState({hiddenVal: 'hidden'});
        }
    };

    render(){

        const styles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `${ this.state.color}`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '0.25em',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                    height: '24px',
                    marginRight: '3px'
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
                    <tr className='forEditor forText forShape forImage'><td className="separator"/><td/></tr>
                    <tr className='forEditor forText forShape forImage'>
                        <td className="arrg-box shadow-checkbox">
                            <div className="row">
                                <div className="col">
                                    <input id="shadowIsChecked" onChange={this.isCheck} type="checkbox" />
                                </div>
                                <div className="col">
                                    <div className="line-title">Shadows</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="me-color forEditor forText forShape forImage" hidden={this.state.hiddenVal}>
                        <td className="">
                            <div className="item">
                                <input type="color"
                                       hidden="hidden"
                                       id="colorShadow"
                                       onChange={()=>{}}
                                       value={this.state.color}
                                       className="line-input"
                                       data-type="color"/>
                                <div className="">
                                    <div className="color-shadow">
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
                                </div>
                                <div className="line-title">Color</div>
                            </div>
                            <div className="item">
                                <div>
                                    <input id="shadowOffsetX"
                                           onChange={()=>{}}
                                           defaultValue={1}
                                           type="number"
                                           min="0"
                                           className="line-input input-shadow"/>
                                </div>
                                <div className="line-title">X</div>
                            </div>
                            <div className="item">
                                <div>
                                    <input
                                        id="shadowOffsetY"
                                        onChange={()=>{}}
                                        defaultValue={1}
                                        type="number"
                                        min="0"
                                        className="line-input input-shadow"/>
                                </div>
                                <div className="line-title">Y</div>
                            </div>
                            <div className="item-wm">
                                <div>
                                    <input
                                        id="shadowBlur"
                                        onChange={()=>{}}
                                        defaultValue={1}
                                        type="number"
                                        min="0"
                                        className="line-input input-shadow"/>
                                </div>
                                <div className="line-title">Blur</div>
                            </div>
                        </td>
                    </tr>
                </React.Fragment>
    }
}

export default AdvancedStyle;
