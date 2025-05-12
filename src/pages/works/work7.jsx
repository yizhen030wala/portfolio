// OsteoCloud
import Footer from '../footer/footer'
import Header from '../nav/nav'
import './works.scss'
import { useEffect, useState } from "react";
import Skeleton from './skeleton'


//img
import X1pro from '../../assets/images/X1pro/X1pro_cover.png'
import OsteoCloud from '../../assets/images/OsteoCloud/OsteoCloud_article_cover.png'
// --
import OsteoCloud1 from '../../assets/images/OsteoCloud/OsteoCloud-ongoing.png'



const Work7 = () => {
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setLoading(true);
        new Promise(resolve => setTimeout(() => resolve([]), 1200))
            .then(data => {
                setVideos(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div>
            {loading && <Skeleton />}
            <Header />
            <div className="top" style={{ backgroundImage: `url(${OsteoCloud})` }}>
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
                            <p>2025/02-now</p>
                        </div>
                        <div className="row">
                            <h1>OsteoCloud 系統優化-提升診所效率與後台洞察力</h1>
                        </div>
                        <div className="row">
                            <div className="col text">
                                <p>專案期間</p>
                                <h6>進行中</h6>
                            </div>
                            <div className="col text">
                                <p>角色</p>
                                <h6>UIUX designer</h6>
                            </div>
                            <div className="col text">
                                <p>成果</p>
                                <h6>完整使用者介面設計、頁面架構、PRD</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <main className='portfolio reto'>

                <div className="port_content">
                    <div className="text_wrap">
                        <h2 className="link_title" id='x1pro_1'>🌱概覽</h2>
                        <div className="content_wrap fade-in">
                            <h2>專案背景</h2>
                            <p>OsteoCloud 是一套專為骨質健康管理打造的平台，協助醫療院所進行 AI 影像診斷，同時也提供經銷商與總部管理後台。平台使用者包含醫師、診所管理者、經銷商與公司內部成員，角色複雜、使用需求多元。</p>


                            <div className="box_wrap">
                                <div className="box">
                                    <h2>01 | 專案目標</h2>
                                    <p>我負責優化整體使用流程，讓不同角色都能在平台上快速完成任務、掌握重點資訊。從診所端的影像資料輸入，到經銷商後台的業績追蹤與帳號管理，我設計了一套更清楚、更有效率的操作體驗。</p>
                                </div>
                                <div className="box">
                                    <h2>02 | 專案挑戰</h2>
                                    <p>這是我第一次設計一個角色層級這麼多、又橫跨診療與銷售的 B2B 系統，花了很多時間釐清權限邏輯與系統限制、現場人員習慣的命名等，並在設計中盡量讓複雜變得簡單、好上手。</p>
                                </div>
                                <div className="box">
                                    <h2>03 | 角色與產出</h2>
                                    <p>在此專案中，我負責：
                                        <li>釐清使用者角色與權限邏輯（如一位醫師可服務多間診所）</li>
                                        <li>優化診所端的操作流程，讓用戶可以使用更多的分析模組，並有效的檢閱報告</li>
                                        <li>協助後台定義管理邏輯與首頁儀表板指標，幫助經銷商掌握重點數據</li>
                                       </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="content_wrap fade-in">
                            <h2>目前成果</h2>
                            <ul>
                                <li>❍ <b>提升系統導入彈性與理解力：</b>優化資訊排序與介面表現，讓第一次使用者也能快速上手。</li>
                                <li>❍ <b>完成診所端流程優化設計：</b>重構產品選擇、資料檢閱流程，提升操作效率並提供用戶錯誤自檢的方式。</li>
                                <li>❍ <b>定期進行內部認知走查：</b>針對診所端設計，驗證新手用戶是否能清楚理解操作流程，確保學習曲線友善。</li>
                                <li>❍ <b>協助 PM 制定業務儀表板指標：</b>聚焦用戶活躍、報告分析數量與診所點數週轉率，幫助業務快速掌握客戶經營狀況。</li>
                            </ul>
                        </div>
                        <img src={OsteoCloud1} alt="ongoing" />
                    </div>

                </div>
                <div className="other_project">
                    <a href={`/portfolio/x1pro`} className="next">
                        <div className="wrap">
                            <p>下一篇</p>
                            <h2>X1 Pro Redesign- 重塑放射師拍攝與資料管理體驗 </h2>
                            <p>了解更多</p>
                        </div>
                        <figure><img src={X1pro} alt="" /></figure>

                    </a>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Work7
