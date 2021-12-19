const fs = require('fs');
const path = require('path');

const passwordGen = (length) => {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
                'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 
                'z'];
    let symbols = ['!', '£', '$', '%', '?', '&', '*', '_', '#', '@'];

    let password = "";
    
    for(let i =  0; i < length; i++){
        let st = parseInt(Math.random() * 3)
        if(st == 1){ 
            password += alphabets[parseInt(Math.random() * 25)]
        } else if( st == 2){
            password += symbols[parseInt(Math.random() * 10)]
        } else{
            password += parseInt(Math.random() * 9)
        }
    }
    return password
}

const saveToFile = (file, password) => {
    fs.writeFile(path.join(__dirname, '../locale', `/${file}.txt`), password, (err) => {
        if(err) console.log(err);
        else{
            console.log("Password saved to file")
        }
    })
}

const readFromFile = (file) => {
    fs.readFile(path.join(__dirname, '../locale', `/${file}.txt`), 'utf-8', (err, pass) => {
        if(err) console.log(err);
        else{
            console.log(pass);
        }
    })
}

module.exports = { passwordGen, saveToFile, readFromFile };