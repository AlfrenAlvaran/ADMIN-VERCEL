import React from 'react';
import { tabs_menu } from '../../assets/assets';
import './TabMenu.css'
const TabMenu = ({ tab, setTab }) => {
  return (
    <div className='tab__btns'>
      {tabs_menu.map((item) => (
        <div
          key={item.id} 
          onClick={() => setTab(prev => (prev === item.tab ? 'All' : item.tab))}
          className={`tab__btn ${tab === item.tab ? 'active' : ''}`}
        >
          {item.tab}
        </div>
      ))}
    </div>
  );
}

export default TabMenu;
