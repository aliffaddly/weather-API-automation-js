import supertest from "supertest";

// create request to URL
const request = supertest("https://api.weatherbit.io/v2.0/");

// create variables
const KEY = 'c1e22bdf8dcb4a04a1b8049fb2ea12b5'; // use your own API key
const LAT = 40.730610;
const LON = -73.935242;
const POSTAL_CODE = 28546;
const HOUR = 3;


describe('Tests', () => {

    // GET the current weather data by lat and lot
    it('GET /current?lat={lat}&lon={lon}', () => {
        request.get(`current?lat=${LAT}&lon=${LON}&key=${KEY}`).end((err,res) => {
            console.log(err);
            console.log(res.body);
            console.log("The state code for lat =", `${LAT}`,"and lon =", `${LON}`, "is", res.body.data[0].state_code);
        });
    });

    //GET the 3 hours forecast by postal code
    it('GET /forecast/hourly?postal_code={postal_code}&hours={hours}', () => {
        request.get(`forecast/hourly?postal_code=${POSTAL_CODE}&hours=${HOUR}&key=${KEY}`).end((err,res) => {
            console.log(err);
            console.log(res.body);
            for (var i = 0; i < `${HOUR}`; i++){
                console.log(i+1, "hour(s) forecast:", [res.body.data[i].timestamp_utc, res.body.data[i].weather.description]);
            }
        });
    });
});
