
// Vehicle can be either ICE (internal combustion engine) or EV (electric vehicle)
export type VehicleType = "ICE" | "EV";

// Info about one trip / refueling / charging
export interface TripLog {
  id: string;              // unique id
  date: string;            // ISO string (e.g. "2025-08-18")
  vehicleName: string;     // e.g. "Nissan e-NV200"
  vehicleType: VehicleType;
  distanceKm: number;      // how many km was driven


   // One of these will be filled depending on vehicle type

   fuelLiters?: number;      // for ICE
   energyKWh?: number;       // for EV      


   unitPrice?: number;      // €/liter or €/kWh
   totalCost?: number;      // total € (optional)
    
}

