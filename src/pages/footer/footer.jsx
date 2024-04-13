// import React from 'react'
import './footer.scss'
//img
import Behance from '../../assets/icon/Behance.svg'
import Medium from '../../assets/icon/Medium.svg'
import LinkedIn from '../../assets/icon/LinkedIn.svg'




const footer = () => {
    return (
        <>
            <footer>
                <div className="mail_wrap">
                    <h3>Email</h3> 
                    <a href="">yizhenchen06@gmail</a>
                    <p>© 2023 JennyChen. All Rights Reserved.</p>
                    <p>This website made by React Vite</p>
                </div>
                <div className="logo_wrap">
                    <div className="logo"><a href="https://www.behance.net/wualwwalw0310/projects" target="_blank"><img src={Behance} alt="" /></a></div>
                    <div className="logo"><a href="https://medium.com/@jenny_yizhenchen/%E5%8F%B0%E9%90%B5%E5%88%97%E8%BB%8A%E5%8B%95%E6%85%8B-app-redesign-cc48578d9e63" target="_blank"><img src={Medium} alt="" /></a></div>
                    <div className="logo"><a href="https://www.linkedin.com/in/jennchenuiux/" target="_blank"><img src={LinkedIn} alt="" /></a></div>
                </div>
            </footer>

        </>
    )
}

export default footer
