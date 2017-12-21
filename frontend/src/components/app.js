import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div className="row mt-1" >
                <div className="col mt-1 pt-2 bg-inverse animation-panel">
                    <table>
                        <thead>
                        <tr>
                            <th colSpan="3">Volet d'animation</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-emphasis">
                                <img src="../assets/animation_emphasis.svg"/></td>
                            <td>Le passage du cyclone Mora a laissé des traces. Les habitants ont découverts 20 baleines échouées</td>
                        </tr>
                        <tr>
                            <td>2,3s</td>
                            <td className="animation-exit">
                                <img src="../assets/animation_exit.svg"alt=""/></td>
                            <td>  image5.png</td>
                        </tr>
                        <tr>
                            <td >1,0s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg"alt=""/></td>
                            <td>Le passage du cyclone Mora a laissé des traces. Les habitants ont découverts 20 baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance" >
                                <img src="../assets/animation_entrance.svg" alt=""/></td>
                            <td>Le passage du cyclone Mora a laissé des traces. Les habitants ont découverts 20 baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-emphasis">
                                <img src="../assets/animation_emphasis.svg" alt=""/></td>
                            <td>Sri Lanka : des habitans aident</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-trajectory">
                                <img src="../assets/animation_trajectory.svg" alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg" alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg" alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg" alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg" alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg" alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg" alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg" alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg"alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg"
                                     alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg" alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-entrance">
                                <img src="../assets/animation_entrance.svg" alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        <tr>
                            <td >0,1s</td>
                            <td className="animation-exit">
                                <img src="../assets/animation_exit.svg"alt=""/></td>
                            <td>Sri Lanka : des habitans aident des baleines échouées</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div id="card-container" className="col ">
                    <canvas id="mydiv"></canvas>
                </div>
                <div className="col  bg-inverse" id="design-panel">col</div>
            </div>
        );
    }
}