// X1 Pro
import Footer from '../footer/footer'
import Header from '../nav/nav'
import './works.scss'
import { useEffect, useState } from "react";
import Skeleton from './skeleton'

//img
import Rallway from '../../assets/images/rallway/cover.png'
import Thanks from '../../assets/images/thanks.gif'
// X1 Pro images
import X1pro01 from '../../assets/images/X1pro/X1pro_ppt_01.png'
import X1pro02 from '../../assets/images/X1pro/X1pro_ppt_02.png'
import X1pro03 from '../../assets/images/X1pro/X1pro_ppt_03.png'
import X1pro04 from '../../assets/images/X1pro/X1pro_ppt_04.png'
import X1pro05 from '../../assets/images/X1pro/X1pro_ppt_05.png'
import X1pro06 from '../../assets/images/X1pro/X1pro_ppt_06.png'
import X1pro07 from '../../assets/images/X1pro/X1pro_ppt_07.png'
import X1pro08 from '../../assets/images/X1pro/X1pro_ppt_08.png'
import X1pro09 from '../../assets/images/X1pro/X1pro_ppt_09.png'
import X1pro10 from '../../assets/images/X1pro/X1pro_ppt_10.png'
import X1pro11 from '../../assets/images/X1pro/X1pro_ppt_11.png'
import X1pro12 from '../../assets/images/X1pro/X1pro_ppt_12.png'
import X1pro13 from '../../assets/images/X1pro/X1pro_ppt_13.png'
import X1pro14 from '../../assets/images/X1pro/X1pro_ppt_14.png'
import X1pro15 from '../../assets/images/X1pro/X1pro_ppt_15.png'
import X1pro16 from '../../assets/images/X1pro/X1pro_ppt_16.png'
import X1pro17 from '../../assets/images/X1pro/X1pro_ppt_17.png'
import X1pro18 from '../../assets/images/X1pro/X1pro_ppt_18.png'
import X1pro19 from '../../assets/images/X1pro/X1pro_ppt_19.png'
import X1pro20 from '../../assets/images/X1pro/X1pro_ppt_20.png'
import X1pro21 from '../../assets/images/X1pro/X1pro_ppt_21.png'
import X1pro22 from '../../assets/images/X1pro/X1pro_ppt_22.png'
import X1pro23 from '../../assets/images/X1pro/X1pro_ppt_23.png'
import X1pro24 from '../../assets/images/X1pro/X1pro_ppt_24.png'
import X1pro25 from '../../assets/images/X1pro/X1pro_ppt_25.png'

