import type { TripLog } from "./types";

const STORAGE_KEY = "fuel-energy-tracker.logs"; // just string stored in variable to help quickly and correctly 



export function loadLogs(): TripLog[] {
    try {

        /* "JSON.parse()" makes object from the string. To be able better work with values stored inside 
            the object/array
        */
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        // In case of corrupted data or parsing error, return empty array
        return [];
    }
}

export function saveLogs(logs: TripLog[]): void {

     /* "JSON.stringify" makes string from the object to be able save it, 
        because localStorage can store STRINGS ONLY
     */
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs)); 
}