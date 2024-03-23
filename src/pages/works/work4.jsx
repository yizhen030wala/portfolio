//vote
import Footer from '../footer/footer'
import Header from '../nav/nav'
import './works.scss'
//img
import Content from '../../assets/images/viewsonic/long.png'
import Vote from '../../assets/images/voting CH/cover.png'

const work4 = () => {
    return (
        <div>
            <Header />
            <main className='portfolio png'>
                <div className="port_content">
                    <div className="porject_info ">
                        <img src={Content} alt="" />
                    </div>
                </div>
                <div className="other_project">
                    <a href={`/vote`} className="go_back">
                        <div className="wrap">
                            <p>上一篇</p>
                            <h2>總統開票地圖 </h2>
                            <p>了解更多</p>
                        </div>
                        <figure><img src={Vote} alt="" /></figure>

                    </a>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default work4