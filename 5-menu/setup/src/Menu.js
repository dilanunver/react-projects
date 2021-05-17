import React from 'react'

const Menu = ({ menuItems }) => {
  return (
    <div className='section-center'>
      {menuItems.map((menuItem) => {
        const { id, name, img, desc, sex, age, address, phone } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{sex}</h4>
                <h4 className='price'>{age}</h4>
                <h4 className='price'>{address}</h4>
                <h4 className='price'>{phone}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );

      })}

    </div>
  );

}

export default Menu;