export const fetchCarListFromDB = async type => {
    
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }
    const response = await fetch(`http://localhost:5000/car/getCarsByType?type=${type}`, options);
    console.log('In service1', type);
    const status = response.status;
    console.log('In servic2', type);
    const data = await response.json();
    console.log('In service3', type);
    console.log(data);
    return {status, data};
};