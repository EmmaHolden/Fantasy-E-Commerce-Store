require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const stockItemRoutes = require('./routes')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())
app.use('/stock', stockItemRoutes)


mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true},{useUnifiedTopology: true})
.then(() => {

    app.listen(4000, function() {
        console.log("Server running on 4000")
    })
  })
  .catch((error) => {
    console.log(error)
  } )