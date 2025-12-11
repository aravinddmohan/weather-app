require("dotenv").config();
// learning express and node 
// Importing dependencies using CommonJS syntax.
// I used CommonJS-since it is the default module system in Node.js unless changed using "type": "module".
const express = require("express");
const cors = require("cors");

// Create an Express application instance-This 'app' object will handle all backend routes & middleware.
const app = express();

// Enabled CORS (Cross-Origin Resource Sharing)-allows your React frontend (port 3000) to talk to your backend (port 5000).
app.use(cors());

// Allows Express to automatically parse incoming JSON requests.
// Without this, req.body will be undefined.
app.use(express.json());

// Started the server on port 5000.
// This function runs once the backend is successfully listening for requests.
const aiRoute=require("./aiRoute");
app.use("/api",aiRoute);
app.get("/",(req,res)=>{
    res.json({msg:"backend online"});
})
app.listen(5000, () => {
    console.log("server running at http://localhost:5000");
});
