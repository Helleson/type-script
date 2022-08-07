"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
class charAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
}
const will = new UserAccount('helleson', 30);
console.log(will);
console.log(will.age);
will.logDetails();
const John = new charAccount('john', 45, 'johnmaster', 80);
console.log(John);
John.logDetails();
