// import React from 'react'
import './menu.scss'

const menu = () => {
    return (
        <div>
            <div className="UnLogin-box">
                <ul className="menu">
                    <li><a href={`/portfolio/`}>Works</a></li>
                    <li><a href={`/portfolio/about`}>About me</a></li>
                    <li><a href='https://drive.google.com/file/d/1yqwU2URFxbTO7FR5rEQI93hwR_yQrsZ4/view?usp=sharing' target='_blank'> 下載履歷</a></li>
                </ul>


            </div>

        </div>
    )
}

export default menu
