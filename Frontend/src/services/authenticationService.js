export const signin = async (payload) => {
    const options = {
        method: 'POST',
        headers:  {'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }
    const response = await fetch('http://ec2-3-14-43-170.us-east-2.compute.amazonaws.com:5000/user/signin', options);
    const status = response.status;
    const data = await response.json();
    return {status, data};
}


export const signup = async (payload) => {
    const options = {
        method: 'POST',
        headers: {'Content-Type':  'application/json'},
        body: JSON.stringify(payload),
    };

    const response = await fetch('http://ec2-3-14-43-170.us-east-2.compute.amazonaws.com:5000/user/signup', options);
    const status = response.status;
    const data = await response.json();
    return {status, data};
}