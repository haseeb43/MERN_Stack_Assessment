const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();


//Using Middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const MONGO_URL = "mongodb+srv://zia43:zia43@clustervaura.hmzonll.mongodb.net/?retryWrites=true&w=majority&appName=ClusterVaura"


// process.env.MONGO_URI ||
//Connecting MongoDB
mongoose.connect( MONGO_URL)
.then(()=>console.log('MongoDB Connected'))
.catch((error)=>console.log(error));


//Defining Routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);


//Running the server on port 5000

const SERVER_PORT = process.env.SERVER_PORT || 5000;
//Note (I'm adding console log just to log it's optional)
app.listen(SERVER_PORT, ()=>console.log(`Server is Running on ${SERVER_PORT}`));


