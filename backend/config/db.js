const database = require('mysql2'); //importo della libreria mysql2 (la versione più recente) da NOde.js
require('dotenv').config(); // con questa riga di codice viiene letto e salvato nella memoria il mio file .env permettendomi di proteggere le mie credenziali
//sia la riga 1 che la riga 2 devono precedere la conessione

//mi conetto al database mysql
const db = database.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

/*mi conetto al database inserento tutti gli errori di conessione nella variabile err poi efettuo un controllo if per verificare se la conessione è riuscita o meno 
in caso negativo si ricevera un messaggio di erore nella consol specificando l'errore in questione , se non ci sonno erorri ci informa che la conessione è avennuta 7
con sucesso.
*/
db.connect((err) => {
    if(err){
        console.error('Errore di conessione al database', err);
    
    }else{ 
        console.log('conessione al database riuscita');
        
    }
});

module.export = db;