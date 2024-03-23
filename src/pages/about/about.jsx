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
                            <h2>Hello，我是 Jenny，很高興認識你！</h2>
                            <p>我是一位擅長插畫，並時常觀察生活中的細節美感的設計師。<br></br>

                                我擁有多元的設計能力，並熟悉多個設計軟體，期望能以使用/觀看者為中心去思考問題，讓設計的作品更發揮最大的價值與效益。<br></br>

                                在實習中前輩們肯定我的製圖能力與時程管理；一起製作專題的同學朋友們則肯定我的創意發想能力、執行力與創造力。<br></br>

                                短期內希望設計思考的能力更精進、視覺設計上更加善用行銷技巧，並利用多餘時間學習新技能。未來則希望能持續學習，增加軟、硬實力，拓展思維與眼界。</p>
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
                    {/* work */}
                    <div className="work_wrap">
                        {/* one */}
                        <div className="work">
                            <div className="A"><img src={Intern} alt="" />
                            </div>
                            <div className="b">
                                <div className="top">
                                    <div className="title">
                                        <h3>Design Intern </h3>
                                        <h4>Viewsonic 優派國際股份有限公司</h4>
                                    </div>
                                    <h4 className='day'>2022/Jan-Sep</h4>
                                </div>
                                <div className="bottom">
                                    依照需求製作社群貼文、影片及活動周邊等，<br></br>
                                    影片封面在修改後觀看次數提升 120%，<br></br>
                                    並製作了展覽的主視覺與網頁UI。
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
                                <div className="top">
                                    <div className="title">
                                        <h3>華語教學實習   </h3>
                                        <h4>南非德本學校</h4>
                                    </div>
                                    <h4 className='day'>2021/Sep-Dec</h4>
                                </div>
                                <div className="bottom">
                                    使用遠距的方式與南非僑生進行華語教學，<br></br>
                                    透過觀察學生來客製化教材與教學活動發想等。
                                </div>
                            </div>
                            <div className="c"><img src={Teaching} alt="" /></div>
                        </div>
                        {/* three */}
                        <div className="work">
                            <div className="A"><img src={Eco} alt="" />
                                
                            </div>
                            <div className="b">
                                <div className="top">
                                    <div className="title">
                                        <h3>Intern </h3>
                                        <h4>富邦文教基金會-未來自造所</h4>
                                    </div>
                                    <h4 className='day'>2018 - 2019</h4>
                                </div>
                                <div className="bottom">
                                    習得專案企劃發想、以及媒體行銷相關知識，<br></br>
                                    並運用學習內容規劃發想綠能企劃專案。
                                </div>
                            </div>
                            <div className="c"><img src={Eco} alt="" /></div>
                        </div>
                    </div>
                    {/* 2024 */}
                    <div className="lastYear">
                        <div className="korea">
                            <figure><img src={Exchange} alt="" /></figure>
                            <div className="text">
                                <h2>韓國漢陽大學交換生</h2>
                                <h4>2023/FEB-JUN</h4>
                            </div>
                            <div className="content">在韓國除了學習韓語外，<br></br>
                                也增進了多元交流的能力!
                            </div>
                        </div>
                        <div className="frontEnd">
                        <figure className='phone'><img src={Frontend} alt="" /></figure>
                            <div className="text">
                                <h2>互動式前端網頁訓練班</h2>
                                <h4>2023/Nov-2024/Feb
                                </h4>
                            </div>
                            <div className="content">在進入業界之前希望能多了解前端相關的知識，讓自己在與工程師溝通時更加快速，並強化熟悉產品設計的流程、規範建立等，因此參與了職訓局的課程。
                            </div>
                            <figure className='desk'><img src={Frontend} alt="" /></figure>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default about
