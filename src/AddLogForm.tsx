import { useState } from "react";
import type { TripLog,VehicleType } from "./types";




export default function AddLogForm ({onAdd}: {onAdd: (log: TripLog) => void}) {

    const [date, setDate] = useState<string>('');
    const [vehicleName, setVehicleName] = useState<string>('');
    const [vehicleType, setVehicleType] = useState<VehicleType>('EV');
    const [distanceKm, setDistanceKm] = useState<number>(0)
    const [fuelLiters, setFuelLiters] = useState<number | undefined>(undefined);
    const [energyKWh, setEnergyKWh] = useState<number | undefined>(undefined);
    const [unitPrice, setUnitPrice] = useState<number | undefined>(undefined);
    const [totalCost, setTotalCost] = useState<number | undefined>(undefined);


    const getId = () => Math.random().toString(36).slice(2,9);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    if (!date || !vehicleName || distanceKm <= 0) {
      alert("Please fill date, vehicle name and a positive distance.");
      return;
    }
    if (vehicleType === "EV" && (!energyKWh || energyKWh <= 0)) {
      alert("For EV, please enter energy (kWh) > 0.");
      return;
    }
    if (vehicleType === "ICE" && (!fuelLiters || fuelLiters <= 0)) {
      alert("For ICE, please enter fuel (L) > 0.");
      return;
    }

    }
    

}
