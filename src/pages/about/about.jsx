import Footer from '../footer/footer'
import Header from '../nav/nav'
import './about.scss'

// img
import Me from '../../assets/images/me.png'
import Exchange from '../../assets/images/exchange.png'
import Eco from '../../assets/images/eco.png'
import Frontend from '../../assets/images/frontend.png'
import Intern from '../../assets/images/intern.png'
import Teaching from '../../assets/images/teaching.png'

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
    return (
        <>
            <Header />
            <div className='about'>
                <div className="intro">
                    <div className="wrap">
                        <div className="left"><img src={Me} alt="" /></div>
                        <div className="right">
                            <h2>Hello，我是 Jenny 陳怡臻！</h2>
                            <p>我是一位擅長插畫，並時常觀察生活中的細節美感的設計師。<br></br>

                                我擁有多元的設計能力，並熟悉多個設計軟體，期望能以使用/觀看者為中心去思考問題，讓設計的作品更發揮最大的價值與效益。<br></br>

                                在實習中前輩們肯定我的製圖能力與時程管理；一起製作專題的同學朋友們則肯定我的創意發想能力、執行力與創造力。
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
                        <div className="skill">貼文設計</div>
                        <div className="skill">角色設計</div>
                        <div className="skill">團隊協作溝通</div>
                        <div className="skill">動畫</div>
                        <div className="skill">網頁前端技術(HTML/CSS)</div>
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
                                    在 ViewSonic college 中，我主要協助行銷業務相關的社群貼文、活動背板、EDM 電子信與影片剪輯等製作，包括：<br></br>

                                    <ol>
                                        <li><b>社群媒體製作：</b>負責製作行銷相關的社群貼文，宣傳產品使用方法，也製作活動背板，提供參與者拍照，提升曝光度。</li>
                                        <li><b>影片剪輯：</b>製作公司頻道的影片，並成功提昇了影片觀看次數 120%。</li>
                                        <li><b>周邊物設計：</b>根據公司/部門的設計規範，製作口罩、衣服圖樣等周邊物品，提升品牌形象。</li>
                                    </ol>
                                    獨立製作過：<br></br>
                                    <ol>
                                        <li> 教育科技展：主視覺、活動網頁UI、展覽周邊物，並協助展覽當日活動舉行。</li>
                                        <li>教師年會：拍照背板、特殊尺寸講座資訊影像，時程表、活動貼紙等，以及協助年會動線引導等。</li>
                                        <li>創新教育教師獎：頒獎背板、手拿板、獎狀、貼紙等，依照已公布的主視覺，調整活動字體的主題性。</li>
                                    </ol>


                                </div>
                            </div>
                            <div className="c"><img className='viewsonic' src={Intern} alt="" /></div>
                        </div>
                        {/* two */}
                        <div className="work">
                            <div className="A"><img src={Teaching} alt="" />
                                <div className="line"></div>
                            </div>
                            <div className="b">
                                <div className="top_About">
                                    <div className="title">
                                        <h3>華語教學實習   </h3>
                                        <h4>南非德本學校</h4>
                                    </div>
                                    <h4 className='day'>2021/Sep-Dec</h4>
                                </div>
                                <div className="bottom">
                                    主要以遠距的方式與南非德本學校的僑生進行華語教學，主要任務包括：<br></br>
                                    <ol>
                                        <li>擬定教學計劃</li>
                                        <li>客製教材與活動</li>
                                        <li>學生強弱項、活動反應觀察紀錄</li>
                                    </ol>
                                    最終達成教學目標，並獲得班導師認同。
                                </div>
                            </div>
                            <div className="c"><img src={Teaching} alt="" /></div>
                        </div>
                        {/* three */}
                        <div className="work">
                            <div className="A"><img src={Eco} alt="" />

                            </div>
                            <div className="b">
                                <div className="top_About">
                                    <div className="title">
                                        <h3>Intern </h3>
                                        <h4>富邦文教基金會-未來自造所</h4>
                                    </div>
                                    <h4 className='day'>2018 - 2019</h4>
                                </div>
                                <div className="bottom">
                                    在未來自造所該企劃中習得：<br></br>
                                    <ol>
                                        <li>專案企劃發想</li>
                                        <li>專案製作執行</li>
                                        <li>行銷相關知識</li>
                                    </ol>
                                    並運用學習內容規劃發想綠能企劃專案。
                                </div>
                            </div>
                            <div className="c"><img src={Eco} alt="" /></div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />

        </>
    )
}

export default about
