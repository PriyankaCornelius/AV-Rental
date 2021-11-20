import { useContext } from "react";
import { AuthContext } from "../components/authenticaion/ProvideAuth";

export const bookRide = async (ride, user) => {
    const {carId, source, destination, chargePerDay: charges} = ride;
    const payload = {
        carId, 
        source,
        destination, 
        charges,
        status: 'In-Progress',
        customerId: user.userId
    }
    console.log(payload);
    const options = {
        method: 'POST',
        headers:  {'Content-Type': 'application/json' },
        body: JSON.stringify(ride),
    };
    const response = await fetch('http://localhost:5000/ride/addRide', options);
    const status = response.status;
    const data = await response.json();
    return {status, data};
}
