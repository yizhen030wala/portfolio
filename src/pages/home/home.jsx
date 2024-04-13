// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../nav/nav'
import './home.scss'
import Footer from '../footer/footer'


//img
// import TextDesk from '../../assets/images/textDesk.png'
import Download from '../../assets/icon/download.svg'
import title from '../../assets/images/titleWorks.png'
import RETO from '../../assets/images/RETO CH/cover2.png'
import ViewSonic from '../../assets/images/viewsonic/viewsonic_01.png'
import Vote from '../../assets/images/voting CH/cover.png'
import Rallway from '../../assets/images/rallway/cover.png'

const index = ({ showMainContent }) => {
  // const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <div id="mainContent" style={{ display: showMainContent ? "block" : "none" }}>
        <Header />
        <main >
          <div className="hero">
            <div className="wrap">
              <div className="text_wrap">
                <h1>
                  Hi ! I’m Jenny!<br></br>
                  A UIUX/Visual Designer
                </h1>
                <figure>
                  {/* <img src={TextDesk} alt="" /> */}
                </figure>
              </div>
              <div className="btn_wrap">
                <a className="btn_black" href={`/portfolio/about`}>關於我</a>
                <a className="btn_white" href='https://drive.google.com/file/d/1yqwU2URFxbTO7FR5rEQI93hwR_yQrsZ4/view?usp=sharing' target='_blank'>下載履歷 <img src={Download} alt="" /></a>
              </div>
            </div>

          </div>

          <div className="works" id='#Home-works-section'>
            <div className="title"><img src={title} alt="" /></div>

            <div className="container">
              {/* one */}
              <a href={`/portfolio/reto`}>
                <div className="card">
                  <div className="left"><img src={RETO} alt="" /></div>
                  <div className="right">
                    <div className="info_top">
                      <h4>2023/11~2024/2</h4>
                      <h1>RETO旅藤</h1>
                      <h4>旅藤是一個能快速規劃旅程的產品。<br></br>
                        在旅藤中，使用者能使用視覺化的方式，更快速的選擇景點，並安排行程順序與路線。
                      </h4>
                      <div className="tag_wrap">
                        <div className="tag">UIUX</div>
                        <div className="tag">原型設計</div>
                        <div className="tag">設計規範</div>
                        <div className="tag">團隊溝通</div>
                      </div>
                    </div>
                    <a className="info_btn" href={`/portfolio/reto`}>了解更多細節</a>
                  </div>
                </div>
              </a>

              {/* two */}
              <a href={`/portfolio/rallway`}>
                <div className="card">
                  <div className="left"><img src={Rallway} alt="" /></div>
                  <div className="right">
                    <div className="info_top">
                      <h4>2023</h4>
                      <h1>台鐵列車動態 redesign</h1>
                      <h4>身為五年的APP使用者，發現更好用的APP後，便做了redesign。</h4>
                      <div className="tag_wrap">
                        <div className="tag">UIUX</div>
                        <div className="tag">原型設計</div>
                        <div className="tag">設計規範</div>
                      </div>
                    </div>
                    <a className="info_btn" href={`/portfolio/rallway`}>了解更多細節</a>
                  </div>
                </div>
              </a>

              {/* three */}
              <a href={`/portfolio/vote`}>
                <div className="card">
                  <div className="left"><img src={Vote} alt="" /></div>
                  <div className="right">
                    <div className="info_top">
                      <h4>2023</h4>
                      <h1>總統開票地圖</h1>
                      <h4>六角學院的THE F2E參賽作品<br></br>入圍佳作</h4>
                      <div className="tag_wrap">
                        <div className="tag">UIUX</div>
                        <div className="tag">原型設計</div>
                        <div className="tag">設計規範</div>
                      </div>
                    </div>
                    <a className="info_btn" href={`/portfolio/vote`}>了解更多細節</a>
                  </div>
                </div>
              </a>

              {/* four */}
              <a href={`/portfolio/viewsonic`}>
                <div className="card">
                  <div className="left"><img src={ViewSonic} alt="" /></div>
                  <div className="right">
                    <div className="info_top">
                      <h4>2022/1~9</h4>
                      <h1>ViewSonic作品集</h1>
                      <h4>在實習中接觸到各種各樣的周邊物製作，並依照需求獨立完成設計</h4>
                      <div className="tag_wrap">
                        <div className="tag">視覺設計</div>
                        <div className="tag">行銷貼文</div>
                        <div className="tag">活動UI</div>
                      </div>
                    </div>
                    <a className="info_btn" href={`/portfolio/viewsonic`}>了解更多細節</a>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </main>
        <Footer />
      </div>

    </>
  )
}

export default index
