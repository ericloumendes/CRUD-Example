import express from "express";
import router from "./routes";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);


const PORT = '5000';


app.listen(PORT, (err) => {
    if (err) { console.log('An error has occurred') }
    else{
    console.log(`Server running on host: http://localhost:${PORT}/`); 
    }
});