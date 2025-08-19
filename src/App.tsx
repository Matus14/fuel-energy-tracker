import { useState,useEffect } from 'react';
import { loadLogs, saveLogs } from './storage';
import type { TripLog } from './types';
import './App.css'

function App() {
  
  const [logs, setLogs] = useState<TripLog[]>([]);

  useEffect (() => {
    setLogs(loadLogs());
  }, []);

  useEffect(() => {
    saveLogs(logs);
  }, [logs]);
  
  return (
    <div>
      <h1>Fuel & Energy Tracker</h1>

      <p> Logs stored in LocalStorage:</p>

      <ul>
        {logs.map((log) =>
        <li key={log.id}>
          {log.date} - {log.vehicleName} ({log.vehicleType} - {log.distanceKm}) km
        </li>)}
      </ul>

      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          // For now, just add dummy log to test saving
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
