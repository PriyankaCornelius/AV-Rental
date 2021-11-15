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

        const getCarByIdQuery = 'SELECT * FROM car WHERE carId = ?;';

        const carUpdateQuery = `UPDATE car SET
            model = ?,
            type = ?,
            chargePerDay = ?,
            available = ?,
            mileage = ?
            WHERE carId = ?
        `;
        const carAddQuery = `INSERT INTO car (
            carId,
            ownerId, 
            model, 
            type, 
            chargePerDay, 
            available, 
            mileage) VALUES (NULL, ?,?,?,?,?,?)
        `;

        const getLastInerstedIdQuery = `SELECT LAST_INSERT_ID();`;

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
                    con.query(getLastInerstedIdQuery, (err, result) => {
                        if(result){
                            let id = result[0]['LAST_INSERT_ID()'];
                            con.query(getCarByIdQuery, [id], (err, result)=>{
                                if(result[0]){
                                    sendCustomSuccess(res, { data: result[0]});
                                }
                                else{
                                    sendCustomError(res, 404, 'Entity Not Found');
                                }
                            });
                        }
                        else{
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


//Get Request
export const getCarsByType = (req, res) => {
    try{
        const type = req.query.type;
        const filterCarsBasedOnTypeQuery = `SELECT * FROM car WHERE type = ?`;
        con.query(filterCarsBasedOnTypeQuery, [type], (err, result) => {
            if(err){
                sendInternalServerError(res);
            }
            else{
                console.log(result);
                sendCustomSuccess(res, result);
            }
        });
    }
    catch(err){
        sendInternalServerError(res);
    }
}

export const getCarsByOwner = (req, res) => {
    try{
        const ownerId = req.query.ownerId;
        const filterCarsBasedOnTypeQuery = `SELECT * FROM car WHERE ownerId = ?`;
        con.query(filterCarsBasedOnTypeQuery, [ownerId], (err, result) => {
            if(err){
                sendInternalServerError(res);
            }
            else{
                console.log(result);
                sendCustomSuccess(res, result);
            }
        });
    }
    catch(err){
        sendInternalServerError(res);
    }
}