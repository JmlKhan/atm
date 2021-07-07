// Account
const Account = require("./Account")
const CommandLine = require("./CommandLine")

 

async function main() {
    const accountName = await CommandLine.ask(
        "Which account would you like to access? "
        )
    const account = await Account.find(accountName);

    if(account == null) account = await promptCreateAccount(accountName)
     
   
}

async function promptCreateAccount(accountName) {
    const response = await CommandLine.ask("this account does not exist. Would you like to create new account? (yes/no)")

    if(response == "yes") {
        return await Account.create(accountName);
    }
}

main(); 