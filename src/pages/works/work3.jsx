//vote
import Footer from '../footer/footer'
import Header from '../nav/nav'
import './works.scss'
//img
import One from '../../assets/images/voting CH/ppt1.png'
import Two from '../../assets/images/voting CH/ppt2.png'
import Three from '../../assets/images/voting CH/ppt3.png'
import Rallway from '../../assets/images/rallway/cover.png'
import ViewSonic from '../../assets/images/viewsonic/viewsonic_01.png'



const work3 = () => {
    return (
        <div>
            <Header />
            <main className='portfolio png'>
                <div className="port_content">
                    <div className="porject_info"></div>
                    <img src={One} alt="" /><img src={Two} alt="" /><img src={Three} alt="" />
                </div>
                <div className="other_project">
                    <a href={`/rallway`} className="go_back">
                        <div className="wrap">
                            <p>上一篇</p>
                            <h2>台鐵列車動態 redesign </h2>
                            <p>了解更多</p>
                        </div>
                        <figure><img src={Rallway} alt="" /></figure>

                    </a>
                    <a href={`/viewsonic`} className="next">
                        <div className="wrap">
                            <p>下一篇</p>
                            <h2>ViewSonic作品集 </h2>
                            <p>了解更多</p>
                        </div>
                        <figure><img src={ViewSonic} alt="" /></figure>

                    </a>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default work3
