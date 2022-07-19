const axios = require('axios').default;
const API_KEY = process.env.NASA_API_KEY;
const config = require('config');
const {basepath, mars} = config.get('services.nasa');

async function getMars(req, res){
    const {sol, earth_date} = req.query;
    const {rover} = req.params;

    axios.get(`${basepath}${mars}/${rover}/photos`, {
            params:{
                api_key: API_KEY,
                sol: sol,
                earth_date: earth_date 
            }
        })
        .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            const { status } = err.response;
            res.status(status);
            res.json(err);
        });
    
    
}

module.exports = { getMars };

//agregar posibilidad de earthday