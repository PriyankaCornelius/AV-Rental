import React, {useState, useEffect, useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {fetchRideListFromDB} from '../../services/rideService';
import Radio from '@mui/material/Radio';
import { AuthContext } from '../authenticaion/ProvideAuth';

function createData(rideNumber, carNumber, date,  charge) {
  return { rideNumber, carNumber, charge, date };
}

const rows = [
  createData('1', '8CPA850', '11/10/2021', 16.0 ),
  createData('2', '7YPN393', '11/09/2021', 29.0),
  createData('3', '8AMF954', '11/09/2021', 56.0),
  createData('4', '8AMF954', '10/19/2021', 76.0),
  createData('5', '8AMF954', '10/09/2021', 76.0),
  createData('6', '8AMF954', '10/06/2021', 146.0),
  createData('7', '7MWL676', '09/30/2021', 122.0),
  createData('8', '7MWL676', '09/29/2021', 102.0),
  createData('9', '8AMF954', '09/19/2021', 56.0),
  createData('10','8AMF954', '05/09/2021', 86.0),
  createData('11', '8AMF954', '05/09/2021', 86.0),

];

export default function RideList(props) {

    const authContext = useContext(AuthContext);
    const [rideList, setRideList] = useState();
    const [loading, setLoading] = useState(true);
    console.log(props); 
    useEffect(() => {
        fetchRideList();
    }, [])

    const selectCar = (e) =>{
        const {carId,model, chargePerDay } = JSON.parse(e.target.value);
        console.log("Car selected", JSON.parse(e.target.value));
        const {setRide, ride} = props;
        setRide({
        ...ride,
        carId,
        model, 
        chargePerDay,
        })
    }

    const fetchRideList = async () => {
        const {user} = authContext;
        const resp = await fetchRideListFromDB(user.userId, user.persona);
        console.log(resp);
        if(resp.status === 200){
        console.log(resp.data.payload);
        const rows = [];
        resp.data.payload.forEach(el => {
            const { carId, ownerId, type, model, chargePerDay, mileage} = el;
            rows.push({
            carId,
            ownerId, 
            type, 
            model,
            chargePerDay, 
            mileage,
            })
        });
        setRideList(rows);

        setLoading(false);
        }
        else{
        console.log(resp.data.message);
        }

    }

    return (
        <>
        {!loading && (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Ride Number</TableCell>
                <TableCell>Source</TableCell>
                <TableCell align="right">Destination</TableCell>
                <TableCell align="right">Charge Per Daye</TableCell>
                <TableCell align="right">Car Number</TableCell>

            </TableRow>
            </TableHead>
            <TableBody>
            {rideList.map((row) => (
                <TableRow
                key={row.carId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.rideId}
                </TableCell>
                <TableCell align="right">{row.source}</TableCell>
                <TableCell align="right">{row.destination}</TableCell>
                <TableCell align="right">{row.chargePerDay}</TableCell>
                <TableCell align="right">{row.carId}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        )}
        </>
    );
}