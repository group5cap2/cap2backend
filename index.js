const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require('morgan');


require("dotenv")
const cors = require("cors")
app.use(cors())

const port = process.env.Port || 5500;

// Midllware
app.use(express.json())
app.use(helmet());
morgan('tiny')




app.listen(port,(req, res) => {
    console.log(`server run on port ${port}`);
})
