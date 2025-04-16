import { useEffect, useState } from 'react';

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/workouts')
      .then(res => res.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">LegStrong Workout Plan</h1>
      {workouts.map(w => (
        <div key={w.day} className="mt-4">
          <h2 className="text-xl font-semibold">{w.day}</h2>
          <ul className="list-disc list-inside">
            {w.exercises.map((e, idx) => <li key={idx}>{e}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
