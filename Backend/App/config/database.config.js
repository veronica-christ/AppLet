const {Client} = require("pg");
// const client = new Client(process.env.DB);

 const client = new Client({
     connectionString: "postgres://pukdkheffmjthb:39ed06f6f7be942e6bc86eb1723caab7b35c685427ab6bb5abd08bfec044e232@ec2-52-206-182-219.compute-1.amazonaws.com:5432/d43l6lbq4d5m50",
     ssl:{
        require: true,
         rejectUnauthorized: false //allows external access to database when using nodejs
     }
 });

module.exports = client;