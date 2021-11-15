import { sendInternalServerError, sendCustomSuccess } from "./common";
import con  from '../index';

export const addRide = (req, res) => {
    try{
        const {
            rideId, 
            carId,
            customerId, 
            source, 
            destination, 
            rideDate, 
            charges, 
            status,            
        } = req.body;

        const getRideByIdQuery = 'SELECT * FROM ride WHERE rideId = ?;';

        const rideUpdateQuery = `UPDATE ride SET
            carId = ?,
            customerId = ?,
            source = ?,
            destination = ?,
            rideDate = ?
            charges = ?,
            status = ?,
            WHERE rideId = ?;
        `;
        const rideAddQuery = `INSERT INTO ride (
            rideId,
            carId,
            customerId, 
            source, 
            destination, 
            rideDate, 
            charges, 
            status) VALUES (NULL, ?, ?,?,?,?,?,?)
        `;

        const getLastInerstedIdQuery = `SELECT LAST_INSERT_ID();`;

        if(rideId){ //Update
            con.query(rideUpdateQuery, [
                rideId,
                carId,
                customerId, 
                source, 
                destination, 
                rideDate, 
                charges, 
                status,
            ], (err, result) => {
                if(err){
                    sendInternalServerError(res);
                }
                else{
                    con.query(getRideByIdQuery, [rideId], (err, result)=>{
                        if(result[0]){
                            sendCustomSuccess(res, { data: result[0]});
                        }
                        else{
                            sendCustomError(res, 404, 'Entity Not Found');
                        }
                    });
                }
            });
        }
        else{ //Add New
            console.log('Adding ride');
            con.query(rideAddQuery, [
                rideId,
                carId,
                customerId, 
                source, 
                destination, 
                rideDate, 
                charges, 
                status,
            ], (err, result) => {
                console.log('Adding ride2');

                if(err){
                    console.log(err);
                    sendInternalServerError(res);
                }
                else{
                    console.log('here');
                    con.query(getLastInerstedIdQuery, (err, result) => {
                        if(result){
                            let id = result[0]['LAST_INSERT_ID()'];
                            con.query(getRideByIdQuery, [id], (err, result)=>{
                                if(result[0]){
                                    console.log('YESYESYEYS', result[0]);
                                    sendCustomSuccess(res, { data: result[0]});
                                }
                                else{
                                    sendCustomError(res, 404, 'Entity Not Found');
                                }
                            });
                        }
                        else{
                            console.log(err);
                            sendInternalServerError(res);
                        }
                    })
                }
            });
        }
    }
    catch(err){
        sendInternalServerError(res);
    }
}