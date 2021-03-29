import React, { useState } from 'react';
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'


const Reviews = () => {
  const [person, setPerson] = useState(0);
  const { name, image, job, text } = people[person];

  const prevButton = () => {
    let newPerson = person - 1;
    if (newPerson < 0) {
      let lastPerson = people.length - 1
      return setPerson(lastPerson)
    }
    return setPerson(newPerson)
  }
  const nextButton = () => {
    let newPerson = person + 1;
    console.log(newPerson)
    if (newPerson > people.length - 1) {
      let lastPerson = 0
      return setPerson(lastPerson)
    }
    return setPerson(newPerson)
  }



  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'></img>
        <span className='quote-icon'>
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevButton}><FaChevronLeft></FaChevronLeft> </button>
        <button className='next-btn' onClick={nextButton}><FaChevronRight></FaChevronRight> </button>
      </div>
      <button className='random-btn'>surprise me</button>
    </article>
  );
};



export default Reviews;