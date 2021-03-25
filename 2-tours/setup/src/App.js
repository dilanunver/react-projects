import React, { useEffect, useState } from 'react';
import Tours from './Tours';
import Loading from './Loading';


const url = 'https://course-api.com/react-tours-project'



const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour)
  }

  const fetchTours = async () => {
    setLoading(true)
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false)
    setTours(tours)
  }

  useEffect(() => {

    fetchTours()
  }, []);

  if (loading) {
    return (
      <h2>
        <main>
          <Loading></Loading>
        </main>
      </h2>
    )
  }
  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={fetchTours}>refresh</button>
      </div>

    </main>
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  )
}


export default App