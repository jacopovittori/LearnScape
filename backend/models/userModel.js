const db = require('../config/db'); //si importa l'ogetto come su Java 

/*sto definendo ed esportando una funzione che serve a trovare l'utente 
dall'email con l'utilizzo di sql ('SELECT * FROM users WHERE email = ?)
con [email] si va a "sostituire il ? nel codice sql" e poi il risultato
oerrore viene salvato nella "variabile" callback
*/
exports.findUser_Email = (email,callback) =>{
    db.query('SELECT * FROM users WHERE email = ?', [email],callback);
};


/*sto sempre definendo ed esportando una funzione ma in questo caso 
serve per creare l'utente, infatti sono richiesti i parmetri nome,email,
password,callback. nella query viene sempre ussato del codice sql 
che andra a registrare l'utente nella tabella (databais) i valori dei ?
vengono sempre forniti da le variabili tra le parentesi quadre,e la funzione 
callback viene sempre usata per ottenere il risultato.
*/
exports.createUsers=(nome,email, password, callback)=>{
    db.query(
    'INSERT INTO users (name,email,password) VALUES (?,?,?)',
    [nome,email,password],
    callback
    );
};