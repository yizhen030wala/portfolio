// 旅藤
import Footer from '../footer/footer'
import Header from '../nav/nav'
import './works.scss'

//img
import Rallway from '../../assets/images/rallway/cover.png'
// --
import Branding from '../../assets/images/RETO CH/branding.png'
import Cover1 from '../../assets/images/RETO CH/cover1.png'
import Codepen from '../../assets/images/RETO CH/codepen.gif'
import Function from '../../assets/images/RETO CH/function.png'
import Idea1 from '../../assets/images/RETO CH/idea (1).png'
import Idea2 from '../../assets/images/RETO CH/idea (2).png'
import Persona from '../../assets/images/RETO CH/persona.png'
import ppt1 from '../../assets/images/RETO CH/ppt1.png'
import ppt2 from '../../assets/images/RETO CH/ppt2.png'
import ppt3 from '../../assets/images/RETO CH/ppt3.png'
import ppt4 from '../../assets/images/RETO CH/ppt4.png'
import ppt5 from '../../assets/images/RETO CH/ppt5.png'
import Prograss from '../../assets/images/RETO CH/prograss.png'
import Qurey from '../../assets/images/RETO CH/qurey.png'
import Research from '../../assets/images/RETO CH/research.png'
import Survey1 from '../../assets/images/RETO CH/survey1.png'
import Survey2 from '../../assets/images/RETO CH/survey2.png'
import wireframe from '../../assets/images/RETO CH/wireframe.png'
import Seacrh from '../../assets/images/RETO CH/seacrh.gif'
import Feature from '../../assets/images/RETO CH/feature.gif'




const work1 = () => {
    return (
        <div>
            <Header />
            <main className='portfolio reto'>
                <div className="port_content">
                    <div className="top">
                        <div className="porject_info">
                            <div className="col">
                                <div className="row">
                                    <div className="tag_wrap">
                                        <div className="tag">介面設計</div>
                                        <div className="tag">原型設計</div>
                                        <div className="tag">設計規範</div>
                                        <div className="tag">前端切版</div>
                                        <div className="tag">團隊溝通</div>
                                    </div>
                                    <p>2023/11-2024/2</p>
                                </div>
                                <div className="row">
                                    <h1>RETO旅藤-行程規劃器</h1>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>專案期間</p>
                                        <h6>4個月</h6>
                                    </div>
                                    <div className="col">
                                        <p>角色</p>
                                        <h6>UIUX designer</h6>
                                    </div>
                                    <div className="col">
                                        <p>成果</p>
                                        <h6>完整使用者介面&互動設計</h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text_wrap">
                        <h2>產品背景</h2>
                        <p>旅藤是一個能快速規劃旅程、且輕便單純的產品。<br></br>
                            在旅藤中，使用者能使用視覺化的方式，更快速的選擇與決定、替換景點，並一次安排行程順序與路線。
                        </p>
                        <h2>專案概覽</h2>
                        <p>旅藤為前端班課程專案所產出的結業作品，我們團隊一共2位工程師、1位設計師。<br></br>
                        </p>
                        <div className="box_wrap">
                            <div className="box">
                                <h2>01 | 團隊目標</h2>
                                <p>我們希望節省規劃旅程時的時間與選擇的繁雜感，因此製作工具型導向的產品。</p>
                            </div>
                            <div className="box">
                                <h2>02 | 團隊挑戰</h2>
                                <p>這個專題最大的挑戰是時間的限制，以及工程技術上需要保留更多時間與設計稿的彈性，並與組員找出適當的解法。</p>
                            </div>
                        </div>


                        <hr />
                        <h2>設計流程</h2>
                        <img className='design' src={Prograss} alt="設計流程" />
                        <p>在發想過程中，我先提出旅遊安排這個主題，並用簡易的使用者旅程回推過往安排旅行時得痛點，從而找出能加以優化or解決的部分。</p>
                        <img src={Idea1} alt="草稿" />
                        <p>同時我的組員也使用問卷分析的方式，了解使用者的輪廓與驗證、尋找痛點。</p>
                        <img src={Qurey} alt="問卷" />
                        <p>從問卷中，分析出大眾在規劃旅程時，對於"重排行程""查詢交通時間"以及"整理行程資訊"等步驟，感到費時與費力。同時我們也了解了大多數受眾會在何處收集旅遊景點的資訊來幫助他們做決策，還有什麼樣的功能能夠協助他們做行程編輯。</p>
                        <img src={Survey2} alt="痛點" />
                        <p>根據問卷分析結果，我也歸納出三種使用者受眾的輪廓，以及他們可能會使用旅藤的機會點。</p>
                        <img src={Persona} alt="使用者輪廓" />
                        <p>過程中我們使用Figjam做發想與溝通idea，並根據所收集到的問卷分析結果，開始製作wireframem與UI flow。
                        </p>
                        <img src={Idea2} alt="" />
                        <hr />
                        <h2>我們的目標</h2>
                        <p>製作一個web APP的MVP版本，讓資訊閱讀的方式更直覺，編輯旅程可以快速、集中與方便。</p>
                        <hr />
                        <p>考慮到當登入頁面放在所有流程的最先步驟時，使用者在還沒明確行動與體驗下會跳出網站，我將登入的步驟放在建立/加入行程中，並只保留google登入的模式，讓註冊流程加速，並盡快引導使用者到行程編輯的頁面。</p>
                        <img src={wireframe} alt="wireframe" />
                        <p>接下來進到品牌識別設計的部分,在這邊因為只有兩周半的時間就要完成所有介面與品牌設計的關係，在這裡我先以圓體做簡易的改動來做為品牌標準字。
                        </p>
                        <img src={Branding} alt="branding" />
                        <h2>介面設計規範</h2>
                        <div className="reto_img_wrap">
                            <img src={ppt2} alt="" />
                            <img src={ppt3} alt="" />
                        </div>
                        <p>而在全部設計告一個段落後，我也先使用codepen製作提供給工程師組員的程式設計規範，在後續也整理成scss檔，放到React上做使用。</p>
                        <img src={Codepen} alt="codepen" />
                        <h2>介面設計</h2>
                        <img src={ppt4} alt="UI 1" />
                        <p>首頁特點區域互動特效</p>
                        <img src={Feature} alt="特色" />
                        <p>在搜索頁的部分，我將景點分類成三大項，使用者可以點擊/拖曳來切換景點分類，分類大項中也有子分類可以做篩選，並使用瀑布流方式來瀏覽、選擇景點。</p>
                        <img src={Seacrh} alt="search" />
                        <p>其他介面設計</p>
                        <img src={ppt5} alt="UI 2" />
                        <p>在專題製作的過程中，對於行程編輯頁以及搜索頁的功能都需要和組員大量的溝通，站在使用者與工程師的角度去思考我的設計，這點讓我覺得很有趣。<br></br>
                            而在驗證的部分，目前則是考慮使用portopie做行程編輯頁互動上的驗證。
                        </p>
                        <h2>Thanks for watching!</h2>


                    </div>

                </div>
                <div className="other_project">
                    <a href={`/rallway`} className="next">
                        <div className="wrap">
                            <p>下一篇</p>
                            <h2>台鐵列車動態 redesign </h2>
                            <p>了解更多</p>
                        </div>
                        <figure><img src={Rallway} alt="" /></figure>

                    </a>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default work1
