// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Header from '../nav/nav'
import './home.scss'
import Footer from '../footer/footer'
import Download from '../../assets/icon/download.svg'
import RETO from '../../assets/images/RETO CH/cover3.png'
import Rallway from '../../assets/images/rallway/cover.png'
import X1pro from '../../assets/images/X1pro/X1pro_cover.png'
// import Vote from '../../assets/images/voting CH/cover.png'
import ViewSonic from '../../assets/images/viewsonic/viewsonic_01.png'
import textDesk from '../../assets/images/textDesk.png'
import textPhone from '../../assets/images/textPhone.png'
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [currentProject, setCurrentProject] = useState('');
  // const isProtected = true; // 定義變數


  const handlePasswordSubmit = (projectPath) => {
    if (password === '0908035057') {
      navigate(projectPath);
    } else {
      alert('密碼錯誤');
    }
  };

  const handleProjectClick = (path, isProtected) => {
    if (isProtected) {
      setCurrentProject(path);
      setShowPassword(true);
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <Header />
      <main className="home">
        <section className="hero_section">
          <div className="wrap">
            <div className="text_wrap">
              <h1>
                Hi ! I'm Jenny!<br />
                A UIUX/Product Designer
              </h1>
              {/* <div className="slogan">
                <img src={textDesk} alt="喜歡製作有效率和具有美感的產品" className="desktop-text" />
                <img src={textPhone} alt="喜歡製作有效率和具有美感的產品" className="mobile-text" />
              </div> */}
              <div className="slogan_desc">
                <p>設計對我而言，像是拼湊空白拼圖與畫上色彩的旅程，並從混亂到整合。我擅長在多方角色與模糊需求中釐清脈絡，協助團隊聚焦問題、找到可執行的解法。</p>
              </div>
              <div className="btn_wrap">
                <a className="btn_black" href={`/portfolio/about`}>
                  <span>關於我</span>
                </a>
                <a className="btn_white" href='https://drive.google.com/file/d/1yqwU2URFxbTO7FR5rEQI93hwR_yQrsZ4/view?usp=sharing' target='_blank'>
                  <span>下載履歷</span>
                  <img src={Download} alt="" />
                </a>
              </div>
            </div>

            <div className="works_wrap">
              {/* Project 1 - OsteoCloud  */}
              <div className="work_card" onClick={() => handleProjectClick('/portfolio/OsteoCloud')}>
                <div className="card_content">
                  <div className="content_top">
                    <div className="card_header">
                      <span className="company">柏瑞醫股份有限公司</span>
                      <h2 className="card_title">OsteoCloud 系統優化-提升診所效率與後台洞察力</h2>
                      <span className="date">2025.02 - now</span>
                    </div>
                    <p className="card_desc">Redesign 診所端操作流程，並協助定義管理邏輯與首頁儀表板指標。</p>
                  </div>
                  <div className="content_bottom">
                    <div className="tag_wrap">
                      <span className="tag">B2B</span>
                      <span className="tag">多角色體驗設計</span>
                      <span className="tag">資訊架構設計</span>
                      <span className="tag">設計與商業對齊</span>
                      <span className="tag">儀表板商業策略</span>
                    </div>
                    <div className="card_button">查看更多</div>
                  </div>
                </div>
                <div className="card_image">
                  <img src={RETO} alt="RETO旅藤" />
                  
                </div>
              </div>

              {/* Project 2 - X1 Pro */}
              <div className="work_card" onClick={() => handleProjectClick('/portfolio/X1pro')}>
                <div className="card_content">
                  <div className="content_top">
                    <div className="card_header">
                      <span className="company">柏瑞醫股份有限公司</span>
                      <h2 className="card_title">X1 Pro Redesign- 重塑放射師拍攝與資料管理體驗 </h2>
                      <span className="date">2024.06 - 2025.02</span>
                    </div>
                    <p className="card_desc">本專案與 PM, RD 合作，針對現有的平台進行全面的使用者體驗優化與介面視覺Redesign。</p>
                  </div>
                  <div className="content_bottom">
                    <div className="tag_wrap">
                      <span className="tag">B2B流程優化</span>
                      <span className="tag">多角色體驗設計</span>
                      <span className="tag">資訊架構設計</span>
                      <span className="tag">醫療產品設計</span><span className="tag">UX策略導入</span>
                    </div>
                    <div className="card_button">查看更多</div>
                  </div>
                </div>
                <div className="card_image">
                  <img src={X1pro} alt="x1pro" />
    
                </div>
              </div>

              {/* Project 3 - 島島阿學 */}
              <div className="work_card" onClick={() => handleProjectClick('/portfolio/島島阿學', false)}>
                <div className="card_content">
                  <div className="content_top">
                    <div className="card_header">
                      <span className="company">島島阿學</span>
                      <h2 className="card_title">島島阿學-學習任務規劃模組</h2>
                      <span className="date">2022.01 - 2022.09</span>
                    </div>
                    <p className="card_desc">實習期間完成的各類設計作品，包含品牌設計、行銷物料等。</p>
                  </div>
                  <div className="content_bottom">
                    <div className="tag_wrap">
                      <span className="tag">視覺設計</span>
                      <span className="tag">行銷貼文</span>
                      <span className="tag">活動UI</span>
                    </div>
                    <div className="card_button">查看更多</div>
                  </div>
                </div>
                <div className="card_image">
                  <img src={ViewSonic} alt="ViewSonic作品集" />
                </div>
              </div>
              {/* Project 4 - RETO */}
              <div className="work_card" onClick={() => handleProjectClick('/portfolio/reto', false)}>
                <div className="card_content">
                  <div className="content_top">
                    <div className="card_header">
                      <span className="company">side porject</span>
                      <h2 className="card_title">旅藤-旅遊規劃平台</h2>
                      <span className="date">2023.06 - 2023.12</span>
                    </div>
                    <p className="card_desc">與團隊共同制定用戶研究、旅程，並制定功能策略，讓用戶能夠輕鬆規劃旅程。</p>
                  </div>
                  <div className="content_bottom">
                    <div className="tag_wrap">
                      <span className="tag">介面設計</span>
                      <span className="tag">原型設計</span>
                      <span className="tag">設計規範</span>
                      <span className="tag">前端切版</span>
                      <span className="tag">團隊溝通</span>
                    </div>
                    <div className="card_button">查看更多</div>
                  </div>
                </div>
                <div className="card_image">
                  <img src={RETO} alt="RETO旅藤" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />





      {showPassword && (
        <div className="password_modal">
          <div className="modal_content">
            <h3>需要密碼才能查看</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="請輸入密碼"
            />
            <p className="password_hint">提示：我的手機號碼</p>
            <div className="modal_buttons">
              <button onClick={() => handlePasswordSubmit(currentProject)}>確認</button>
              <button onClick={() => {
                setShowPassword(false);
                setPassword('');
                setCurrentProject('');
              }}>取消</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default index
