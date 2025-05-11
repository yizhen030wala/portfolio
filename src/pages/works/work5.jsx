// 島島阿學
import Footer from '../footer/footer'
import Header from '../nav/nav'
import './works.scss'
import { useEffect, useState } from "react";
import Skeleton from './skeleton'

import X1pro from '../../assets/images/X1pro/X1pro_cover.png'
import Retos from '../../assets/images/RETO CH/cover2.png'
//img
import DaoDao from '../../assets/images/Daodao/Daodao_cover.png'
import DaoDao03 from '../../assets/images/Daodao/Daodao03.png'
import DaoDao04 from '../../assets/images/Daodao/Daodao04.png'
import DaoDao05 from '../../assets/images/Daodao/Daodao05.png'
import DaoDao06 from '../../assets/images/Daodao/Daodao06.png'
import DaoDao07 from '../../assets/images/Daodao/Daodao07.png'
import DaoDao08 from '../../assets/images/Daodao/Daodao08.png'
import DaoDao09 from '../../assets/images/Daodao/Daodao09.png'
import DaoDao10 from '../../assets/images/Daodao/Daodao10.png'
import DaoDao11 from '../../assets/images/Daodao/Daodao11.png'
import DaoDao12 from '../../assets/images/Daodao/Daodao12.png'
import DaoDao13 from '../../assets/images/Daodao/Daodao13.png'
import DaoDao14 from '../../assets/images/Daodao/Daodao14.png'
import DaoDao15 from '../../assets/images/Daodao/Daodao15.png'

