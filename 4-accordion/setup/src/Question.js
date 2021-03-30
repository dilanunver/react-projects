import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ info, title }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setToggle(!toggle)}>
          {toggle ? <AiOutlinePlus></AiOutlinePlus> : <AiOutlineMinus></AiOutlineMinus>}
        </button>
      </header>
      {toggle ? <p>{info}</p> : ''}
    </article>
  );
};

export default Question;
