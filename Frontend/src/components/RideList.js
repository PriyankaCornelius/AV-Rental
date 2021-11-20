import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function RideList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ride Number</TableCell>
            <TableCell align="right">Car Number</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Total Charge for the ride($)</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.rideNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rideNumber}
              </TableCell>
              <TableCell align="right">{row.carNumber}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.charge}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}