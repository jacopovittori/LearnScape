const bcrypt = require('bcrypt'); //importo libreria per criptare la password 
const userModel = require('../models/userModel'); //importo del file userModel per le funzioni di cerca utende da email e registra utente

//creo ed esporto funzione singup
exports.signup = (req, res)=>{
    const {nome,email,password} = req.body; //variabbili richieste  dalla body di html
    
    //controllo con not e or se tutte le informazioni sono state inserite altimenti da l'erore 400 - compila tutti i campi 
    if(!nome || !email || !password){
        return res.status(400).json({message: 'Compila tutti i campi'});
    }
    
    /*dal file UserModel prendo in considerazione la funzione findUser_Email che e stata esportata e controllo che il risultato (la collback) una stinga appunto l'email
    con .length si controlla la lunghezza del email e se è ammiore di 0 significa che è in uso altrimenti no */
    userModel.findUser_Email(email,(err,results)=>{
        if(results && results.length>0){
         return res.status(409).json({message: 'email già in uso'});
        }
         // viene criptata la password con 10 hash "salt rounds"
         bcrypt.hash(password,10,(err,hash)=>{
            if(err){
                return res.status(500).json({message: 'Erorre interno'});
            }
            //viene chiamata la funzione createUsers da UserModel
            userModel.createUsers(nome,email,hash,(err)=>{
                if(err){
                    return res.status(500).json({message: 'Erorre durante la registrazione, riptovare più tardi'});
                    
                }else {
                    return res.status(201).json({message: 'Registrazione completata con sucesso'});
                }
            });
        });
    });
    
   
        
    
}