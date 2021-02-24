import axios from 'axios';
require('dotenv-flow').config();


before(async ()=> {
    await userAuth();
})

export async function userAuth() {
    const url = process.env.ENVIRONMENT;
    const username = process.env.USERNAME_ADMIN;
    const password = process.env.USER_PASSWORD;
    const usernamePasswordBuffer = Buffer.from(username + ':' + password);
    const base64data = usernamePasswordBuffer.toString('base64');
    const axiosBasicAuth = axios.create({
    headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${base64data}`,
        }
    });

    await axiosBasicAuth.get(url);
    axios.defaults.baseURL = process.env.ENVIRONMENT;
    axios.defaults.headers = {
        Authorization: `Basic ${base64data}`,
        'X-Authorization': 'userId=1&role=admins',
    }
};