const mongoose = require ("mongoose")
 
function dbConnection()  {
    mongoose.connect("mongodb+srv://popy68:popy68@cluster0.qzmipal.mongodb.net/back?retryWrites=true&w=majority")
    .then(() => console.log('Connected!'));
}

module.exports = dbConnection;