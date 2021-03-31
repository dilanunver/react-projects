import React from 'react';

const Categories = ({ breakfast, lunch, shakes, all }) => {

  return (
    <div className='btn-container'>
      <button type='button' className='filter-btn' onClick={all}>
        all
      </button>
      <button type='button' className='filter-btn' onClick={breakfast}>
        breakfast
      </button>
      <button type='button' className='filter-btn' onClick={lunch}>
        lunch
      </button>
      <button type='button' className='filter-btn' onClick={shakes}>
        shakes
      </button>
    </div>
  )
};

export default Categories