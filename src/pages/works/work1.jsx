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
import Def from '../../assets/images/RETO CH/def.png'

import Seacrh from '../../assets/images/RETO CH/seacrh.gif'
import Feature from '../../assets/images/RETO CH/feature.gif'
import Thanks from '../../assets/images/thanks.gif'


const work1 = () => {
    return (
        <div>
            <Header />
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
                            <div className="col text">
                                <p>專案期間</p>
                                <h6>4個月</h6>
                            </div>
                            <div className="col text">
                                <p>角色</p>
                                <h6>UIUX designer</h6>
                            </div>
                            <div className="col text">
                                <p>成果</p>
                                <h6>完整使用者介面&互動設計</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <main className='portfolio reto'>

                <div className="port_content">

                    <div className="text_wrap">
                        <div className="content_wrap">
                            <h2>產品背景</h2>
                            <p>旅藤是一個能快速規劃旅程、且輕便單純的產品。<br></br>
                                在旅藤中，使用者能使用視覺化的方式，更快速的選擇與決定、替換景點，並一次安排行程順序與路線。
                            </p>
                        </div>

                        <div className="goals_wrap">
                            <h2>專案概覽</h2>
                            <p>旅藤為前端班課程專案所產出的結業作品，我們團隊一共2位工程師、1位設計師，並利用課餘時間進行產品設計與開發的方式進行整個專案。<br></br>
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

                        </div>



                        <hr />

                        <h2>設計流程</h2>
                        <img className='design' src={Prograss} alt="設計流程" />
                        <p>在發想過程中，我先提出旅遊安排這個主題，並用簡易的使用者旅程回推過往安排旅行時的痛點，從而找出能加以優化or解決的部分。</p>
                        <img src={Idea1} alt="草稿" />
                        <p>同時我的組員也使用問卷分析的方式，了解使用者的輪廓與驗證、尋找痛點，而我則邀請朋友簡單分享對於競品的想發、優缺點等。<br></br>此時因為時間限制的關係，wireframe已經在同步進行設計，方便與組員溝通想法。</p>
                        <img src={Qurey} alt="問卷" />
                        <p>從問卷中，分析出大眾在規劃旅程時，對於"重排行程""查詢交通時間"以及"整理行程資訊"等步驟，感到費時與費力。同時我們也了解了大多數受眾會在何處收集旅遊景點的資訊來幫助他們做決策，還有什麼樣的功能能夠協助他們做行程編輯。</p>
                        <img src={Survey2} alt="痛點" />
                        <p>根據問卷分析結果，我也歸納出三種使用者受眾的輪廓，以及他們可能會使用旅藤的機會點。</p>
                        <img src={Persona} alt="使用者輪廓" />
                        <p>過程中我們使用Figjam做發想與溝通idea，並根據所收集到的問卷分析結果，決定最終的wireframem、UI flow與funcitonal map。
                        </p>
                        <img src={Idea2} alt="" />

                        <hr />
                        <div className="content_wrap">
                            <h2>我們的目標</h2>
                            <p>根據前面的發想與調查後，我們確定產品方向，以及功能與技術等等是否可行，最終決定製作一個web APP的MVP版本，讓資訊閱讀的方式更直覺，編輯旅程可以快速、集中與方便。</p>
                            <img src={Def} alt="" />
                        </div>


                        <hr />
                        <p>考慮到當登入頁面放在所有流程的最先步驟時，使用者在還沒明確行動與體驗下會跳出網站，我將登入的步驟放在建立/加入行程後，並只保留google登入的模式，讓註冊流程加速，並盡快引導使用者到行程編輯的頁面。</p>
                        <img src={wireframe} alt="wireframe" />
                        <p>接下來進到品牌識別設計的部分，在這邊因為只有兩周半的時間就要完成所有介面與品牌設計的關係，在這裡我先以圓體做簡易的改動來做為品牌標準字；考慮到logo縮小的情況下原先的「藤」字右邊視覺比例會失衡，因此簡化了筆畫部首，圖像部分則以藤蔓周遭的葉子來象徵向上攀爬的旅行者們。
                        </p>
                        <img src={Branding} alt="branding" />
                        <div className="content_wrap">
                            <h2>介面設計規範</h2>
                            <p>在GUI色彩上，因為講到旅遊，會想到山、海等，以及活潑明亮的回憶，因此旅藤的視覺色彩也以上述的詞語去做延伸，主色皆以明度、彩度高的色彩為主。
                            </p>
                        </div>

                        <div className="reto_img_wrap">
                            <img src={ppt2} alt="" />
                            <img src={ppt3} alt="" />
                        </div>
                        <p>而在全部設計告一個段落後，我也先使用codepen製作提供給工程師組員的程式設計規範，在後續也整理成scss檔，放到React上做使用。</p>
                        <img src={Codepen} alt="codepen" />
                        <div className="content_wrap">
                            <h2>介面設計</h2>
                            <p>在設計所有的介面時，我主要考量的順序是：

                            </p>
                            <ol>
                                <li>使用上是否有效順暢</li>
                                <li>RWD樣式會不會很麻煩</li>
                                <li>動效樣式會不會太難寫</li>
                                <li>品牌視覺如何呈現</li>
                            </ol>
                            <p>
                                隨著開發過程，部分的細部設計有些小變動，但根據上述的準則，在區域組成上沒有太大的變化！<br></br>雖然在部分動效與功能的部分...最後還是有點挑戰我的組員就是了ˊ ˇˋ。</p>
                        </div>

                        <img src={ppt4} alt="UI 1" />
                        <p>首頁特點區域互動特效：<br></br>
                            在產品特點介紹的部分，希望能讓使用者停留閱讀與記住旅藤的特色，因此使用動效互動的方式，盡量延長字體閱讀的時間，以及使用圖片加強連結記憶，同時給予情境讓使用者連結過往經歷。
                        </p>
                        <img src={Feature} alt="特色" />
                        <p>在搜索頁的部分，我將景點分類成「吃」、「住」、「景點」三大項，使用者可以點擊/拖曳來切換景點分類，分類大項中也有子分類可以做篩選，並使用瀑布流方式來瀏覽、選擇景點。</p>
                        <img src={Seacrh} alt="search" />
                        <p>其他介面設計</p>
                        <img src={ppt5} alt="UI 2" />
                        <div className="content_wrap">
                            <h2>最終結果</h2>
                            <p>巴拉巴拉 <a href="https://retoproject2.onrender.com/">成果連結</a>雖然還有部分編輯上的功能沒有完成，但還是歡迎觀看！</p>
                        </div>
                        <div className="content_wrap">
                            <h2>學習心得</h2>
                            <p>
                                在專題製作的過程中，對於行程編輯頁以及搜索頁的功能都需要和組員大量的溝通，站在使用者與工程師的角度去思考我的設計，這點讓我覺得很有趣。
                                <br></br>
                                而在驗證的部分，目前則是考慮使用portopie做行程編輯頁互動上的驗證。
                            </p>

                        </div>


                        <img className='thanks' src={Thanks} alt="" />
                        {/* <h2>Thanks for watching!</h2> */}


                    </div>

                </div>
                <div className="other_project">
                    <a href={`/portfolio/rallway`} className="next">
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
