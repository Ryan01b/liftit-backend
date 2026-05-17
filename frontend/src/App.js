import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import ExerciseForm from './components/ExerciseForm';
import ExerciseList from './components/ExerciseList';
import './App.css';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadWorkouts();
  }, []);

  useEffect(() => {
    if (selectedWorkoutId) {
      loadExercises(selectedWorkoutId);
    } else {
      setExercises([]);
    }
  }, [selectedWorkoutId]);

  const loadWorkouts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/workouts`);
      const data = await res.json();
      setWorkouts(data);
      setError(null);
    } catch (err) {
      setError('Failed to load workouts');
    } finally {
      setLoading(false);
    }
  };

  const loadExercises = async (workoutId) => {
    try {
      const res = await fetch(`${API_URL}/exercises/workout/${workoutId}`);
      const data = await res.json();
      setExercises(data);
    } catch (err) {
      setError('Failed to load exercises');
    }
  };

  const createWorkout = async (workoutData) => {
    try {
      setLoading(true);
      await fetch(`${API_URL}/workouts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(workoutData)
      });
      loadWorkouts();
      setError(null);
    } catch (err) {
      setError('Failed to create workout');
    } finally {
      setLoading(false);
    }
  };

  const deleteWorkout = async (id) => {
    try {
      await fetch(`${API_URL}/workouts/${id}`, { method: 'DELETE' });
      if (selectedWorkoutId === id) setSelectedWorkoutId(null);
      loadWorkouts();
    } catch (err) {
      setError('Failed to delete workout');
    }
  };

  const createExercise = async (exerciseData) => {
    try {
      setLoading(true);
      await fetch(`${API_URL}/exercises`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(exerciseData)
      });
      if (selectedWorkoutId) loadExercises(selectedWorkoutId);
      setError(null);
    } catch (err) {
      setError('Failed to create exercise');
    } finally {
      setLoading(false);
    }
  };

  const deleteExercise = async (id) => {
    try {
      await fetch(`${API_URL}/exercises/${id}`, { method: 'DELETE' });
      if (selectedWorkoutId) loadExercises(selectedWorkoutId);
    } catch (err) {
      setError('Failed to delete exercise');
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="container">
        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading">Loading...</div>}
        
        <WorkoutForm onCreateWorkout={createWorkout} />
        <WorkoutList 
          workouts={workouts}
          onSelectWorkout={setSelectedWorkoutId}
          onDeleteWorkout={deleteWorkout}
          selectedWorkoutId={selectedWorkoutId}
        />
        
        {selectedWorkoutId && (
          <ExerciseForm 
            workoutId={selectedWorkoutId}
            onCreateExercise={createExercise}
          />
        )}
        
        <ExerciseList 
          exercises={exercises}
          onDeleteExercise={deleteExercise}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;