import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(personajes => {
          // console.log(personajes)
          setData(personajes);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Demon Slayer</h1>
          {data.map((personaje, index) => (
            <div key={index}>
              <h3>{index + 1} {personaje.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
