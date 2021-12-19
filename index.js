const commander = require("commander")
const program = commander.program;
program.name("CryptGen").version("1.0.0");

program.option("-l, --length <value>", "The length of the password", "8")
        .option("-s, --save <value>", "Save the password to file")
        .option("-g, --get <value>", "Get Password")
        .parse()

const {length, save, get} = program.opts()

if(!get){
    const { passwordGen, saveToFile } = require("./middleware/index");
    const password = passwordGen(length);
    console.log(password);

    if(save){
        saveToFile(save, password);
    }
}
else{
    const { readFromFile } = require('./middleware/index');
    readFromFile(get);
}

