// Account
const Account = require("./Account")
const CommandLine = require("./CommandLine")

 

async function main() {
    const accountName = await CommandLine.ask(
        "Which account would you like to access? "
        )
    const account = await Account.find(accountName);

    if(account) {
        console.log("Found Accound")
    }else {
        console.log("Cannot find")
    }
}

main(); 