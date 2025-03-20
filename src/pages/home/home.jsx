// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Header from '../nav/nav'
import './home.scss'
import Footer from '../footer/footer'
import Download from '../../assets/icon/download.svg'
import RETO from '../../assets/images/RETO CH/cover3.png'
import Rallway from '../../assets/images/rallway/cover.png'
import Vote from '../../assets/images/voting CH/cover.png'
import ViewSonic from '../../assets/images/viewsonic/viewsonic_01.png'
import textDesk from '../../assets/images/textDesk.png'
import textPhone from '../../assets/images/textPhone.png'
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [currentProject, setCurrentProject] = useState('');

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
              <div className="slogan">
                <img src={textDesk} alt="喜歡製作有效率和具有美感的產品" className="desktop-text" />
                <img src={textPhone} alt="喜歡製作有效率和具有美感的產品" className="mobile-text" />
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
              {/* Project 1 - RETO */}
              <div className="work_card" onClick={() => handleProjectClick('/portfolio/reto', true)}>
                <div className="card_content">
                  <div className="content_top">
                    <div className="card_header">
                      <span className="company">ABC 科技公司</span>
                      <h2 className="card_title">電商網站設計</h2>
                      <span className="date">2023.06 - 2023.12</span>
                    </div>
                    <p className="card_desc">為知名品牌打造的電商平台，包含會員式電商設計、購物車功能和會員系統。</p>
                  </div>
                  <div className="content_bottom">
                    <div className="tag_wrap">
                      <span className="tag">設計並實現買賣雙方電商界面</span>
                      <span className="tag">提升移動端購物體驗</span>
                      <span className="tag">優化購物流程，轉換率提升30%</span>
                    </div>
                    <div className="card_button">查看更多</div>
                  </div>
                </div>
                <div className="card_image">
                  <img src={RETO} alt="RETO旅藤" />
                </div>
              </div>

              {/* Project 2 - Company Project */}
              <div className="work_card" onClick={() => handleProjectClick('/portfolio/rallway', true)}>
                <div className="card_content">
                  <div className="content_top">
                    <div className="card_header">
                      <span className="company">XYZ 企業集團</span>
                      <h2 className="card_title">企業形象網站</h2>
                      <span className="date">2023.01 - 2023.05</span>
                    </div>
                    <p className="card_desc">重新設計企業官網，提升品牌形象並優化用戶體驗。</p>
                  </div>
                  <div className="content_bottom">
                    <div className="tag_wrap">
                      <span className="tag">品牌視覺設計</span>
                      <span className="tag">響應式網站設計</span>
                      <span className="tag">使用者體驗優化</span>
                    </div>
                    <div className="card_button">查看更多</div>
                  </div>
                </div>
                <div className="card_image">
                  <img src={Rallway} alt="企業形象網站" />
                </div>
              </div>

              {/* Project 3 - Vote */}
              <div className="work_card" onClick={() => handleProjectClick('/portfolio/vote', false)}>
                <div className="card_content">
                  <div className="content_top">
                    <div className="card_header">
                      <span className="company">六角學院</span>
                      <h2 className="card_title">總統開票地圖</h2>
                      <span className="date">2023</span>
                    </div>
                    <p className="card_desc">THE F2E 參賽作品，入圍佳作。透過互動式地圖呈現選舉結果。</p>
                  </div>
                  <div className="content_bottom">
                    <div className="tag_wrap">
                      <span className="tag">UIUX</span>
                      <span className="tag">原型設計</span>
                      <span className="tag">設計規範</span>
                    </div>
                    <div className="card_button">查看更多</div>
                  </div>
                </div>
                <div className="card_image">
                  <img src={Vote} alt="總統開票地圖" />
                </div>
              </div>

              {/* Project 4 - ViewSonic */}
              <div className="work_card" onClick={() => handleProjectClick('/portfolio/viewsonic', false)}>
                <div className="card_content">
                  <div className="content_top">
                    <div className="card_header">
                      <span className="company">ViewSonic</span>
                      <h2 className="card_title">ViewSonic作品集</h2>
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
