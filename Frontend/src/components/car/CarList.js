import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(CarNumber, Type, ChargePerDay) {
  return { CarNumber, Type, ChargePerDay };
}

const rows = [
  createData('8CPA850', 'Sedan', 6.0 ),
  createData('7YPN393', 'Hatchback', 9.0),
  createData('7MWL676', 'Sedan', 12.0),
  createData('CN89RL', 'Sedan', 5.7 ),
  createData('8AMF954', 'Hatchback', 16.0),
];

export default function CarList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Car Number</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Charge Per Day&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.CarNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.CarNumber}
              </TableCell>
              <TableCell align="right">{row.Type}</TableCell>
              <TableCell align="right">{row.ChargePerDay}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}