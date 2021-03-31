import React from 'react'

const Menu = ({ id, img, desc, title, price }) => {
  return (
    <div className='section-center'>
      <article key={id} className='menu-item'>
        <img src={img} alt={title} className='photo'></img>
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <h4 className='price'>${price} </h4>
          </header>
          <p className='item-text'>{desc}</p>
        </div>
      </article>
    </div>
  )

}


export default Menu