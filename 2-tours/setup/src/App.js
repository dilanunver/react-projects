import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';


const App = () => {

  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);


  const removeTours = (id) => {
    const newTour = tours.filter((tour) => {
      return tour.id !== id
    })
    setTours(newTour)

  }
  const fetchTours = async () => {
    setLoading(true)
    const response = await fetch(url);
    const tours = await response.json()
    setTours(tours)
    setLoading(false)
    console.log(tours)
  }
  useEffect(() => {
    fetchTours()
  }, []); /// bu kısım sadece elimdeki bilgiler bir kez render olsun diye mi ?
  if (loading) {
    return (
      <>
        <main>
          <h2><Loading></Loading></h2>
        </main>

      </>
    )
  } if (tours.length === 0) {
    console.log(tours) /// hep boş array geliyor neden?
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>refresh</button>
        </div>
      </main>
    )
  }
  return (
    <>
      <main>
        <Tours tours={tours} removeTours={removeTours}></Tours>
      </main>

    </>
  )
}

export default App