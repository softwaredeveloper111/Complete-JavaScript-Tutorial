class Atm {
  constructor() {
    this.pin = 0;
    this.balance = 0;
    this.menu();
  }

  menu() {
    while (true) {
      let userInput = prompt(`how would you like to proceeed .
          1. Enter 1 to create pin
          2. Enter 2 to deposit
          3. Enter 3 to withdraw
          4. Enter 4 to check balance;
          5. Eneter 5 to exit`)

      if (userInput == "1") {
        this.createPin();
      } else if (userInput === "2") {
        this.deposit();
      } else if (userInput === "3") {
        this.withdraw();
      } else if (userInput === "4") {
        this.checkBalance();
      } else if (userInput === "5") {
        alert('Than you for using our Atm machine! Good Bye')
        break;
      }
    }
  }

  createPin() {
    let pinNumber = +prompt("ente you pin number ");
    this.pin = pinNumber;
    alert("your pin is set sucessfully");
  }

  deposit() {
    let pinNUmber = +prompt("enter you pin number");
    if (this.pin === pinNUmber) {
      let amount = +prompt("enter the amount you want to deposit");
      this.balance += amount;
      alert(`${amount} deposit successfully`);
    }
    else{
      alert('please enter the valid pin number')
    }
  }
  withdraw() {
    let pinNumber = +prompt("enter your pin number");
    if (this.pin === pinNumber) {
      let amount = +prompt("ente the amount you want to withdraw");
      if (this.balance >= amount) {
        this.balance -= amount;
        alert(`${amount} withdraw sucessfully`);
        alert(`$current account balance ${this.balance}`);
      } else {
        alert("you not have enought balance to withdraw");
        alert(`current account balance is ${this.balance}`);
      }
    }
    else{
      alert('please enter your valid pin number');
    }
  }

  checkBalance() {
    let mypin = +prompt("enter your pin number");
    if (this.pin === mypin) {
    alert(`your current account balance is ${this.balance}`);
    }
    else{
      alert('please enter a valid pin number')
    }
  }
}

let sbi = new Atm();
