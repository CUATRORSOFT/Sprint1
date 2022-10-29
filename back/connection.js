const { response, request } = require('express');
const axios = require("axios");


require('dotenv').config()

const __OAUTH_ENDPOINT = "https://hackday-22-prod.auth.eu-west-1.amazoncognito.com"
const __API_REST_PRIVATE = "https://mqjl9s6vf4.execute-api.eu-west-1.amazonaws.com/prod/v1/hackday/private/event";
const authorization = (Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)).toString("base64");

const dataConect = async () => {
    
    const authConfig = {
        url: `${__OAUTH_ENDPOINT}/oauth2/token?grant_type=client_credentials`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Basic ${authorization}`,
            'Accept': 'application/json'
        }
    }

    const {access_token, expires_in, token_type } = (await axios(authConfig)).data;

    const getConfig = {
        method: 'GET',
        url: __API_REST_PRIVATE,
        headers: {
            'Authorization': `${token_type} ${access_token}`,
            'Accept': 'application/json'
        }
    }
    
    // console.log((await axios(getConfig)).data);

    return (await axios(getConfig)).data;

   
    // console.log(events); 


}

console.log(dataConect);


const data_1 = async(req, res = response) => {

                            
        const payload = await dataConect();
        
        const { data } = payload.payload;
        
        const { event } = data.onCreateHackathonEvents;
        
        let eventos = JSON.parse(event);
        
        const { events } = eventos.detail;

        const evento_1 = events[0]

        const  { eventBody } = evento_1.detail;
        const { service, data: datos } = eventBody;

        const { users } = service
        const { metrics } = datos


        res.json({
            users,
            metrics
        })
        
}

const data_2 = async(req, res = response) => {

                            
        const payload = await dataConect();
        
        const { data } = payload.payload;
        
        const { event } = data.onCreateHackathonEvents;
        
        let eventos = JSON.parse(event);
        
        const { events } = eventos.detail;

        const evento_2 = events[1]


        const  { eventBody } = evento_2.detail;
        const { service, data: datos } = eventBody;

        const { users } = service
        const { metrics } = datos


        res.json({
            users,
            metrics
        })
        
}



    module.exports = {
    dataConect,
    data_1,
    data_2
}