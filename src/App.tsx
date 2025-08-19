import { useState, useEffect } from 'react';
import { loadLogs, saveLogs } from './storage';
import type { TripLog } from './types';
import './App.css'

function App() {

  // in useState must be define the type = TripLog
  const [logs, setLogs] = useState<TripLog[]>([]);


  // useEffect with [] (empty array)
  // Run this only once,  after the component shows up on screen
  // In here its load any saved logs from localStorage
  useEffect(() => {
    setLogs(loadLogs());
  }, []);

  
  // Another useEffect, but this one "watches" the logs array
  // Whenever logs changes ( when added  or removed something), this effect runs and save logs
 
  useEffect(() => {
    saveLogs(logs);
  }, [logs]);

 

  // This creates how the UI should look like
  // React will render this JSX into HTML
  return (
    <div className='container py-4'>
      <h1 className='mb-4'>Fuel & Energy Tracker</h1>

      <p> Logs stored in LocalStorage:</p>

      {/* This part loops over the logs array and prints each log as <li>. 
          The "key" prop is super important in React lists
          so React can keep track of items when re-rendering. */}
      <ul className='list-group'>
        {logs.map((log) =>
          <li key={log.id} className='list-group-item'>
            {log.date} - {log.vehicleName} ({log.vehicleType} - {log.distanceKm} km) 
          </li>
        )}
      </ul>

      {/* A button styled with Bootstrap classes.
          It creates new TripLog object
          with some dummy values (like distanceKm = 42)
          Then it updates the state with setLogs.
          Notice the syntax: setLogs((prev) => [newLog, ...prev]).
          That means: take the new log and put it at the front of the array,
          then spread all the previous logs after it.
          React will re-render, the UI updates, and thanks to our useEffect,
          the new log also gets saved into localStorage. */}
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          const newLog: TripLog = {
            id: Math.random().toString(36).slice(2, 9),
            date: new Date().toISOString().slice(0, 10),
            vehicleName: "Test EV",
            vehicleType: "EV",
            distanceKm: 42,
            energyKWh: 8,
            unitPrice: 0.25,
            totalCost: 2,
          };
          setLogs((prev) => [newLog, ...prev]);
        }}
      >
        Add dummy log
      </button>
    </div>
  )
}

export default App