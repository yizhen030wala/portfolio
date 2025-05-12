import Footer from '../footer/footer'
import Header from '../nav/nav'
import './about.scss'
import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// img
import Me from '../../assets/images/me.jpg'
import Exchange from '../../assets/images/exchange.png'
import Eco from '../../assets/images/eco.png'
import Frontend from '../../assets/images/frontend.png'
import Intern from '../../assets/images/intern.png'
import Teaching from '../../assets/images/teaching.png'
import Biomedica from '../../assets/images/biomedica.jpg'
import DaoDao from '../../assets/images/daodao.jpg'
//icon
import Adobe1 from '../../assets/icon/adobe1.png'
import Adobe2 from '../../assets/icon/adobe2.png'
import Adobe3 from '../../assets/icon/adobe3.png'
import Adobe4 from '../../assets/icon/adobe4.png'
import Adobe5 from '../../assets/icon/adobe5.png'
import CSS3 from '../../assets/icon/CSS3.png'
import HTML5 from '../../assets/icon/HTML5.png'
import Java from '../../assets/icon/Javascript.png'
import Procreate from '../../assets/icon/Procreate.png'
import Sass from '../../assets/icon/sass.png'
// import icon from '../../assets/icon/favicon_32px.png'



const about = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <>
            <Header />
            <div className='about'>
                <div className="intro">
                    <div className="wrap">
                        <div className="left">
                            {!imageLoaded && <Skeleton height="100%" />}
                            <img 
                                src={Me} 
                                alt="" 
                                style={{ 
                                    borderRadius: '20px',
                                    display: imageLoaded ? 'block' : 'none'
                                }} 
                                onLoad={handleImageLoad}
                            />
                        </div>
                        <div className="right">
                            <h2>Hello，我是 Jenny 陳怡臻！</h2>
                            <p>我擅長在複雜需求與多角色之間釐清核心問題，並用系統性的設計方法，協助團隊聚焦與共識收斂。
                                面對模糊與混亂時，我會先整理資訊、提出設計策略，再進行具體行動，這讓我在設計初期可以為團隊找到設計節奏。
                                <br></br><br></br>

                            我相信好的設計，可以真實解決問題、兼顧用戶與商業兩端。
                            在過往 B2B 醫療與教育平台的專案中，我經常結合研究、策略與實務設計，在限制中找到機會，為產品建立可持續迭代的基礎。
                            <br></br><br></br>

                            對我來說，設計不再只是介面輸出，而是引導與對齊的過程。我樂於傾聽，也善於提出關鍵問題，讓團隊走得更清晰、更穩定。
                                {/* <br></br>

                                短期內希望設計思考的能力更精進、視覺設計上更加善用行銷技巧，並利用多餘時間學習新技能。未來則希望能持續學習，增加軟、硬實力，拓展思維與眼界。 */}
                            </p>
                        </div>
                    </div>

                </div>
                <div className="skills">
                    <h2>我的技能</h2>
                    <div className="skills_wrap">
                        <div className="skill">設計規範</div>
                        <div className="skill">介面視覺設計</div>
                        <div className="skill">產品使用流程設計</div>
                        <div className="skill">產品 PRD 撰寫</div>
                        <div className="skill">團隊協作溝通</div>
                        <div className="skill">貼文設計</div>
                        <div className="skill">角色設計</div>
                        <div className="skill">動畫</div>
                        <div className="skill">網頁前端技術(HTML/CSS/React)</div>
                    </div>
                </div>
                <div className="work_tools">
                    <h2>我創作的工具</h2>
                    <div className="tools_wrap">
                        <div className="tools"><img src={Adobe2} alt="" /></div>
                        <div className="tools"><img src={Procreate} alt="" /></div>
                        <div className="tools"><img src={Adobe3} alt="" /></div>
                        <div className="tools"><img src={Adobe4} alt="" /></div>
                        <div className="tools"><img src={Adobe5} alt="" /></div>
                        <div className="tools"><img src={Adobe1} alt="" /></div>

                        <div className="tools"><img src={CSS3} alt="" /></div>
                        <div className="tools"><img src={HTML5} alt="" /></div>
                        <div className="tools"><img src={Sass} alt="" /></div>
                        <div className="tools"><img src={Java} alt="" /></div>



                    </div>
                </div>
                <div className="speak">
                    <h2>我會說的語言</h2>
                    <div className="speak_wrap">
                        <div className="lauange">
                            <h2>TW 中文(繁體)</h2>
                            <h4>母語</h4>
                        </div>
                        <div className="lauange">
                            <h2>EN 英文</h2>
                            <h4>TOEIC 795,TOFEL 72</h4>
                        </div>
                        <div className="lauange">
                            <h2>KR 韓語</h2>
                            <h4>中階</h4>
                        </div>
                    </div>

                </div>
                {/* 經歷 */}
                <div className="experiences">
                    <h2>我的經歷</h2>
                    <div className="work_wrap">
                        {/* one */}
                        <div className="work">
                            <div className="A"><img src={Biomedica} alt="" />
                            </div>
                            <div className="b">
                                <div className="top_About">
                                    <div className="title">
                                        <h3>UI/UX 設計師 </h3>
                                        <h4> 柏瑞醫 (醫療科技公司, B2B, AI)</h4>
                                    </div>
                                    <h4 className='day'>2024/Jun-Now</h4>
                                </div>
                                <div className="bottom">
                                在 Biomedica 中，我從業務需求、商業模式與用戶體驗出發，設計醫療影像拍攝/分析平台的使用邏輯和架構，包括：<br></br>

                                    <ol>
                                        <li><b>獨立建立 UI/UX 設計流程與標準化交付，</b>提升跨團隊溝通效率，使設計與開發方向一致。</li>
                                        <li><b>優化醫療影像與數據管理體驗，</b>簡化檢索、分析與報告流程，幫助專業用戶更高效決策。</li>
                                        <li><b>設計 AI 分析與自動化輔助工作流，</b>減少人工操作，提升診斷與數據分析精準度。</li>
                                        <li><b>使用者研究：</b>透過脈絡訪談、內部 Usability Testing、Prototype 測試，優化影像管理與報告生成功能。</li>
                                        <li><b>團隊協作：</b>和 PM、工程師協作，推動決策透明度，制定產品功能地圖與設計規範。</li>
                                    </ol>
                                    


                                </div>
                            </div>
                            <div className="c"><img className='viewsonic' src={Biomedica} alt="" /></div>
                        </div>
                        {/* two */}
                        <div className="work">
                            <div className="A"><img src={DaoDao} alt="" />
                                <div className="line"></div>
                            </div>
                            <div className="b">
                                <div className="top_About">
                                    <div className="title">
                                        <h3>UI/UX 設計師</h3>
                                        <h4>島島阿學 (自主學習平台, Side Project)</h4>
                                    </div>
                                    <h4 className='day'>2024/Sep-Now</h4>
                                </div>
                                <div className="bottom">
                                    在 島島阿學 中，我從產品願景與機會點出發，與 PO 討論並設計改版與新功能，包括：<br></br>
                                    <ol>
                                        <li>設計自主學習規劃功能，提升學員目標設定、資源獲取與社群互動體驗，並提高網站流量 109%</li>
                                        <li>規劃資訊架構，讓不同角色（導師/學員）能直覺理解平台功能</li>
                                        <li>設計回饋機制，平衡隱私保護與學習交流，促進社群互動</li>
                                    </ol>
                       
                                </div>
                            </div>
                            <div className="c"><img src={DaoDao} alt="" /></div>
                        </div>
                    </div>
                    {/* 2024 */}
                    <div className="lastYear">
                        <div className="frontEnd">
                            <figure className='phone'><img src={Frontend} alt="" /></figure>
                            <div className="text">
                                <h2>互動式前端網頁訓練班</h2>
                                <h4>2023/Nov-2024/Feb
                                </h4>
                            </div>
                            <div className="content">
                                在此專題中，我主要擔任 <b>UI/UX Designer</b>，與兩位前端工程師組員合作。主要任務包括：<br></br>

                                <ol>
                                    <li>設計 UI Flow、Design guideline</li>
                                    <li>UI layout</li>
                                    <li>prototype</li>
                                    <li>建立程式設計規範、協助撰寫RWD</li>
                                </ol>
                                透過專題，加強了組件設計的規劃認知與產品規劃邏輯，並了解 React 前端框架建立等概念。
                            </div>
                            <figure className='desk'><img src={Frontend} alt="" /></figure>
                        </div>
                        <div className="korea">
                            <figure><img src={Exchange} alt="" /></figure>
                            <div className="text">
                                <h2>韓國漢陽大學交換生</h2>
                                <h4>2023/FEB-JUN</h4>
                            </div>
                            <div className="content">2023年申請到韓國漢陽大學交換，主要目標為：<br></br>
                                <ol>
                                    <li>學習韓文與了解文化</li>
                                    <li>了解韓國軟體介面美感與使用體驗</li>
                                </ol>
                                也結識來自德國、法國、中國、韓國與丹麥的朋友，<br></br>
                                真切拓展了文化視野、差異，<br></br>
                                收穫了無法取代的寶貴回憶與語言能力！
                            </div>
                        </div>

                    </div>
                    {/* work */}
                    <div className="work_wrap">
                        {/* one */}
                        <div className="work">
                            <div className="A"><img src={Intern} alt="" />
                            </div>
                            <div className="b">
                                <div className="top_About">
                                    <div className="title">
                                        <h3>Design Intern </h3>
                                        <h4>Viewsonic 優派國際股份有限公司</h4>
                                    </div>
                                    <h4 className='day'>2022/Jan-Sep</h4>
                                </div>
                                <div className="bottom">
                                在 ViewSonic college 中，我主要依照行銷業務相關的需求製作產出相關視覺，包括：<br></br>
                                    <ol>
                                        <li>依據行銷需求製作社群貼文、活動背板與影片，成功提升品牌曝光度與影片觀看次數 120%。</li>
                                        <li>設計展覽與行銷周邊物（主視覺、活動 UI、頒獎背板等），提升品牌形象與活動識別度</li>
                                  
                                    </ol>


                                </div>
                            </div>
                            <div className="c"><img className='viewsonic' src={Intern} alt="" /></div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />

        </>
    )
}

export default about
