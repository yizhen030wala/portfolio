// rallway
import './works.scss'
import Footer from '../footer/footer'
import Header from '../nav/nav'

//img
import RETO from '../../assets/images/RETO CH/cover2.png'
import Vote from '../../assets/images/voting CH/cover.png'



const work2 = () => {
    return (
        <div>
            <Header />
            <main className='portfolio'>
                <div className="port_content">
                    <div className="porject_info">
                        <h2>台鐵列車動態 redesign</h2>
                    </div>
                    <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mztdUCayA3uAQ0ck6SApLQ.png" alt="" />
                    <p>大學到桃園念書，為了假日回雙北而開始使用能查詢台鐵+公車的「台鐵列車動態」。儘管使用時有些問題點令人煩躁，但也一用就用了5年。
                        <br></br>
                        最近發現了更好用、符合我需求的 app ，所以跟「台鐵列車動態」說再見的同時也做個redesign來紀念它陪我度過的讀書時光。
                    </p>
                    <h2>產品架構圖:</h2>
                    <p>整理好原先的產品架構後，也能發現幾個在執行時無法正常執行的功能，如:票價查詢、公共自行車。</p>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*tBpU4nka5XnkKAet5GJWtQ.png" alt="" />
                    <h2>用戶評論:</h2>
                    <p>在參考過app 評論區的想法後，發現除了設計問題，很大一部分也跟資訊的不穩定有關。</p>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Bs-ZxyqTet8zBa6gbOe8ew.png" alt="" />
                    <p>既然這麼多不好的評分，我怎麼還使用同一個app用了5年呢?</p>
                    <ol>
                        <li>1.  不需要登入也能取得資料，這點台鐵官方app與其他家也能做到</li>
                        <li>2.  結合台鐵+全台公車</li>
                        <li>3.  功能簡潔</li>
                    </ol>
                    <p>結合以上原因與用戶評論，我重新做了頁面架構圖。</p>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XqNppFxiXHa6U1dmHuKIFw.png" alt="" />
                    <p>主要保留台鐵、公車的頁面結構，將底部選單的功能換成漢堡menu，把不會每次都使用的功能收起來。在頁面上則精簡動作、刪去資訊無法運行與不易吸收部分。</p>
                    <h2>首頁:</h2>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OrsZH6jGprLvuqR5yzJpvw.png" alt="" />
                    <p>原先頁面功能其實很簡潔，但每次查火車時刻表時，需要點2-3下、跳2個full page才能看到想看的資訊，加上等待資訊loading的時間，趕路的時候真的會很阿雜。<br></br>常用功能部分一樣點擊3下，但需要跳3個full page…對兩點一線的通勤族群反而不太直覺。</p>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*P2xS5Lv3L0eD_Z752gDKTA.png" alt="" />
                    <p>首頁主要想減少資料取得的時間，參考了韓國漢陽大學使用的校內公車系統。即時看到當下的列車資訊，能減少通勤時的煩躁，即便錯過班次也能很快地看到下一班車什麼時候到；原先的常用功能也改為只設定兩個，並連結到主頁的即時資訊。</p>
                    <h2>台鐵時刻查詢:</h2>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_ZvclCIKiCH6arySN5zvUg.png" alt="" />
                    <p>原版的網頁版查詢點下去跑不出東西…難以推測為何放這個功能😢
                        <br></br>
                        時刻表則做了資訊的篩選、分類，並重新排列。
                    </p>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cBW64AYIy3wowKob7VdhSg.png" alt="" />
                    <h2>公車動態查詢:</h2>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*I2aVrIdUt5-6MKlNdnrSpw.png" alt="" />
                    <p>原本的公車頁面點進去後，還要再選一次縣市才能看到公車路線，不禁讓人思考有沒有能更偷懶的方法呢? 於是我將縣市選擇器移到上方，透過左右拖曳看到其他選擇，省下一個點擊動作，也能更快查公車號碼。</p>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*WfLxn9xloGWdhDiLY_fynw.png" alt="" />
                    <div className="thanks">
                        <h2>Thanks for watching!</h2>
                    </div>


                </div>
                <div className="other_project">
                    <a href={`/portfolio/reto`} className="go_back">
                        <div className="wrap">
                            <p>上一篇</p>
                            <h2>RETO旅藤-行程規畫器 </h2>
                            <p>了解更多</p>
                        </div>
                        <figure><img src={RETO} alt="" /></figure>

                    </a>
                    <a href={`/portfolio/vote`} className="next">
                        <div className="wrap">
                            <p>下一篇</p>
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

export default work2
