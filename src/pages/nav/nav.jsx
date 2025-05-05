import { useState, useEffect } from 'react'
import './nav.scss'
import Menu from '../../assets/icon/menu.svg'
// import DownloadSvg from '../../assets/icon/download.svg'
import MenuBox from './menu'
import {
    NavLink,
    useNavigate
} from "react-router-dom";
import { Drawer } from './drawer';


function Header() {
    const [position, setPosition] = useState(window.scrollY)
    // console.log(`position:${position}`);
    const [visible, setVisible] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

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
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.2)" : "transparent",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        borderRadius: isScrolled ? "100px" : "0",
        margin: isScrolled ? "10px 10px" : "0",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: isScrolled ? "calc(100% - 20px)" : "100%",
        height: isScrolled ? "70px" : "100px",
        zIndex: 1000,
        transition: 'all 0.3s ease-in-out',
    };

   



    return (
        <div className={cls}>
            <div className="header" style={headerStyle}>
                {/* LOGO  */}
                <div className='logo'>
                    <div className="logo_img" onClick={() => navigate('/portfolio/')}></div>
                    <NavLink 
                        to="/portfolio/" 
                        className={`logo_text ${isScrolled ? 'visible' : ''}`}
                        end
                    >
                        Jenny Chen
                    </NavLink>
                </div>

                <div className="wrap">
                    {/* 置頂導覽按鈕  */}
                    <nav>
                        <ul className="nav_btn">
                            <li className='btn_link'>
                                <NavLink
                                    to="/portfolio/"
                                    end
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Works
                                </NavLink>
                            </li>
                            <li className='btn_link'>
                                <NavLink
                                    to="/portfolio/about"
                                    end
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    About me
                                </NavLink>
                            </li>
                            <li className='btn_link'>
                                <a href='https://drive.google.com/file/d/1yqwU2URFxbTO7FR5rEQI93hwR_yQrsZ4/view?usp=sharing' 
                                   target='_blank' 
                                   className="nav-link"
                                >
                                    下載履歷
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* menu  */}
                    <div className="user ">
                        <div className="hover-trigger">
                            <figure className="menu_box" onClick={() => setDrawerOpen(true)}>
                                <img src={Menu} alt="" />
                            </figure>
                        </div>
                        <div className="popup-content">
                            {/* <MenuBox /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Drawer 側邊欄 */}
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </div>
    )
}

export default Header
