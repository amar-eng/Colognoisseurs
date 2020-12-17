const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 8080;

const top = require('./routes/topRoute')



app.use(express.json()); 
app.use(cors());

app.use(express.static("files"))
// Middleware
const logger = (req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`); 
    next(); 
}
app.use(logger);


// Routes 

app.use('/top', top)
app.use('/upload', require('./routes/upload'))




app.listen(PORT, () => {
    console.log(`Express server listening on ${PORT}`);
});

// http://localhost:8080/files