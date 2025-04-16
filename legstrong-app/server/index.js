const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

const Workout = mongoose.model('Workout', {
  day: String,
  exercises: [String]
});

app.get('/api/workouts', async (req, res) => {
  const workouts = await Workout.find();
  res.json(workouts);
});

app.listen(5000, () => console.log("Server running on port 5000"));
