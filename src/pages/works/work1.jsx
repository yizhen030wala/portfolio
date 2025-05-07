// 旅藤
import Footer from '../footer/footer'
import Header from '../nav/nav'
import './works.scss'
import { useEffect, useState } from "react";
import Skeleton from './skeleton'


//img
import Rallway from '../../assets/images/rallway/cover.png'
import X1pro from '../../assets/images/X1pro/X1pro_cover.png'
import OsteoCloud from '../../assets/images/OsteoCloud/OsteoCloud_cover.png'
import DaoDao from '../../assets/images/daodao/daodao_cover.png'
// --
import Branding from '../../assets/images/RETO CH/branding.png'
import Cover1 from '../../assets/images/RETO CH/cover1.png'
import Codepen from '../../assets/images/RETO CH/codepen.gif'
// import Function from '../../assets/images/RETO CH/function.png'
import Idea1 from '../../assets/images/RETO CH/idea (1).png'
import Idea2 from '../../assets/images/RETO CH/idea (2).png'
import Persona from '../../assets/images/RETO CH/persona.png'
// import ppt1 from '../../assets/images/RETO CH/ppt1.png'
import ppt2 from '../../assets/images/RETO CH/ppt2.png'
import ppt3 from '../../assets/images/RETO CH/ppt3.png'
import ppt4 from '../../assets/images/RETO CH/ppt4.png'
import ppt5 from '../../assets/images/RETO CH/ppt5.png'
import ppt6 from '../../assets/images/RETO CH/ppt6.png'
import ppt7 from '../../assets/images/RETO CH/ppt7.png'
import ppt8 from '../../assets/images/RETO CH/ppt8.png'
import ppt9 from '../../assets/images/RETO CH/ppt9.png'
import ppt10 from '../../assets/images/RETO CH/ppt10.png'
import ppt11 from '../../assets/images/RETO CH/ppt11.png'
import Tools from '../../assets/images/RETO CH/tools.png'
import Team from '../../assets/images/frontend.png'
import TeamWorks from '../../assets/images/RETO CH/teamWorks.png'
import Prograss from '../../assets/images/RETO CH/prograss.png'
import Qurey from '../../assets/images/RETO CH/qurey.png'
import Qurey2 from '../../assets/images/RETO CH/qurey2.png'
// import Research from '../../assets/images/RETO CH/research.png'
import Survey2 from '../../assets/images/RETO CH/survey2.png'
import wireframe from '../../assets/images/RETO CH/wireframe.png'
import Def from '../../assets/images/RETO CH/def.png'
import UserMap from '../../assets/images/RETO CH/usermap.png'
import Seacrh from '../../assets/images/RETO CH/seacrh.gif'
import Feature from '../../assets/images/RETO CH/feature.gif'
import Thanks from '../../assets/images/thanks.gif'
import Compare from '../../assets/images/RETO CH/compare.png'
import Functional from '../../assets/images/RETO CH/functional.png'
import UseTest from '../../assets/images/RETO CH/useTest.png'
import Change1 from '../../assets/images/RETO CH/change1.png'
import Change2 from '../../assets/images/RETO CH/change2.png'

