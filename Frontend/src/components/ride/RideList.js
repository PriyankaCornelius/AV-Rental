import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {fetchCarListFromDB} from '../../services/carService';
import { PersonPinCircleSharp, Rotate90DegreesCcwSharp } from '@mui/icons-material';
import Radio from '@mui/material/Radio';

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

  const [carList, setCarList] = useState();
  const [loading, setLoading] = useState(true);
  console.log(props); 
  useEffect(() => {
    fetchCarList(props.ride.carType);
  }, [])

  const selectRide = (e) =>{
    const {carId,model, chargePerDay } = JSON.parse(e.target.value);
    console.log("Ride selected", JSON.parse(e.target.value));
    const {setRide, ride} = props;
    setRide({
      ...ride,
      carId,
      model, 
      chargePerDay,
    })
  }

  const fetchCarList = async (type) => {
    const resp = await fetchCarListFromDB(type);
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
      setCarList(rows);

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
            <TableCell>Select</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Car Number</TableCell>
            <TableCell align="right">Charge Per Daye</TableCell>
            <TableCell align="right">Mileage</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {carList.map((row) => (
            <TableRow
              key={row.carId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Radio value={JSON.stringify(row)} checked={row.carId === props.ride.carId} onChange={selectRide}/>
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.chargePerDay}</TableCell>
              <TableCell align="right">{row.mileage}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )}
    </>
  );
}