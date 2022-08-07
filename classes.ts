class UserAccount {
    name: string
    age: number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}


class charAccount extends UserAccount{
    nickname: string
    level: number

    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age)

        this.nickname = nickname
        this.level = level
    }
}


const will = new UserAccount('helleson', 30)
console.log(will)
console.log(will.age)
will.logDetails()

const John = new charAccount('john', 45, 'johnmaster', 80)
console.log(John)
John.logDetails()