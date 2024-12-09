class BankAccount {
    accountNumber: number;
    balance: number; // số tiền hiện tại của tài khoản

    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    display(): void {
        console.log(`Tai khoan: ${this.accountNumber} so du: ${this.balance}`);
        
    }

    deposit(amount: number) {
        return this.balance = this.balance + amount;
    }

    withdraw(amount: number) {
         return this.balance = this.balance - amount;
    }
}
class SavingAccount extends BankAccount {
    interestRate: number; // lãi suất bao nhiêu %

    constructor(accountNumber: number, balance: number, interestRate: number) {
        super(accountNumber, balance)
        this.interestRate = interestRate;
    }

    calculateInterest() {
        return this.balance = this.balance + ( this.balance * this.interestRate )
    }
}
const AliceAccount = new BankAccount(201198, 100000);
AliceAccount.withdraw(20000)
AliceAccount.display()
AliceAccount.deposit(20000)
AliceAccount.display()
const savingAccount = new SavingAccount(201198, 100000, 0.1);
savingAccount.calculateInterest()
savingAccount.display()