const Work5 = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading && <Skeleton />}
            <Header />
            <div className="top" style={{ backgroundImage: `url(${DaoDao})` }}>
                <div className="porject_info">
                    <div className="col">
                        <div className="row">
                            <div className="tag_wrap">
                                <div className="tag">教育產品設計</div>
                                <div className="tag">To C 產品</div>
                                <div className="tag">資訊架構設計</div>
                                <div className="tag">研究洞察</div>
                            
                            </div>
                            <p>2024.09-2025.02</p>
                        </div>
                        <div className="row">
                            <h1>島島阿學 Redesign -打造自主學習者的學習規劃體驗</h1>
                        </div>
                        <div className="row">
                            <div className="col text">
                                <p>專案期間</p>
                                <h6>2024/11 - 2025/2</h6>
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
                    <a href="#reto_5">設計假設與方案</a>
                    {/* <a href="#reto_6">設計成果與影響</a> */}
                    <a href="#reto_7">反思與學習</a>
                </div>
                <div className="port_content">
                    <div className="text_wrap">
                        <h2 className="link_title" id='reto_1'>🌱概覽</h2>
                        <div className="content_wrap fade-in">
                            <h2>專案背景</h2>
                            <p>島島阿學是一個以推動自主學習為核心的非營利學習平台，早期已累積初步使用者基礎，但缺乏清晰的學習規劃流程與社群互動機制。平台面臨的核心問題為：</p>
                            <ul>
                                <li>❍ 使用者在初學階段常感到迷茫，缺乏學習路徑引導</li>
                                <li>❍ 缺少有效的任務規劃與資源整合工具</li>
                                <li>❍ 學習社群互動低，參與黏著度不高</li>
                            </ul>

                            <div className="box_wrap">
                                <div className="box">
                                    <h2>01 | 專案目標</h2>
                                    <p>重新梳理平台體驗，設計一套能支援不同角色（學員、導師）的學習規劃與社群互動機制，幫助學習者在學習初期也能快速開始、穩定前進，並從回饋獲得啟發與成就感，同時提升平台整體使用率與互動參與度。</p>
                                </div>
                                <div className="box">
                                    <h2>02 | 專案挑戰</h2>
                                    <p>初期雖擁有大量研究資料與使用者回饋，但缺乏統整與結論，需要協助做設計洞察、提出聚焦問題與整合性方案。此外，平台功能逐步擴充，也需要同步調整導覽架構，避免功能與使用路徑混亂。</p>
                                </div>
                                <div className="box">
                                    <h2>03 | 角色與產出</h2>
                                    <p>擔任 UIUX 設計師，我負責以下工作：
                                        <li>研究過往訪談資料與使用者行為資料</li>
                                        <li>規劃平台資訊架構</li>
                                        <li>設計自主學習規劃功能與回饋機制</li>
                                        <li>製作互動原型與視覺介面</li>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="content_wrap fade-in">
                            <h2>目前成果</h2>
                            <ul>
                                <li>❍ <b>設計「我的小島」學習規劃功能：</b>協助用戶穩定啟動學習並聚焦目標行動，提升學習效率。</li>
                                <li>❍ <b>優化平台使用體驗：</b>導入學習任務規劃後，平台流量成長 109%，用戶回訪率顯著提升。</li>
                                <li>❍ <b>強化社群互動機制：</b>根據用戶洞察，優化功能優先序，提出收藏模組整合學習規劃，強化學習動機與社群互動設計方向。</li>
                                <li>❍ <b>建立清晰的學習路徑：</b>透過系統化的學習規劃工具，幫助用戶建立個人化的學習目標與進度追蹤。</li>
                            </ul>
                        </div>

                        <h2 className="link_title" id='reto_2'>🌱釐清目標</h2>
                        <div className="content_wrap fade-in">
                            <p>這次設計以「學習馬拉松」活動作為起點，團隊希望讓更多學習者能在平台上設定個人目標、持續追蹤進度、展現成果，並透過導師的引導與社群互動，提升學習的參與感與持續性。</p>
                            <p>雖然初步目標已由團隊討論提出，但我們也意識到——這些方向仍過於粗略，需要透過研究進一步釐清關鍵問題與使用情境，才有辦法進行下一步的設計。因此我聚焦以下問題展開分析：</p>
                            <br />
                            <ul>
                                <li>❍ 為何用戶在島島阿學上，無法有效轉化為行動？</li>
                                <li>❍ 使用者在規劃與追蹤學習時，最常卡關在哪個階段？</li>
                                <li>❍ 導師或新手學習者各自的需求差異為何？</li>
                            </ul>
                            <br />
                            <p>這些探索讓我們不只是完成任務功能，更能設計出貼近使用者行為與心智模型的學習體驗。</p>
                        </div>
                        <img className="fade-in" src={DaoDao03} alt="學習生態圈" />
                        <h2 className="link_title" id='reto_3'>🌱研究分析</h2>
                        <div className="content_wrap fade-in">
                            <h2>學習生態圈調查</h2>
                            <p>參考團隊中具備教育背景成員對理想學習生態圈的定義，我進一步延伸出對應的使用者角色與場景，作為後續功能設計的核心基礎。</p>
                        </div>
                        <img className="fade-in" src={DaoDao04} alt="學習生態圈" />

                        <div className="content_wrap fade-in">
                            <h2>學習旅程</h2>
                            <p>透過前期研究資料與學習歷程分析，我們描繪出學習者的關鍵節點與斷裂點，發現學習旅程中出現「收藏堆積 → 啟動困難 → 成果無感 → 放棄」的斷點循環。</p>
                        </div>
                        <img className="fade-in" src={DaoDao05} alt="學習旅程" />

                        <div className="content_wrap fade-in">
                            <h2>Persona</h2>
                            <p>過往的島島阿學主要聚焦於自學生社群，但隨著使用族群拓展，團隊也期望能回應體制內高中生在撰寫與執行自主學習計畫上的困難，並協助教師可以做更好的陪伴與引導，讓平台能同時支援學生的學習動機與教師的輔助任務，打造更完整的自主學習支持環境。</p>
                            <p>綜合過往的訪談資料與學習生態圈定義，本次設計將聚焦三種典型是使用者特徵：</p>
                            <ul>
                                <li>❍ 自學新手：自主規劃性低、想學但不知道從哪開始</li>
                                <li>❍ 書卷獎金卷王：自主規劃性高、熱衷探索學習與制定規劃</li>
                                <li>❍ 引導者：熱衷分享，需要看見回饋與成果，才有動力持續</li>
                            </ul>
                        </div>
                        <img className="fade-in" src={DaoDao06} alt="Persona" />

                        <div className="content_wrap fade-in">
                            <h2>共創工作坊</h2>
                            <p>我與 PO 、PM 等透過設計工作坊，與團隊使用 User Story → POV → HMW → 影響力矩陣 等方法釐清目標與優先順序，並決議學習規劃工具將會作為此次活動，讓導師陪伴、討論的重要工具之一。</p>
                            <p>在討論學習規劃工具的過程中，雖然初期意見較為發散，但我逐步聚焦，最終鎖定三大優先場景：</p>
                            <ol>
                                <li>❍ 資源僅能閱覽，無法收藏後做有效使用</li>
                                <li>❍ 缺乏激勵機制，社群互動動能低，且難以帶來成就感</li>
                                <li>❍ 導覽架構無法支援新的任務導向功能</li>
                            </ol>
                        </div>
                        <img className="fade-in" src={DaoDao07} alt="共創工作坊" />

                        <h2 className="link_title" id='reto_4'>🌱收斂定義</h2>
                        <div className="content_wrap fade-in">
                            <h2>HMW 問題定義</h2>
                            <ul>
                                <li>❍ 我們如何讓收藏不只是儲存，而能引導學習任務的啟動？</li>
                                <li>❍ 我們如何協助學習者看見進展與成果，提升持續動力？</li>
                            </ul>
                        </div>
                        <img className="fade-in" src={DaoDao08} alt="HMW" />

                        <h2 className="link_title" id='reto_5'>🌱設計假設與方案</h2>
                        <div className="content_wrap fade-in">
                            <h2>用戶痛點 ＆ 解決方案</h2>
                        </div>
                        <img className="fade-in" src={DaoDao09} alt="用戶痛點與解決方案" />

                        <div className="content_wrap fade-in">
                            <h2>設計解法</h2>
                            <h3>【1｜學習規劃功能】</h3>
                            <p><b>問題</b>：用戶難以持續學習、學習資源整合不便</p>
                            <p>我設計了「我的小島」作為使用者的學習基地，將學習任務、資源管理與心得記錄整合於一體。首頁即顯示當日待完成任務，用戶可快速新增學習計畫、心得與代辦事項，避免功能層層跳轉造成的流失，讓操作更貼合真實學習節奏。</p>
                        </div>
                        <img className="fade-in" src={DaoDao10} alt="學習規劃功能1" />
                        <img className="fade-in" src={DaoDao11} alt="學習規劃功能2" />
                        <div className="content_wrap fade-in">
                            <p>此外，學習計畫格式也參考了高中自主學習申請格式，讓用戶可以決定這一段時間的學習目標後，拆分任務項目，引導用戶釐清學習目標、方法與成果規劃，降低啟動難度。</p>
                        </div>

                        <div className="content_wrap fade-in">
                            <h3>【2｜將收藏的資源整合進學習規劃】</h3>
                            <p><b>問題</b>：用戶常收藏大量資源卻難以實際使用，進而迷失學習方向</p>
                            <p>在學習計畫撰寫階段，使用者可主動連結預計使用的資源（如網站連結），未來也將串接收藏功能，讓收藏能被納入計畫與任務中，將「被動瀏覽」轉化為「主動使用」。</p>
                        </div>
                        <img className="fade-in" src={DaoDao12} alt="收藏整合1" />
                        <img className="fade-in" src={DaoDao13} alt="收藏整合2" />
                        <div className="content_wrap fade-in">
                            <p>另外，我將多元學習資源與活動的收藏整合至「百寶箱」，讓用戶可從分類中快速找到適合的學習工具與參考案例。</p>
                        </div>

                        <div className="content_wrap fade-in">
                            <h3>【3｜透過隨時發佈學習心得、靈感等，獲得導師和社群用戶的回饋】</h3>
                            <p><b>問題</b>：自學過程孤單、回饋不足，缺乏成就感</p>
                            <p>透過按讚、留言、收藏、閱覽數量等，讓用戶可以獲得回饋，從而強化平台的互動黏性。</p>
                        </div>
                        <img className="fade-in" src={DaoDao14} alt="社群互動" />

                        <div className="content_wrap fade-in">
                            <h3>【4｜重整導航結構】</h3>
                            <p>在整合本次更新改版的功能架構時，發現過往的手機版導覽列難以負荷逐漸龐大的結構，因此將導覽重新分類為「資訊探索」與「學習行動」兩大主軸，並優化登入前後的導向行為，使新手可快速理解平台，老手也能高效操作，同時保留未來擴容彈性。</p>
                        </div>
                        <img className="fade-in" src={DaoDao15} alt="導航結構" />

                        <h2 className="link_title" id='reto_6'>🌱設計成果與影響</h2>
                        <div className="content_wrap fade-in">
                            <ul>
                                <li>❍ 設計「我的小島」學習規劃 To-do 功能，協助用戶穩定啟動學習並聚焦目標行動</li>
                                <li>❍ 導入學習任務規劃後，平台流量成長 109%，用戶回訪率顯著提升，驗證初期設計策略有效</li>
                                <li>❍ 根據用戶洞察，優化功能優先序，提出收藏模組整合學習規劃，強化學習動機與社群互動設計方向</li>
                            </ul>
                        </div>

                        <h2 className="link_title" id='reto_7'>🌱反思與學習</h2>
                        <div className="content_wrap fade-in">
                            <p>這次專案讓我體會到：當產品資訊繁雜、功能不斷擴張時，設計不只是解題者，更是協助團隊聚焦與建立結構的引導者。若缺乏策略聚焦，後續的設計執行往往會陷入反覆與迷茫。</p>
                            <p>在島島阿學的協作過程中，我也從夥伴的研究與訪談規劃中學到很多，這些經驗讓我之後在推進設計時，可以更有方向地規劃訪談、整合洞察與提出設計策略。</p>
                        </div>
                    </div>
                    <div className="other_project">
                        <a href={`/portfolio/x1pro`} className="go_back">
                            <div className="wrap">
                                <p>上一篇</p>
                                <h2>X1 Pro Redesign- 重塑放射師拍攝與資料管理體驗</h2>
                                <p>了解更多</p>
                            </div>
                            <figure><img src={X1pro} alt="" /></figure>

                        </a>
                        <a href={`/portfolio/retos`} className="next">
                            <div className="wrap">
                                <p>下一篇</p>
                                <h2>旅藤-旅遊規劃平台</h2>
                                <p>了解更多</p>
                            </div>
                            <figure><img src={Retos} alt="" /></figure>
                        </a>
                    </div>
                </div>
            
               
            </main>
            <Footer />
        </div>
    )
}

export default Work5
