import React, {Component} from 'react';
import SearchInput from "./SearchInput";

class MyMusic extends Component {

    constructor(props) {
        super(props);
        this.state = {doPlay:true, currentVid: 0, scaleVal: 0}
    }

    componentDidMount() {
        /*let animPanelWidth = $('#animation-panel').width();
        $('.D-ZUcw2').css('transform', 'scale('+animPanelWidth/314+')')
        $(window).resize(function(){
            let animPanelWidth = $('#animation-panel').width();
            $('.D-ZUcw2').css('transform', 'scale('+animPanelWidth/314+')')
        });*/
    }

    render() {

        return (<div  >
            <SearchInput target={'images'}/>
            <div className="mymusic">
                <div className="Mb3Gqg">
                    <div className="ppePEA">
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">Epic</button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADlPU80yoM/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Video Game Blockbuster</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Epic Classical - Epic, Suspense
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzGQ8_Ak/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">The Ginger Girl</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Modern Classical - Epic, Suspense
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzHF_Y0M/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Coworkpartytime</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Dubstep - Restless, Epic
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">Travel</button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzAfxYmQ/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Blizzards</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Indie Pop - Hopeful, Peaceful
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADlPdW7oXY/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Advertising</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Ambient - Euphoric, Bright
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADlPeXXBTw/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Ukulele Song</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Solo Instruments - Happy, Bright
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">Trap</button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzMHB_Xs/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Dragonfly</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Dance - Bright, Restless
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzAsew_U/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Blue Macaw</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Dance - Dreamy, Bright
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzPDUBPI/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Cruzin Down</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Old School Hip Hop - Dreamy
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">Piano</button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzEuHGnY/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Lovely Piano Song</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Lullabies - Dreamy, Peaceful
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzLtSlQ8/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Sadness On White Keys</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Mystery - Mysterious, Sad
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzEuUqX8/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Nostalgic Piano</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Solo Piano - Sentimental, Sad
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">YouTube</button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzF1h684/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                          <span className="xcP_1w">
                            Happy Whistling Ukulele
                          </span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Happy Childrens' Tunes - Bright, Happy
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzNwvC0U/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Funky Disco</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Funk - Bright, Euphoric
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzKVtYQA/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Safety Net</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">Indie Pop - Bright</div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">Happy</button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzJKEnCU/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Brighter Sun</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">Rock - Happy, Bright</div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzL2eVwM/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                          <span className="xcP_1w">
                            I Am Happy For This Guitar
                          </span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Modern Blues - Laid Back, Euphoric
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADlPdW7oXY/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Advertising</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Ambient - Euphoric, Bright
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">
                                            Instrumental
                                        </button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzDcbuDY/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                          <span className="xcP_1w">
                            Vivaldi The Four Seasons 'Spring'
                          </span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Dramatic Classical - Hopeful, Bright
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzKWjdMM/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">A Waltz For Naseem</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Fantasy &amp; Dreamy Childrens' Tunes - Bright,
                                                                            Dreamy
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzONb4as/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Queen Alice</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Modern Classical - Euphoric, Bright
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">Cinematic</button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADlPRabkXA/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Fireworks</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Synth Pop - Dreamy, Mysterious
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzB3UeCU/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Action Strike</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Action - Suspense, Epic
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzGQ8_Ak/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">The Ginger Girl</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Modern Classical - Epic, Suspense
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">Pop</button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzBmLhYw/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Club</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Synth Pop - Hopeful, Euphoric
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzIl7ATg/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                          <span className="xcP_1w">
                            HYWASAY (Hey, You Wanted A Song About You)
                          </span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">Indie Pop - Hopeful</div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzKVtYQA/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Safety Net</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">Indie Pop - Bright</div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">Trailer</button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzJKEnCU/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Brighter Sun</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">Rock - Happy, Bright</div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzPwIodM/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Evil Incoming</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Build Up Scenes - Hopeful, Suspense
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzABvQdM/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Cornfield Chase</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Suspense - Suspense, Restless
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">Vocal</button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzOZBRk4/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Garden Hose Rainbows</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">Punk - Restless</div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzCGovb0/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Thank You, Goodnight</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Build Up Scenes - Hopeful
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzKO1DE0/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Lucy's Better</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">Punk - Eccentric</div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="n1Fp1g">
                            <div className="sMd5nQ">
                                <div className>
                                    <div className="y2ortA">
                                        <button className="C7t9RA SGgUyQ n9zSJA ZTpOuQ">Wedding</button>
                                        <button className="C7t9RA nhbe_w MWlxIg ZTpOuQ WHZ0uA">
                                            <span className="DuBPyQ">See all</span>
                                            <span className="jEbZZQ">
                <span aria-hidden="true" className="ZQsKtg xR4dgg jXopDw">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                  >
                    <path
                        fill="currentColor"
                        d="M6.47 4.29l3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                    />
                  </svg>
                </span>
              </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="_0fYpqw2">
                                <div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzONb4as/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Queen Alice</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Modern Classical - Euphoric, Bright
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADrzGeWJNg/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Morning Snowflake</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Solo Piano - Sentimental, Hopeful
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AF_IZg">
                                        <div className="ZElZRA" draggable="true">
                                            <div className="_428bVQ">
                                                <section className="mh2TGQ wZ_zoQ gDsJNQ">
                                                    <div className>
                                                        <div className="yt8-Ew Sq5okQ">
                                                            <div className="C8Hfcw _0aRDtw">
                                                                <div className="UMv2ag BN7NuA">
                                                                    <div className="q7SpvA">
                                                                        <img
                                                                            className="Ju8dKg"
                                                                            crossOrigin="anonymous"
                                                                            src="https://audio-public.canva.com/aADlPdW7oXY/covers/0.jpg"
                                                                            draggable="false"
                                                                        />
                                                                    </div>
                                                                    <span className="aptOOQ" />
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="_6tKNVg f_b3kA xR4dgg"
                                                                    >
                            <svg
                                width={24}
                                height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.248 4.212l11.05 6.574c.694.412.91 1.29.483 1.961-.121.19-.287.35-.483.467l-11.05 6.574c-.694.413-1.602.204-2.03-.467A1.39 1.39 0 0 1 6 18.574V5.426C6 4.638 6.66 4 7.475 4c.273 0 .54.073.773.212z"
                                  fill="currentColor"
                              />
                            </svg>
                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="wuAAeg">
                                                                <div className="DeeYsQ n9zSJA ZTpOuQ _2nNFCw">
                                                                    <span className="xcP_1w">Advertising</span>
                                                                </div>
                                                                <div className="anLOmg MWlxIg ZTpOuQ uujxwg">
                                                                    <div className="hSlghA">
                                                                        <div className="_0pVedQ">
                                                                            Ambient - Euphoric, Bright
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default MyMusic;