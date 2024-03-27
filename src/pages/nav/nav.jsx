import { useState, useEffect } from 'react'
import './nav.scss'
import Menu from '../../assets/icon/menu.svg'
import MenuBox from './menu'
import {
    NavLink,
} from "react-router-dom";

function Header() {
    const [position, setPosition] = useState(window.scrollY)
    // console.log(`position:${position}`);
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.scrollY;
            // console.log(`moving:${moving}`);

            setVisible(position > moving);
            setPosition(moving);
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    }, [position]);

    const cls = visible ? "visible" : "hidden";

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setIsScrolled(currentPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerStyle = {
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 1.0)" : "transparent",
        // borderRadius: isScrolled ? '50px' : '0',
        backdropFilter: blur(8),
        position: 'fixed',
        // margin: 10,
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'background-color 0.3s ease',
    };

    

    return (
        <div className={cls}>
            <div className="header" style={headerStyle}>
                {/* LOGO  */}

                <a className='logo' href={`/portfolio/`}></a>

                <div className="wrap">
                    {/* 置頂導覽按鈕  */}
                    <nav>
                        <ul className="nav_btn">
                            <li className='btn_link' >
                                <NavLink to={`/portfolio/`}
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }>
                                    Works
                                </NavLink>
                                {/* <a href={`/portfolio/`}>Works</a> */}
                            </li>
                            <li className='btn_link'><a href={`/portfolio/about`}>About me</a></li>
                            <li className='btn_link'><a href='https://drive.google.com/file/d/1yqwU2URFxbTO7FR5rEQI93hwR_yQrsZ4/view?usp=sharing' target='_blank'>下載履歷</a></li>
                        </ul>
                    </nav>
                    {/* nenu  */}
                    <div className="user ">
                        <div className="hover-trigger">
                            <figure className="menu_box">
                                <img src={Menu} alt="" />
                            </figure>
                        </div>
                        <div className="popup-content">
                            <MenuBox />

                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Header
