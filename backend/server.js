//importa tutte le librerie necessarie
const express = require('express');
const app = express();
const authRuters = require('./routes/authRoutes');
require('dotenv').config(); //carica tutte le variabili presente in env

app.use(express.json());
app.use(express.urlencoded({extended: true})); //midelware per gestire il form html
app.use(express.static('pages'));
app.use('/api',authRuters); //collega il fiel alle rotte di express

const PORT = process.env.PORT || 3000; //legge la porta

//avvia il server
app.listen(PORT,()=>{
    console.log(` Server avviato sulla porta ${PORT}`);
});