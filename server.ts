import { connect } from "http2";
import app from "./src/app";
import { config } from "./src/config/config";
import connectdb from "./src/config/db";

const startServer = async() => {
    //connect to database
    await connectdb();

    const port = config.port || 3000;


    app.listen(port , () =>{
        console.log("Listening on port " + port);
    });

};
startServer();