const Work6 = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading && <Skeleton />}
            <Header />
            <div className="top">
                <div className="porject_info">
                    <div className="col">
                        <div className="row">
                            <div className="tag_wrap">
                                <div className="tag">B2B產品設計</div>
                                <div className="tag">多角色體驗設計</div>
                                <div className="tag">資訊架構設計</div>
                                <div className="tag">設計與商業對齊</div>
                                <div className="tag">儀表板商業策略</div>
                            </div>
                            <p>2024/6-2025/2</p>
                        </div>
                        <div className="row">
                            <h1>X1 Pro Redesign- 重塑放射師拍攝與資料管理體驗</h1>
                        </div>
                        <div className="row">
                            <div className="col text">
                                <p>專案期間</p>
                                <h6>8個月</h6>
                            </div>
                            <div className="col text">
                                <p>角色</p>
                                <h6>B2B UIUX designer</h6>
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
                    <a href="#x1pro_1">概覽</a>
                    <a href="#x1pro_2">釐清目標</a>
                    <a href="#x1pro_3">研究分析</a>
                    <a href="#x1pro_4">收斂定義</a>
                    <a href="#x1pro_5">發想解法</a>
                    <a href="#x1pro_6">設計交付</a>
                    <a href="#x1pro_7">測試驗證</a>
                    <a href="#x1pro_8">反思與學習</a>
                </div>
                <div className="port_content">
                    <div className="text_wrap">
                        <h2 className="link_title" id='x1pro_1'>🌱概覽</h2>
                        <div className="content_wrap">
                            <h2>◾專案背景</h2>
                            <p>本專案與 PM, RD 合作，針對現有的 X1 Pro <b>放射與醫療影像分析平台</b>進行全面的使用者體驗優化與介面視覺Redesign。</p>
                            <p>然而，平台因過去缺乏 UIUX 投入，面臨：</p>
                            <ul>
                                <li>拍攝與資料流程繁瑣、重工，易出錯</li>
                                <li>操作動線與視覺系統混亂，影響上手</li>
                                <li>無法有效支援放射師與醫師進行高效拍攝和診斷</li>
                            </ul>
                            <div className="box_wrap">
                                <div className="box">
                                    <h2>01 | 專案目標</h2>
                                    <p>從零開始梳理體驗痛點，設計能橫跨多場域（醫院、診所、偏鄉醫療）且<b>能有效提升放射師工作效率與醫師診斷速度</b>的新一代平台體驗，並透過設計降低團隊的工程師支援成本與客訴壓力。</p>
                                </div>
                                <div className="box">
                                    <h2>02 | 專案挑戰</h2>
                                    <p>這次最大的挑戰在於缺乏既有設計系統與設計稿，需從零搭建，並缺乏真實用戶接觸，須透過 PM 與展場觀察拼湊情境。同時，也需要與放射師 PM 及工程團隊建立有效的溝通協作流程，推動設計理念的落地。</p>
                                </div>
                                <div className="box">
                                    <h2>03 | 角色與產出</h2>
                                    <p>身為公司的一人設計師，我進行了脈絡訪查、用戶 Persona、重構資訊架構與使用流程、設計高彈性的模組化介面、定性測試，並導入設計 Kick-off 文件框架。</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="content_wrap">
                            <h2>◾專案成果與影響</h2>
                            <ul>
                                <li>放射師操作流程提升約 <b>44.4%</b>，減少流程斷點</li>
                                <li>使用者錯誤自檢率提高、工程支援頻率降低</li>
                                <li>建立模組化設計系統與 Kick-off 文件範本，利於未來修改與擴充</li>
                                <li>團隊 UX 成熟度提升 16%</li>
                            </ul>
                        </div>
                        <h2>◾設計流程</h2>
                        <img className='design' src={X1pro01} alt="設計流程" />
                        <h2 className="link_title" id='x1pro_2'>🌱釐清目標</h2>
                        <p>本次專案的核心問題是如何優化 X1 Pro 放射與醫療影像分析平台的使用者體驗，以提升放射師的工作效率、促進醫護之間的溝通，並降低因操作問題帶來的額外成本。因此需要思考：</p>
                        <ul>
                            <li>核心使用者在操作平台時的主要痛點是什麼？</li>
                            <li>如何透過設計優化現有的複雜操作流程？</li>
                            <li>如何設計更友好的大量檔案上傳與病患資料輸入流程？並解放團隊的工程師效能？</li>
                        </ul>
                        <h2 className="link_title" id='x1pro_3'>🌱研究分析</h2>
                        <div className="content_wrap">
                            <h2>◾市場分析</h2>
                            <p>我在和 PM 釐清產品特點與目標後，了解到離院篩檢的趨勢，並且作為白牌產品在效能與價格上都具備此優勢，產品除了大型醫院與健檢中心的場域外，也會將<b>偏鄉醫療、居家醫療</b>及小型診所等情境納入使用場域做設計考量。</p>
                        </div>
                        <div className="content_wrap">
                            <h2>◾脈絡訪查</h2>
                            <p>為了深入了解放射師的實際工作流程與痛點，我利用展覽的機會，進行了醫療車脈絡訪查，觀察他們在真實工作環境下的操作習慣與遇到的問題。</p>
                        </div>
                        <img src={X1pro02} alt="脈絡訪查" />
                        <p><b>關鍵觀察：</b></p>
                        <div className="content_wrap">
                            <h3>痛點一：資料輸入流程繁瑣、動線受限</h3>
                            <p>病患資料輸入流程繁瑣，並且因為空間狹窄，難以將所有硬體放置在良好的動線，導致輸入不易，容易產生錯誤或失去耐心。</p>
                            <img src={X1pro03} alt="痛點一" />
                        </div>
                        <div className="content_wrap">
                            <h3>痛點二：拍攝流程過於制式，無法靈活應對</h3>
                            <p>現場拍攝流程高度機械化，放射師反映希望可以更靈活、有效的應對現場狀況（如：略過不必要步驟以減少輻射劑量、批量設定部位清單等）。</p>
                        </div>
                        <div className="content_wrap">
                            <h3>痛點三：結合影像分析工具時，難以在拍攝當下知道是否符合分析標準</h3>
                            <p>放射師無法在當下確認影像是否可以進行正確的分析，並補上分析必要的資訊或補拍，導致後續報告的影像容易分析錯誤。</p>
                        </div>
                        <div className="content_wrap">
                            <h2>◾Persona</h2>
                            <p>通過與 PM 的對談，去了解使用 X1 Pro 平台的不同角色，定義出 Persona，供後續設計時有更明確的方向。</p>
                            <p>我觀察到，對放射師來說，<b>將準確的影像交付給醫師是最主要的工作</b>，最常遇到的問題是需要手動輸入病患資料，但當下沒有仔細核對的時間，後續細節經常會需要在拍攝結束後，才能夠人工進行核對。</p>
                            <p>對醫師而言，最核心的工作是<b>迅速取得準確的資料進行診斷判讀</b>。在面對大量影像時，醫師需要流暢、直覺的分析與比對流程，並且能盡快獲得完整報告，以利後續的判讀決定。</p>
                        </div>
                        <img src={X1pro04} alt="Persona 1" />
                        <img src={X1pro05} alt="Persona 2" />
                        <div className="content_wrap">
                            <h2>◾競品分析</h2>
                            <p>我透過桌面研究和觀察展場的產品，對市面上主流的醫療影像分析平台進行了競品分析，重點關注其在功能的流程設計、介面視覺風格以及錯誤處理機制等，尋找可借鑒的設計。</p>
                        </div>
                        <img src={X1pro06} alt="競品分析" />
                        <h2 className="link_title" id='x1pro_4'>🌱收斂定義</h2>
                        <p>基於研究分析的結果，我使用以「HMW (How Might We)」問題為導向的設計策略框架，旨在針對核心痛點提出具體的設計解決方案。</p>
                        <div className="content_wrap HMW">
                            <h3>💡專案目標 (運用 HMW 句型)</h3>
                            <ul>
                                <li><b>在大型醫院中，我們如何協助放射師減少資料輸入錯誤與前置流程？</b>
                                <br />→ <i>幫助放射師更快速準備拍攝任務，提升影像品質與每日處理量</i></li>
                                <li><b>在行動醫療車與診所中，我們如何讓放射師即使在空間、時間的受限下，也能流暢完成拍攝？</b>
                                <br />→ <i>協助放射師在限制條件下也能穩定作業，避免延誤與重拍，保障病患體驗</i></li>
                            </ul>
                        </div>
                        <h2 className="link_title" id='x1pro_5'>🌱發想解法</h2>
                        <div className="content_wrap">
                            <h2>◾認知走查</h2>
                            <p>作為新加入的設計師，在正式發想新設計之前，我在沒有產品操作說明與目標說明文件的情況下，進行了以「使用者第一視角」進行的認知走查，模擬實際任務操作流程，並紀錄所有流程斷點與認知落差。這份走查不僅幫助我快速理解產品，也成為後續設計重構的重要依據。</p>
                        </div>
                        <img src={X1pro07} alt="認知走查" />
                        <img src={X1pro08} alt="認知走查結果" />
                        <p>既有版本的主要問題：</p>
                        <ul>
                            <li><b>介面設計無統一標準</b>，導致使用體驗不一致，影響操作流暢度</li>
                            <li><b>資訊層級與流程排序混亂</b>，增加使用者認知負擔，易造成操作錯誤</li>
                            <li><b>資料檢閱效率低</b>，不適合應對大量病患資料輸入與快速作業需求</li>
                        </ul>
                        <p>在盤點完優化點後，我也列出既有版本的功能，以及後續功能的位置與階段，確保在設計時可以預留空間，減少後續修改成本。</p>
                        <img src={X1pro09} alt="功能盤點" />
                        <p>同時，根據影像產生的順序，決定<b>優先協助放射師獲得更高品質的影像，從而讓醫生獲得更精準的分析結果</b>。</p>
                        <div className="content_wrap">
                            <h2>◾用戶痛點＆設計方案</h2>
                            <p>基於前期的釐清與討論，我針對用戶在使用上如何<b>更有效率</b>、<b>更靈活</b>來提出解法，並製作對應的 Key Frame / Wireframe 做後續討論</p>
                        </div>
                        <img src={X1pro10} alt="用戶痛點" />
                        <img src={X1pro11} alt="設計方案" />
                        <div className="content_wrap">
                            <h2>◾設計解法｜打造放射師資料與拍攝流程升級體驗</h2>
                            <h3>【1｜快速建檔與開拍】</h3>
                        </div>
                        <img src={X1pro12} alt="快速建檔與開拍" />
                        <p><b>過去問題</b>：資料需手動重建，易錯且耗時</p>
                        <p><b>設計解法</b>：</p>
                        <ul>
                            <li>在病患清單建立頁，透過<b>連接病患資料系統</b>，來定時連結醫院機構的病患資訊，確保用戶不重工且資料一致。</li>
                        </ul>
                        <img src={X1pro13} alt="連接病患資料系統" />
                        <ul>
                            <li>當需要臨時輸入資料時，可以使用 <b>健保卡讀卡帶入資料</b>，減少人工錯誤與輸入時間。</li>
                            <li>針對健康檢查等情境，需要大量檢查同一個部位清單時，則可以使用 <b>部位設定快速複製</b>，新增的病患清單將會預設使用同一個拍攝部位設定。</li>
                        </ul>
                        <img src={X1pro14} alt="健保卡讀卡與部位設定" />
                        <div className="content_wrap">
                            <h3>【2｜靈活調整拍攝清單】</h3>
                        </div>
                        <img src={X1pro15} alt="靈活調整拍攝清單" />
                        <p><b>過去問題</b>：臨時變動無法應對，只能重走流程</p>
                        <p><b>設計解法</b>：</p>
                        <ul>
                            <li>在影像拍攝頁面，用戶可以根據 <b>清單快速編輯</b>，來調整病患的拍攝清單與病患基本資訊，確保後續資料與影像正確。</li>
                        </ul>
                        <img src={X1pro16} alt="清單快速編輯" />
                        <ul>
                            <li>在拍攝影像後，也提供 <b>影像檢核提示</b>，確保在病患離開之前，影像品質與必填資訊可以進行分析，讓醫生獲取準確的分析數據。</li>
                        </ul>
                        <img src={X1pro17} alt="影像檢核提示" />
                        <h2 className="link_title" id='x1pro_7'>🌱測試驗證</h2>
                        <div className="content_wrap">
                            <h2>◾內部定性測試</h2>
                            <p>在初版 MVP 完成後，我與業務進行了定性測試，記錄他們在新版設計時的操作流程、遇到的障礙以及潛在的錯誤操作，並了解既有客戶的意見回饋。</p>
                            <h3>進行方式</h3>
                            <p><b>測試目標</b></p>
                            <ul>
                                <li>✅ 確認 <b>病患資料建立 + 影像拍攝</b> 是否流暢、直觀</li>
                                <li>✅ 找出 <b>容易誤導或造成困惑</b> 的設計</li>
                                <li>✅ 評估 <b>業務能否順利學習並向客戶解釋</b></li>
                            </ul>
                            <p><b>測試方法</b></p>
                            <ul>
                                <li><b>測試人員來操作滑鼠，業務在旁觀看並提供回饋</b></li>
                                <li><b>以「引導式提問」收集回饋，降低業務認知負擔</b></li>
                                <li><b>拆分兩個角色測試，確保涵蓋完整流程</b></li>
                                <li><b>放聲思考 + 隨時詢問業務的直覺反應</b></li>
                            </ul>
                        </div>
                        <img src={X1pro18} alt="內部定性測試" />
                        <div className="content_wrap">
                            <h2>◾測試結果＆迭代優化</h2>
                        </div>
                        <img src={X1pro19} alt="測試結果" />
                        <p>基於測試的反饋，我對設計方案進行了迭代優化，例如調整了部分操作按鈕的位置、優化了錯誤提示的文案等。</p>
                        <div className="content_wrap">
                            <h3>【1｜快速建檔與開拍】</h3>
                            <p><b>測試結果：</b></p>
                            <ul>
                                <li>在病患資料數量多時，<b>卡片式檢視不利快速搜尋特定病患</b></li>
                                <li>使用者在病患清單建立後，<b>不易找到拍攝頁面入口</b></li>
                            </ul>
                            <p><b>優化點：</b></p>
                            <ul>
                                <li>我將 Worklist 中，從原先卡片檢視的方式，修改為列表方式瀏覽，並將<b>資料建立的功能模組化</b>，在 Worklist 與 Examaiton 中共用，確保病患資訊可以透過查找、篩選比對資料。</li>
                            </ul>
                        </div>
                        <img src={X1pro20} alt="列表方式瀏覽" />
                        <ul>
                            <li>若病患資料與拍攝清單填寫完成，則引導用戶可以直接跳轉至該病患進行拍攝，讓用戶可以更有效的減少資料建立到拍攝的步驟。</li>
                        </ul>
                        <img src={X1pro21} alt="直接跳轉拍攝" />
                        <div className="content_wrap">
                            <h3>【靈活拍攝與即時檢核】</h3>
                            <p><b>測試結果與洞察：</b></p>
                            <ul>
                                <li>在本次測試中，我已實作「<b>清單快速編輯</b>」與「<b>影像檢核提示</b>」功能，觀察用戶於實際操作過程中的反應與效益。</li>
                                <li>拍攝流程完成率達 <b>93%</b>，多數使用者能順利完成拍攝，並對<b>拍攝清單即時調整機制</b>表達正面回饋，認為有助於降低補拍與事後修正負擔。</li>
                                <li>受測者也表示，<b>影像拍攝後立即顯示品質與缺漏提示</b>，讓他們能在病患離場前完成補拍與資料補填，<b>明顯提升整體流程信心與正確率</b>。</li>
                            </ul>
                        </div>
                        <h2 className="link_title" id='x1pro_6'>🌱設計交付</h2>
                        <p>最終交付的設計成果包括：</p>
                        <ul>
                            <li>詳細的IA架構、功能地圖與使用者流程圖</li>
                            <li>完整的介面設計稿 (Mockups)</li>
                            <li>可延伸使用的設計系統與組件庫</li>
                            <li>定性測試報告與設計優化建議</li>
                        </ul>
                        <img src={X1pro22} alt="設計交付" />
                        <p>過程中，由於產品需求的來源較為間接，我與放射師 PM 進行了深入的溝通，透過反覆確認與推演，釐清需求的真實意圖與使用情境。為了確保設計方向的準確性，我導入了PRD 文件範本、提供 IA架構、功能地圖等工具，與團隊建立共同的理解。</p>
                        <img src={X1pro23} alt="設計溝通" />
                        <h2 className="link_title" id='x1pro_8'>🌱反思與學習</h2>
                        <p>這是我第一次設計 B2B 的產品，同時因為醫療產業的特殊性，一開始花了很多時間釐清系統邏輯與權限設定，加上醫院體系的資料傳輸方式特別複雜，也具有很多的限制，讓我在理解整體系統流程時經歷了一段不小的陣痛期。</p>
                        <img className='thanks' src={Thanks} alt="" />
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

export default Work6
