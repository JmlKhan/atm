// Account
const Account = require("./Account")
const CommandLine = require("./CommandLine")

 

async function main() {
    const accountName = await CommandLine.ask(
        "Which account would you like to access? "
        )
    const account = await Account.find(accountName);

    if(account == null) account = await promptCreateAccount(accountName)
    if(account != null) await promptTask(account);
   
}

async function promptCreateAccount(accountName) {
    const response = await CommandLine.ask("this account does not exist. Would you like to create new account? (yes/no)")

    if(response == "yes") {
        return await Account.create(accountName);
    }
}

async function promptTask(account) {
    const response = await CommandLine.ask(
        "What would you like to do? (view/deposit/withdraw)"
    )

    if(response === 'deposit') {
        const amount = parseFloat(await CommandLine.ask("How much?"))
        await account.deposit(amount)
        CommandLine.print(`Your balance is ${account.balance}`)
    }
    
    if(response === "withdraw") {
        const amount = parseFloat(await CommandLine.ask("How much?"))
        await account.withdraw(amount);
        CommandLine.print(`Your balance is ${account.balance}`)
    }
}


main(); 