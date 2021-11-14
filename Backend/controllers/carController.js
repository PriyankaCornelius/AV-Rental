import con from  '../index';
import { sendCustomError, sendCustomSuccess, sendInternalServerError } from './common';

export const addCar = (req, res) => {
    try{
        const {
            carId,
            ownerId, 
            model, 
            type, 
            chargePerDay, 
            available, 
            mileage,            
        } = req.body;

        const getCarByIdQuery = 'SELECT * FROM car WHERE cardId = ?';

        const carUpdateQuery = `UPDATE car SET
            model = ?,
            type = ?,
            chargePerDay = ?,
            available = ?,
            mileage = ?
            WHERE carId = ?
        `;
        const carAddQuery = `INSERT INTO car (
            ownerId, 
            model, 
            type, 
            chargePerDay, 
            available, 
            mileage) VALUES (
            ownerId = ?,
            model = ?,
            type = ?,
            chargePerDay = ?,
            available = ?,
            mileage = ?
            );
        `;

        const getLastIdQuery = `SELECT SCOPE_IDENTIFY();`;
        if(carId){ //Update
            con.query(carUpdateQuery, [
                model, 
                type, 
                chargePerDay,
                available,  
                mileage, 
                carId
            ], (err, result) => {
                if(err){
                    sendInternalServerError(res);
                }
                else{
                    con.query(getCarByIdQuery, [carId], (err, result)=>{
                        if(result[0]){
                            sendCustomSuccess(res, { data: result[0]});
                        }
                        else{
                            sendCustomError(res, 404, 'Entity Not Found');
                        }
                    })
                }
            });
        }
        else{ //Add New
            con.query(carAddQuery, [
                ownerId, 
                model, 
                type, 
                chargePerDay,
                available,  
                mileage, 
            ], (err, result) => {
                if(err){
                    sendInternalServerError(res);
                }
                else{
                    console.log('WHHYYY');
                    con.query(getCarByIdQuery, [carId], (err, result)=>{
                        console.log('NOPPPPP', result);
                        if(result[0]){
                            sendCustomSuccess(res, { data: result[0]});
                        }
                        else{
                            sendCustomError(res, 404, 'Entity Not Found');
                        }
                    })
                }
            });
        }
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
} 