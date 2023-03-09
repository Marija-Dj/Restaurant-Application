import React from 'react'
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from "../../components";
import './menu.css';

const Menu = () => {
  return (
    <div className='app__menu flex__center section__padding' id='menu'>
      <div className='app__menu-title'>
        <SubHeading title="Menu that fits your palatte" />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className='app__menu-menu'>
        <div className='app__menu-menu_wine flex__center'>
          <p className='app__menu-menu_heading'>Wine & Beer</p>
          <div className='app__menu-menu_items'>
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
          </div>
        </div>

        <div className='app__menu-menu_image'>
          <img src={images.menu} alt="menu_image" />
        </div>

        <div className='app__menu-menu_cocktails flex__center'>
          <p className='app__menu-menu_heading'>Cocktails</p>
          <div className='app__menu-menu_items'>
            {data.cocktails.map((cocktails, index) => (
              <MenuItem key={cocktails.title+index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>
            ))}
          </div>
        </div>
      </div>

      <div style={{marginTop: '15px'}}>
        <button type='button' className='custom__button' >View More</button>
      </div>
    </div>
  )
}

export default Menu