import React from 'react';
import { NavLink } from 'react-router-dom';

export const Drawer = ({ open, onClose }) => {
  return (
    <>
      {open && <div className="drawer-overlay" onClick={onClose} />}
      <aside className={`drawer${open ? ' open' : ''}`}>
        <button className="drawer-close" onClick={onClose} aria-label="關閉側邊欄">×</button>
        <nav className="drawer-nav">
          <NavLink to="/portfolio/" onClick={onClose} end>Works</NavLink>
          <NavLink to="/portfolio/about" onClick={onClose} end>About me</NavLink>
          <a href="https://drive.google.com/file/d/1yqwU2URFxbTO7FR5rEQI93hwR_yQrsZ4/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={onClose}>下載履歷</a>
        </nav>
      </aside>
    </>
  );
};

export default Drawer; 