const Work1 = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            // setVideos(dummyData);
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading && <Skeleton />}
            <Header />
            <div className="top" style={{ backgroundImage: `url(${Cover1})` }}>
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
                <div className="position_control">
                    <a href="#reto_1">概覽</a>
                    <a href="#reto_2">釐清目標</a>
                    <a href="#reto_3">研究分析</a>
                    <a href="#reto_4">收斂定義</a>
                    <a href="#reto_5">發想解法</a>
                    <a href="#reto_6">設計交付</a>
                    <a href="#reto_7">測試驗證</a>
                    <a href="#reto_8">反思與學習</a>
                </div>
                <div className="port_content">

                    <div className="text_wrap">
                  
                        <h2 className="link_title" id='reto_1'>🌱概覽</h2>

                        <div className="goals_wrap">
                            <h2>專案概覽</h2>
                            <p>旅藤為前端班課程專案所產出的結業作品，我們團隊一共2位工程師、1位設計師。在這個專題中，我與兩位前端工程師角色密切合作，與組員一起定義問題，共同進行產品設計與開發。<br></br>
                            </p>
                            <div className="box_wrap">

                                <div className="box">
                                    <h2>01 | 團隊目標</h2>
                                    <p>我們希望節省規劃旅程時的時間與選擇的繁雜感，因此製作工具型導向的產品。</p>
                                </div>
                                <div className="box">
                                    <h2>02 | 團隊挑戰</h2>
                                    <p>這個專題最大的挑戰是在設計上需要保留更多更動的彈性，並在有限的時間與組員找出適當的解法。</p>
                                </div>
                                <div className="box">
                                    <h2>03 | 團隊角色</h2>
                                    <p>我負責全部的UI,UX與視覺設計，並交付最終視覺設計給工程師，同時也參與了CSS樣式的調整與撰寫。</p>
                                </div>
                            </div>

                        </div>



                        <hr />
                        <div className="content_wrap">
                            <h2>◾產品背景</h2>
                            <p>旅藤是一個能快速規劃旅程、且輕便單純的產品。<br></br>
                                在旅藤中，使用者能使用視覺化的方式，更快速的選擇與決定、替換景點，並一次安排行程順序與路線。
                            </p>
                        </div>
                        <h2>◾設計流程</h2>
                        <img className='design' src={Prograss} alt="設計流程" />
                        <h2 className="link_title" id='reto_2'>🌱釐清目標</h2>

                        <p>在發想過程中，我先提出旅遊安排這個主題，並用簡易的使用者旅程回推過往安排旅行時的痛點，從而找出能加以優化、解決的部分。</p>

                        <img src={Idea1} alt="草稿" />
                        <p>我也邀請組員用使用者旅程回顧規劃時的步驟，也訪問周遭朋友如何使用工具規劃旅程，對於兢品的優缺點等。</p>
                        <img className='design' src={UserMap} alt="usermap" />
                        <p>通過比對情緒低點，我們發現在查找、整合資料與重調行程等狀況有重疊，因此利用 <b>HMW</b>  的收斂句型去發想，並聚焦問題與研究方向。</p>
                        <div className="content_wrap HMW">
                            <h3>💡專案目標(How might we...?)</h3>
                            <ol>
                                <li>🔘 我們如何讓使用者更快的決定行程景點？</li>
                                <li>🔘 我們如何協助使用者快速應對突然要調整行程？</li>
                                <li>🔘 我們如何協助規劃行程中不同app間的轉換？</li>
                                <li>🔘 我們如何提供降低使用者在沒有旅行時刪除APP的狀況？</li>
                            </ol>
                        </div>

                        <h2 className="link_title" id='reto_3'>🌱研究分析</h2>

                        <div className="content_wrap">
                            <h2>◾競品分析</h2>
                            <p>在發想前期，我們透過競品分析的方式，來借鑑競品的優點，發想產品功能與設計。</p>
                            <p><b>競品選擇：</b>我們主要針對市場上易用性高的競品為主，同時參考海外產品的技術。</p>
                            <p><b>資料收集：</b>我們除了自身體驗競品外，也參考網路上的評論等二手資料，並請周遭朋友、同學分享競品的優缺點。</p>
                            <img src={Compare} alt="問卷" />
                            <p>我們發現：</p>
                            <ol>
                                <li>🔘地點資料建立在產品自己的地圖資料庫中，因而難以找到冷門景點或最新景點</li>
                                <li>🔘路線對應的地圖沒有對應不同國家的主要地圖</li>
                                <li>🔘行程表內筆記顯示不明顯，筆記格式較單一</li>
                            </ol>
                        </div>


                        {/* <p>我們使用問卷分析的方式，了解使用者的輪廓與尋找、驗證痛點。</p> */}
                        <div className="content_wrap">
                            <h2>◾問卷調查</h2>
                            {/* <ol>
                                <li>定義目標：我們希望透過問卷分析了解使用者輪廓，以及旅行規劃時的習慣，找到產品在功能方面的機會點。</li>
                                <li>設計問題：我們使用李克特量表，了解使用者在規劃前、中、後的困擾程度與功能偏好等。</li>
                                <li>受眾選擇：此問卷發放於旅遊相關社團、Dcard旅遊版與身邊親友等，透過收集的資料來描繪使用者輪廓。</li>
                            </ol> */}
                            <p><b>定義目標：</b>我們希望透過問卷分析了解使用者輪廓，以及旅行規劃時的習慣，找到產品在功能方面的機會點。</p>
                            <p><b>設計問題：</b>我們使用李克特量表，了解使用者在規劃前、中、後的困擾程度與功能偏好等。</p>
                            <p><b>受眾選擇：</b>此問卷發放於旅遊相關社團、Dcard旅遊版與身邊親友等，透過收集的資料來描繪使用者輪廓。</p>
                        </div>
                        <div className="UI_wrap">
                            <img src={Qurey} alt="問卷" />
                            <img src={Qurey2} alt="問卷" />

                        </div>

                        <p>
                            我們總共收集到128份回覆。從問卷中，分析出大眾在規劃旅程時，對於<b>「重排行程</b>」、<b>「查詢交通時間」</b>以及<b>「整理行程資訊」</b>等步驟，感到費時與費力。同時我們也了解了大多數受眾會在何處收集旅遊景點的資訊來幫助他們做決策。
                            <br></br>在功能面上，<b>「方面編輯」</b>、<b>「大量的景點能選擇」</b>以及<b>「人性化的網頁操作」</b>依序為使用者們所注重的主要面向。
                        </p>
                        <img src={Survey2} alt="痛點" />
                        <div className="content_wrap">
                            <h2>◾研究洞察</h2>
                            <div className="HMW">
                                <h3>🗣️共編過程不盡理想</h3>
                                <p>"辛苦編輯好的行程被旅伴隨意更動時，反而會有挫折感"
                                </p>
                            </div>
                            <div className="HMW">
                                <h3>🗣️行程緊急變動時需要備案</h3>
                                <p>"店家營業時間和網路上的不同導致行程需要變動"、"怕下雨還要想雨備"
                                </p>
                            </div>
                            <div className="HMW">
                                <h3>🗣️交通資訊不夠即時和充足</h3>
                                <p>"給予的交通載具資訊較少"、"沒有大眾交通工具的即時動態"、"只有大城市的景點比較多"
                                </p>
                            </div>
                            {/* <div className="HMW">
                                <h3>結合簡易記事需求</h3>
                                <p>我們的設計融合記事、清單等功能，減少使用者切換平台的次數
                                </p>
                            </div> */}
                        </div>


                        <h2 className="link_title" id='reto_4'>🌱收斂定義</h2>
                        <p>根據問卷分析結果，我也歸納出三種使用者受眾的輪廓，分別為<b>「隨性懶人」</b>、<b>「規劃新手」</b>、<b>「計畫控」</b>，以及他們可能會使用旅藤的機會點與使用情境。</p>
                        <img src={Persona} alt="使用者輪廓" />
                        {/* <hr /> */}
                        <div className="content_wrap">
                            <h2>◾設計目標</h2>
                            <div className="HMW">
                                <h3>景點閱覽與選取直覺方便</h3>
                                <p>我們的設計在視覺上要能協助使用者更好下決定
                                </p>
                            </div>
                            <div className="HMW">
                                <h3>易於使用</h3>
                                <p>我們的設計需將多樣的資訊與功能做排列，達到直覺好用的目的
                                </p>
                            </div>
                            <div className="HMW">
                                <h3>結合簡易記事需求</h3>
                                <p>我們的設計融合記事、清單等功能，減少使用者切換平台的次數
                                </p>
                            </div>
                        </div>



                        <div className="content_wrap">
                            <h2>◾產品目標</h2>
                            <p>
                                根據前面的發想與調查後，我們確定產品方向，同時我也說服組員，以目前人力與技術，將產品聚焦在「規劃」功能上，同時確認功能與技術等等是否可行。
                                <br></br>最終我們決定製作一個web APP的MVP版本，讓資訊閱讀的方式更直覺，編輯旅程可以快速、集中與方便。</p>
                            <img src={Def} alt="" />
                        </div>


                        <hr />
                        <h2 className="link_title" id='reto_5'>🌱發想解法</h2>


                        <div className="content_wrap">
                            <h2>◾Functional map</h2>
                            <p>因為開發能量有限，我們將功能分為<b
                            >主要</b>、<b
                            >次要</b>、<b
                            >非必須</b>等功能。</p>
                        </div>
                        <img className="design" src={Functional} alt="Functional" />

                        <div className="content_wrap">
                            <h2>◾UI flow</h2>
                            <p>考慮到當登入頁面放在所有流程的最先步驟時，使用者在還沒明確行動與體驗下會跳出網站，我將登入的步驟放在建立/加入行程後，並只保留google登入的模式，讓註冊流程加速，並盡快引導使用者到行程編輯的頁面。</p>
                        </div>

                        <img src={wireframe} alt="wireframe" />

                        <p>品牌識別設計的部分，我以圓體做簡易的改動來做為品牌標準字；考慮到logo縮小的情況下原先的「藤」字右邊視覺比例會失衡，因此簡化了筆畫部首，圖像部分則以藤蔓周遭的葉子來象徵向上攀爬的旅行者。
                        </p>
                        <img src={Branding} alt="branding" />
                        <div className="content_wrap">
                            <h2>◾介面設計規範</h2>
                            <p>在GUI色彩上，因為講到旅遊，會想到山、海等，以及活潑明亮的回憶，因此旅藤的視覺色彩也以上述的詞語去做延伸，主色皆以明度、彩度高的色彩為主。
                            </p>
                        </div>

                        <div className="reto_img_wrap">
                            <img src={ppt2} alt="" />
                            <img src={ppt3} alt="" />
                        </div>
                        <p>而在全部設計告一個段落後，我也先使用codepen製作提供給工程師組員的程式設計規範，在後續也整理成scss檔，放到React上做使用。</p>
                        <img src={Codepen} alt="codepen" />
                        <hr />
                        <div className="content_wrap">
                            <h2>◾介面設計</h2>
                            <p>除了設計目標，在設計所有的介面時，我也會考量：

                            </p>
                            <ol>
                                <li>
                                    1️⃣ 使用上是否有效順暢
                                    {/* <br></br>(能否確實減少規劃與整理行程的時間) */}
                                </li>
                                <li>2️⃣ RWD與動效樣式會不會很麻煩
                                    {/* <br></br>(留給我們寫程式的時間有限) */}
                                </li>
                                <li>3️⃣ 品牌視覺如何呈現</li>
                            </ol>
                            <p>
                                隨著開發過程，部分的細部設計有些小變動，但根據上述的準則，在區域組成上沒有太大的變化！<br></br>雖然在部分動效與功能的部分...最後還是很耗時ˊˇˋ。</p>
                        </div>
                        <h2 className="link_title" id='reto_6'>🌱設計交付</h2>

                        {/* <hr /> */}
                        <div className="content_wrap">
                            <h2>◾首頁設計</h2>
                            <p>原先組員也提出以搜尋頁面作為首頁的解法，但經過討論後，我們認為旅藤作為一個工具型的產品，需要使用上的引導，因此需要另外做一個首頁來說明旅藤的特色與使用步驟。</p>
                        </div>
                        <img src={ppt4} alt="UI 1" />
                        <p>首頁特點區域互動特效：<br></br>
                            在產品特點介紹的部分，希望能讓使用者停留閱讀與記住旅藤的特色，因此使用動效互動的方式，盡量延長字體閱讀的時間，以及使用圖片加強連結記憶，同時給予情境讓使用者連結過往經歷。
                        </p>
                        <img src={Feature} alt="特色" />
                        <div className="content_wrap">
                            <h2>◾搜索頁設計</h2>
                            <p>在搜索頁的部分，將景點分類成「吃」、「住」、「景點」三大項，使用者可以點擊/拖曳來切換景點分類，分類大項中也有子分類可以做篩選，並使用瀑布流方式來瀏覽、選擇景點。</p>
                        </div>
                        <div className="UI_wrap">
                            <img src={ppt5} alt="UI 5" />
                            <img src={Seacrh} alt="search" />
                        </div>

                        {/* <div className="img_comment">
                            <img src={ppt6} alt="UI 6" />
                            <p>加入/建立行程燈箱</p>

                        </div> */}
                        <div className="content_wrap">
                            <h2>◾我的景點頁面(顯示收藏地點)</h2>
                            <p>
                                前期規劃時，針對這個頁面該放在會員資訊內、還是放在導覽列，我們有蠻多的討論；最後我提出以MVP的模式下，會員並沒有太多資訊需要匯集成一個單獨的頁面，並且考慮到將收藏景點放在導覽列中能夠增加跨區旅遊的方便性，因此最後將此頁面的入口放在導覽列。
                                {/* <br></br> */}

                            </p>
                        </div>
                        <img src={ppt7} alt="UI 7" />
                        <div className="content_wrap">
                            <h2>◾行程編輯頁設計</h2>
                            <p>
                                使用者在這一頁會做到新增/編輯/刪除等動作，並整理全部的行程景點內容。因此在這一頁面上的資訊呈現我主要以卡片呈現，並盡量使用icon取代分類、互動功能等。
                                <br></br>
                                旅遊時也經常需要根據行程決定不同的起床時間，因此在行程表的第一行，使用者能夠修改提示文字來提醒自己，也能簡單記錄其他事情。
                            </p>
                        </div>
                        <img src={ppt8} alt="UI 8" />
                        <p>根據persona中「隨性懶人」的需求發想，假設旅行的第二天原先安排的餐廳沒有開，這時也能用替換的功能，替換收藏中的同性質地點。</p>
                        <img src={ppt9} alt="UI 9" />
                        <p>而對於「規劃新手」或是「計畫控」來說，他們能夠在同一個產品中編輯行李清單，這部分也提供按下行程就出現相對應的行李list。</p>
                        <img src={ppt10} alt="UI 10" />
                        {/* <div className="img_comment">
                            <img src={ppt11} alt="UI 11" />
                            <p>行程路線介面</p>

                        </div> */}

                        <div className="content_wrap">
                            <h2 className="link_title" id='reto_7'>🌱測試驗證</h2>
                            <h2>◾易用性測試</h2>
                            <p>測試方式以快速迭代的方式進行，透過兩三位受測者的反應來修正設計，依序解決設計盲點。</p>
                            <img className='design' src={UseTest} alt="" />
                            <h2>◾迭代優化</h2>
                            <img src={Change1} alt="" />
                            <img src={Change2} alt="" />

                        </div>
                        {/* <div className="content_wrap">
                            <h2 className="link_title" id='reto_8'>🌱最終結果</h2>

                            <p>最終我們時間限制與技術關係，來不及在結業前完成作品，目前大概完成了65%左右。我們也試著用資料庫帶入真實的地點資訊進去，雖然還有部分編輯上的功能沒有完成，但還是歡迎觀看！</p>
                            <a href="https://retoproject2.onrender.com/">成果連結</a>
                            <p>
                                而在驗證的部分，目前則是考慮使用portopie做行程編輯頁互動上的易用性測試，組員們也表示即使結業了，也希望能完成旅藤這個專案，若有機會的話也會想放hotjar做整個規劃行程流程的測試。
                            </p>
                        </div> */}
                        <div className="content_wrap">
                            <h2 className="link_title" id='reto_8'>🌱反思與學習</h2>
                            <p>
                                整個專題中，小組每個人隨時都能參與設計師、工程師，甚至是產品經理的角色，因此我們花費了蠻多的時間在前期討論與技術確認，想法不一致時經常需要花時間說服組員，也多虧他們帶來許多靈感。
                                <div className="UI_wrap team">
                                    {/* <img src={TeamWorks} alt="" />
                                    <img src={Team} alt="" /> */}
                                    <div className="img_comment">

                                        <img src={TeamWorks} alt="" title="" />
                                        <p>最後一周趕工</p>
                                    </div>
                                    <div className="img_comment">

                                        <img src={Team} alt="" title="" />
                                        <p>小組討論</p>
                                    </div>
                                    <div className="img_comment">

                                        <img src={Tools} alt="" title="" />
                                        <p>小組主要使用的工具</p>
                                    </div>
                                </div>
                                <br></br>


                            </p>
                            <div className="HMW">
                                <h3>😄從設計階段邁向實際開發</h3>
                                <p>
                                    參與這個課程讓我學習跟熟練規範設計之外，也了解產品開發時的流程，如何在設計與實際開發之間做調整與溝通等等。<br></br>

                                    在整個過程中，我也盡量尋找時間、資源、限制與目標之間的平衡點，再根據以上資訊，決定產品功能設計和開發的優先順序。<br></br>
                                    透過合作，我相信能夠更好的發揮各自的專長，見到自己的設計化為能夠真正互動的產品時，也得到滿滿的成就感。
                                </p>
                            </div>
                            <div className="HMW">
                                <h3>🤔進一步了解使用者的需求與產品驗證</h3>
                                <p>
                                    在這專題中，我盡量注重透過設計來達到良好的功能體驗與使用目的。然而，真正的產品應該透過測試與反饋，才能漸漸貼近使用者的需求，正式開發前的測試也是重要的一環。<br></br>
                                    同時也了解，易用性測試的情境與背景測試能夠降低受測者在測試時的困惑程度(特別是使用Hi-Fi prototype做測試時)，並在時間允許時，使用wireframe做易用性測試能夠更好的讓受測者集中在任務上。<br></br>
                                    相信透過這次實做整個開發流程，未來在設計介面時我能夠更好的分析、設計、測試並迭代產品。
                                </p>
                            </div>

                        </div>




                        <img className='thanks' src={Thanks} alt="" />
                        {/* <h2>Thanks for watching!</h2> */}


                    </div>

                </div>
                <div className="other_project">
                        
                        <a href={`/portfolio/daodao`} className="go_back">
                            <div className="wrap">
                                <p>上一篇</p>
                                <h2>島島阿學 Redesign -打造自主學習者的規劃與社群體驗</h2>
                                <p>了解更多</p>
                            </div>
                            <figure><img src={DaoDao} alt="" /></figure>
                        </a>
                        <a href={`/portfolio/osteoCloud`} className="next">
                            <div className="wrap">
                                <p>下一篇</p>
                                <h2>OsteoCloud 系統優化-提升診所效率與後台洞察力</h2>
                                <p>了解更多</p>
                            </div>
                            <figure><img src={OsteoCloud} alt="" /></figure>

                        </a>
                    </div>
            </main>
            <Footer />
        </div>
    )
}

export default Work1
